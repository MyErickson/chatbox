import React, { Component,createRef } from 'react'
import './App.css'
import './Animations.css'

import Formulaire from './components/Formulaire'
import Message from './components/Message'

//Firebase
import base from './base'

// Annimation
import{ CSSTransition, TransitionGroup} from 'react-transition-group'

class App extends Component {
  state = {
    messages : {},
    pseudo : this.props.match.params.pseudo
  }
//pour le scrollbar reste en bas
  messagesRef = createRef()

  componentDidMount(){
    base.syncState('/' , {
    context:this,
    state:'messages'
    })
  }

  componentDidUpdate() {
    // pour le scrolbar
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight

  }

  addMessage = (message) =>{
    // on copie notre state
    const messages = { ...this.state.messages}
    // on met notre message dans une index/clé unique avec Date.now()
    messages[`message-${Date.now()}`] = message
    //pour faire une boucle autour d'un objet et surppimer les messages on met null pour le firebase
    Object
    .keys(messages)
    .slice(0, -10)
    .forEach(key => {
      messages[key] = null
    })

    this.setState({ messages })
  }

  isUser = (pseudo) => pseudo === this.state.pseudo

  render () {
    const messages = Object
    .keys(this.state.messages)
    //pour chaque clé tu va me fair ele redus
    .map((key) =>( 
    <CSSTransition timeout ={200} classNames='fade' key = {key}>
        <Message
          
          isUser = {this.isUser}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}/>
          </CSSTransition>
      ))
   
    // console.log(messages)
    return (
      <div className='box' >
        <div>
          <div className="messages" ref= {this.messagesRef}>
          <TransitionGroup className="message">{ messages }</TransitionGroup>
          </div>
        </div>
        <Formulaire addMessage={this.addMessage}  pseudo={this.state.pseudo} length= {140}/>
      </div>
    )
  }
}

export default App
