//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Handles form submissions from 'check-team-skills.html'
router.post('/check-team-skills-routes', (req, res) => {

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


// Handles form submissions from 'decision'
router.post('/decision-routes', (req, res) => {

  const yourDecision = req.body["your-decision"];
  console.log("yourDecision value: ", yourDecision);

  // If the checkbox is checked, redirect to agree.html
  if (yourDecision === undefined) {
    res.redirect('/khadija-authenticated/110-propose-time');
  } 
  if (yourDecision === 'meeting') {
    res.redirect('/khadija-authenticated/110-propose-time');
  } 
  if (yourDecision === 'accept') {
    res.redirect('/khadija-authenticated/110-accept');
  } 
  if (yourDecision === 'comment') {
    res.redirect('/khadija-authenticated/110-comment');
  } 
  if (yourDecision === 'reject') {
    res.redirect('/khadija-authenticated/110-reject');
  } 

});



module.exports = router;

