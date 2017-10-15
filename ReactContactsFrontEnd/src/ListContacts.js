import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortyBy from 'sort-by'

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ""
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery = () => {
        this.setState({
            query: ''
        })
    }

    render() {
        const { contacts, onDeleteContact } = this.props;
        const query = this.state.query;

        let showwingContacts
        if (query) {
            const match = new RegExp(escapeRegExp(query))
            showwingContacts = contacts.filter(contact => match.test(contact.name))
        }
        else {
            showwingContacts = contacts
        }

        showwingContacts.sort(sortyBy('name'))

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input
                        className="search-contacts"
                        type="text"
                        placeholder="Buscar contatos"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>

                {showwingContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                    <span>
                        Exibindo agora {showwingContacts.length} num total de {contacts.length}
                    </span>
                    <button onClick={this.clearQuery}>
                        Exibir todos
                    </button>
                    </div>
                )}

                <ol className="contact-list">
                    {showwingContacts.map(contact => (
                        <li key={contact.id} className="contact-list-item">
                            <div className="contact-avatar" style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }} />
                            <div className="contact-details">
                                <p>
                                    {contact.name}
                                </p>
                                <p>
                                    {contact.email}
                                </p>
                            </div>
                            <button onClick={() => onDeleteContact(contact)} className="contact-remove">
                                Remove
                    </button>
                        </li>
                    ))}
                </ol>
            </div>

        )
    }
}

export default ListContacts;
