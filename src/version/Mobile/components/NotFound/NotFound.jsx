import React from 'react'
import Lottie from 'react-lottie';

function NotFound() {
    const defaultOptions = {
        renderer: 'canvas',
        loop: true,
        path: 'https://tlgrm.ru/_/stickers/b55/2f0/b552f01f-f968-466a-b17a-fcadece0287c/9.json'
      };
    return (
        <Lottie  options={defaultOptions}/>
    )
}

export default NotFound
