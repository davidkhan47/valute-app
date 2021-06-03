    
    import './Rate.css';
    import React from 'react'
    import Calc from '../calc/Calc'
    

    class Rate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            'date' : '' ,
            'curencyRate' : {}
        }
        this.currency = ['USD','AUD','CAD','PLN']
    }
    getRate = () => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=4512277ff46683622c05ca76f2f52649&symbols=USD,AUD,CAD,PLN&format=1')
        .then(data => {
            return data.json()
        })
        .then(data => {
            console.log(data)
            this.setState({date : data.date})
            let result = {};
            for (let i = 0 ; i < this.currency.length;i++){
                result[this.currency[i]] = data.rates[this.currency[i]]
            }
            this.setState({curencyRate:result})
        })
    }
    componentDidMount() {
        this.getRate()
    }

    render(){
        return (
        <div className='rate'>
            <h2> Курс валют за {this.state.date}</h2>
                <div className='korobka'>
                {Object.keys(this.state.curencyRate  ).map((keyName,i) =>
                (
                        <div className='korobkas_ff'  key = {keyName}>
                                    <h3>{keyName }</h3>
                                    <div className='pas'><p>{this.state.curencyRate[keyName].toFixed(2)}*<br/>
                                    </p></div>

                        <div><p>* Можно купить за один EUR</p></div>
                </div> 
                )
                
                )}
                </div>
                <Calc rate ={this.state.curencyRate}/>
        </div>
        

        )
        
    }
    }

    export default Rate;
