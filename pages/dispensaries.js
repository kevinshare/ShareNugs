import { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Head from 'next/head';
import OverLay from '../components/OverLay';
import Selection from '../components/Selection';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: '',
    };
    this.loadFunc = this.loadFunc.bind(this);
  }
  componentDidMount() {
    this.loadFunc(10);
  }
  loadFunc() {
    const renderSelections = [];
    for (let i = 0; i < this.state.selections.length + 10; i += 1) {
      renderSelections.push(<Selection currentOne={i} />);
    }
    this.setState({
      selections: renderSelections,
    });
  }
  render() {
    return (
      <OverLay>
      <Head>
          <title>Style Page</title>
          <link href="/statics/materializedStyles.css" rel="stylesheet" />
      </Head>        
      <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={true || false}
          threshold={1000}
          loader={
          <div className="loader" key={0}>Loading Nugs...
            <style jsx>{`
              .loader {
                margin-top: 20%;
                font-size: 40px;
                font-weight: 20px;
                vertical-align: center;
                text-align: center;
              }
            `}</style>
          </div>}
        >
        {this.state.selections}
        </InfiniteScroll>
      </OverLay>
    );
  }
};
