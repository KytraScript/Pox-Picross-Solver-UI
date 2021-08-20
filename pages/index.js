import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import {Alert} from 'shards-react';
import Navigation from '../components/Navigation';
import TenGrid from '../components/TenGrid';
import {Container, Row, Col} from 'shards-react';
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    FormInput,
    InputGroup
} from 'shards-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import { withRouter } from 'next/router';

function Home({ router }){

    const [location, getLocation] = useState('placeholder');

    const updateLocation = () => {
        getLocation('')
        console.log(location)
    }

    console.log(router.asPath)

    return (
        <>
            <Head>
                <title>Picross Solver</title>
            </Head>
            <>
                <Navigation/>
                {location === "#five-grid" ? "THIS WOULD BE A 5 x 5" : ''}
                {location === "#ten-grid" ? <TenGrid/> : ''}
                {location === "#fifteen-grid" ? "THIS WOULD BE A 15 x 15" : ''}
                {location === "#twenty-grid" ? "THIS WOULD BE A 20 x 20" : ''}
            </>
        </>
    );
};

export default Home;
