import React, { Component } from 'react'

class SearchBar extends Component{
    state = {term: ''}
    onInputChange =(event)=>{
      this.setState({term: event.target.value});
    };

    onFormSubmit= event =>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return (
            <div>
                <div className="search-bar ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Video Search</label>
                            <input type="text" onChange={this.onInputChange} value={this.state.term}/>

                        </div>

                    </form>

                </div>
            </div>
        );
        
    }
}
export default SearchBar;