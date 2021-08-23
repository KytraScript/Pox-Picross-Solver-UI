import React, {useState, useEffect} from 'react';
import Rule from '../components/Rule.js';

const RuleSet = (props) => {

    const [values, getValues] = useState([]);
    const [rulesReq, setRulesReq] = useState([]);

    useEffect( () => {
        if(props && props.size){
            if(props.size === 20) setRulesReq(Array(8).fill(0));
            else if(props.size === 15) setRulesReq(Array(6).fill(0));
            else if(props.size === 10) setRulesReq(Array(5).fill(0));
            else setRulesReq(Array(3).fill(0));
        }
    }, []);

    return(
        <div className={props.orientation} id={props.id}>
            {rulesReq.map( (e, idx) => {
                return <Rule key={props.id + '-' + idx}/>
            })}
        </div>
    )
};

export default RuleSet;
