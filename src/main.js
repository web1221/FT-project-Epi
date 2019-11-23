import { DoctorSearch } from './doctor.js';

$(document).ready(function(){
  $('form#doctorForm').submit(function(event){
    event.preventDefault();
    let doctorNameInput = $('input#doctorName').val();
    let medicalIssueInput = $('input#medicalIssue').val();
    console.log(doctorNameInput, medicalIssueInput);
  });
});
