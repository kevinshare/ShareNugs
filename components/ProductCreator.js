import { Component } from 'react';
import { Button } from 'react-materialize';
import Link from 'next/link';
import AutoComplete from 'material-ui/AutoComplete';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class ProductCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchText: '',
        searchableProducts: ['OG Kush', 'Blue Dream'],
    };
  }
  handleUpdateInput(searchText) {
    this.setState({
      searchText: searchText,
    });
  }

  handleNewRequest(chosenRequest) {
    console.log(chosenRequest);
    this.setState({
      searchText: '',
    });
  }
    render() {
        return(
        <div>
            <div className="wrapCreateInput">
                <p className="productName"> Product Name:  </p>
                <div className="inputter">
                        <AutoComplete
                          hintText="Type 'r', case insensitive"
                          searchText={this.state.searchText}
                          onUpdateInput={this.handleUpdateInput}
                          onNewRequest={(chosenRequest) => this.handleNewRequest(chosenRequest)}
                          dataSource={this.state.searchableProducts}
                          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                          openOnFocus={true}
                        />
                </div>
            </div>
            <div className="submit">
                <Link href='/business'>
                    <Button className="black" waves='light'>Submit</Button>
                </Link>
            </div>
            <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Play');

            .wrapCreateInput {
                text-color: black;
                display: flex;
                flex: 0.5;
                justify-content: center;
                vertical-align: center;
                margin-top: 30vh;
                margin-left: 30vw;
                background-color: rgba(225, 225, 225, 0.2);
            }
            .inputter {
                top: 30vh;
                margin-right: 90px;

            }
            .productName {
                max-height: 4vh;
                font-family: 'Play', sans-serif;
            }
            .submit {
                margin-left: 40vw;
                margin-top: 30vh;
            }
            `}</style>
        </div>
        );
    }
}

export default withRoot(withStyles(styles)(ProductCreator));
