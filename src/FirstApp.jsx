import PropTypes from 'prop-types';



// const newMessage = 'Gustavo';

// const getResult = () => {
//     return 4+4;
// };

export const FirstApp = ({title, subtitle, name}) => {

  


  return (
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
  name: "Gustavo"
}
