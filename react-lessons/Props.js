export default function Profile() {
  return (
    <Avatar
      name= 'praveen'
      size={100}
    />
  );
}

export default function Avatar(props) {
  return (
    <img
      className="avatar"
      src=''
      alt={props.name}
      width={props.size}
      height={props.size}
    />
  );
}

{
    /*
    In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. 
    */
}