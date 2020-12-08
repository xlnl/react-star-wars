import React from 'react'

const Layout = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">STAR WARS STARSHIPS</a>
                </div>
            </nav>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
