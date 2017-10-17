import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContacts from './CreateContact';

class App extends Component {
  state = {
    screen: 'list',//list, create
    contacts: []
  }

  componentDidMount(){
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts: contacts})
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => contact.id !== c.id)
    }))

    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        {this.state.screen === 'list' && (
          <ListContacts 
          onDeleteContact={this.removeContact} 
          onNavigate={() => { this.setState({screen: 'create'})}}
          contacts={this.state.contacts} />
        )}
        {this.state.screen === 'create' && (
          <CreateContacts />
        )}
      </div>
    )
  }
}

export default App;
