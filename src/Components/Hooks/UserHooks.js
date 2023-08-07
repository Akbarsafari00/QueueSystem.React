import { useEffect, useState } from "react";
import { getAccessToken, setAuthorization } from "../../helpers/api_helper";
import { useDispatch ,useSelector } from "react-redux";
import { getProfile } from "../../slices/thunks";
import { createSelector } from 'reselect';

const useAuth = () => {
  const accessToken = getAccessToken();

  const apikeyData = createSelector(
    (state) => state.Profile.user,
    (user) => user
  );
// Inside your component
const user = useSelector(apikeyData);
return { accessToken  ,user};
};

export { useAuth };


