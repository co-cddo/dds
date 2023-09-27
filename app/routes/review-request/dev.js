// #################################################
// Supplier - Review request - DEV
// #################################################

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/DEV/bMVP--decision-after-declaration', (req, res) => {
  var decision = req.session.data["your-decision"];

  if (decision == 'accept') {
    res.redirect('/DEV/review-request/110-accept');
  } else {
    res.redirect('/DEV/review-request/110-comment');
  }
});

// Handles form submissions from 'decision'
router.post('/DEV/bMVP--decision-routes', (req, res) => {

  const yourDecision = req.body["your-decision"];
  console.log("yourDecision value: ", yourDecision);

  // If the checkbox is checked, redirect to agree.html
  if (yourDecision === undefined) {
    res.redirect('/DEV/review-request/110-proceeding');
  } 
  if (yourDecision === 'meeting') {
    res.redirect('/DEV/review-request/110-proceeding');
  } 
  if (yourDecision === 'accept') {
    res.redirect('/DEV/review-request/030-declaration-cat');
  } 
  if (yourDecision === 'comment') {
    res.redirect('/DEV/review-request/110-comment');
  } 
  if (yourDecision === 'reject') {
    res.redirect('/DEV/review-request/110-reject');
  } 

});

module.exports = router;