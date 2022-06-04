import ReactData from "./ReactData";

export default function ReactProjects(props) {
  return (
    <div>
      <p className="ReactData-name"> {props.name} </p>
      <p> {props.link}</p>
    </div>
  );
}
