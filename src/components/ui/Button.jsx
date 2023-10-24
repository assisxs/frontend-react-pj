import './Button.css'
import PropTypes from 'prop-types';

const Button = ({children, variant, ...rest}) => {
    return (
        <button {...rest} className={variant}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node, // Valide a prop children como um node
    variant: PropTypes.string, // Valide a prop variant como uma string (ou o tipo apropriado)
};

export default Button