import { useEffect, useState } from "react";
import { getAccessToken } from "../../helpers/api_helper";

const useProfile = () => {
  const accessToken = getAccessToken();
  return { accessToken };
};

export { useProfile };