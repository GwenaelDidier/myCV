import './Experience.css';

import { Chip, List, ListItem, ListItemText, Typography } from '@mui/material';

import logoTotal from '../../images/911px-Logo_TotalEnergies.svg.png';
import logoAkka from '../../images/akka.jpg';
import logoNeosoft from '../../images/logo-neosoft-white.svg';
import logoThales from '../../images/Thales_Logo.svg';

function Experiences() {

    return (
        <section id="xp" style={{ color: '#eee', display: 'flex', flexDirection: 'column' }}>
            <h1>
                <Typography gutterBottom variant="h3" component="div" textAlign="center">
                    Mes expériences
                </Typography>
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div className='xp-block' id="premier">
                    <div className='xp-block-left'>

                        <Typography gutterBottom variant="h5" component="div" textAlign="center" marginTop="1em" fontWeight='bold'>
                            <img src={logoThales} alt="logo Thales" height='20px' />
                            <span style={{ marginLeft: '1em' }}>Tech Lead - Développement WEB</span>
                        </Typography>
                        <div className='xp-block-dates'>
                            2021 à Aujourd'hui
                        </div>
                        <div className='xp-block-content'>
                            <List component="nav">
                                <ListItem sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <ListItemText sx={{ width: '100%' }} primary="Récupération de sites de gestion de données liées au forage." />
                                    <ListItemText sx={{ width: '100%' }} primary="Encadrement technique des équipes de développement." />
                                    <ListItemText sx={{ width: '100%' }} primary="Mise en place des bonnes pratiques, tests, documentation." />
                                    <ListItemText sx={{ width: '100%' }} primary="Utilisation de workers pour des traitements spécifiques." />
                                    <ListItemText sx={{ width: '100%' }} primary="Travail en environnement dockeurisé." />
                                    <ListItemText sx={{ width: '100%' }} primary="Développement Full Stack (React - NodeJS (NestJS) - Middleware - docker - postgres - solr)." />
                                </ListItem >
                            </List>
                        </div>
                        <div className='xp-block-tags'>
                            <Chip label="#Tech Lead" color="primary" className='xp-block-tag' />
                            <Chip label="#Encadrement" color="primary" className='xp-block-tag' />
                            <Chip label="#DevOps" color="primary" className='xp-block-tag' />
                            <Chip label="#Tests unitaires" color="primary" className='xp-block-tag' />
                            <Chip label="#Documentation" color="primary" className='xp-block-tag' />
                            <Chip label="#Agilité" color="primary" className='xp-block-tag' />
                            <Chip label="#Docker" color="secondary" className='xp-block-tag' />
                            <Chip label="#React" color="secondary" className='xp-block-tag' />
                            <Chip label="#NestJS" color="secondary" className='xp-block-tag' />
                            <Chip label="#TypeORM" color="secondary" className='xp-block-tag' />
                            <Chip label="#Jest" color="secondary" className='xp-block-tag' />
                            <Chip label="#Cypress" color="secondary" className='xp-block-tag' />
                            <Chip label="#Postgres" color="secondary" className='xp-block-tag' />
                            <Chip label="#Solr" color="secondary" className='xp-block-tag' />
                            <Chip label="#Redis" color="secondary" className='xp-block-tag' />
                        </div>
                        <span className='dot-left'></span>

                        <span className='xp-block-client'>
                            <img src={logoTotal} alt="logo TotalEnergies" height='60px' />
                        </span>
                    </div>
                </div>

                <div className='xp-block' id="second">
                    <div className='xp-block-right'>


                        <Typography gutterBottom variant="h5" component="div" textAlign="center" marginTop="1em" fontWeight='bold'>
                            <img src={logoThales} alt="logo Thales" height='20px' />
                            <span style={{ marginLeft: '1em' }}>Tech Lead - Développement WEB</span>
                        </Typography>
                        <div className='xp-block-dates'>
                            2021 à 2023
                        </div>
                        <div className='xp-block-content'>
                            <List component="nav">
                                <ListItem sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                <ListItemText sx={{ width: '100%' }} primary="Création d'un site de gestion de workflow dans le cadre d'inspections de pièces." />
                                    <ListItemText sx={{ width: '100%' }} primary="Encadrement technique de l'équipe de développement." />
                                    <ListItemText sx={{ width: '100%' }} primary="Mise en place de la CICD github." />
                                    <ListItemText sx={{ width: '100%' }} primary="Travail de DevOps dans le cloud Azure." />
                                    <ListItemText sx={{ width: '100%' }} primary="Développement Full Stack (Angular - Java Spring Boot)." />
                                </ListItem >
                            </List>
                        </div>
                        <div className='xp-block-tags'>
                            <Chip label="#Tech Lead" color="primary" className='xp-block-tag' />
                            <Chip label="#Encadrement" color="primary" className='xp-block-tag' />
                            <Chip label="#DevOps" color="primary" className='xp-block-tag' />
                            <Chip label="#Cloud Azure" color="primary" className='xp-block-tag' />
                            <Chip label="#Tests unitaires" color="primary" className='xp-block-tag' />
                            <Chip label="#Agilité" color="primary" className='xp-block-tag' />
                            <Chip label="#Angular" color="secondary" className='xp-block-tag' />
                            <Chip label="#Java spring Boot" color="secondary" className='xp-block-tag' />
                            <Chip label="#Hibernate" color="secondary" className='xp-block-tag' />
                            <Chip label="#Karma" color="secondary" className='xp-block-tag' />
                        </div>
                        <span className='dot-right'></span>

                        <span className='xp-block-client'>
                            <img src={logoTotal} alt="logo TotalEnergies" height='60px' />
                        </span>
                    </div>
                </div>

                <div className='xp-block' id="troisieme">
                    <div className='xp-block-left'>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center" marginTop="1em" fontWeight='bold'>
                            <img src={logoThales} alt="logo Thales" height='20px' />
                            <span style={{ marginLeft: '1em' }}> Développeur WEB Full Stack</span>
                        </Typography>

                        <div className='xp-block-dates'>
                            2017 à 2021
                        </div>
                        <div className='xp-block-content'>
                            <List component="nav">
                                <ListItem sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <ListItemText sx={{ width: '100%' }} primary="Création d'un site de gestion de workflow dans le cadre d'inspections de pièces." />
                                    <ListItemText sx={{ width: '100%' }} primary="Développement Full Stack (Angular - Java Spring Boot)." />
                                    <ListItemText sx={{ width: '100%' }} primary="Lead développement Front-end." />
                                </ListItem >
                            </List>
                        </div>
                        <div className='xp-block-tags'>
                            <Chip label="#Tests unitaires" color="primary" className='xp-block-tag' />
                            <Chip label="#Agilité" color="primary" className='xp-block-tag' />
                            <Chip label="#Angular" color="secondary" className='xp-block-tag' />
                            <Chip label="#Java spring Boot" color="secondary" className='xp-block-tag' />
                            <Chip label="#Hibernate" color="secondary" className='xp-block-tag' />
                            <Chip label="#Junit" color="secondary" className='xp-block-tag' />
                        </div>
                        <span className='dot-right'></span>

                        <span className='xp-block-client'>
                            <img src={logoTotal} alt="logo TotalEnergies" height='60px' />
                        </span>
                    </div>
                </div>

                <div className='xp-block'>
                    <div className='xp-block-right'>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center" marginTop="1em" fontWeight='bold'>
                            <img src={logoNeosoft} alt="logo Neosoft" height='20px' />
                            <span style={{ marginLeft: '1em' }}></span>Développeur WEB Frontend <small className='xp-block-title-entreprise'> (Airbus Geo Intelligence)</small>
                        </Typography>
                        <div className='xp-block-dates'>
                            2014 à 2016
                        </div>
                        <div className='xp-block-content'>
                            <List component="nav">
                                <ListItem sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <ListItemText sx={{ width: '100%' }}
                                        primary="Développement d'un site web de commande en ligne des images d'archive et programmation des satellites: Datadoors." />
                                    <ListItemText sx={{ width: '100%' }} primary="Rédaction de propositions techniques." />
                                    <ListItemText sx={{ width: '100%' }} primary="Manipulation et création de SVG." />
                                    <ListItemText sx={{ width: '100%' }} primary="Ecriture de tests unitaires (karma) et tests end-to-end (protractor)." />
                                    <ListItemText sx={{ width: '100%' }} primary="Développement Front-end (AngularJS, SaSS, HTML 5, CSS 3)." />
                                    <ListItemText sx={{ width: '100%' }} primary="Travail géomatique avec OpenLayers 3." />
                                </ListItem >
                            </List>
                        </div>
                        <div className='xp-block-tags'>
                            <Chip label="#Tests unitaires" color="primary" className='xp-block-tag' />
                            <Chip label="#Protractor" color="primary" className='xp-block-tag' />
                            <Chip label="#SVG" color="primary" className='xp-block-tag' />
                            <Chip label="#AngularJS" color="secondary" className='xp-block-tag' />
                            <Chip label="#SaSS" color="secondary" className='xp-block-tag' />
                            <Chip label="#HTML5" color="secondary" className='xp-block-tag' />
                            <Chip label="#CSS3" color="secondary" className='xp-block-tag' />
                            <Chip label="#Bootstrap" color="secondary" className='xp-block-tag' />
                            <Chip label="#OpenLayers 3" color="secondary" className='xp-block-tag' />
                        </div>
                        <span className='dot-left'></span>
                    </div>
                </div>

                <div className='xp-block'>
                    <div className='xp-block-left'>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center" marginTop="1em" fontWeight='bold'>
                            <img src={logoAkka} alt="logo Akka" height='20px' />
                            <span style={{ marginLeft: '1em' }}> Développeur WEB Full Stack
                                <small className='xp-block-title-entreprise'> (Airbus Defense and Space)</small>
                            </span>
                        </Typography>
                        <div className='xp-block-dates'>
                            2011 à 2013
                        </div>
                        <div className='xp-block-content'>
                            <List component="nav">
                                <ListItem sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <ListItemText sx={{ width: '100%' }}
                                        primary="Création d'un outil WEB de support à l'exploitation d'un système opérationnel de contrôle satellite." />
                                    <ListItemText sx={{ width: '100%' }} primary="Développement orienté client/serveur." />
                                    <ListItemText sx={{ width: '100%' }} primary="Compréhension des besoins clients, force de proposition." />
                                    <ListItemText sx={{ width: '100%' }} primary="Manipulation et traitement de grandes quantités de données." />
                                    <ListItemText sx={{ width: '100%' }} primary="Gestion et administration de bases de données MySQL." />
                                    <ListItemText sx={{ width: '100%' }} primary="Web-ergonomie (jQuery, Ajax, HTML 5, CSS 3, ...)" />
                                </ListItem >
                            </List>
                        </div>
                        <div className='xp-block-tags'>
                            <Chip label="#Client/Serveur" color="primary" className='xp-block-tag' />
                            <Chip label="#Specs" color="primary" className='xp-block-tag' />
                            <Chip label="#Big Data" color="primary" className='xp-block-tag' />
                            <Chip label="#Base de données" color="primary" className='xp-block-tag' />
                            <Chip label="#jQuery" color="secondary" className='xp-block-tag' />
                            <Chip label="#HTML 5" color="secondary" className='xp-block-tag' />
                            <Chip label="#CSS 3" color="secondary" className='xp-block-tag' />
                            <Chip label="#SQL" color="secondary" className='xp-block-tag' />
                        </div>
                        <span className='dot-right'></span>
                    </div>
                </div>
            </div>


        </section>
    )
};

export default Experiences;
