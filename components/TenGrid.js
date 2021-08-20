import React, {useState, useEffect} from 'react';

const TenGrid = () => {

    const [dataset, getDataset] = useState([1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1,]);

    return (
        <div className={'board-grid'}>
            {dataset.map((entry, idx) => {
                if (entry) {
                    return <div key={idx} style={{backgroundColor: 'black'}}/>;
                } else {
                    return <div key={idx} style={{backgroundColor: 'white'}}/>;
                }
            })}
        </div>
    );
};

export default TenGrid;
