import PropTypes from 'prop-types';

const ErrorMessage = ({error}) => {
    if(!error) return null
    return (
        <p style={{ color: "red" }}>This field is required</p>
    )
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired
  }

export default ErrorMessage