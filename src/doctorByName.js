export class DoctorNameSearch {
  async getDoctorsByname(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/practices?name=${name}&location=45.512794,-122.679565,20&user_location=45.512794,-122.679565&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) {
      console.error("There was an error:" + error.message);
    }
  }
}
