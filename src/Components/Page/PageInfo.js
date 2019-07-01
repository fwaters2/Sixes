import React from "react";
import Preloader from "../Preloader/Preloader";

const PageInfo = [
  {
    title: "Register",
    bodyIntro: "2019 Registration",
    items: [
      <iframe
        title="Registration"
        src="https://docs.google.com/forms/d/e/1FAIpQLScVUXqeqyk-i1gvI2YbP9JaPrLOvJHgU3b61qusTrCqM0dLdA/viewform?embedded=true"
        width="95%"
        height="450px"
      />
    ]
  },
  {
    title: "Information",
    bodyIntro: "Basic Info",
    items: [
      <div>
        <div className="Itemheader">When</div>
        <div>
          <div>Saturday August 25th (11am - 8pm)</div>
          <div>Sunday August 26th (10am - 4pm)</div>
          <div>2018.8.25.토 (오전11시 - 오후8시)</div>
          <div>2018.8.26.일 (오전10시 - 오후4시)</div>
        </div>
      </div>,
      <div>
        <div className="Itemheader">What</div>
        <div>
          <div>
            INCLUDED: Minimum 6 games of Beach Ultimate! Reversible Jerseys &
            Prizes from sponsors Double Happiness and Five Ultimate!
          </div><br/>
          <div>
            Breakfast both days (Bananas, Carbs and SURPRISES!!!) 포함 내역:
            6경기 이상 비치얼티밋 리버서블 저지 & 더블해피니스와 파이브
            얼티밋에서 후원하는 상품들 2일간 아침과 간식(바나나, 탄수화물 식품
            그리고 서프라이즈 간식!!!!!)
          </div><br/>
          <div>
            A night you wish you remembered at Tilt Bar N Grill. A visit to the
            biggest little city and the most magical time you have had in
            months!!!! 틸트 바 앤 그릴에서 당신이 추억하는 밤!!! 가장 크지만
            작은 도시 포항 방문으로 여러분 모두들이 오랫동안 간직할 멋진 추억을
            만들 수 있을 거예요~~
          </div>
        </div>
      </div>,
      <div>
        <div style={{fontWeight:"bold"}}>Where</div>
        <iframe
        title="Tourney Map"
        src="https://www.google.com/maps/d/embed?mid=1cx2JGJR0CIcW-wtxZ8lm1NXJadgh8v3Z"
        width="95%"
        height="350px"
      />
      </div>
    ]
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
    bodyIntro: "Basic Schedule",
    items: [
      <div>
          <div>Saturday August 25th (11am - 8pm)</div>
          <div>Sunday August 26th (10am - 4pm)</div>
          <div>2018.8.25.토 (오전11시 - 오후8시)</div>
          <div>2018.8.26.일 (오전10시 - 오후4시)</div>
        </div>,
      "Exact schedule Undetermined at this time! Check 'Updates' for most recent info"
    ]
  },
  {
    title: "Transportation",
    bodyIntro: "Most recent updates at the top",
    items: [
      <div>
        <div className="Itemheader">Getting to Korea</div>
        <div>
          International Airports: Gimhae (Busan), Incheon (Seoul), Daegu
          International Airport
        </div>
        <a href="https://www.skyscanner.com">Check flights on Skyscanner!</a>
      </div>,
      <div>
        <div className="Itemheader">Getting to Pohang</div>
        <div>Options: High Speed Rail, Bus, or possibly Taxi</div>
        <a href="https://www.rome2rio.com">Check all options here!</a>
      </div>,
      <div>
        <div className="Itemheader">Getting around Pohang</div>
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
        <div className="Itemheader">Lily Motel</div>
        <iframe
          title="Lily Motel"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1356.210361296646!2d129.37744458354456!3d36.0537343422342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e78d82ac1dc4abd!2z7Y-s7ZWt66a066as66qo7YWU!5e0!3m2!1sen!2stw!4v1561348162367!5m2!1sen!2stw"
          width="95%"
          height="350"
          frameBorder="0"
        />
      </div>,
      <div>
        <div className="Itemheader">Pose Motel</div>
        <iframe
          title="Pose Motel"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1356.210361296646!2d129.37744458354456!3d36.0537343422342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb02375461e6e5ced!2z7Y-s7Iqk66qo7YWU!5e0!3m2!1sen!2stw!4v1561348081646!5m2!1sen!2stw"
          width="95%"
          height="350"
          frameBorder="0"
        />
      </div>
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
