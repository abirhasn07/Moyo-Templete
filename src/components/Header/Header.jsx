import React from 'react'
import laptop from '../../images/macbook.png'
import './Header.css'

const Header = () => {
    return (
        <section className="header">
            <div className="header-info">
                <h1 className="title">
                Create Great, <br /> Sparkling <br /> Webflow Sites
                </h1>
                <h4 className="subtitle">
                Let’s bring your brand’s design to life.
                </h4>
                <div className="btn-group">
                    <button className="btn btn-main">Enquire Us</button>
                    <button className="btn btn-primary">Buy Moyo</button>
                </div>
            </div>
            <div className="header-img">
                <img src={laptop} alt="" className="img-header" />
            </div>
        </section>
    )
}

export default Header