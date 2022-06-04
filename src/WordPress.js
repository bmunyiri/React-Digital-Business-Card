import WordPressData from "./WordPressData";

export default function Wordpress(props) {
  return (
    <div className="has-background-primary">
      <p className="WordPress-name"> {props.name} </p>
      <p> {props.link}</p>
    </div>
  );
}
