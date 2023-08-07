import { useEffect, useState } from "react";
import { getAccessToken, setAuthorization } from "../../helpers/api_helper";
import { useDispatch } from "react-redux";
import { getProfile } from "../../slices/thunks";

const useAuth = () => {
  const accessToken = getAccessToken();

  setAuthorization(accessToken);

  var dispatch = useDispatch();

  dispatch(getProfile());

  return { accessToken };
};

export { useAuth };
