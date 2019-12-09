import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorNameSearch } from './doctorByName.js';
import { DoctorIssueSearch } from './doctorByIssue.js';


function getElement(response) {
  console.log(response);
  try {
    for (let i = 0; i < 10; i++) {
      if (response.data[i].within_search_area === false) {
        continue;
      }
      $('ul#list').append(`<li> ${response.data[i].name}<p>Address: ${response.data[i].visit_address.street} ${response.data[i].visit_address.city} ${response.data[i].visit_address.state_long} ${response.data[i].visit_address.zip} <br>Phone Number: ${response.data[i].phones[0].number} <br> Accepting New Patients: ${response.data[i].accepts_new_patients}</p></li>`);
    }
  } catch (response) {
    if (response instanceof TypeError) {
      return $('ul#list').append(`<li>These are all the listings fitting your search</li>`);
    }
  }
}


function getElement2(response2) {
  try {
    for (let i = 0; i < 10; i++) {
      if (response2.data[i].practices[0].within_search_area === false) {
        continue;
      }
      // go back to see if this is still what you want to do.
      if(response2.data[i].practices[0].website !== ""){
          return  $('ul#list').append(`<li><br> Website: ${response2.data[i].practices[0].website}</li>`);
      }
      return $('ul#list').append(`<li> ${response2.data[i].profile.first_name} ${response2.data[i].profile.last_name}, ${response2.data[i].profile.title}<p>Address: ${response2.data[i].practices[0].visit_address.street}, ${response2.data[i].practices[0].visit_address.city}, ${response2.data[i].practices[0].visit_address.state_long} ${response2.data[i].practices[0].visit_address.zip} <br>Phone Number: ${response2.data[i].practices[0].phones[0].number} <br>Accepting New Patients: ${response2.data[i].practices[0].accepts_new_patients}</li>`);

  }
  } catch (response2) {
    if (response2 instanceof TypeError) {
      return $('ul#list').append(`<li>These are all the listings fitting your search</li>`);
    }
  }
}


$(document).ready(function() {
  $('form#doctorForm').submit(function(event) {
    event.preventDefault();
    $('ul').html("");
    let doctorNameInput = $('input#doctorNameInput').val();
    let medicalIssueInput = $('input#medicalIssueInput').val();
    $('input#doctorNameInput, input#medicalIssueInput').val("");
    if (medicalIssueInput === "") {
      (async () => {
        let doctorNameSearch = new DoctorNameSearch();
        const response = await doctorNameSearch.getDoctorsByname(doctorNameInput);
        getElement(response);
        $('.output').show();
      })();
    } else if (doctorNameInput === "") {
      (async () => {
        let doctorIssueSearch = new DoctorIssueSearch();
        const response2 = await doctorIssueSearch.getDoctorByMedicalIssue(medicalIssueInput);
        getElement2(response2);
        $('.output').show();
      })();
    }
  });
  $('input#doctorName').click(function() {
    $('input#medicalIssueInput').val("");
    $('.doctorNameOption').show();
    $('.medicalIssueOption').hide();
  });
  $('input#medicalIssue').click(function() {
    $('input#doctorNameInput').val("");
    $('.medicalIssueOption').show();
    $('.doctorNameOption').hide();
  });
});
