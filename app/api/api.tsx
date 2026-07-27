import axios from "axios";
const apiProduct = axios.create();
apiProduct.interceptors.request.use((config) =>{
    const productsURL = process.env.NEXT_PUBLIC_STORE_PRODUCT_URL;
    if(!productsURL){
        console.warn("STORE_PRODUCT_URL is not defined!")
    }
    config.baseURL = productsURL;
    return config;
},
(error)=>Promise.reject(error));
export default apiProduct;