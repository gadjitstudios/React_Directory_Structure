import React, {useEffect, useState} from 'react';
import Data from './index.data';
import AppImageGallery from '../../components/image_gallery';
import './index.scss';

export default function AppAbout(){
    const [weather, setWeather] = useState();
    useEffect(() =>{
        Data.getWeather().then(w => setWeather(w));
    });
    return(
        <section id="about">
            <h1 className="title">About Me</h1>
            <p>
                Hello World!!! My name is {Data.getName()}.
            </p>
            <h3>NY Weather</h3>
            <p>
                {weather? JSON.stringify(weather) : ""}
            </p>
            <AppImageGallery images={Data.getImages()}/>
        </section>
    )
}