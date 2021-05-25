import React from "react"

class NewItem extends React.Component {
    state = {
        term: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.term === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState({ term: '' });
    }
    render() {
        return(
            <div className='newItem' >
            <form onSubmit={this.handleSubmit}>
                <input
                    className='myInput'
                    type='text'
                    placeholder='Enter Item'
                    value={this.state.term}
                    onChange={(e) => this.setState({term: e.target.value})}
                />
                <button className='myButton'>Add</button>
            </form>
            </div>
        );
    }
}

export default NewItem