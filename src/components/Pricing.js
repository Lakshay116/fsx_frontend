// import PropTypes from 'prop-types'
import '../css/Pricing.css';
import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import "animate.css/animate.compat.css"
// import ScrollAnimation from 'react-animate-on-scroll';
import FREE from "../images/logo/free.png"
import THREEM from "../images/logo/3hr.png"
import SIXM from "../images/logo/6hr.png"
import TWELM from "../images/logo/12hr.png"






export class About extends Component {
    static propTypes = {}

    render() {
        return (
            <div className='pricing_div'>
                <div className='h1_price'>
                    <h1><span style={{ color: 'orangered' }}>FitSyncX</span> - Pricing</h1>
                    <p style={{ color: 'white', fontSize: '1.2rem', paddingRight: '20vh' }}>That's right – whether you choose our quarterly, half-yearly, or annual plan, you can access the same exceptional software features and benefits.</p>
                </div>
                <div className='head_prc'>
                    <div className='in_head_prc'>
                        <h1 style={{ marginLeft: '15%', marginTop: '6%', color: 'white' }}>3 Days</h1>
                        <img src={FREE} style={{ height: '60%', marginLeft: '8vh', marginTop: '6%' }} alt='' />
                    </div>
                    <div className='in_head_prc'>
                        <h1 style={{ marginLeft: '4%', marginTop: '6%', color: 'white' }}>3 Months</h1>
                        <img src={THREEM} style={{ height: '60%', marginLeft: '5vh', marginTop: '6%' }} alt='' />
                    </div>
                    <div className='in_head_prc'>
                        <h1 style={{ marginLeft: '4%', marginTop: '6%', color: 'white' }}>6  Months</h1>
                        <img src={SIXM} style={{ height: '60%', marginLeft: '5vh', marginTop: '6%' }} alt='' />
                    </div>
                    <div className='in_head_prc'>
                        <h1 style={{ marginLeft: '4%', marginTop: '6%', color: 'white' }}>12 Months</h1>
                        <img src={TWELM} style={{ height: '75%', marginLeft: '3vh', marginTop: '4%' }} alt='' />
                    </div>
                </div>
                <div className='content_prc'>
                    <div className='in_content_prc'>
                        <p className='prc'><span className='price'>₹0/-</span> + taxes</p>
                        <button className='free_btn'>Start Free Trial</button>
                        <button className='book_btn'>Book</button>
                    </div>
                    <div className='in_content_prc'>
                        <p className='prc'><span className='price'>₹399/-</span> + taxes</p>
                        <button className='book_btn'>Book</button>
                    </div>
                    <div className='in_content_prc'>
                        <p className='prc'><span className='price'>₹699/-</span> + taxes</p>
                        <button className='book_btn'>Book</button>
                    </div>
                    <div className='in_content_prc'>
                        <p className='prc'><span className='price'>₹999/-</span> + taxes</p>
                        <button className='book_btn'>Book</button>
                    </div>
                </div>
            </div >
        )
    }
}

export default About   