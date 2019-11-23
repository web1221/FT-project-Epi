
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './doctor.js';

$(document).ready(function(){
  let doctorSearch = new DoctorSearch
  $('form#doctorForm').submit(function(event){
    event.preventDefault();
    let doctorNameInput = $('input#doctorNameInput').val();
    let medicalIssueInput = $('input#medicalIssueInput').val();
    console.log(medicalIssueInput);
    console.log(doctorNameInput);
    (async () => {
      const response = await doctorSearch.getDoctorsByname(doctorNameInput);
      // console.log(response);
      getElement(response);
    })();
    (async () => {
      const response2 = await doctorSearch.getDoctorByMedicalIssue(medicalIssueInput);
      getElement2(response2);
    })();

    function getElement(response){
      $('.doctorNameOutput').append();
    }
    function getElement2(response2) {
      console.log(response2);
      $('.medicalIssueOutput').append();
    }


  });
  $('input#doctorName').click(function(){
    $('.doctorNameOption').show();
    $('.medicalIssueOption').hide();
  });
  $('input#medicalIssue').click(function(){
    $('.medicalIssueOption').show();
    $('.doctorNameOption').hide();
  });
});
