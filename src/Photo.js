import "./styles.css";

import portrait from "./Bernard-N-Munyiri.png";

export default function Photo() {
  return (
    <div className="Photo">
      <img src={portrait} alt="HeadShot" />
    </div>
  );
}
