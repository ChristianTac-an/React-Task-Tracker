import PropTypes from 'prop-types';


const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'task tracker',
}

Header.prototypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red', backgroundColor: 'yellow'
// }

export default Header
