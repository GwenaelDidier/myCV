import { PieChart } from '@mui/x-charts';
import mySkills from './mySkills.json';
import { Typography } from '@mui/material';
import './Competences.css';

function Competences() {

    return (
        <section id="skills" style={{ color: '#eee', display: 'flex', flexDirection: 'column' }}>
            <h1>
                <Typography gutterBottom variant="h3" component="div" textAlign="center">
                    Mes Compétences
                </Typography>
            </h1>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <div className="skill-part">
                    <Typography gutterBottom variant="h4" component="div" textAlign="center">
                        Langages et Frameworks
                    </Typography>
                    <PieChart
                        series={[
                            {
                                data: mySkills.languages,
                                innerRadius: 80,
                                outerRadius: 200,
                                arcLabel: (item) => `${item.name}`
                            },
                        ]}
                        height={400}
                        legend={{ hidden: true }}
                    />
                </div>

                <div className="skill-part">
                    <Typography gutterBottom variant="h4" component="div" textAlign="center">
                        Concepts et Méthodologies
                    </Typography>
                    <PieChart
                        series={[
                            {
                                data: mySkills.concepts,
                                innerRadius: 80,
                                outerRadius: 200,
                                arcLabel: (item) => `${item.name}`
                            },
                        ]}
                        height={400}
                        legend={{ hidden: true }}
                    />
                </div>

            </div>


        </section>
    )
};

export default Competences;