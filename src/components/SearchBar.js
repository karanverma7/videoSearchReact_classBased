import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {

    state = { term: ''}

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form form-style" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <h2>Video Search</h2>
                        <input 
                            type="text"
                            value={ this.state.term }
                            onChange={ e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;