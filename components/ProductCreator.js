import { Component } from 'react';
import { Button } from 'react-materialize';
import Link from 'next/link';
import AutoComplete from 'material-ui/AutoComplete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Settings from 'mdi-react/SettingsIcon';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import { withStyles } from 'material-ui/styles';
import defaultPage from '../hoc/style';
import findAverage from '../calculations/findAverage';
import styles from '../littleStyles/menuBar';

const style = {
  marginRight: '20vh',
};

class ProductCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      open: false,
      allowAverage: true,
      searchableProducts: ['OG Kush', 'Blue Dream', 'Orange Kush', 'Lilly Dank', 'MoonRocks', 'Purple Haze', 'Red Velvet', '21 Savage'],
      product: {
        name: '',
        brand: '',
        type: '',
        amount: '',
        eighthPrice: '',
        halfPrice: '',
        ouncePrice: '',
      },
    };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
    this.averagePrice = this.handleNewRequest.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  }
  componentDidMount() {
  }
  handleUpdateInput(searchText) {
    this.setState({
      searchText: searchText,
    });
  }
  handleToggle(type) {
    if (type === 1) {
      this.setState({ open: !this.state.open });
    } else {
      this.setState({ allowAverage: !this.state.allowAverage });
    }
  }
  handleTextFieldChange(value, type) {
    const currentState = this.state.product;
    if (type === 1) {
      currentState.eighthPrice = value;
    }
    if (type === 2) {
      currentState.halfPrice = value;
    }
    if (type === 3) {
      currentState.ouncePrice = value;
    }
    this.setState({
      product: currentState,
    });
  }
  handleNewRequest(chosenRequest) {
    // console.log(chosenRequest);
    let eighth = '';
    let half = '';
    let ounce = '';
    if (this.state.allowAverage) {
      eighth = findAverage('eighth');
      half = findAverage('half');
      ounce = findAverage('ounce');
    }
    this.setState({
      searchText: '',
      product: {
        name: chosenRequest,
        brand: 'Silver Farms',
        type: 'Sativa',
        amount: '80g',
        description: 'A nice blend of blends, topped off with a blended blend of several blend-like blends',
        eighthPrice: eighth,
        halfPrice: half,
        ouncePrice: ounce,
      },
    });
  }
  render() {
    return (
      <div>
          <div className="selectedName">
              <h1 className="selectedNameTitle">{this.state.product.name}</h1>
              <p className="brand">{this.state.product.brand ? `by: ${this.state.product.brand}` : ''}</p>
              {this.state.product.name ?
                  <img 
                      width="140px"
                      height="140px"
                      src="http://cdn.shopify.com/s/files/1/0441/8845/products/og-kush-marijuana-seeds-1_1024x1024.jpg?v=1508223214">
                  </img>
              :
                  <div></div>
              }
          </div>
          <div className="wrapCreateInput">
              <div className="headerBar">
                  <div className="currentPageTitle">
                      <h5>Product Creator</h5>
                  </div>
              </div>
              <div className="inputter">
                  <AutoComplete
                    hintText="Names, Brands, Glassware..."
                    searchText={this.state.searchText}
                    floatingLabelText="Search A Product Name"
                    onUpdateInput={this.handleUpdateInput}
                    maxSearchResults={3}
                    onNewRequest={chosenRequest => this.handleNewRequest(chosenRequest)}
                    dataSource={this.state.searchableProducts}
                    filter={AutoComplete.fuzzyFilter}
                    openOnFocus={true}
                  />
                <div>
                  <TextField
                    floatingLabelText="* Price Per Eighth"
                    underlineShow={false}
                    onChange={(event, newValue) => this.handleTextFieldChange(newValue, 1)}
                    value={this.state.product.eighthPrice}
                    style={{width: 170}}
                    floatingLabelStyle={{fontSize: '18px'}}
                    labelStyle={{fontSize: '15px'}}
                  />
                  <TextField
                    floatingLabelText="* Price Per Half"
                    underlineShow={false}
                    onChange={(event, newValue) => this.handleTextFieldChange(newValue, 2)}
                    value={this.state.product.halfPrice}
                    style={{width: 170}}
                    floatingLabelStyle={{fontSize: '18px'}}
                    labelStyle={{fontSize: '15px'}}
                  />
                  <TextField
                    floatingLabelText="* Price Per Ounce"
                    underlineShow={false}
                    onChange={(event, newValue) => this.handleTextFieldChange(newValue, 3)}
                    value={this.state.product.ouncePrice}
                    style={{width: 170}}
                    floatingLabelStyle={{fontSize: '18px'}}
                    labelStyle={{fontSize: '15px'}}
                  />
                </div>
                <div>
                  <TextField
                    floatingLabelText="Description"
                    underlineShow={false}
                    value={this.state.product.description}
                    style={{width: 300}}
                    floatingLabelStyle={{fontSize: '20px'}}
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                  />
                </div>
              </div>
          </div>
            <div>
              <div className="settingsToggle">
                  <FloatingActionButton 
                      backgroundColor="black" 
                      mini={true} 
                      style={style} 
                      onClick={() => this.handleToggle(1)}>
                      <Settings />
                  </FloatingActionButton>
              </div>
              <div className="wrapDrawer">
                  <Drawer 
                  containerStyle={{marginTop: '30vh', borderRadius: '4px'}}
                  width={325} 
                  openSecondary={true} 
                  open={this.state.open} >
                    <AppBar className="black" title="Settings" onClick={() => this.handleToggle(1)}/>
                      <MenuItem>
                          <Toggle
                            label="Predict Average Values"
                            defaultToggled={true}
                            onToggle={() => this.handleToggle(2)}
                            elementStyle={styles.size}
                            thumbStyle={styles.thumbOff}
                            trackStyle={styles.trackOff}
                            thumbSwitchedStyle={styles.thumbSwitched}
                            trackSwitchedStyle={styles.trackSwitched}
                            labelStyle={styles.labelStyle}
                          />
                      </MenuItem>
                      <MenuItem>Menu Item 2</MenuItem>
                  </Drawer>
              </div>
            </div>
          <div className="submit">
              <Link href='/business'>
                  <Button onClick={this.submitProduct} className="black" waves='light'>Save</Button>
              </Link>
          </div>
          <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Play');

          .wrapCreateInput {
              text-color: black;
              display: flex;
              flex: 1;
              min-height: 60vh;
              max-width: 60vw;
              margin-top: 35vh;
              position: relative;
              margin-left: 10vw;
              border-radius: 4px;
              background-color: rgba(225, 225, 225, 0.2);
              -moz-box-shadow:    inset 0 0 6px #C0C0C0;
              -webkit-box-shadow: inset 0 0 6px #C0C0C0;
              box-shadow:         inset 0 0 6px #C0C0C0;
          }
          .selectedName {
              margin-left: 58vw;
              margin-top: 5vh;
              max-height: 20vh;
              position: absolute;
              font-family: 'Play', sans-serif;
          }
          .selectedNameTitle {
              font-size: 20px;
              font-family: 'Play', sans-serif;
          }
          .settingsToggle {
              margin-left: 65vw;
              margin-top: -10vh;
              max-height: 20vh;
              position: absolute;
          }
          .currentPageTitle {
              position: relative;
              margin-top: vh;
              margin-left: 5vw;
          }
          .headerBar {
              position: absolute;
              background-color: rgba(0, 0, 0, 0.9);
              max-height: 8vh;
              min-width: 60vw;
              border-radius: 4px;
          }
          .currentPageTitle h5 {
              position: relative;
              -webkit-text-shadow:    1px 1px 3px 3px #ccc;
              color: white;
              font-family: 'Play', sans-serif;
          }
          .inputter {
              margin-left: 5vw;
              max-width: 50vw;
              margin-top: 40px;
          }
          .submit {
              margin-left: 55vw;
              margin-top: -9vh;
              font-family: 'Play', sans-serif;
          }

          `}</style>
      </div>
    );
  }
}
export default defaultPage(ProductCreator);
