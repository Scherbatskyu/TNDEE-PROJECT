import { Typography } from "@mui/material";
import ParticlesComponent from "./components/particles";
import "./styles.css";

const Home = () => (
  <div className="welcome">
    <ParticlesComponent id="particles" />
    <Typography variant="h3" id="welcome_heading" className="first">
      Transmission & Distribution
    </Typography>
    <Typography variant="h3" id="welcome_heading" className="second">
      संचरण और तनाव
    </Typography>
    <Typography variant="h3" id="welcome_heading" className="third">
      伝達とストレス
    </Typography>
    <Typography variant="h5" id="welcome_heading" className="first">
      HV Cable Inter-Sheath Configuration Tool for Electrical Stress Reduction
    </Typography>
  </div>
);

export default Home;
