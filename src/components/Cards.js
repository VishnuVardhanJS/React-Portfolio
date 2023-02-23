import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Smile from "../assets/Images/Route.jpg"


const Repos = [{
    name: 'Emo Analysis',
    description: 'sentiment analysis chatbot which gives out sentiments scores according to the chats',
    image: require('../assets/Images/Smile.jpg'),
    link: 'https://github.com/VishnuVardhanJS/Emo_Analysis'
},
{
    name: 'Kollab',
    description: 'App for collaborating with people who has ideas or can post ideads which can include other people',
    image: require('../assets/Images/Kollab.jpg'),
    link: 'https://github.com/VishnuVardhanJS/Kollab'
},
{
    name: 'Chariot',
    description: 'React web app for finding the optimized route using Machine Learning from the given locations',
    image: require('../assets/Images/Route.jpg'),
    link: 'https://github.com/VishnuVardhanJS/Optimizing-Delivery-Routes'
},
{
    name: 'Jett SnapChat Filter',
    description: 'Simple Snapchat filter for Jett from Valorant using SnapChat\'s',
    image: require('../assets/Images/Jett.jpg'),
    link: 'https://github.com/VishnuVardhanJS/Jett-SnapChat-Filter'
},
]

export default function Cards() {
    function submitClick(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className='Cards'>
            {Repos.map((u, i) => {
                return (
                    <Card sx={{ maxWidth: 220, backgroundColor: "#000", paddingLeft: 10}} onClick={() => { submitClick(u.link) }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image= {u.image}
                                alt="Oops! Image not found"
                                color="grey"
                                opacity="100"
                                zIndex="100"
                            />
                            <CardContent style={{backgroundColor: "#121212"}}>
                                <Typography gutterBottom variant="h5" component="div" color="#fff">
                                    {u.name}
                                </Typography>
                                <Typography variant="body2" color="#fff">
                                    {u.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                )
            })}
        </div>

    );
}
