import React from 'react';
import './App.css';
// import Background from './images/IMG_0438.JPG';
// import SecondHomePic from './images/IMG_0483.jpg';
import './Home.css';
import './main.scss';

// const firstPicStyle = {
//     backgroundImage: `url( ${Background})`,
//     height: '800px',
//     backgroundSize: 'cover',
//     margin: 0
// }

// const secondPicStyle = {
//     backgroundImage: `url( ${SecondHomePic} )`,
//     height: '800px',
//     backgroundSize: 'cover',
//     margin: 0
// }

const purposeParagraph = 
<p1>
     A collection of breathtaking moments compiled into a
     minimal website where we can look back and reminisce. <br /><br />
     Almost… like a photo album. 
</p1>

function Home() {
  return (
    <main>

        <div class="mainpage">
            
            <h1 class="h1"> Stylin' since 2015
            <p>* Madilyn and Sebastian *</p>
            </h1>

            <h2> 
            
            <p class="mission">
                {purposeParagraph}
            </p>

            </h2>

        </div>

    </main>
  );
}

export default Home;
