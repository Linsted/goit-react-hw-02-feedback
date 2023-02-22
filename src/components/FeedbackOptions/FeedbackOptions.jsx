import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    // console.log(options, onLeaveFeedback);
    return(
        <ul className={css.list}>{options.map((option, index) =>
            <li key={index}><button onClick={()=>{onLeaveFeedback(option)}} type="button">{option}</button></li>)}
        </ul>
    )   
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired,),
    onLeaveFeedback: PropTypes.func.isRequired,

    
}