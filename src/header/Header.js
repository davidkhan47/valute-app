import './Header.css'
import React from 'react'
import Nav from '../nav/Nav'

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <header>
                <div className = 'zaga wrap'>
                    <h1>React value App</h1>
                </div>
                <Nav/>
            </header>
        )
    }
}

export default Header