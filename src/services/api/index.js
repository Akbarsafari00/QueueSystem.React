import axios from "axios";
import {api} from "../../config";

axios.defaults.baseURL = api.API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

export * from "./auth.service";