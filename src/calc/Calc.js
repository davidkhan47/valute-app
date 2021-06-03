    
    import './Calc.css';
    import React from 'react'
    

    class Calc extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            result : 0
        }

        
    }
    static getDerivedStateFromProps(props , state){
        return {rate : props.rate}
    }
    calcRate =(e) => {
        e.preventDefault() 
        let elements = e.target.elements
        let countCurreny = elements['count-currency'].value
        let typeCurreny = elements['type-currency'].value
        this.setState({result:(countCurreny / this.state.rate[typeCurreny])})

    }

    render(){
        return (
            <div className='calc'>
                    <h2>Калькулятор обмена</h2>
        <div className='bochka'>
                    <p>
                    Я хочу
                </p><br/>
                                        <form onSubmit={this.calcRate}>
                    
                    <input type='number' defaultValue='150' name='count-currency'/>
                    
                    <select name='type-currency' id=''>   
                    {Object.keys(this.props.rate).map((keyName,i) =>
                    (  
                    <option key = {keyName} value={keyName}>{keyName}</option>
                        ) )}      
                    </select>
                    <input type='submit' defaultValue='calc' placeholder='Расчитать'/>
                </form>
                                        <p>
                    Результаты:<br/><br/>
                    <span>EUR : {this.state.result}</span><br/><br/>
                                                
                </p>
                </div>
            </div>
            

        

        )
        
    }
    }

    export default Calc;
