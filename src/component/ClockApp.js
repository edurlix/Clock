import React from "react";
import { Clock } from "./Clock";
import './style.css';

export class ClockApp extends React.Component {
    constructor(props){
        super(props);
        this.state = { ShowContent: false, isPrecise: false};
        this.hideComponent = this.hideComponent.bind(this);
        this.isPrecise = this.isPrecise.bind(this);
    }

    hideComponent(){
        this.setState({ShowContent: !this.state.ShowContent});
    }

    isPrecise(){
        this.setState({isPrecise: !this.state.isPrecise});
    }

    render(){
        return(
            <div className="Contenido">
                <div className="botones">
                    <button onClick={this.hideComponent} onTouchEnd={this.hideComponent}>Toggle</button>
                    <button onClick={this.isPrecise} onTouchEnd={this.isPrecise}>Precise</button>
                </div>
                <div>
                    {this.state.ShowContent && <Clock isPrecise={this.state.isPrecise}/>}
                </div>
            </div>
        );
    }
}