import PropTypes from 'prop-types';
import css from "./SectionFeedback.module.css"



export const SectionFeedback = ({title, children}) => {
 
    return (
        <section className={css.section}>
            <h2>{title}</h2>
            <>{children}</>
        </section>)
}

SectionFeedback.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}