export class DoctorSearch {
  async getDoctorsByname(name){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/practices?name=${name}&location=45.512794,-122.679565,10&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error:" + error.message);
    }
  }
  async getDoctorByMedicalIssue(issue){
    try{
      let response2 = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=45.512794,-122.679565,20&user_key=${process.env.API_KEY}&query=${issue}`);
      let jsonifiedResponse2 = await response2.json();
      return jsonifiedResponse2;
    } catch(error) {
      console.error("There was an error: " + error.message);
    }
  }
}
