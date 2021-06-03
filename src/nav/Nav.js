import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

class Nav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
                <div className='navBar '>
                    <ul className='wrap'>
                        <Link to ='/'><li>Главная</li></Link>
                        <Link to ='/about'><li>Пункты обмена</li></Link>
                        <Link to='/about'><li>Контакты</li></Link>
                    </ul>
                </div>
        )
    }
}

export default Nav