import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '837290a091mshec0fdc4c67c5bb8p1929dcjsn268d3df28e2e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

axios.request(options).then(function (response: any) {
	return response.data;
}).catch(function (error: any) {
	console.error(error);
});