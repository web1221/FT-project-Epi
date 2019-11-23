import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
  DoctorNameSearch
} from './doctorByName.js';
import {
  DoctorIssueSearch
} from './doctorByIssue.js';
function getElement(response) {
  console.log(response);
  for (let i = 0; i < 10; i++) {
    $('.doctorByNameOutput').append(`<li>${response.data[i].name}</li>`);
  }
}
function getElement2(response2) {
  console.log(response2);
  for (let i = 0; i < 10; i++) {
    $('.medicalIssueOutput').append(`<li>${response2.data[i].profile.first_name} ${response2.data[i].profile.last_name}</li>`);
  }
}

$(document).ready(function() {
  $('form#doctorForm').submit(function(event) {
    event.preventDefault();
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
