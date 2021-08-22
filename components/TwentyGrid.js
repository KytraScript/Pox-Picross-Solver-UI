import React, {useEffect, useState} from 'react';
import { Progress } from "shards-react";
import Inputs20 from '../components/Inputs20.js'

let data = require('../sample_data.js');
data = data.framesArr20;

const PrintBoard =({ dataset }) => {
    return (
        <div className={'board-grid-20'}>
            {dataset.map((entry, idx) => {
                if (Number(entry)) {
                    return <div className="square" key={idx} style={{backgroundColor: 'black'}}/>;
                } else {
                    return <div className="square" key={idx} style={{backgroundColor: '#c3c3c3'}}/>;
                }
            })}
        </div>
    );
}

function TwentyGrid(){

    const [dataset, getDataset] = useState([]);
    const [progress, setProgress] = useState(0)

    const updateFrames = (now = 0) => {
        setProgress(now)
        if(now < data.length){
            setTimeout(updateFrames.bind(null, now + 1), 175)
            getDataset(data[now].split(''));
        }
    }

    useEffect(() => {
        updateFrames(0)
    }, []);

    return (
        <>
            <Inputs20/>
            <PrintBoard dataset={dataset}/>
            <Progress className="progress-lg solution-progress" theme="warning" value={progress * (100 / data.length)}>
                Pass {progress.toString()} of {data.length.toString()}
            </Progress>
        </>
    );
};

export default TwentyGrid;
