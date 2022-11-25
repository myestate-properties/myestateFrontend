import axios from "axios";

const proxy = "https://localhost:9091/api/v1/user";


// const config = {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     email,
//     password,
//   }),
// };

export const loginUser = async (loginDetail) => {
  const { data } = await axios.post(`${proxy}`, loginDetail);
  console.log(data);
  return data;
};

export const createUser = async (input) => {
  console.log(input);
  const response = await axios.post(
    `${proxy}`,
    { input },
    { headers: {Accept: "application/json", "Content-Type": "application/json" } }
  );
  console.log("response", response);
  return response;
};

export const updateProfile = async (input) => {
  console.log(input);
  const response = await axios.post(`${proxy}`, { input });
  console.log("response", response);
  return response;
};
