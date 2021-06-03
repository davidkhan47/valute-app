
import './Main.css';
import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Rate from '../rate/Rate'
import About from '../about/About'



class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className = 'main_page'>
            <div className='usds'>
                <div className='kurs'>
                    <div className='aa'>
                            <Switch>
                                <Route exact path='/' component={Rate}/>
                                <Route exact path='/about' component={About}/>.
                                
                            </Switch>
                                <div className='bla'>
                                    <p>На нашем сайте бла биргнарса бирнарсалар яна нима билмадим   
                                На нашем сайте бла биргнарса бирнарсалар яна нима билмадим  </p>
                                <span><button>OK</button></span>
                                </div>
                                
                    </div>
                </div>
            </div>






        </div>
        
        )
        
    }
}

export default Main;