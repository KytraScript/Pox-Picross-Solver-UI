import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import {Container, Row, Col} from 'shards-react';
import {withRouter} from 'next/router';
import Grid from '../components/Grid.js';

function Home({router}) {

    const pushRouter = (pathString) => {
        router.push(pathString, undefined, {shallow: true});
    };

    const removePrimary = () => {
        let element = document.querySelector('.navbar');
        element.classList.remove('bg-primary');
    };

    useEffect( () => {
        removePrimary()
    }, []);

    return (
        <>
            <Head>
                <title>Picross Solver</title>
            </Head>
                <Navigation routerAction={pushRouter}/>
                <Container className="board-container" fluid>
                    <Row className={"content-row"}>
                        <Col className={"left-sidebar"}>

                        </Col>
                        <Col className={"board-column"}>
                            {router.query.board === '5' ? <Grid size={5}/> : ''}
                            {router.query.board === '10' ? <Grid size={10}/> : ''}
                            {router.query.board === '15' ? <Grid size={15}/> : ''}
                            {router.query.board === '20' ? <Grid size={20}/> : ''}
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
        </>
    );
}

export default withRouter(Home);
