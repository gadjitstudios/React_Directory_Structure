import React from 'react';
import './index.scss';

export default function AppImageGallery(props){

    return(
        <div id='row'>
            {props.images && props.images.map((image, index) =>(
                <img 
                    src={image.src} 
                    alt={image.name} 
                    key={`${image.name}-project${index}`}
                />
            ))}
        </div>
    )
}