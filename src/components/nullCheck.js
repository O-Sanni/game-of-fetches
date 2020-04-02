
function nullCheck(props) {
    if(props.info === null) {
      return "empty";
    }

    return props.info;
  }

  export default nullCheck;
