import {updateCounter} from "../store/action/actions";
import {connect} from "../my-redux";

const Counter = (props) => {
    return (
        <div>
            <button onClick={() => props.change(updateCounter(-1))}>-</button>
            <span> {props.counter} </span>
            <button onClick={() => props.change(updateCounter(1))}>+</button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    counter: state.changeNumber.counter
})
const mapDispatchToProps = dispatch => ({
    change: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)