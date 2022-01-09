import React, { useEffect } from 'react';
import '../../app/App.css';
import './Home.css';
import '../../responsive/main.scss';

const purposeParagraph = 
<p1>
     A collection of breathtaking moments compiled into a
     minimal website where we can look back and reminisce. <br /><br />
     Almost… like a photo album. 
</p1>

function Home() {

  useEffect(() => {
    document.title = "Madilyn & Sebastian";
  }, [])
  
  return (
    <main>
        <div class="mainpage">
            <h1 class="h1"> Stylin' since 2015
            <p>👩🏻‍⚕️ Madilyn and Sebastian 🧑🏻‍💻</p>
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
