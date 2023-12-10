import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Link, Typography } from "@mui/material";
import "./Perso.css";
import logoVsCode from "../../images/vscode.svg";
import logoAndroid from "../../images/logo-android.svg";
import logoElectron from "../../images/logo_electron.svg";
import logoAngular from "../../images/logo_angular.svg";

function Perso() {
  return (
    <section id="perso" style={{ color: "#eee", display: "flex", flexDirection: "column" }}>
      <h1>
        <Typography gutterBottom variant="h3" component="div" textAlign="center">
          Mes développements persos
        </Typography>
      </h1>
      <div className="area-perso-box">
        <Card id="box-perso-electron" sx={{ width: "100%" }} className="perso-part">
          <Box sx={{ display: "flex", flexDirection: "row", paddingTop: "0.5em" }}>
            <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
              Application ElectronJS
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", paddingLeft: "1em", paddingRight: "1em" }}>
            <CardMedia component="img" sx={{ width: 80 }} image={logoElectron} alt="Electron JS" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                Développement d'une application Desktop avec ElectronJS destinée à la gestion de livret d'évaluations
                d'élèves. Génération de livrets illustrés en PDF.
              </CardContent>
            </Box>
          </Box>
          <CardActions className="align-center">
            <Chip label="#Angular" color="primary" className="xp-block-tag" />
            <Chip label="#Electron" color="primary" className="xp-block-tag" />
            <Chip label="#TypeORM" color="primary" className="xp-block-tag" />
            <Chip label="#Sqlite" color="primary" className="xp-block-tag" />
            <Chip label="#PDF Make" color="primary" className="xp-block-tag" />
          </CardActions>
        </Card>

        <Card id="box-perso-vscode" sx={{ width: "100%" }} className="perso-part">
          <Box sx={{ display: "flex", flexDirection: "row", paddingTop: "0.5em" }}>
            <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
              Extension VS Code
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", paddingLeft: "1em", paddingRight: "1em" }}>
            <CardMedia component="img" sx={{ width: 80 }} image={logoVsCode} alt="VS Code" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ display: "flex", flex: "1 0 auto" }}>
                Développement d'une extension vscode pour auditer du code Javascript/Typescript.
              </CardContent>
            </Box>
          </Box>
          <CardActions className="align-center">
            <Chip label="#Typescript" color="primary" className="xp-block-tag" />
            <Chip label="#API VS Code" color="primary" className="xp-block-tag" />
            <Chip label="#Webpack" color="primary" className="xp-block-tag" />
          </CardActions>
        </Card>

        <Card id="box-perso-web" sx={{ width: "100%" }} className="perso-part">
          <Box sx={{ display: "flex", flexDirection: "row", paddingTop: "0.5em" }}>
            <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
              Site WEB vitrine
              <Button
                color="secondary"
                variant="outlined"
                href="https://minut-hautefage.firebaseapp.com/"
                className="button-link"
                sx={{ marginLeft: "1em" }}
              >
                Voir
              </Button>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", paddingLeft: "1em", paddingRight: "1em" }}>
            <CardMedia component="img" sx={{ width: 80 }} image={logoAngular} alt="Angular App" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                Développement d'un site web vitrine pour un petit commerce. Déploiement du site sur firebase .
              </CardContent>
            </Box>
          </Box>
          <CardActions className="align-center">
            <Chip label="#Angular" color="primary" className="xp-block-tag" />
            <Chip label="#Material Design" color="primary" className="xp-block-tag" />
            <Chip label="#Firebase" color="primary" className="xp-block-tag" />
          </CardActions>
        </Card>

        <Card id="box-perso-appmobile" sx={{ width: "100%" }} className="perso-part">
          <Box sx={{ display: "flex", flexDirection: "row", paddingTop: "0.5em" }}>
            <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
              Application mobile
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", paddingLeft: "1em", paddingRight: "1em" }}>
            <CardMedia component="img" sx={{ width: 80 }} image={logoAndroid} alt="Dev Mobile Android" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ display: "flex", flex: "1 0 auto" }}>
                Développement en cours d'une application android avec react-native pour gérer son potager.
              </CardContent>
            </Box>
          </Box>
          <CardActions className="align-center">
            <Chip label="#React Native" color="primary" className="xp-block-tag" />
            <Chip label="#MUI" color="primary" className="xp-block-tag" />
            <Chip label="#Android Studio" color="primary" className="xp-block-tag" />
            <Chip label="#Développement Mobile" color="primary" className="xp-block-tag" />
          </CardActions>
        </Card>
      </div>
    </section>
  );
}

export default Perso;
