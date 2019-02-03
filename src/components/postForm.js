import React from 'react'
import axios from 'axios'

class PostForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    inputOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    inputOnSubmit = (event) => {
        event.preventDefault()

        axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                title: this.state.title,
                body: this.state.body,
                userId: 1
            })
            .then(res => {
                console.log(`post data to API success : ${res.status}`)
                this.props.inputPost(res.data)
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Post Form</h1>
                <form onSubmit={this.inputOnSubmit}>
                    <input onChange={this.inputOnChange} style={{width: '100%'}} type='text' name='title'  placeholder='title' /> <br /> <br/>
                    <textarea onChange={this.inputOnChange} style={{width: '100%', height: '50px'}} name='body' placeholder='body' /> <br/> <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm