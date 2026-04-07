import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
	vus: 3000,
	duration: '30s',
	thresholds: {
		http_req_duration: ['p(95)<500'],

	},

};



export default function () {
  http.get('http://3.110.54.17:5000/');
  sleep(1);
}
