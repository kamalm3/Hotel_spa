import { useEffect, useState } from "react";
import styled from "styled-components";
import { HotelCard } from "../components/HotelCard";
import { fetchHotels } from "../services/hotelService";

const Loading = styled.p`
  font-size: 18px;
  color: #1f1b19;
`;

const Error = styled(Loading)`
  color: #8f0c0c;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Create a responsive grid */
  gap: 16px; /* Add space between items */
  padding: 50px;
  background-color: #292827;
  color: #b3b1b1;
`;

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
}

export const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadingHotels = async () => {
      try {
        const data = await fetchHotels();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels", error);
        setError("Error fetching hotels");
      } finally {
        setLoading(false);
      }
    };
    loadingHotels();
  }, []);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <List>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          id={hotel.id}
          rating={hotel.rating}
          name={hotel.name}
          location={hotel.location}
          imageUrl={hotel.imageUrl}
        />
      ))}
    </List>
  );
};
