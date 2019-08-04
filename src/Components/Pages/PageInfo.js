import React from "react";
import '../../Assets/Images/Sponsors/Tilt.png'
const tiltLogo = require('../../Assets/Images/Sponsors/Tilt.png')

const PageInfo = [
  {
    title: "REGISTER",
    bodyIntro: "2019 Registration",
    items: [
      <div>
        <div className="Itemheader">Registration is currently FULL</div>
        <div>
          <div>
            Please{" "}
            <a href="https://www.facebook.com/pohangultimate/">
              <strong>CONTACT US</strong>
            </a>{" "}
            regarding late registration
          </div>
        </div>
      </div>
    ]
  },
  {
    title: "INFO",
    bodyIntro: "Basic Info",
    items: [
      <div>
        <div className="Itemheader">When</div>
        <div>
        <div>Saturday August 24th (11am - 8pm)</div>
        <div>Sunday August 25th (10am - 4:30pm)</div>
        
        </div>
      </div>,
      <div>
        <div className="Itemheader">What</div>
        <div>
          <div>
          Six on the Beach is a mixed gendered beach ultimate hat tournament in Pohang, South Korea. The event has been held on Bukbu Beach (Yeongildae Beach) since 2013. The event is used to celebrate the ultimate community in Korea and the city of Pohang. The support of local businesses like Tilt Bar N Grill have helped to make this a favorite tournament for many in Korea.
          </div>
        </div>
      </div>,
      <div>
        <div style={{ fontWeight: "bold" }}>Where</div>
        <iframe
          title="Tourney Map"
          src="https://www.google.com/maps/d/embed?mid=1hqbxu1z1XiERMWlSSxyTC6TSH4w"
          width="95%"
          height="350px"
        />
      </div>
    ]
  },
  {
    title: "TOURNEY MAP",
    bodyIntro: "Pohang Locations",
    items: [
      <iframe
        title="Tourney Map"
        src="https://www.google.com/maps/d/embed?mid=1hqbxu1z1XiERMWlSSxyTC6TSH4w"
        width="95%"
        height="350px"
      />
    ]
  },
  {
    title: "SCHEDULE",
    bodyIntro: "Basic Schedule",
    items: [
      <div>
        <div>Saturday August 24th (11am - 8pm)</div>
        <div>Sunday August 25th (10am - 4:30pm)</div>
      </div>,
      "Exact schedule Undetermined at this time! Check back later!"
    ]
  },
  {
    title: "TRANSPORTATION",
    bodyIntro: "Most recent updates at the top",
    items: [
      <div>
        <div className="Itemheader">Getting to Korea</div>
        <div>
        International Airports: Gimhae (Busan), Incheon (Seoul), Daegu International Airport or even POHANG's airport. Check flights on Skyscanner! 
        </div>
        
      </div>,
      <div>
        <div className="Itemheader">Getting to Pohang</div>
        <div>Options: KTX, Bus, Taxi, Drive, Bike, Swim, Walk, or SCOOT!</div>
       
      </div>,
      <div>
        <div className="Itemheader">Getting around Pohang</div>
        <div>
        From the station (KTX or Bus) a taxi is the quickest way to get to the beach. Also won’t be too expensive, especially with a few friends. Say: 영일대해수욕장 (Yong-il Day Bee-Chi). Another option that would cost less, but take more time, is the city BUS (Blue Bus: 101, 105, 130, 131, 200, 700 Green Bus: 176, 600).
        </div>
      </div>
    ]
  },
  {
    title: "ACCOMMODATIONS",
    bodyIntro: "Hotels Near the field",
    items: [
      <div>
        <div className="Itemheader">Lily Motel</div>
        <div>We are proud to continue our relationship with Lily Guesthouse and Lily Motel as tournament sponsors! They are located directly across the street from tournament central and our playing fields, very convenient! </div>
        <div>It’s a short beautiful walk down the beach to the party location TILT. 
Prices range depending on room size for the hotel (# of people) and the guesthouse has various sleeping arrangements. 
Must speak Korean to reserve, message if we could be of help. <a href="http://www.lilyguesthouse.co.kr/">(http://www.lilyguesthouse.co.kr/)</a> </div>
        <iframe
          title="Lily Motel"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1356.210361296646!2d129.37744458354456!3d36.0537343422342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e78d82ac1dc4abd!2z7Y-s7ZWt66a066as66qo7YWU!5e0!3m2!1sen!2stw!4v1561348162367!5m2!1sen!2stw"
          width="95%"
          height="350"
          frameBorder="0"
        />
      </div>,
      <div>
        <div className="Itemheader">Other Hotels</div>
        <div>Additionally there are countless hotels along the beach and in the neighborhood surrounding it. In Korea we don’t usually book accommodation in advance, but walk into motels checking prices after playing for the day. The rooms along the beach range from (70,000 - 120,000) for a night, and can get lower as you go away from the beach, with size/quality being the largest factors. You can fit numerous people into a room, people will be looking for roommates. If you’re unsure about hotels, message us with any concerns.</div>
      </div>
    ]
  },
  {
    title: "PARTY",
    bodyIntro:"",
    items: [
      <img src={tiltLogo} width="100%" alt="tilt logo" />,
      <div>Checkout their <a href="https://www.facebook.com/tiltbarngrill/">Facebook Page</a> </div>
    ]
  },
  {
    title: "CONTACT INFO",
    bodyIntro: "Sixes is being put together by the following",
    items: [
      "Contact us via our fb page!",
      <a href="https://www.facebook.com/pohangultimate/">
        Message us on Facebook
      </a>
    ]
  }
];

export default PageInfo;
