import React from 'react';
import './HomePage.styles.scss'
const HomePage= () =>{

    return(
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>
                            <h1>Hats</h1>
                            <span>SHOP NOW!</span>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>
                            <h1>Jackets</h1>
                            <span>SHOP NOW!</span>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>
                            <h1>Sneakers</h1>
                            <span>SHOP NOW!</span>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>
                            <h1>Women</h1>
                            <span>SHOP NOW!</span>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>
                            <h1>Man</h1>
                            <span>SHOP NOW!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;