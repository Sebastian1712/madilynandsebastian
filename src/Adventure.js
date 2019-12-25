import React from 'react';
import './App.css';
import './Adventure.css';
import firstPic from './images/IMG_0895.JPG';
import secondPic from './images/IMG_1487.JPG';
import thirdPic from './images/IMG_4997 2.JPG';
import './ImageOne.css';
import './ImageTwo.css';
import './ImageThree.css';
import './mainTwo.scss';


// Color of background
document.body.style = 'background: #B4A67F;';

function Adventure() {
  return (

    <main>

        <div>
            <div>
                <header>Adventures</header>
            </div>
        
         {/* this section will have the first image and the first paragraph  */}
        <section class="section-1">

            <div class="imageOne">

                <img class="actualImageOne" src={firstPic} width="500" height="300"/> 

                <div class="textOne">
                    <text>Destination: Washington DC <br/> Date: Summer 2018</text>
                </div>

                <p>My first ever summer alone was filled with  so much alone time that one of the only things to do was think. As soon as you arrived in Washington DC I had my best friend to talk about everything and everything. You arriving to DC made it feel more like home and it opened up my eyes to the adventures to come. </p>
                

            </div>

        </section>

        <section class="section-2">

            <div class="imageTwo">

                <img class="actualImageTwo" src={secondPic} width="250" height="300"/>

                <div class="textTwo">
                    <text>Destination: Oregon <br/> Date: Summer 2018 </text>
                </div>

                <p class="parTwo">Never hungry. Never not smiling. This is how I would describe our trip to Portland. As soon as we arrived we had some delicious Thai food near our airbnb and from there on we knew we were in the right city to be foodies. After coming back from my internship I was blessed with a wave of joy during this trip. I thought we truly learned more about each other during this trip than any other time in our relationship. From walking through sketchy neighborhoods, to me being a time freak regarding the airport. P.S. smelling flowers with you was one of the most serene and joyous moments of my life.</p>


                {/* <div class="pTwo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div> */}

            </div>

        </section>

        <section class="section-3">
            
            <div class="imageThree">

                <img class="actualImageThree" src={thirdPic} width="250" height="300"/>

                <div class="textThree">
                    <text> Destination: San Francisco <br/> Date: Summer 2019 </text>
                </div>

                <p class="parThree">“Tumbling…” (Inside joke) hehe. This trip was filled with pure unknowns. From the bus breaking down to somehow experiencing the moon slowly rise over Half Dome. I picked this picture because it has some sort of relaxing and peaceful vibe to it and it also has two different colors, black and white. Similar to our trip, where we experienced the beauty and immensity of nature, but also the craziness of San Francisco traffic and hippie professors.</p>
            
            </div>
        </section>

        </div>
    </main>
  );
}

export default Adventure;
