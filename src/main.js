import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DoctorNameSearch} from './doctorByName.js';
import {DoctorIssueSearch} from './doctorByIssue.js';


function getElement(response) {
  if(response.data[0].name === undefined){
    return "No doctor";
  } else{
    for (let i = 0; i < 10; i++) {
      $('ul#list').append(`<li id=${i}>${response.data[i].name}</li>`);
    }
  }
}

function getElement2(response2) {
  console.log(response2);
  for (let i = 0; i < 10; i++) {
    $('ul#list').append(`<li id=${i}>${response2.data[i].profile.first_name} ${response2.data[i].profile.last_name}<p>Address: ${response2.data[i].practices[0].visit_address.street} ${response2.data[i].practices[0].visit_address.street2},  ${response2.data[i].practices[0].visit_address.city}, ${response2.data[i].practices[0].visit_address.state_long} ${response2.data[i].practices[0].visit_address.zip}<p></li>`)
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
        if(doctorNameInput === undefined){
          throw new Error('no doctors')
        }else{
          getElement(response);
        }
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
