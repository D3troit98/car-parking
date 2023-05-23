import React from "react";
import FeatureCard from "./FeatureCard";
import card1 from "../assets/R.jpg";
import card2 from "../assets/Rectangle 10.png";
import card3 from "../assets/Rectangle 9.png";
import card4 from "../assets/Rectangle 11.jpg";

const DetailCardList = () => {
  return (
    <div className="py-10 bg-black px-6 md:px-12">
      <div className="max-w-6xl flex justify-center items-center flex-col mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            cardtitle="Reserved Parking"
            cardDescription="Secure your spot in advance and avoid parking hassles. Book a parking slot in just a few clicks and guarantee your space. Enjoy the convenience of hassle-free parking with easy access to your reserved spot throughout your stay."
            cardImage={card1}
          />
          <FeatureCard
            cardtitle="Convenient Locations"
            cardDescription="Find parking facilities near popular destinations. Our app provides a wide range of parking options in prime locations for your convenience. Never worry about finding a parking spot again, as we offer multiple parking choices within walking distance of major attractions."
            cardImage={card2}
          />
          <FeatureCard
            cardtitle="Flexible Booking"
            cardDescription="Easily adjust your booking and extend your parking time. Whether you need to arrive earlier or stay longer, you can easily modify your reservation through our user-friendly interface. Enjoy the flexibility and control over your parking schedule, ensuring a stress-free experience."
            cardImage={card3}
          />
          <FeatureCard
            cardtitle="24/7 Support"
            cardDescription="Get assistance anytime, day or night. Our dedicated support team is available 24/7 to help you with any inquiries or issues you may have. Feel confident with our reliable customer support, knowing that we are here to assist you throughout your parking journey."
            cardImage={card4}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailCardList;
