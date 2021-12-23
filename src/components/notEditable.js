import React, {Component} from "react";

class NotEditable extends Component {

    render() {
        return(
            <div>
                <h3 >{this.props.info.name}</h3>
                <h3>{this.props.info.email}</h3>
                <h3>{this.props.info.number}</h3>
                <h3>{this.props.info.school}</h3>
                <h3>{this.props.info.title}</h3>
                <h3>{this.props.info.date}</h3>
                <h3>{this.props.info.company}</h3>
                <h3>{this.props.info.position}</h3>
                <h3>{this.props.info.period}</h3>
                <button onClick={this.props.changeNumber}>Change</button>
            </div>
        )
    }
}

export default NotEditable 