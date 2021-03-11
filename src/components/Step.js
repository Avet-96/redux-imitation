import {connect} from "../my-redux";
import {changeStepSize} from "../store/action/actions";

const Step = (props) => {
    return (
        <div>
            <div>Значение счётчика должно увеличиваться или уменьшаться на заданную величину шага</div>
            <div>Текущая величина шага: {props.stepSize}</div>
            <input
                type="range"
                min="1"
                max="5"
                value={props.stepSize}
                onChange={({target}) =>props.changeSize(changeStepSize(target.value))}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    stepSize: state.pluseminus.stepSize
})
const mapDispatchToProps = dispatch => ({
    changeSize:dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Step)
