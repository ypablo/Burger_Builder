import React, {Component} from 'react'
import Modal from "../UI/Modal/Modal"
import axios from 'axios'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state ={
            error: null
        }    
    UNSAFE_componentWillMount() {
        axios.interceptors.request.use(req => {
            this.setState({error: null})
            return req
        })
        axios.interceptors.response.use(res => res, error => {
           this.setState({error: error })
        })
    }  

    errorConfirmHandler =() => {
        this.setState({error: null})
    }

    render (){
        return (
            <React.Fragment>
                <Modal show={this.state.error} clicked={this.errorConfirmHandler}>
                    Something didn't work... <br/>
                    <li>{this.state.error ? this.state.error.message : null}</li>
                </Modal>    
                <WrappedComponent {...this.props}/>
            </React.Fragment>
            
        )
    }
}
}

export default withErrorHandler