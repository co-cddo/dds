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



module.exports = router;

