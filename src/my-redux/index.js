import React, {createContext} from "react";

const createStore = reducer => {
    let state;
    let listeners = [];

    const getState = () => state;
    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener(state));
    };
    const subscribe = listener => {
        listeners.push(listener);
    };

    dispatch({});

    return {getState, dispatch, subscribe};
};

const combineReducers = reducers => {
    const nextState = {};
    const functionsReducer = {};
    const reducersKeys = Object.keys(reducers);
    reducersKeys.forEach(key => {
        if (typeof reducers[key] === "function") {
            functionsReducer[key] = reducers[key];
        }
    });
    const reducerFunctionsKeys = Object.keys(functionsReducer);
    return (state = {}, action) => {
        reducerFunctionsKeys.forEach(key => {
            const reducer = functionsReducer[key];
            nextState[key] = reducer(state[key], action);
        });
        return nextState;
    };
};

const ReduxContext = createContext("redux");

const Provider = ({store, children}) => <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>


const connect = (mapStateToProps, mapDispatchToProps) => Component => {
    class Connect extends React.Component {
        constructor(props) {
            super(props);
            this.state = props.store.getState();
        }

        componentDidMount() {
            this.props.store.subscribe(state => {
                this.setState(state);
            });
        }

        render() {
            const {store} = this.props;
            return <Component
                {...this.props}
                {...mapStateToProps(store.getState())}
                {...mapDispatchToProps(store.dispatch)}
            />
        }
    }

    return props => <ReduxContext.Consumer>
        {store => <Connect {...props} store={store}/>}
    </ReduxContext.Consumer>

};


export {createStore, combineReducers, connect, Provider};
