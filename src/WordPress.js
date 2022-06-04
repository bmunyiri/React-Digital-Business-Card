import WordPressData from "./WordPressData";

export default function Wordpress(props) {
  return (
    <div>
      <p className="WordPress-name"> {props.name} </p>
      <p> {props.link}</p>
    </div>
  );
}
