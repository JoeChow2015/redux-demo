import React from 'react'

import store from '../../store'
import { sendAction } from '../../action'
export default class Home extends React.Component {
    handleClick = () => {
        const action = sendAction()
        store.dispatch(action)
    }

    componentDidMount () {
        store.subscribe(() => {
            console.log('subscribe', store.getState())
            this.setState({})
        })
    }
    render () {
        return (
            <>
                <button onClick={this.handleClick}>发送一个action</button>
                <div>{store.getState().value}</div>
            </>
        )
    }
}