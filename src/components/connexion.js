import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Connexion extends Component {
    // state est comme le module var = {} il ya des propriété et de methode
    state={
        pseudo : '',
        goToChat:false
    }

    PourhandleChange = (event) =>{
        const pseudo = event.target.value
        this.setState({pseudo})
    }


    handleSubmit = (event) =>{
        // enelve le 'actualisation du formulaire
        event.preventDefault()
        this.setState({goToChat : true})
    }
    render () {

        if(this.state.goToChat){
            //il y to pour ecraser l'url et push to qui garde l'url precedent et le suivant
            return <Redirect push to={ `/pseudo/${this.state.pseudo}`}></Redirect>
        }


        return (
            <div className='connexionBox'>
                <form className ='connexion' onSubmit={this.handleSubmit}>
                    <input value = {this.state.pseudo} 
                    placeholder= 'Pseudo'
                    type='text'
                    onChange={this.handleChange}
                    required/>
                    <button type='submit'>Go</button>
                </form>
            </div>
        )
    }
}

export default Connexion