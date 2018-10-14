import React from 'react'
import axios from 'axios'

class CustomFavoriteComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl = ""
        }
    }

    handleUrlChange(e) {
        this.setState({
            imageUrl: e.target.value
        })
    }

    submitFavorite() {
        if (this.state.imageUrl) {
            axios.post('/api/addFavorite', {
                image: this.state.imageUrl
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {
        return (
            <div className="row mx-0 mt-4">
                <div className="col">
                </div>
                <div className="col">
                <form>
                    <input type="url" value={this.state.imageUrl}></input>
                    <button className="btn btn-primary" onClick={() => this.submitFavorite()}>Submit</button>
                </form>
                </div>
                <div className="col">
                </div>
            </div>
        );
    }
}