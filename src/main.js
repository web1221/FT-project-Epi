
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './doctor.js';

$(document).ready(function(){
  $('form#doctorForm').submit(function(event){
    event.preventDefault();
    let doctorNameInput = $('input#doctorName').val();
    let medicalIssueInput = $('input#medicalIssue').val();
    
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
