  const Mensaje3 = (props) => {
      console.log(props)
    return <h3 style= {{ color: props.color}}> Hola Mundo 3 - {props.message}</h3>
  }

  export default Mensaje3
