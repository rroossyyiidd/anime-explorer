import { API_URL } from "@/constants/api";
import axios from "axios";

export const API = axios.create({
  baseURL: API_URL,
});
