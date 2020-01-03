import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import { SWIPE_IN } from './../../Utility/constant';
import { getCurrentTime, timeInSecond, timeCalculate, todaysDate } from './../../Utility/utils';
import './Swipe.css';

export default function Swipe() {
    const [isSwiped, toggleSwipe] = useState(false);
    const [elapseTime, getElapseTime] = useState('00:00:00');
    let timeInterval;

    const handleClick = () => {
        toggleSwipe(!isSwiped);
    }

    // componentDidMount
    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('swipe_In'));
        const _todays_date = JSON.parse(localStorage.getItem('swipe_Date'));
        
        if (!!storageData && _todays_date === todaysDate()) {
            toggleSwipe(true)
            const _swipe_In_time = timeInSecond(storageData);
            timeInterval = setInterval(() => {
                setElapseTime(_swipe_In_time)
            }, 1000)
        }
    }, [])

    // componentDidUpdate
    useEffect(() => {
        if (isSwiped && !JSON.parse(localStorage.getItem('swipe_In'))) {
            localStorage.setItem('swipe_In', JSON.stringify(getCurrentTime()));
            localStorage.setItem('swipe_Date', JSON.stringify(todaysDate()));
            let storageData = JSON.parse(localStorage.getItem('swipe_In'))
            const _swipe_In_time = timeInSecond(storageData);
            timeInterval = setInterval(() => {
                setElapseTime(_swipe_In_time)
            }, 1000)
        }
    }, [isSwiped])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            clearInterval(timeInterval)
        }
    }, [])

    const setElapseTime = (_swipe_In_time) => {
        let _time_elapse = timeInSecond(getCurrentTime()) - _swipe_In_time;
        getElapseTime(timeCalculate(_time_elapse))
    }

    return (
        <div className='main-container'>
            <Card title={elapseTime} bordered={true} className='main-card'>
               {isSwiped && <Button onClick={handleClick}>{SWIPE_IN}</Button>}
            </Card>
        </div>
    )
}

