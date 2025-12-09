import { data } from "autoprefixer";
import axios from "axios";
const baseUrl = "http://localhost:5012/";

export const getData = (endpoint, callback) => {
    axios
    .get(baseUrl + endpoint)
    .then((response) => {
        callback(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("suksesss");
    });
};
export const postData = (endpoint, data, callback) => {
    axios
    .post(baseUrl + endpoint, data)
    .then((response) => {
        callback(response.data);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("suksesss post");
    });
} 

export const putData = (endpoint, data, callback) => {
    axios
    .put(baseUrl + endpoint, data)
    .then((response) => {
        callback(response.data);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("suksesss put");
    });
}
export const Deldata = (endpoint, callback) => {
    axios
    .delete(baseUrl + endpoint)
    .then((response) => {
        callback(response.data);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("suksesss delete");
    });
};