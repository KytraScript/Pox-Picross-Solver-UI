import React, {useEffect, useState} from 'react';
import {Progress} from 'shards-react';
import RuleSet from '../components/RuleSet.js';

const Inputs = (props) => {

    const direction = props.orientation === 'row-wrap' ? 'rule-col' : 'rule-row';
    const [values, getValues] = useState([]);
    const [sizeInit, setSizeInit] = useState([]);

    useEffect( () => {
        setSizeInit(Array(props.size).fill(0))
    }, []);


    return (
        <div className={`input-wrapper ${props.orientation}`}>
            {sizeInit.length && sizeInit.map((e, idx) => {
                return <RuleSet size={props.size} orientation={direction} key={direction + '-' + idx} id={direction + '-' + idx}/>;
            })}
        </div>
    );
};

export default Inputs;
