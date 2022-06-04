import "./styles.css";
import LinkedIn from "./Bernard-N-Munyiri-Likedin.png";
import WhatsApp from "./Bernard-N-Munyiri-WhatsApp.png";
import Twitter from "./Bernard-N-Munyiri-Twitter.png";
import Youtube from "./Bernard-N-Munyiri-Youtube.png";
import Instagram from "./Bernard-N-Munyiri-Instagram.png";

export default function Social() {
  return (
    <div class="flex-container">
      <h3>I am Social:</h3>
      <a
        href="https://linkedin.com/in/bernard-njiru-munyiri"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkedIn} alt="dhdh" height="40" width="40" />
      </a>
      <a href="https://web.whatsapp.com/send?text= Please Visit https://kenyawebprofessionals.com">
        <img src={WhatsApp} alt="dhdh" height="40" width="40" />
      </a>
      <a
        href="https://twitter.com/benaa?ref_src=twsrc%5Etfw"
        class="twitter-follow-button"
        data-show-count="false"
      >
        <img src={Twitter} alt="dhdh" height="40" width="40" />
      </a>
      <a
        href="https://youtube.com/channel/UCtdxACSWwzAU3VcntqyX8QQ"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Youtube} alt="dhdh" height="40" width="40" />
      </a>
      <a
        href="https://www.instagram.com/kenyawebprofessionals"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Instagram} alt="dhdh" height="40" width="40" />
      </a>
    </div>
  );
}
