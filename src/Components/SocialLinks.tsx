import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "flex",
        gap: "20px",
        zIndex: 1000,
        pointerEvents: "auto",
      }}
    >
      <a
        href="https://github.com/pratikshrma/waterfall-shader"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "white",
          fontSize: "24px",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#ccc")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/pratik-sharma-9b9424349/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "white",
          fontSize: "24px",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#0077b5")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
