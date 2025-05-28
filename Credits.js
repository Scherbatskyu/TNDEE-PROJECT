import { Typography } from "@mui/material";
import ParticlesComponent from "./components/particles";

const Credits = () => (
  <div classname="credits">
    <ParticlesComponent id="particles" />
    <Typography variant="h3" id="welcome_heading" className="names">
      Vishnupriya 107123135
    </Typography>
    <Typography variant="h3" id="welcome_heading" className="names">
      Vedant Dorlikar 107123133
    </Typography>
    <Typography variant="h3" id="welcome_heading" className="names">
      Arunima Saha 107123017
    </Typography>
    <Typography variant="h6" id="welcome_heading" className="names">
      A software tool to facilitate cable manufacturers to fix and operate the
      inter sheaths in a single core high voltage cable to minimize the
      electrical stress in the insulation.
    </Typography>
  </div>
);

export default Credits;