import React, { lazy } from 'react'
import Footer from '../components/Footer'

import './styles.css'

const MainPage = lazy(async () => await import('../components/MainPage'))

const App: React.FC = () => {
  // const axios = require("axios");

  //   const getData = async () => {
  //     const options = {
  //       method: "GET",
  //       url: "https://hotels-com-provider.p.rapidapi.com/v2/hotels/search",
  //       params: {
  //         region_id: "2872",
  //         locale: "en_GB",
  //         checkin_date: "2024-02-01",
  //         sort_order: "REVIEW",
  //         adults_number: "1",
  //         domain: "AE",
  //         checkout_date: "2024-02-27",
  //         children_ages: "4,0,15",
  //         lodging_type: "HOTEL,HOSTEL,APART_HOTEL",
  //         price_min: "10",
  //         star_rating_ids: "3,4,5",
  //         meal_plan: "FREE_BREAKFAST",
  //         page_number: "1",
  //         price_max: "500",
  //         amenities: "WIFI,PARKING",
  //         payment_type: "PAY_LATER,FREE_CANCELLATION",
  //         guest_rating_min: "8",
  //         available_filter: "SHOW_AVAILABLE_ONLY",
  //       },
  //       headers: {
  //         "X-RapidAPI-Key": "646ea7fdfamsh38de8ddce9810bep120b16jsn5316206a5a7b",
  //         "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <>
      <MainPage />
      <Footer />
    </>
  )
}

export default App
