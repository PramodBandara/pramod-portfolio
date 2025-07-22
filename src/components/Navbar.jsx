import GitHubIcon from '@mui/icons-material/GitHub';
function Navbar() {
  const styles = `
    .letter {
      display: inline-block;
      transition: transform 0.3s ease, color 0.3s ease;
    }

    .letter:hover {
      animation: float 0.6s ease forwards;
      color: #00ffcc;
    }

    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-15px) rotate(10deg); }
      100% { transform: translateY(0); }
    }

    .github-icon {
      transition: all 0.3s ease;
    }
    .github-icon:hover {
      filter: drop-shadow(0 0 10px #00ffcc);
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      .audiowide-regular {
        font-size: 48px !important;
        text-align: center;
      }
      nav {
        flex-direction: column !important;
        gap: 10px;
        padding: 10px !important;
      }
      .github-icon {
        font-size: 28px !important;
      }
    }
  `;
  return (
    <>
      <style>{styles}</style>
      <nav style={{
        padding: "20px",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}>
        <div style={{ fontSize: "100px" }} className="audiowide-regular">
          {"Pramod Bandara".split("").map((char, index) => (
            <span key={index} className="letter" style={{ animationDelay: `${index * 0.05}s` }}>
              {char}
            </span>
          ))}
        </div>
        <div style={{ position: "absolute", right: "40px" }}>
          <a href="https://github.com/PramodBandara" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: "35px" }}>
            <GitHubIcon fontSize="inherit" className="github-icon" />
          </a>
        </div>
      </nav>
    </>
  );
}
export default Navbar;