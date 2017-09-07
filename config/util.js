import axios from 'axios';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Demo.Ran\'s Blog' : 'Demo.Ran';
    window.document.title = title;
};

const ajaxUrl ='http://hao.shetu.cc/api';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;
