import './MyToolbar.css';



import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

function MyToolbar(props) {

  /*const navItems = [
    { label: 'Accueil', path: '#home' },
    { label: 'Diplômes', path: '#diplomes' },
    { label: 'Compétences', path: '#skills' },
    { label: 'Expériences', path: '#xp' },
    { label: 'Contact', path: '#contact' }
  ];

  const [homeIsActive, setHomeIsActive] = useState(true);
  const [diplomeIsActive, setDiplomeIsActive] = useState(false);
  const [competencesIsActive, setCompetenceIsActive] = useState(false);
  const [experienceIsActive, setExperienceIsActive] = useState(false);
  const [contactIsActive, setContactIsActive] = useState(false);*/


  const activeSection = props.activeSection;

  function handleClickBtn(item: string) {

    const element = document.getElementById(item);
    if (element) element.scrollIntoView({ behavior: 'smooth' });

    /*switch (item) {

      case 'home':
        setHomeIsActive(true);
        setDiplomeIsActive(false);
        setCompetenceIsActive(false);
        setExperienceIsActive(false);
        setContactIsActive(false);
        break;

      case 'diplomes':
        setHomeIsActive(false);
        setDiplomeIsActive(true);
        setCompetenceIsActive(false);
        setExperienceIsActive(false);
        setContactIsActive(false);
        break;

      case 'skills':
        setHomeIsActive(false);
        setDiplomeIsActive(false);
        setCompetenceIsActive(true);
        setExperienceIsActive(false);
        setContactIsActive(false);
        break;

      case 'xp':
        setHomeIsActive(false);
        setDiplomeIsActive(false);
        setCompetenceIsActive(false);
        setExperienceIsActive(true);
        setContactIsActive(false);
        break;

      case 'contact':
        setHomeIsActive(false);
        setDiplomeIsActive(false);
        setCompetenceIsActive(false);
        setExperienceIsActive(false);
        setContactIsActive(true);
        break;
    }*/
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color="default" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6"
            component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            Gwenael DIDIER
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Button key='Accueil' sx={{ color: '#fff' }}
              className={activeSection === 'home' ? 'btn-appbar-active' : ''} onClick={() => handleClickBtn('home')}>
              Accueil
            </Button>

            <Button key='Diplômes' sx={{ color: '#fff' }}
              className={activeSection === 'diplomes' ? 'btn-appbar-active' : ''} onClick={() => handleClickBtn('diplomes')}>
              Diplômes
            </Button>

            <Button key='Compétences' sx={{ color: '#fff' }}
              className={activeSection === 'skills' ? 'btn-appbar-active' : ''} onClick={() => handleClickBtn('skills')}>
              Compétences
            </Button>

            <Button key='Expériences' sx={{ color: '#fff' }}
              className={activeSection === 'xp' ? 'btn-appbar-active' : ''} onClick={() => handleClickBtn('xp')}>
              Expériences
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>

  )
};

export default MyToolbar;
