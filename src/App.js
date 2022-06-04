import "./styles.css";

import Photo from "./Photo";
import Header from "./Header";
import Social from "./Social";
import WordPressData from "./WordPressData";
import WordPress from "./WordPress";
import ReactData from "./ReactData";
import ReactProjects from "./ReactProjects";
export default function App() {
  const word = WordPressData.map((site) => {
    return <WordPress key={site.id} name={site.name} link={site.link} />;
  });

  const Reactproj = ReactData.map((proj) => {
    return <ReactProjects key={proj.id} name={proj.name} link={proj.link} />;
  });
  return (
    <div className="app">
      <Photo />
      <Header />
      <Social />
      <br />
      <br />
      <br />
      <h2 className="title is-3">Portfolio</h2>
      <h3 className="reactp" className="title is-4 has-background-success">
        React Projects
      </h3>
      {Reactproj}

      <br />
      <br />
      <h3 className="wordp" className="title is-4 has-background-primary">
        WordPress Websites
      </h3>
      {word}
    </div>
  );
}
