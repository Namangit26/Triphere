import React from 'react'
import "./Tripstyle.css"
import { Tripdata } from './Tripdata'

export const Trip = () => {
  return (
    <>
    <div className="Trip">
        <h2>Here are the Trips we Provided</h2>
        <p className="cntrr">Unforgettable Adventures Await: Discover Your Next Getaway Today</p>
        <div className="rowflex">

            <Tripdata
            image="./assets/7.png"
            hed="Bali Indonesia"
            para="Bali, Indonesia’s most famous island, is located to the west of Java in the Lesser Sunda Islands. It is world-renowned for its scenic rice terraces, fragrant cuisine, stunning beaches and a galore of culture and tradition. With its elaborate temples, endless coastline, some of the world's best coral reefs, waterfalls and retreats."
            />
            <Tripdata
            image="./assets/8.png"
            hed="Barcelona Spain"
            para="Barcelona is the second largest city in the country and serves as the capital and largest city of Catalonia. It is located on the Mediterranean coast and boasts a stunning backdrop of towering mountains. The city is known for its numerous attractions, including galleries, museums, medieval monuments, and more. "
            />
            <Tripdata
            image="./assets/9.png"
            hed="Bangkok"
            para="Bangkok, the capital city of Thailand, is a bustling metropolis that never sleeps, where cultures and faiths intermingle to create a unique blend of contemporary and traditional experiences. The city's skyline is adorned with towering skyscrapers juxtaposed against ancient temples and monasteries. ."
            />
            <Tripdata
            image="./assets/10.png"
            hed="Oia, Santorini "
            para="Oia is one destination that offers spectacular views during sunset. During sunset, the white-washed buildings glow in yellow, orange and pink hues, giving a picturesque look to the Oia. Oia Castle and the Blue domes of Oia are the two most popular spots to enjoy the sunset in Oia. You can hear the church bells from the Blue domes of Oia during sunset, which gives a surreal experience."
            />
            <Tripdata
            image="./assets/11.png"
            hed="Santorini "
            para="Santorini Is one of the most spectacular islands in Greece. It is a part of the Cyclades islands and sits in the Aegean Sea, halfway between Athens and Crete. The crescent-shaped island is famous for its iconic white houses, blue dome churches and windmills. It is the most photographed island in the world. The highlights of Santorini are its hikes, beaches, sunset views, hot springs and clifftop wineries."
            />
            <Tripdata
            image="./assets/12.png"
            hed="Barcelona "
            para="Located in north-eastern Spain, Barcelona is the country's second largest city. It is also the capital and the largest city of Catalonia. It is situated along the Mediterranean coast and its towering mountains bless the city with perfect backdrop. The city is filled with galleries, museums, medieval monuments and many other special attractions. It is also a major commercial and industrial centre. ."
            />
        </div>


    </div>

    </>
  )
}
