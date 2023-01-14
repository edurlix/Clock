import React from "react";

export class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    startInterval(time){
        setInterval(() => {
            this.setState({date: new Date()})
        }, time);
    }

    render(){
        return(
            <div>
                <h1>{this.props.isPrecise ? this.state.date.toISOString() : this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }

    componentDidMount(){
        const oneSecond = 1000;
        this.intervalID = this.startInterval(oneSecond);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    componentDidUpdate(prevProps){
        if(this.props.isPrecise === prevProps){
            return;
        }

        const delay = 100;
        this.intervalID = this.startInterval(delay);
    }
    
}