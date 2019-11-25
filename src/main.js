import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DoctorNameSearch} from './doctorByName.js';
import {DoctorIssueSearch} from './doctorByIssue.js';


function getElement(response) {
  console.log(response);
  try{
    for (let i = 0; i < 10; i++) {
      if(response.data[i].within_search_area === false){
        continue;
      }
      $('ul#list').append(`<li> ${response.data[i].name}<p>Address: ${response.data[i].visit_address.street} ${response.data[i].visit_address.city} ${response.data[i].visit_address.state_long} ${response.data[i].visit_address.zip} <br>Phone Number: ${response.data[i].phones[0].number} <br> Accepting New Patients: ${response.data[i].accepts_new_patients}</p></li>`);
    }
  } catch(response){
    if(response instanceof TypeError){
      return $('ul#list').append(`<p>Sorry </p>`)
    }
  }
}


function getElement2(response2) {
  console.log(response2);

  for (let i = 0; i < 10; i++) {
    if(response2.data[i].practices[0].within_search_area === false){
      continue;
    }
    $('ul#list').append(`<li ${response2.data[i].profile.first_name} ${response2.data[i].profile.last_name}<p>Address: ${response2.data[i].practices[0].visit_address.street}, ${response2.data[i].practices[0].visit_address.city}, ${response2.data[i].practices[0].visit_address.state_long} ${response2.data[i].practices[0].visit_address.zip} <br>Phone Number: ${response2.data[i].practices[0].phones[0].number} <br>Accepting New Patients: ${response2.data[i].practices[0].accepts_new_patients} </p></li>`)
  }
}



$(document).ready(function() {
  $('form#doctorForm').submit(function(event) {
    // attachListeners();
    event.preventDefault();
    $('ul').html("");
    let doctorNameInput = $('input#doctorNameInput').val();
    let medicalIssueInput = $('input#medicalIssueInput').val();
    $('input#doctorNameInput, input#medicalIssueInput').val("")
    console.log("Medical Issue: ", medicalIssueInput);
    console.log("Doctor Name: ", doctorNameInput);
    if (medicalIssueInput === "") {
      (async () => {
        let doctorNameSearch = new DoctorNameSearch();
        const response = await doctorNameSearch.getDoctorsByname(doctorNameInput);
        getElement(response);
      })();
    } else if (doctorNameInput === "") {
      (async () => {
        let doctorIssueSearch = new DoctorIssueSearch();
        const response2 = await doctorIssueSearch.getDoctorByMedicalIssue(medicalIssueInput);
        getElement2(response2);
      })();
    }
  });
  $('input#doctorName').click(function() {
    $('.doctorNameOption').show();
    $('.medicalIssueOption').hide();
  });
  $('input#medicalIssue').click(function() {
    $('.medicalIssueOption').show();
    $('.doctorNameOption').hide();
  });
});
