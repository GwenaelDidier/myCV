import "./Accueil.css";

import { BusinessCenter, LocalActivity, ThumbUpOffAlt, VerifiedUser } from "@mui/icons-material";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import HtmlOutlinedIcon from "@mui/icons-material/HtmlOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import portrait from "../../images/portrait-cv-4.jpg";

function Accueil() {
  return (
    <section id="home">
      <h1>
        <Typography gutterBottom variant="h3" component="div">
          Gwenael DIDIER
        </Typography>
        <Box id="bio">
          <blockquote>
            <cite>
              <Typography gutterBottom variant="h6" component="div" textAlign="center" width="100%">
                Bonjour, je m'appelle Gwenael et j'ai 39 ans.
                <br />
                Je travaille dans le développement logiciel orienté utilisateur.
                <br />
              </Typography>
            </cite>
            <cite>
              <Typography gutterBottom variant="h6" component="div" textAlign="center" width="100%">
                Je suis technophile, je m'interesse aux nouvelles technologies relatives au développement WEB et mobile.
              </Typography>
            </cite>
          </blockquote>
        </Box>
      </h1>

      <div className="grid">
        <div className="grid-item" id="item-1-1">
          <Card sx={{ width: "100%" }} className="card-bio">
            <CardContent>
              <BusinessCenter sx={{ fontSize: 64 }} />
            </CardContent>
            <CardActions>
              <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                12 ans d'expérience
              </Typography>
            </CardActions>
          </Card>
        </div>
        <div className="grid-item" id="item-1-2">
          <Card sx={{ width: "100%" }} className="card-bio">
            <CardContent>
              <LocalActivity sx={{ fontSize: 64 }} />
            </CardContent>
            <CardActions>
              <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                Leadership
              </Typography>
            </CardActions>
          </Card>
        </div>
        <div className="grid-item" id="item-1-3">
          <Card sx={{ width: "100%" }} className="card-bio">
            <CardContent>
              <ThumbUpOffAlt sx={{ fontSize: 64 }} />
            </CardContent>
            <CardActions>
              <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                Satisfaction client
              </Typography>
            </CardActions>
          </Card>
        </div>
        <div className="grid-item" id="item-2-1">
          <Card sx={{ width: "100%" }} className="card-bio">
            <CardContent>
              <CodeOutlinedIcon sx={{ fontSize: 64 }} />
              <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                Développement Full Stack
              </Typography>
            </CardContent>
            <CardContent></CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <HtmlOutlinedIcon
                sx={{ fontSize: "1.8em", alignSelf: "flex-start", marginRight: "1em" }}
                color="primary"
              />
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                <span>Angular / React / JS</span>
              </Typography>
            </CardActions>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <DnsOutlinedIcon
                sx={{ fontSize: "1.8em", alignSelf: "flex-start", marginRight: "1em" }}
                color="primary"
              />
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                <span>Java Spring / NodeJS / PHP</span>
              </Typography>
            </CardActions>

            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <StorageOutlinedIcon
                sx={{ fontSize: "1.8em", alignSelf: "flex-start", marginRight: "1em" }}
                color="primary"
              />
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                <span>PostGres / SQL Server / MongoDb / SqLite</span>
              </Typography>
            </CardActions>
          </Card>
        </div>
        <div className="grid-item" id="item-2-2">
          <Card sx={{ width: "100%" }} className="card-bio">
            <CardMedia
              id="portrait"
              component="img"
              classes="MuiCardMedia-img"
              height="265"
              image={portrait}
              title="Gwenael"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Tech Lead dans le développement Logiciel WEB.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="grid-item" id="item-2-3">
          <Card sx={{ width: "100%" }} className="card-bio">
            <CardContent>
              <ContactPageIcon sx={{ fontSize: 64 }} />
              <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                Infos
              </Typography>
            </CardContent>
            <CardContent></CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <AlternateEmailOutlinedIcon
                sx={{ fontSize: "1.8em", alignSelf: "flex-start", marginRight: "1em" }}
                color="primary"
              />
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                <a href="mailto@gwenael.didier@gmail.com" className="contact-link">
                  gwenael.didier@gmail.com
                </a>
              </Typography>
            </CardActions>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <GitHubIcon sx={{ fontSize: "1.8em", alignSelf: "flex-start", marginRight: "1em" }} color="primary" />
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                <a href="https://github.com/GwenaelDidier" className="contact-link">
                  https://github.com/GwenaelDidier
                </a>
              </Typography>
            </CardActions>

            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <LinkedInIcon sx={{ fontSize: "1.8em", alignSelf: "flex-start", marginRight: "1em" }} color="primary" />
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                <a href="https://www.linkedin.com/in/gwenael-didier/" className="contact-link">
                  https://www.linkedin.com/in/gwenael-didier/
                </a>
              </Typography>
            </CardActions>
          </Card>
        </div>
        <div className="grid-item" id="item-3-1">
          <Card sx={{ width: "100%" }} className="card-bio">
            <CardContent>
              <VerifiedUser sx={{ fontSize: 64 }} />
            </CardContent>
            <CardActions>
              <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                Expert technique Angular
              </Typography>
            </CardActions>
          </Card>
        </div>
        <div className="grid-item" id="item-3-2">
          <Card sx={{ width: "100%" }} className="card-bio">
            <CardContent>
              <LoopOutlinedIcon sx={{ fontSize: 64 }} />
            </CardContent>
            <CardActions>
              <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                Agilité Scrum
              </Typography>
            </CardActions>
          </Card>
        </div>
        <div className="grid-item" id="item-3-3">
          <Card sx={{ width: "100%" }} className="card-bio">
            <CardContent>
              <AllInclusiveOutlinedIcon sx={{ fontSize: 64 }} />
            </CardContent>
            <CardActions>
              <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                Dev Ops
              </Typography>
            </CardActions>
          </Card>
        </div>
        <div className="grid-item" id="item-4-1"></div>
        <div className="grid-item" id="item-4-2"></div>
        <div className="grid-item" id="item-4-3"></div>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: "2" }}></div>
      </div>
    </section>
  );
}

export default Accueil;
