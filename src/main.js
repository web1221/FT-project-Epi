import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
  DoctorSearch
} from './doctor.js';

$(document).ready(function() {
  let doctorSearch = new DoctorSearch;
  $('form#doctorForm').submit(function(event) {
    event.preventDefault();
    let doctorNameInput = $('input#doctorNameInput').val();
    let medicalIssueInput = $('input#medicalIssueInput').val();

    (async () => {
      const response = await doctorSearch.getDoctorsByname(doctorNameInput);
      getElement(response);
    })();
    (async () => {
      const response2 = await doctorSearch.getDoctorByMedicalIssue(medicalIssueInput);
      getElement2(response2);
    })();

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
    $('input#doctorName').click(function() {
      $('.doctorNameOption').show();
      $('.medicalIssueOption').hide();
      (async () => {
        const response2 = await doctorSearch.getDoctorByMedicalIssue(medicalIssueInput);
        getElement2(response2);
      })();

      function getElement2(response2) {
        console.log(response2);
        for (let i = 0; i < 10; i++) {
          $('.medicalIssueOutput').append(`<li>${response2.data[i].profile.first_name} ${response2.data[i].profile.last_name}</li>`);
        }
      }
    });

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
