import React, { Component } from 'react'

class Formulaire extends Component {
    state = {
        message : '',
        length: this.props.length
    }

    createMessage = () => {
        // on rcupere le psuedo de props et la methode addmessage
        const { addMessage , pseudo ,length } = this.props

        const message ={
            pseudo,
            message:this.state.message
        }
        //on appel la method qui est dans App
        addMessage( message)

        this.setState({ message :'',length})
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        const length = this.props.length-message.length
        this.setState({ message ,length }) 
    }
    handleKeyUp = event =>{
        // console.log(event.key)
        if (event.key === 'Enter'){
            this.createMessage()
        }
    }

    render () {
        return (
           <form className='form' onSubmit={ this.handleSubmit }>
                <textarea value={ this.state.message }
                 maxLength={this.props.length}
                 onChange={ this.handleChange }
                 onKeyUp={this.handleKeyUp} required/>
                <div className ='info'>{this.state.length}</div>
                <button type ='submit'> envoyer</button>
           </form>
        )
    }
}



export default Formulaire