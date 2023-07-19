// #################################################
// Stage: Beta, MVP
// Iteration: 0
// #################################################

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// #################################################
// Acquirer
// #################################################

router.post('/bMVP_i0--280', (req, res) => {
  
  const otherOrgs = req.body['otherOrgs'];

  if (otherOrgs === 'no') {
    res.redirect('beta-mvp/0/acquirer/030-how-impact-cat.html');
  } 
  else if (otherOrgs === 'yes') {
    res.redirect('beta-mvp/0/acquirer/030-what-other-orgs.html');
  }
});

router.post('/bMVP_i0--270', (req, res) => {

  const dataType = req.session.data['typeOfData'];

  // other orgs deed data
  if (dataType === 'personal') {
    res.redirect('beta-mvp/0/acquirer/030-legal-basis-personal-cat.html');
  } 
  else if (dataType === 'special') {
    res.redirect('beta-mvp/0/acquirer/030-legal-basis-special-cat.html');
  } else {
    res.redirect('beta-mvp/0/acquirer/020-tasks-cat.html');
  }
});

router.post('/bMVP_i0--260', (req, res) => {

  const willLeave = req.body["reviewed"];

  // other orgs deed data
  if (willLeave === 'yes') {res.redirect('beta-mvp/0/acquirer/030-confirmation-request-sent-cat.html');} 
  else {res.redirect('beta-mvp/0/acquirer/030-last-warning-cat.html');} 

});

// Handles form submissions from 'What type of data do you need which is part of the acquirer wizard
router.post('/bMVP_i0--check-for-no-need', (req, res) => {

  const dataTypes = req.body["countries"];

  // If none is selected exit to no agreement required
  if (dataTypes === 'none') {
    res.redirect('beta-mvp/0/acquirer/020-may-not-need.html');
  } else {
    res.redirect('beta-mvp/0/acquirer/020-lawful-basis.html');
  }
});
router.post('/bMVP_i0--240', (req, res) => {

  const willLeave = req.body["leaveUK"];

  // data will be exported
  if (willLeave == 'yes') {
    res.redirect('beta-mvp/0/acquirer/030-what-countries-cat.html');
  } else {
    // data stays in uk
    res.redirect('beta-mvp/0/acquirer/030-role-cat.html');
  }
});

router.post('/bMVP_i0--230', (req, res) => {

  const legalPower = req.body["specialCatBasis"];

  // clicked don't know or do not have power
  if (legalPower.includes('Reasons of substantial public interest (with a basis in law)')) {
    res.redirect('beta-mvp/0/acquirer/030-what-substantial-cat.html');
  } else {
    // They have the power
    res.redirect('beta-mvp/0/acquirer/030-data-subjects-cat.html');
  }
});

router.post('/bMVP_i0--210', (req, res) => {

  const legalPower = req.body["haveLegalPower"];

  // clicked don't know or do not have power
  if (legalPower === undefined || legalPower === 'donthavepower' || legalPower === 'dontknow') {
    res.redirect('beta-mvp/0/acquirer/020-talk-to-lawyer-cat.html');
  } else {
    // They have the power
    res.redirect('beta-mvp/0/acquirer/030-legal-gateway-belief.html');
  }
});


// Handles form submissions from 'check-team-skills.html' which is part of the acquirer wizard
router.post('/bMVP_i0--200', (req, res) => {

  const technologySkills = req.body["technology"];
  const securitySkills = req.body["security"];
  const dpSkills = req.body["dp"];
  const legalSkills = req.body["legal"];
  const governanceSkills = req.body["governance"];
  const businessSkills = req.body["business"];

  console.log("technologySkills value: ", technologySkills);

  // If all of the 'yes' radios are checked redirect to what-type-data.html
  if (technologySkills === 'yes' && securitySkills === 'yes' && dpSkills === 'yes' && legalSkills === 'yes' && governanceSkills === 'yes' && businessSkills === 'yes') {
    res.redirect('beta-mvp/0/acquirer/030-have-legal-power-cat');
  } else {
    // no radios checked, redirect to potential-risks.html
    res.redirect('beta-mvp/0/acquirer/020-potential-risks-cat.html');
  }
});

router.post('/bMVP_i0--updateCountryList', (req, res) => {
  var newData = req.body['newList'];
  req.session.data['data-travel-countrieslist'] = newData;
  req.session.save(function(err) {
    console.log('Data travel countries list update');
  })
});

router.post('/bMVP_i0--addCountryToArray', (req, res) => {
  if (req.body['data-travel-country'].length > 0) { 
    req.session.data['data-travel-countrieslist'].push(req.body['data-travel-country']);
  }
  res.redirect('beta-mvp/0/acquirer/030-role-cat.html');
});

// #################################################
// Supplier
// #################################################

router.post('/bMVP_i0--decision-after-declaration', (req, res) => {
  var decision = req.session.data["your-decision"];

  if (decision == 'accept') {
    res.redirect('beta-mvp/0/supplier/110-accept');
  } else {
    res.redirect('beta-mvp/0/supplier/110-comment');
  }
});

// Handles form submissions from 'decision'
router.post('/bMVP_i0--decision-routes', (req, res) => {

  const yourDecision = req.body["your-decision"];
  console.log("yourDecision value: ", yourDecision);

  // If the checkbox is checked, redirect to agree.html
  if (yourDecision === undefined) {
    res.redirect('beta-mvp/0/supplier/110-proceeding');
  } 
  if (yourDecision === 'meeting') {
    res.redirect('beta-mvp/0/supplier/110-proceeding');
  } 
  if (yourDecision === 'accept') {
    res.redirect('beta-mvp/0/supplier/030-declaration-cat');
  } 
  if (yourDecision === 'comment') {
    res.redirect('beta-mvp/0/supplier/110-comment');
  } 
  if (yourDecision === 'reject') {
    res.redirect('beta-mvp/0/supplier/110-reject');
  } 

});

module.exports = router;

