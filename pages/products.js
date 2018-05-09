import {Component} from 'react'
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import OverLay from '../components/OverLay';

export default class extends Component {
  render () {
    return (
      <OverLay>
        <Head>
            <title>Style Page</title>
            <link href="/statics/materializedStyles.css" rel="stylesheet" />
        </Head>
      </OverLay>
    )
  }
}
