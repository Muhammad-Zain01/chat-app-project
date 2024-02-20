import { getCookie } from "cookies-next";

const USER_AUTH_TOKEN = getCookie("token");

const AUTH_HEADERS = {
  Authorization: `token ${USER_AUTH_TOKEN}`,
  "Content-Type": "application/json",
};
export const getAllChats = async () => {
  let response = await fetch(`${process.env.BACKEND_URL}/api/chat/`, {
    method: "GET",
    headers: AUTH_HEADERS,
  });
  return await response.json();
};

export const askToChatGPT = async (question) => {
  let body = JSON.stringify({
    input: question,
  });

  let response = await fetch(`${process.env.BACKEND_URL}/api/chat/`, {
    method: "POST",
    body,
    headers: AUTH_HEADERS,
  });
  if (response?.status == 201) {
    return await response.json();
  } else {
    return false;
  }
};

export const loginToUser = async (data) => {
  var body = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: AUTH_HEADERS,
    body: body,
  };

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/auth/`,
    requestOptions
  );
  if (response?.status == 200) {
    return await response.json();
  } else {
    return false;
  }
};
export const verifyUser = async () => {
  let response = await fetch("http://127.0.0.1:8000/api/verify-user/", {
    method: "POST",
    headers: AUTH_HEADERS,
  });
  if (response?.status == 200) {
    return await response.json();
  } else {
    return false;
  }
};

export const createUser = async (data) => {
  var body = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: AUTH_HEADERS,
    body: body,
  };

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/users/`,
    requestOptions
  );
  if (response?.status == 201) {
    return await response.json();
  } else {
    return false;
  }
};
