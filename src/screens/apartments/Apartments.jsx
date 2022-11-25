import { memo } from "react";
import { useQuery } from "react-query";
import { fetchAllApartments } from "../../data/api/apartmentApi/fetchAllApartments";
import "././apartments.css";
import "../home/home.css";

import { apartments } from "../../data/data";
import Card from "../../components/cards/ApartmentCard";

const Apartments = () => {
  // const { data, error, isError, isLoading } = useQuery(
  //   "allApartments",
  //   fetchAllApartments
  // );

  // if (isLoading) {
  //   return <h2>Loading Apartments...</h2>
  // }

  // if (isError) {
  //   return <h2>Fetching apartments returned {error.message}.<br />
  //     please, check your network!</h2>
  // }

  return (
    <div className="flex apartment-wrapper">
      {apartments.map(
        ({
          id,
          apartmentsType,
          image,
          noOfRooms,
          noOfToilets,
          location,
          price,
          status,
        }) => (
          <Card
            key={id}
            id={id}
            apartmentsType={apartmentsType}
            apartmentImage={image}
            noOfRooms={noOfRooms}
            noOfToilets={noOfToilets}
            location={location}
            status={status}
            price={price}
          />
        )
      )}
    </div>
  );
};

export default memo(Apartments);
