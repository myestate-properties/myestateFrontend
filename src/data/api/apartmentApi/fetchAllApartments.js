import axios from 'axios';

const proxy = "https://localhost:9091/api/v1/apartments";

 export const fetchAllApartments = async () => {
    const { data } = await axios.get(
      `${proxy}`
    );
   console.log(data);
    return data;
 }


 export const getApartmentsById = async (id) => {
   const { data } = await axios.get(`${proxy}/{id}`);
   console.log(data);
   return data;
 };

export const postApartment = async (input) => {
    console.log(input);
    const response = await axios.post(`${proxy}`, { input });
    console.log("response", response);
    return response;
}
