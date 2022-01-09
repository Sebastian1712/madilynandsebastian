import React, { useEffect } from 'react';
import '../../app/App.css';
import './Adventure.css';
import firstPic from '../../images/IMG_0895.jpeg';
import secondPic from '../../images/IMG_1487.jpeg';
import thirdPic from '../../images/IMG_4997 2.JPG';
import fourthPic from '../../images/IMG_8061.jpeg';
import fifthPic from '../../images/IMG_2426.JPG';
import sixthPic from '../../images/IMG_2955-min.jpg';
import seventhPic from '../../images/new_img-min.JPEG';
import eightPic from '../../images/013804010002.jpg'
import ninthPic from '../../images/IMG_2711.jpg';
import tenthPic from '../../images/newYears2021.jpg';

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
    summary: 'After a few crazy months of 2020 due to the pandemic, a much needed Maschhoff family trip was needed. A trip filled with joy, laughter, and a family of manatees swimming beside Madilyn and I as I (Sebastian) tried my hardest to not fall from that paddle board. 🌊',
    image: fourthPic,
    width: '250',
    height: '300'
}

let cardFive = {
    destination: 'Park City, Utah',
    date: 'Winter 2020',
    summary: 'The first winter in Utah... From skiing, to snow tubing, to lots of nice warm coffees in the morning. This trip was really just filled with Madilyn making fun of me for never having the correct clothes for winter. Especially those white converse... ❄️ 🥶',
    image: fifthPic,
    width: '500',
    height: '300'
}

let cardSix = {
    destination: 'Zion National Park',
    date: 'Summer 2021',
    summary: 'Switch back after switch back... A trip to Zion that was made up of crazy squirrels, cool adventurous folks, and a nasty looking Angels Landing. Madilyn and I first encountered the breathe taking views of Utah National Parks as we starred at the sun rising over the edge of a red rock hitting the one lonely tree just right... 🌳',
    image: sixthPic,
    width: '500',
    height: '300'
}

let cardSeven = {
    destination: 'Arches National Park',
    date: 'Summer 2021',
    summary: 'Our favorite arch... Sand Dune. A complete 180 from Zion, Arches was filled with serenity, stillness, and gorgeous views. During this road trip the thought of many more adventures, and a life ahead with my best friend became more and more clear...',
    image: seventhPic,
    width: '250',
    height: '300'
}

let cardEight = {
    destination: '❤️',
    date: 'Summer 2021',
    summary: 'This woman right here deserves it all. Madilyn Maschhoff, during the summer of 2021, you have given me the best days of my life. Seeing you every single day was like a dream come true. You deserve everything in this world, you are bold, strong, driven, smart, beautiful, and most of all the funniest person I know. You are the reason I am who I am today. Thank you for being my best friend and my biggest supporter. Here is to an infinite life together. 🥂',
    image: eightPic,
    width: '195',
    height: '300'
}

let cardNine = {
    destination: 'Lake Tahoe, California',
    date: 'Summer 2021',
    summary: 'First family trip together! This weekend trip was filled with laughter, wholesome family moments, and delicious food. We (by we I mean "I") conquered my fear of parasailing. I believe we also realized how blessed we are to have two beautiful, caring families that will be in this love journey with us. ❤️',
    image: ninthPic,
    width: '250',
    height: '300'
}

let cardTen = {
    destination: 'Salt Lake City, Utah',
    date: 'Winter 2021',
    summary: 'Recharged & Refreshed. Those would be the two words that describe how we felt at the end of 2021. Spending time with my family in their new home state was not only a bonding experience between all (especially code names), but it was also a great cherry on top in our relationship. We were able to spend the days in tranquility enjoying the gaze of each other and occasionally being bit by the new cat Eevee. Overall we grew closer together once again as we hit the 6.5 year mark with each other. I could not have asked for a better life partner. 💞',
    image: tenthPic,
    width: '250',
    height: '300'
}

function Adventure() {

    useEffect(() => {
        document.title = "Adventures"
    }, [])
    
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

        <LeftCard 
        destination={cardSix.destination}
        date={cardSix.date}
        summary={cardSix.summary}
        image={cardSix.image}
        width={cardSix.width}
        height={cardSix.height}>
        </LeftCard>

        <VerticalCard 
        destination={cardSeven.destination}
        date={cardSeven.date}
        summary={cardSeven.summary}
        image={cardSeven.image}
        width={cardSeven.width}
        height={cardSeven.height}>
        </VerticalCard>

        <VerticalCard 
        destination={cardEight.destination}
        date={cardEight.date}
        summary={cardEight.summary}
        image={cardEight.image}
        width={cardEight.width}
        height={cardEight.height}>
        </VerticalCard>

        <LeftCard 
        destination={cardNine.destination}
        date={cardNine.date}
        summary={cardNine.summary}
        image={cardNine.image}
        width={cardNine.width}
        height={cardNine.height}>
        </LeftCard>

        <VerticalCard 
        destination={cardTen.destination}
        date={cardTen.date}
        summary={cardTen.summary}
        image={cardTen.image}
        width={cardTen.width}
        height={cardTen.height}>
        </VerticalCard>

        </div>
    </main>
  );
}

export default Adventure;
