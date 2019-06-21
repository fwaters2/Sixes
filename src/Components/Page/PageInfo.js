import React from 'react'
import Firestore from './../../Utils/Firebase'
const Updates = []
Firestore.firestore().collection("Updates").onSnapshot(snapshot => {
  snapshot.forEach(x => {
    Updates.push(x.data().Text)
  })
})
const PageInfo=
[{
    "title": "Tourney Map",
    "bodyIntro": "Pohang Locations",
    "items": [
      <iframe
        title="Tourney Map"
        src="https://www.google.com/maps/d/embed?mid=1cx2JGJR0CIcW-wtxZ8lm1NXJadgh8v3Z"
        width="95%"
        height="350px"
      />
      
    ]},
    {
      "title":"Updates",
      "bodyIntro": "Most recent updates at the top",
      "items": 
        Updates
      
    },
    {
      "title":"Schedule",
      "bodyIntro": "Most recent updates at the top",
      "items": [
        "First update"
      ]
    },{
      "title":"Transportation",
      "bodyIntro": "Most recent updates at the top",
      "items": [
        "First update"
      ]
    },{
      "title":"Accomodations",
      "bodyIntro": "Most recent updates at the top",
      "items": [
        "First update"
      ]
    },
      {
        "title": "Sponsors",
        "bodyIntro":"List the Sponsors here",
        "items":[
          "First Sponsor"
        ]
      },
      {
      "title":"Contact Info",
      "bodyIntro": "Most recent updates at the top",
      "items": [
        "First update"
      ]},
      {
      "title":"RegIframe",
      "bodyIntro": "Here is where we can put the google form",
      "items":"" //embed googledoc see googlemap
      } 
]
 

  
export default PageInfo