import "./Social.css";
import Twitter from "@/assests/images/twitter.jpg";
import Github from "@/assests/images/github.jpg";
import Linkedin from "@/assests/images/linkedin.jpg";
import Leetcode from "@/assests/images/leetcode.png";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Social = () => {
  const socials = [
    {
      title: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/srijit7098/",
      bg: Linkedin,
    },
    {
      title: <FaTwitter />,
      url: "https://twitter.com/srijitmondal02",
      bg: Twitter,
    },
    { title: <FaGithub />, url: "https://github.com/srijit2002", bg: Github },
    {
      title: <SiLeetcode />,
      url: "https://leetcode.com/onlyerror/",
      bg: Leetcode,
    },
  ];
  return (
    <section className="social">
      <h1 className="section_heading">[Socials]</h1>
      <ul className="social_list">
        {socials.map((social) => (
          <a
            href={social.url}
            key={social.url}
            className="social_list_item"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="cover"
              style={{ background: `url(${social.bg}) center center/cover` }}
            ></div>
            {social.title}
          </a>
        ))}
      </ul>
    </section>
  );
};
