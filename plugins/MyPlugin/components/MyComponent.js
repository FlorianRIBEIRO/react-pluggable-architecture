import React from 'react'
import { connect } from 'react-redux'

class PluginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        console.log('INCREMENT');
        this.props.dispatch(this.props.increment());
    }

    decrement() {
        console.log('DECREMENT')
        this.props.dispatch(this.props.decrement());
    }

    render() {
        return (
            <div>
                <h1>Plugin</h1>
                <p>{this.props.count}</p>
                <button onClick={this.increment}>More</button>
                <button onClick={this.decrement}>Less</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.plugins.myReducer.count,
        increment: state.pluginsActions.actions.myFirstAction,
        decrement: state.pluginsActions.actions.mySecondAction,
    }
}

const mapDispatchToProps = {

}

const PluginContainer = connect(
    mapStateToProps,
    null
)(PluginComponent);

export default PluginContainer;
