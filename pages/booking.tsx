import React from 'react'
import BookingPage from "@/components/BookingPage";
import Head from 'next/head';

const Booking = () => {
  return (
    <>
     <Head>
        <title>August Car Parking App - Book Now</title>
        <meta
          name="description"
          content="Book your parking spot."
        />
      </Head>
    <BookingPage />
  </>
  )
}

export default Booking