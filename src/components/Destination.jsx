import React from 'react'
import "./Destination.css"
import { Destinationdata } from './Destinationdata'
export const Destination = () => {
    return (
        <>
        <div className="destination">
                <h1>Popular Destination</h1>
                <p>The world is a book and those who do not travel read only one page</p>

           <Destinationdata
             class="descntnt"
             image="./assets/5.png"
             heading="New Zealand Tourism"
             brief="New Zealand is situated in the southwestern part of the Pacific Ocean and boasts of awe-inspiring landscapes featuring stunning coastlines and majestic mountains. One of the key attractions of the country is the availability of adventure activities, blended perfectly with museums, art galleries, and heritage sites.
             The nation has a rich Maori cultural heritage, and locals refer to it as Aotearoa. It offers a perfect blend of modern cityscapes and tourist attractions that take visitors back in time to New Zealand's past."
           />
           <Destinationdata
           class="descntnt rev"
           image="./assets/6.png"
            heading=" New York The City that Never Sleeps"
            brief="New York, also referred to as the Big Apple, is a renowned global hub that has impressed people worldwide with its remarkable architecture, art, and cinema. The city is famous for its breathtaking skyscrapers, Broadway productions, and impressive landmarks, making it an ideal destination for travelers from around the world.
            With its bright neon lights, bustling Times Square, towering Wall Street buildings, and lush Central Park, New York City's energy and vibrancy are simply extraordinary. Must-see attractions include world-class museums like MoMA and iconic landmarks such as the Statue of Liberty. Broadway shows, culturally diverse neighborhoods, trendy bars and restaurants, and charming brownstone-lined streets add to the dynamic urban atmosphere."
           />

        </div>   
        </>
    )
}
