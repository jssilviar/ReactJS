import React from 'react';
import Pacman from '../loading.svg';

export default function Loading() {
    return (
        <div className='center'>
            <img src={Pacman} alt='Pacman'/>
            <h3>Cargando...</h3>
        </div>
    )
}
