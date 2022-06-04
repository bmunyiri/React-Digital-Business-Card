import ReactData from "./ReactData";

export default function ReactProjects(props) {
  return (
    <div className="has-background-success">
      <p className="ReactData-name"> {props.name} </p>
      <p> {props.link}</p>
    </div>
  );
}
