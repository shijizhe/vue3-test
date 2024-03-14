import axios from 'axios'
import config from "@/config/config.js";

const http = axios.create()
http.defaults.baseURL = config.baseUrl
http.defaults.timeout = 15 * 1000
http.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

export default http
