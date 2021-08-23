import React, {useEffect, useState} from 'react';
import {Progress, Button} from 'shards-react';
import Inputs from '../components/Inputs.js';
const obtain = require('../scripts/obtain.js');
let data = require('../sample_data.js');
data = data.framesArr20;

const PrintBoard = ({dataset, size}) => {
    dataset = size === 20 ? dataset : Array(size * size).fill(0);
    return (
        <div className={'board-grid-' + size}>
            {dataset.map((entry, idx) => {
                if (Number(entry)) {
                    return <div className="square" key={idx} style={{backgroundColor: 'black'}}/>;
                } else {
                    return <div className="square" key={idx} style={{backgroundColor: '#c3c3c3'}}/>;
                }
            })}
        </div>
    );
};

function Grid(props) {

    const [dataset, getDataset] = useState([]);
    const [progress, setProgress] = useState(0);
    const [rowValues, getRowValues] = useState([]);
    const [colValues, getColValues] = useState([]);

    const collectValues = () => {

    };

    const updateFrames = (now = 0) => {
        setProgress(now);
        if (now < data.length) {
            setTimeout(updateFrames.bind(null, now + 1), 175);
            getDataset(data[now].split(''));
        }
    };

    useEffect(() => {
        updateFrames(0);
    }, []);

    return (
        <>
            <div className={'center-col'}>
                <Inputs size={props.size} orientation={'row-wrap'}/>
                <div className={'center-row'}>
                    <Inputs size={props.size} orientation={'col-wrap'}/>
                    <div className={'center-col'}>
                        <PrintBoard dataset={dataset} size={props.size}/>
                    </div>
                </div>
            </div>
            <Button onClick={obtain}>Save Values</Button>
            {/*<Progress className="progress-lg solution-progress" theme="warning" value={progress * (100 / data.length)}>*/}
            {/*    Pass {progress.toString()} of {data.length.toString()}*/}
            {/*</Progress>*/}
        </>
    );
};

export default Grid;
