// #################################################
// Stage: Beta, MVP
// Iteration: 0
// #################################################

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// #################################################
// Supplier
// #################################################

router.post('/bMVP_ur--decision-after-declaration', (req, res) => {
  var decision = req.session.data["your-decision"];

  if (decision == 'accept') {
    res.redirect('review-request/110-accept');
  } else {
    res.redirect('review-request/110-comment');
  }
});

// Handles form submissions from 'decision'
router.post('/bMVP_ur--decision-routes', (req, res) => {

  const yourDecision = req.body["your-decision"];
  console.log("yourDecision value: ", yourDecision);

  // If the checkbox is checked, redirect to agree.html
  if (yourDecision === undefined) {
    res.redirect('review-request/110-proceeding');
  } 
  if (yourDecision === 'meeting') {
    res.redirect('review-request/110-proceeding');
  } 
  if (yourDecision === 'accept') {
    res.redirect('review-request/030-declaration-cat');
  } 
  if (yourDecision === 'comment') {
    res.redirect('review-request/110-comment');
  } 
  if (yourDecision === 'reject') {
    res.redirect('review-request/110-reject');
  } 

});

module.exports = router;

