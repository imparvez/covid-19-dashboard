import React from 'react';
import useStats from '../utils/useStats';

export default function Stats({ url }) {
    const stats = useStats(url);
    if(!stats) return <div>Loading...</div>

    return <div>
        <div className="stateBlock">
            <h3>Confirmed: </h3>
            <span>{stats.confirmed.value}</span>
        </div>
        <div className="stateBlock">
            <h3>Deaths: </h3>
            <span>{stats.deaths.value}</span>
        </div>
        <div className="stateBlock">
            <h3>Recovered: </h3>
            <span>{stats.recovered.value}</span>
        </div>
    </div>
}