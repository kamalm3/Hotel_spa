import { Link } from "react-router-dom";
import styled from "styled-components";
import StarIcon from "./StarIcon";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center the content horizontally */
  padding: 16px 20px;
  width: 100%;
  max-width: 800px;
  border-bottom: 2px solid #c5c0b6;
  background-color: #4f5359; /* Background color for the box */
  border-radius: 8px; /* Rounded corners for the box */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adding a subtle shadow for depth */
  margin-bottom: 16px; /* Spacing between cards */
  overflow: hidden; /* Ensures content inside box doesn't overflow */
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the content */
  align-items: center; /* Horizontally center the content */
  text-align: center; /* Center the text */
  flex: 1;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #b3b1b1;
`;

const Location = styled.p`
  font-size: 14px;
  color: #b3b1b1;
  margin-bottom: 8px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #b3b1b1;
  margin-bottom: 8px;

  & > svg {
    margin-right: 2px;
  }
`;

const Button = styled(Link)`
  color: #333;
  padding: 4px 8px;
  border: 1px solid #333;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #b3b1b1;
  }
`;

export const HotelCard: React.FC<{
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
}> = ({ id, name, location, rating, imageUrl }) => {
  return (
    <Card>
      <Info>
      <Image src={imageUrl} alt={name} />
        <Title>{name}</Title>
        <Location>Location: {location}</Location>
        <Rating>
          <StarIcon />
          {rating}
        </Rating>
        <Button to={`/hotels/${id}`}>More Details</Button>
      </Info>
    </Card>
  );
};
