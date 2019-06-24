import React from "react";
import Preloader from "../Preloader/Preloader";


const PageInfo = [
  {
    title: "Register",
    bodyIntro: "2019 Registration",
    items: [
      <iframe
        title="Registration"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfdTZQFYWiQmugd51Tdj-5ZVvmMO0CHlT_Avpn2SD5AwbOP3w/viewform?embedded=true"
        width="95%"
        height="450px"
      >
        <Preloader />{" "}
      </iframe>
    ]
  },
  {
    title: "Facebook Feed",
    bodyIntro: "Most Recent News!",
    items: [
      
    <div
      className="fb-page"
      data-href="https://www.facebook.com/pohangultimate/"
      data-tabs="timeline"
      data-width=""
      data-height=""
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/pohangultimate/"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/pohangultimate/">SIX on the BEACH</a>
      </blockquote>
    </div>
    
    ] //embed googledoc see googlemap
  },
  {
    title: "Tourney Map",
    bodyIntro: "Pohang Locations",
    items: [
      <iframe
        title="Tourney Map"
        src="https://www.google.com/maps/d/embed?mid=1cx2JGJR0CIcW-wtxZ8lm1NXJadgh8v3Z"
        width="95%"
        height="350px"
      />
    ]
  },
  {
    title: "Schedule",
    bodyIntro: "Most recent updates at the top",
    items: [
      "Schedule Undetermined at this time! Check 'Updates' for most recent info"
    ]
  },
  {
    title: "Transportation",
    bodyIntro: "Most recent updates at the top",
    items: [
      <div>
        <div>Getting to Korea</div>
        <div>
          International Airports: Gimhae (Busan), Incheon (Seoul), Daegu
          International Airport
        </div>
        <a href="https://www.skyscanner.com">Check flights on Skyscanner!</a>
      </div>,
      <div>
        <div>Getting to Pohang</div>
        <div>Options: High Speed Rail, Bus, or possibly Taxi</div>
        <a href="https://www.rome2rio.com">Check all options here!</a>
      </div>,
      <div>
        <div>Getting around Pohang</div>
        <div>
          You will want to Taxi from the bus station, (no Ubers in Pohang). Show
          them your destination on your phone or tell them "Yong-Il Day Bee-Chi"
          if you're working on your Korean :)
          <br />
          Fields, Hotels, and the party venue are VERY close. So you will be
          able to travel on foot to get from place to place.
        </div>
      </div>
    ]
  },
  {
    title: "Accomodations",
    bodyIntro: "Hotels Near the field",
    items: [
      <div>
        <div>Lily Motel</div>
        <iframe
          title="Lily Motel"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1356.210361296646!2d129.37744458354456!3d36.0537343422342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e78d82ac1dc4abd!2z7Y-s7ZWt66a066as66qo7YWU!5e0!3m2!1sen!2stw!4v1561348162367!5m2!1sen!2stw"
          width="95%"
          height="350"
          frameborder="0"
        />
      </div>,
      <div>
        <div>Pose Motel</div>
        <iframe
          title="Pose Motel"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1356.210361296646!2d129.37744458354456!3d36.0537343422342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb02375461e6e5ced!2z7Y-s7Iqk66qo7YWU!5e0!3m2!1sen!2stw!4v1561348081646!5m2!1sen!2stw"
          width="95%"
          height="350"
          frameborder="0"
        />
      </div>
    ]
  },
  {
    title: "Sponsors",
    bodyIntro: "2019 Six on the Beach Sponsors",
    items: [
      "BULA",
      "Tilt",
      "Pohang City",
      "Double Happiness",
      "Cartographic Productions",
      "Five Ultimate",
      "DiscRaft",
      "ROKU",
      "Busan Ultimate"
    ]
  },
  {
    title: "Contact Info",
    bodyIntro: "Sixes is being put together by the following",
    items: [
      "Tourney Director: Oliver ",
      <a href="https://www.facebook.com/ovotteler">Find Him on Facebook</a>
    ]
  }
];

export default PageInfo;
