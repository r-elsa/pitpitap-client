import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import jsonServerProvider from 'ra-data-json-server';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
  /*   options.headers.set('X-Custom-Header', 'foobar');
    options.headers.set('Access-Control-Allow-Origin', '*')
    options.headers.set('X-Total-Count', '6');
    options.headers.set('Access-Control-Expose-Headers', 'Content-Range') */
  
    return fetchUtils.fetchJson(url, options);
  };
  

  export const dataProvider = jsonServerProvider('http://localhost:9000/api/admin', httpClient);


