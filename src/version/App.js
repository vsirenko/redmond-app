
import '../utils/App.scss';
import React from 'react'
import Media from 'react-media';
import Desktop from './Desktop/Desktop';



import Mobile from './Mobile/Mobile'



export default function App() {

    return (


            <>
                <Media queries={{
                    mobile: "(max-width: 767px)",
                    desktop: "(min-width: 768px)",
                }}>
                    {matches => (
                        <>
                            {matches.mobile && <Mobile/>}
                            {matches.desktop && <Desktop />}
                        </>
                    )}
                </Media>
             </>



    );
}


