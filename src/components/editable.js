import React, {Component} from "react";

class Editable extends Component {

    render() {
        return(
            <form onSubmit={this.props.confirm}>
                <div className='generalInformation'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' onChange={this.props.change} placeholder={this.props.info.name}></input>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' id='email' onChange={this.props.change} placeholder={this.props.info.email}></input>
                    <label htmlFor='number'>Number:</label>
                    <input type='tel' id='number' onChange={this.props.change} placeholder={this.props.info.number}></input>
                </div>
                <div className='education'>
                    <label htmlFor='school'>School Name:</label>
                    <input type='text' id='school' onChange={this.props.change} placeholder={this.props.info.school}></input>
                    <label htmlFor='title'>Title of Study:</label>
                    <input type='text' id='title' onChange={this.props.change} placeholder={this.props.info.title}></input>
                    <label htmlFor='date'>Date of Study:</label>
                    <input type='date' id='date' onChange={this.props.change} placeholder={this.props.info.date}></input>
                </div>
                <div className='experience'>
                    <label htmlFor='company'>Company Name:</label>
                    <input type='text' id='company' onChange={this.props.change} placeholder={this.props.info.company}></input>
                    <label htmlFor='position'>Position Title:</label>
                    <input type='text' id='position' onChange={this.props.change} placeholder={this.props.info.position}></input>
                    <label htmlFor='period'>Period:</label>
                    <input type='text' id='period' onChange={this.props.change} placeholder={this.props.info.period}></input>
                </div>
                <button type="submit">Confirm</button>
            </form>
            
        )
    }
}

export default Editable 