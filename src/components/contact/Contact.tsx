import { BusinessCenter } from "@mui/icons-material";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.css';

function Contact() {

    return (
        <section id="contact" style={{ color: '#eee', display: 'flex', flexDirection: 'column' }}>

            <h1>
                <Typography gutterBottom variant="h3" component="div" textAlign="center">
                    Contact
                </Typography>
            </h1>

            <div className="grid">
                <div className="grid-item" id="item-1-1">
                    <Card sx={{ width: '100%' }} className="card-contact">
                        <CardContent>
                            <AlternateEmailIcon sx={{ fontSize: 64 }} />
                        </CardContent>
                        <CardActions>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                                <a href="mailto@gwenael.didier@gmail.com" className="contact-link">gwenael.didier@gmail.com</a>
                            </Typography>
                        </CardActions>
                    </Card>
                </div>

                <div className="grid-item" id="item-1-2">
                    <Card sx={{ width: '100%' }} className="card-contact">
                        <CardContent>
                            <GitHubIcon sx={{ fontSize: 64 }} />
                        </CardContent>
                        <CardActions>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                                <a href="https://github.com/GwenaelDidier" className="contact-link">https://github.com/GwenaelDidier</a>
                            </Typography>
                        </CardActions>
                    </Card>
                </div>

                <div className="grid-item" id="item-1-2">
                    <Card sx={{ width: '100%' }} className="card-contact">
                        <CardContent>
                            <LinkedInIcon sx={{ fontSize: 64 }} />
                        </CardContent>
                        <CardActions>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" width="100%">
                                <a href="https://www.linkedin.com/in/gwenael-didier/" className="contact-link">https://www.linkedin.com/in/gwenael-didier/</a>
                            </Typography>
                        </CardActions>
                    </Card>
                </div>
            </div>

            <div className="contact-low">
                
            </div>
        </section>
    )
};

export default Contact;