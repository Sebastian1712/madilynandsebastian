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

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                

            </div>

        </section>

        <section class="section-2">

            <div class="imageTwo">

                <img class="actualImageTwo" src={secondPic} width="250" height="300"/>

                <div class="textTwo">
                    <text>Destination: Oregon <br/> Date: Summer 2018 </text>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


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

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            </div>
        </section>

        </div>
    </main>
  );
}

export default Adventure;
