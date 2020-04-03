
//checking if the the props is empty (null) credit is going to Angel
function nullCheck(props) {
    if(props.info === null) {
      return "empty";
    }

    return props.info;
  }

  export default nullCheck;
