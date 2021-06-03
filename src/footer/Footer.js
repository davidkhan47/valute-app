
import './Footer.css';
import React from 'react'

    class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className='footer'>
            <div>
                <h2>2021 	&copy; Davidkhan's app</h2>
                <span>loerm ipsum dolor</span>
            </div>
            <div>
                <p>Карта сайта</p>
                <a href='/'><p>Google step</p></a>
            </div>
            <div>
                <ul>
                    <a href='/'><li>Контакты</li></a>
                    <a href='/'><li>Гарантии</li></a>
                    <a href='/'><li>О серввере</li></a>
                    <a href='/'><li>Условия бирнарса</li></a>

                </ul>
            </div>

        </div>
        

        )
        
    }
    }

export default Footer;
