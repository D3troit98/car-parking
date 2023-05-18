import React from "react";
import FeatureCard from "./FeatureCard";
import card1 from "../assets/R.jpg";
import card2 from "../assets/Rectangle 10.png";
import card3 from "../assets/Rectangle 9.png";

const DetailCardList = () => {
  return (
    <div className="py-10 bg-black flex justify-center items-start ">
      <FeatureCard
        cardtitle="Reserved Parking"
        cardDescription="Secure your spot in advance and avoid parking hassles."
        cardImage={card1}
      />
      <FeatureCard
        cardtitle="Convenient Locations"
        cardDescription="Find parking facilities near popular destinations."
        cardImage={card2}
      />
      <FeatureCard
        cardtitle="Flexible Booking"
        cardDescription="Easily adjust your booking and extend your parking time."
        cardImage={card3}
      />
    </div>
  );
};

export default DetailCardList;
