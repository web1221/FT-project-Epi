# _Doctor Lookup_

#### **Doctor Lookup is an independent project for Epicodus, 11/22/19**

#### By _**Angela Weber**_

## Specs

###### A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* __Input: Back__
* __Output: List of doctors who can help with a back problems__

###### A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query.
* __Input: Weber__
* __Output: List of doctors who are named Weber__

###### If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
* __Input: Weber__
* __Output: Angela Weber, 555 API lane Portland OR, www.aw.com, accepting new patients: yes__

###### If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* __Input: Dr Wilzit__
* __Output: There was an error: error message__

###### If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)
* __Input: Dr Wilzit__
* __Output: Sorry, we do not have anyone matching that criteria__


## Description
  _This application was created to demonstrate the use of API calls. The application takes a name, or a medical issue and returns Doctors who meet the search criteria. The application returns Name, Address, Phone Number, and if the Doctor is accepting new patients._

## Setup/Installation Requirements

* Open application
* Enter either a name or medical issue
* Click submit
* Get back information about Doctors that match your search criteria
* Repeat to get new results


## Known Bugs

_There are no know bugs. If you come across one please contact me._

## Support and contact details

_For question you can email me at AngelaWeber95@hotmail.com_

## Technologies Used

_To build this application HTML, CSS, JavaScript, JQuery, and BootStrap were used._

### License

Copyright (c) 2019 **_Angela Weber_**
