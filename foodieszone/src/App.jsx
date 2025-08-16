import React from "react";
import ReactDOM from "react-dom/client"; // Notice the /client for React 18+
import "./index.css";

/**
 * Here is the basic structure of our food ordering app named as FooodieZone
 *
 * Header
 *  Logo
 *  Nav Items
 * Body
 *  Search
 *  Restaurant Container
 *      Restaurant card
 * Footer
 *  Copyrights
 *  Links
 *  Address
 *  Contact
 *
 */

// This is a way to pass inline CSS or even there is another way to pass this
// const styleCard ={
//     backgroundColor : "#f0f0f0"
// }

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="./src/assets/foodiezone-logo.jfif" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // the below code usses destructuring and above code is not utilizing it
  // the destructuring code is similar to below line

  const { resData } = props;

  // const RestaurantCard = ({resName, cuisine}) =>{

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  const { deliveryTime } = resData?.sla; // this is optional chaining, this is just to show case of how its done, but actually this is not right way beacuse it is giving no-unsafe-optional-chaning

  return (
    // <div className= "res-card" style={styleCard} > // this is how we pass CSS
    // below is how we can pass directly without saving it into an object

    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>{" "}
      {/* <h3>{props.resName}</h3> if we dont use destructuring then this is how we utilize props*/}
      <h4>{cuisines.join(", ")}</h4>{" "}
      {/* join will add , in between the cuisine*/}
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    id: "411450",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0f971744-7722-4297-9cba-2969c5f3279c_411450.JPG",
    locality: "Paharganj",
    areaName: "Paharganj",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "2.8K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 05:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/big_rx.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹999",
      discountTag: "FLAT DEAL",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.6",
        ratingCount: "2.0K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "397778",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/6dec3b9e-c8f4-4e78-9514-3a3bf9065535_397778.JPG",
    locality: "Krishna Nagar",
    areaName: "Krishna Nagar",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "4.4K+",
    sla: {
      deliveryTime: 42,
      lastMileTravel: 9.6,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "9.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 05:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹79",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "253722",
    name: "McDonald's",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/580fb9c3-804c-402f-9370-c826963951b6_253722.JPG",
    locality: "Rajendra Place",
    areaName: "Rajendra Place",
    costForTwo: "₹400 for two",
    cuisines: ["American"],
    avgRating: 4.5,
    parentId: "630",
    avgRatingString: "4.5",
    totalRatingsString: "25K+",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 05:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹39",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "3.3K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "752411",
    name: "Olio - The Wood Fired Pizzeria",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/641ebeef-74f8-4ed4-9579-1b7a6a894d14_752411.JPG",
    locality: "Payara Lal Road",
    areaName: "Karol Bagh",
    costForTwo: "₹300 for two",
    cuisines: [
      "Pizzas",
      "Pastas",
      "Italian",
      "Fast Food",
      "Snacks",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.3,
    parentId: "11633",
    avgRatingString: "4.3",
    totalRatingsString: "3.1K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 4.9,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "4.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 05:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "666909",
    name: "Oh!Hunger",
    cloudinaryImageId: "d270f97263e5e0a99cb99137e4a58c8b",
    locality: "Chuna Mandi",
    areaName: "Paharganj",
    costForTwo: "₹250 for two",
    cuisines: ["Fast Food", "Snacks", "Burgers"],
    avgRating: 4.3,
    parentId: "400023",
    avgRatingString: "4.3",
    totalRatingsString: "2.5K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.3,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-23 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "231167",
    name: "BIKANERVALA ANGAN",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/fed81d2d-b400-4a7c-8ab3-e8fe327547c8_231167.jpg",
    locality: "Karol Bagh",
    areaName: "Karol Bagh",
    costForTwo: "₹600 for two",
    cuisines: ["Bakery", "Chinese", "North Indian", "Street Food", "Sweets"],
    avgRating: 4.5,
    veg: true,
    parentId: "546675",
    avgRatingString: "4.5",
    totalRatingsString: "12K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 4.6,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 07:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.2",
        ratingCount: "4.5K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "25169",
    name: "Subway",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/33ea9b71-9535-472c-a260-d02060354feb_25169.jpg",
    locality: "Karol Bagh , Old Rajinder Nagar, Connaught place",
    areaName: "Old Rajinder Nagar , Connaught place, Karol Bagh",
    costForTwo: "₹350 for two",
    cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
    avgRating: 4.4,
    parentId: "2",
    avgRatingString: "4.4",
    totalRatingsString: "54K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 4.9,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 05:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹119",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "626148",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "ezjogwtzx40ko0wlat5l",
    locality: "Salt Lake",
    areaName: "Karol Bagh",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.2,
    parentId: "4961",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 4.7,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "4.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-23 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹499",
      discountTag: "FLAT DEAL",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "3.7",
        ratingCount: "770",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "189058",
    name: "Burger Singh(Big Punjabi Burgers)",
    cloudinaryImageId: "972a37599772cdc7df93a0855ad87591",
    locality: "Suraj Parkash Marg",
    areaName: "Patel Nagar",
    costForTwo: "₹300 for two",
    cuisines: ["American", "Fast Food", "Snacks"],
    avgRating: 4.3,
    parentId: "375065",
    avgRatingString: "4.3",
    totalRatingsString: "14K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 7,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "7.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 06:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹47",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "590928",
    name: "Nomad Pizza - Traveller Series",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/5/4ae4c30f-08a5-490d-810f-db3e77e54450_590928.jpg",
    locality: "Jain Mandir Marg",
    areaName: "Connaught Place",
    costForTwo: "₹850 for two",
    cuisines: ["Pizzas", "Fast Food", "Desserts", "Beverages"],
    avgRating: 4.2,
    parentId: "251919",
    avgRatingString: "4.2",
    totalRatingsString: "540",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 05:29:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Gourmet.png",
          description: "Delivery!",
        },
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/big_rx.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Gourmet.png",
              },
            },
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹449",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "34",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "735722",
    name: "ENSO - Sourdough Pizza by Nomad",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/8a800bf4-1432-418e-ad55-dd1d2d81aefe_735722.jpg",
    locality: "Jain Mandir Marg",
    areaName: "Connaught Place",
    costForTwo: "₹850 for two",
    cuisines: ["Pizzas", "Fast Food", "Desserts", "Salads", "Beverages"],
    avgRating: 4.2,
    parentId: "77344",
    avgRatingString: "4.2",
    totalRatingsString: "282",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 05:29:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/big_rx.png",
              },
            },
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹319",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard
          // resName = "Slow Foods"
          // cuisine = "Burger, pizza"

          resData={resList[0]} // left part of = is key that goes in props as same the right part contains the JS object
        /> */}

        {/* The below way to use the card is againts DO NOT REPEAT YOURSELF PRINCIPLE (DRY) so we can use loop to make all these cards rendered*/}

        {/* <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[10]} /> */}

{/* ALWAYS GIVE A KEY */}
        {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData = {restaurant}/>
        ))}

{/* Below piece of code does seems correct because every card will have differnt index value but its not go to README */}
{/* {resList.map((restaurant, index) => ( 
            <RestaurantCard key={index} resData = {restaurant}/>
        ))} */}

        {/* <RestaurantCard
            resName = "KFC"
            cuisine = "Burger, Chicken"
            /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
