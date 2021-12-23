import React, {Component} from "react";

class Editable extends Component {

    render() {
        return(
            <form onSubmit={this.props.confirm} className="document">
                <div className='generalInformation'>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' onChange={this.props.change} placeholder={this.props.info.name}></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='text' id='email' onChange={this.props.change} placeholder={this.props.info.email}></input>
                    </div>
                    <div>
                        <label htmlFor='number'>Number:</label>
                        <input type='tel' id='number' onChange={this.props.change} placeholder={this.props.info.number}></input>
                    </div>
                </div>
                <div className='education'>
                    <div>
                        <label htmlFor='school'>School Name:</label>
                        <input type='text' id='school' onChange={this.props.change} placeholder={this.props.info.school}></input>
                    </div>
                   
                    <div>
                        <label htmlFor='title'>Title of Study:</label>
                        <input type='text' id='title' onChange={this.props.change} placeholder={this.props.info.title}></input>
                    </div>

                    <div>
                        <label htmlFor='date'>Date of Study:</label>
                        <input type='date' id='date' onChange={this.props.change} placeholder={this.props.info.date}></input>
                    </div>  
                </div>
                <div className='experience'>
                    <div>
                        <label htmlFor='company'>Company Name:</label>
                        <input type='text' id='company' onChange={this.props.change} placeholder={this.props.info.company}></input>
                    </div>
                    <div>
                        <label htmlFor='position'>Position Title:</label>
                        <input type='text' id='position' onChange={this.props.change} placeholder={this.props.info.position}></input>
                    </div>
                    <div>
                        <label htmlFor='period'>Period:</label>
                        <input type='text' id='period' onChange={this.props.change} placeholder={this.props.info.period}></input>
                    </div>
                    
                </div>
                <button type="submit">Confirm</button>
            </form>
            
        )
    }
}

export default Editable 