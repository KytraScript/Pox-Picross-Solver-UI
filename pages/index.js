import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import TenGrid from '../components/TenGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import {Container, Row, Col} from 'shards-react';
import {withRouter} from 'next/router';

function Home({router}) {

    const pushRouter = (pathString) => {
        router.push(pathString, undefined, {shallow: true});
    };

    return (
        <>
            <Head>
                <title>Picross Solver</title>
            </Head>
            <>
                <Navigation routerAction={pushRouter}/>
                <Container className="board-container">
                    <Row>
                        <Col>1 / 3</Col>
                        <Col>
                            {router.query.board === '5' ? 'THIS WOULD BE A 5 x 5' : ''}
                            {router.query.board === '10' ? <TenGrid/> : ''}
                            {router.query.board === '15' ? 'THIS WOULD BE A 15 x 15' : ''}
                            {router.query.board === '20' ? 'THIS WOULD BE A 20 x 20' : ''}</Col>
                        <Col>3 / 3</Col>
                    </Row>
                </Container>
            </>
        </>
    );
}

export default withRouter(Home);
