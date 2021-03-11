import {updateCounter} from "../store/action/actions";
import {connect} from "../my-redux";

const Counter = (props) => {
    return (
        <div>
            <button onClick={() => props.plusMinus(updateCounter(1))}>-</button>
            <span> {props.counter} </span>
            <button onClick={() => props.plusMinus(updateCounter(-1))}>+</button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    counter: state.pluseminus.counter
})
const mapDispatchToProps = dispatch => ({
    plusMinus:  dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)