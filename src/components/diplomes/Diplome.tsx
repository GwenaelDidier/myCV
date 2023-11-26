import { Typography } from "@mui/material";
import Frise from "../frise/Frise";
import './Diplome.css';

function Diplome() {


    return (
        <section id="diplomes" style={{ color: '#eee', display: 'flex', flexDirection: 'column' }}>
            <h1>
                <Typography gutterBottom variant="h3" component="div" textAlign="center">
                    Ma formation
                </Typography>
            </h1>

            <div>
                <Frise></Frise>
            </div>

        </section>
    )
}

export default Diplome;