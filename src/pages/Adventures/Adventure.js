import React from 'react';
import '../../app/App.css';
import './Adventure.css';
import firstPic from '../../images/IMG_0895.JPG';
import secondPic from '../../images/IMG_1487.JPG';
import thirdPic from '../../images/IMG_4997 2.JPG';
import fourthPic from '../../images/IMG_8061.JPG';
import fifthPic from '../../images/IMG_2426.JPG';
import '../../images/style/ImageOne.css';
import '../../images/style/ImageTwo.css';
import '../../images/style/ImageThree.css';
import '../../responsive/mainTwo.scss';
import LeftCard from '../../components/LeftCard.js'
import VerticalCard from '../../components/VerticalCard.js'


// Color of background
document.body.style = 'background: #B4A67F;';

let cardOne = {
    destination: 'Washington DC',
    date: 'Summer 2018',
    summary: 'My first ever summer alone was filled with so much alone time that one of the only things to do was think. As soon as you arrived in Washington DC I had my best friend to talk about everything and everything. You arriving to DC made it feel more like home and it opened up my eyes to the adventures to come.',
    image: firstPic,
    width: '500',
    height: '300'
}

let cardTwo = {
    destination: 'Oregon',
    date: 'Summer 2018',
    summary: 'Never hungry. Never not smiling. This is how I would describe our trip to Portland. As soon as we arrived we had some delicious Thai food near our airbnb and from there on we knew we were in the right city to be foodies. After coming back from my internship I was blessed with a wave of joy during this trip. I thought we truly learned more about each other during this trip than any other time in our relationship. From walking through sketchy neighborhoods, to me being a time freak regarding the airport. P.S. smelling flowers with you was one of the most serene and joyous moments of my life.',
    image: secondPic,
    width: '250',
    height: '300'
}

let cardThree = {
    destination: 'San Francisco',
    date: 'Summer 2019',
    summary: '“Tumbling…” (Inside joke) hehe. This trip was filled with pure unknowns. From the bus breaking down to somehow experiencing the moon slowly rise over Half Dome. I picked this picture because it has some sort of relaxing and peaceful vibe to it and it also has two different colors, black and white. Similar to our trip, where we experienced the beauty and immensity of nature, but also the craziness of San Francisco traffic and hippie professors.',
    image: thirdPic,
    width: '250',
    height: '300'
}

let cardFour = {
    destination: 'The Keys',
    date: 'Summer 2020',
    summary: '“Tumbling…” (Inside joke) hehe. This trip was filled with pure unknowns. From the bus breaking down to somehow experiencing the moon slowly rise over Half Dome. I picked this picture because it has some sort of relaxing and peaceful vibe to it and it also has two different colors, black and white. Similar to our trip, where we experienced the beauty and immensity of nature, but also the craziness of San Francisco traffic and hippie professors.',
    image: fourthPic,
    width: '250',
    height: '300'
}

let cardFive = {
    destination: 'Utah',
    date: 'Winter 2020',
    summary: '“Tumbling…” (Inside joke) hehe. This trip was filled with pure unknowns. From the bus breaking down to somehow experiencing the moon slowly rise over Half Dome. I picked this picture because it has some sort of relaxing and peaceful vibe to it and it also has two different colors, black and white. Similar to our trip, where we experienced the beauty and immensity of nature, but also the craziness of San Francisco traffic and hippie professors.',
    image: fifthPic,
    width: '500',
    height: '300'
}

function Adventure() {
  return (
    <main>
        <div>
            <div>
                <header>Adventures</header>
            </div>

        <LeftCard 
        destination={cardOne.destination}
        date={cardOne.date}
        summary={cardOne.summary}
        image={cardOne.image}
        width={cardOne.width}
        height={cardOne.height}>
        </LeftCard>

        <VerticalCard
        destination={cardTwo.destination}
        date={cardTwo.date}
        summary={cardTwo.summary}
        image={cardTwo.image}
        width={cardTwo.width}
        height={cardTwo.height}>
        </VerticalCard>

        <VerticalCard 
        destination={cardThree.destination}
        date={cardThree.date}
        summary={cardThree.summary}
        image={cardThree.image}
        width={cardThree.width}
        height={cardThree.height}>
        </VerticalCard>

        <VerticalCard 
        destination={cardFour.destination}
        date={cardFour.date}
        summary={cardFour.summary}
        image={cardFour.image}
        width={cardFour.width}
        height={cardFour.height}>
        </VerticalCard>

        <LeftCard 
        destination={cardFive.destination}
        date={cardFive.date}
        summary={cardFive.summary}
        image={cardFive.image}
        width={cardFive.width}
        height={cardFive.height}>
        </LeftCard>

        </div>
    </main>
  );
}

export default Adventure;
