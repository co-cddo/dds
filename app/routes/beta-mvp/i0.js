// #################################################
// Stage: Beta, MVP
// Iteration: 0
// #################################################

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('bMVP_i0/260', (req, res) => {

  const willLeave = req.body["reviewed"];

  // other orgs deed data
  if (willLeave === 'yes') {res.redirect('beta-mvp/0/acquirer/030-confirmation-request-sent-cat.html');} 
  else {res.redirect('beta-mvp/0/acquirer/030-last-warning-cat.html');} 

});

router.post('bMVP_i0/250', (req, res) => {

  const willLeave = req.body["otherOrgs"];

  // other orgs deed data
  if (willLeave == 'yes') {
    res.redirect('beta-mvp/0/acquirer/030-what-data-yes-cat.html');
  } else {
    // just me
    res.redirect('beta-mvp/0/acquirer/030-what-data-no-cat.html');
  }
});

// Handles form submissions from 'What type of data do you need which is part of the acquirer wizard
router.post('bMVP_i0/check-for-no-need', (req, res) => {

  const dataTypes = req.body["countries"];

  // If none is selected exit to no agreement required
  if (dataTypes === 'none') {
    res.redirect('beta-mvp/0/acquirer/020-may-not-need.html');
  } else {
    res.redirect('beta-mvp/0/acquirer/020-lawful-basis.html');
  }
});
router.post('bMVP_i0/240', (req, res) => {

  const willLeave = req.body["leaveUK"];

  // data will be exported
  if (willLeave == 'yes') {
    res.redirect('beta-mvp/0/acquirer/030-what-countries-cat.html');
  } else {
    // data stays in uk
    res.redirect('beta-mvp/0/acquirer/030-how-receive-cat.html');
  }
});

router.post('bMVP_i0/230', (req, res) => {

  const legalPower = req.body["specialCatBasis"];

  // clicked don't know or do not have power
  if (legalPower.includes('substantial')) {
    res.redirect('beta-mvp/0/acquirer/030-what-substantial-cat.html');
  } else {
    // They have the power
    res.redirect('beta-mvp/0/acquirer/030-what-gateway-cat.html');
  }
});

router.post('bMVP_i0/220', (req, res) => {

  const typeNeeded = req.body["typeOfData"];

  // personal was checked
  if (typeNeeded.includes('personal')) {
    // special was also checked
    if (typeNeeded.includes('special')) {
      res.redirect('beta-mvp/0/acquirer/030-legal-basis-both-cat.html');
    } else {
      res.redirect('beta-mvp/0/acquirer/030-legal-basis-personal-cat.html');
    }
  } else {
    if (typeNeeded.includes('special')) {
      res.redirect('beta-mvp/0/acquirer/030-legal-basis-special-cat.html');
    } else {
      res.redirect('beta-mvp/0/acquirer/035-shares.html');
    }
  }

  console.log("typeOfData value: ", typeNeeded);

});

router.post('bMVP_i0/210', (req, res) => {

  const legalPower = req.body["haveLegalPower"];

  // clicked don't know or do not have power
  if (legalPower === undefined || legalPower === 'donthavepower' || legalPower === 'dontknow') {
    res.redirect('beta-mvp/0/acquirer/020-talk-to-lawyer-cat.html');
  } else {
    // They have the power
    res.redirect('beta-mvp/0/acquirer/030-what-type-data-cat.html');
  }
});


// Handles form submissions from 'check-team-skills.html' which is part of the acquirer wizard
router.post('bMVP_i0/200', (req, res) => {

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

// typeNeeded.includes('special')


// Handles form submissions from 'check-team-skills.html' which is part of the acquirer wizard
router.post('bMVP_i0/6-Mar-check-team-skills-routes', (req, res) => {

  const technologySkills = req.body["technology"];
  const securitySkills = req.body["security"];
  const dpSkills = req.body["dp"];
  const legalSkills = req.body["legal"];
  const governanceSkills = req.body["governance"];
  const businessSkills = req.body["business"];

  // If one of the 'yes' radios is checked redirect to what-type-data.html
  if (technologySkills === 'yes' || securitySkills === 'yes' || dpSkills === 'yes' || legalSkills === 'yes' || governanceSkills === 'yes' || businessSkills === 'yes') {
    res.redirect('beta-mvp/0/acquirer/020-what-type-data.html');
  } else {
    // no radios checked, redirect to potential-risks.html
    res.redirect('beta-mvp/0/acquirer/020-potential-risks.html');
  }
});


// Handles form submissions from 'check-team-skills.html'
router.post('bMVP_i0/check-team-skills-routes', (req, res) => {

  const haveSkills = req.body["have-skills"];
  console.log("haveSkills value: ", haveSkills);

  // If the checkbox is checked, redirect to agree.html
  if (haveSkills === 'yes') {
    res.redirect('/jasman/check-team-skills-yes.html');
  } else {
    // If the checkbox is not checked, redirect to not-agree.html
    res.redirect('/jasman/check-team-skills-no.html');
  }
});


// Handles form submissions from 'reviewer-team-skills.html'


router.post('bMVP_i0/review-team-skills-routes', (req, res) => {

  const technologySkills = req.body["technology"];
  const securitySkills = req.body["security"];
  const dpSkills = req.body["DP"];
  const legalSkills = req.body["legal"];
  const governanceSkills = req.body["governance"];
  const businessSkills = req.body["business"];

  // If the checkbox is checked, redirect to view request
  if (technologySkills === 'yes' && securitySkills === 'yes' && dpSkills === 'yes' && legalSkills === 'yes' && governanceSkills === 'yes' && businessSkills === 'yes') {
    res.redirect('beta-mvp/0/acquirer/200-review-request-wizard.html');
  } else {
    // One skill is missing, redirect to risks
    res.redirect('beta-mvp/0/acquirer/200-potential-risks.html');
  }
});


// Handles form submissions from 'decision'
router.post('bMVP_i0/decision-routes', (req, res) => {

  const yourDecision = req.body["your-decision"];
  console.log("yourDecision value: ", yourDecision);

  // If the checkbox is checked, redirect to agree.html
  if (yourDecision === undefined) {
    res.redirect('beta-mvp/0/acquirer/110-propose-time');
  } 
  if (yourDecision === 'meeting') {
    res.redirect('beta-mvp/0/acquirer/110-propose-time');
  } 
  if (yourDecision === 'accept') {
    res.redirect('beta-mvp/0/acquirer/110-accept');
  } 
  if (yourDecision === 'comment') {
    res.redirect('beta-mvp/0/acquirer/110-comment');
  } 
  if (yourDecision === 'reject') {
    res.redirect('beta-mvp/0/acquirer/110-reject');
  } 

});


// Handles form submissions from 'has team reviewed'
router.post('bMVP_i0/team-decision-routes', (req, res) => {

  const technologySkills = req.body["technology"];
  const securitySkills = req.body["security"];
  const dpSkills = req.body["DP"];
  const legalSkills = req.body["legal"];
  const governanceSkills = req.body["governance"];
  const businessSkills = req.body["business"];

  // If the checkbox is checked, redirect to view request
  if (technologySkills === 'yes' && securitySkills === 'yes' && dpSkills === 'yes' && legalSkills === 'yes' && governanceSkills === 'yes' && businessSkills === 'yes') {
    res.redirect('beta-mvp/0/acquirer/100-decision.html');
  } else {
    // One skill is missing, redirect to risks
    res.redirect('beta-mvp/0/acquirer/100-potential-risks.html');
  }
});

module.exports = router;

