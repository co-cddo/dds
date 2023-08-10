// #################################################
// Stage: Beta, MVP
// Iteration: 1
// #################################################

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// #################################################
// Supplier - Review request
// #################################################

router.post('/bMVP_wip--decision-after-declaration', (req, res) => {
  var decision = req.session.data["your-decision"];

  if (decision == 'accept') {
    res.redirect('wip/adam/review-request/110-accept');
  } else {
    res.redirect('wip/adam/review-request/110-comment');
  }
});

// Handles form submissions from 'decision'
router.post('/bMVP_wip--decision-routes', (req, res) => {

  const yourDecision = req.body["your-decision"];
  console.log("yourDecision value: ", yourDecision);

  // If the checkbox is checked, redirect to agree.html
  if (yourDecision === undefined) {
    res.redirect('wip/adam/review-request/110-proceeding');
  } 
  if (yourDecision === 'meeting') {
    res.redirect('wip/adam/review-request/110-proceeding');
  } 
  if (yourDecision === 'accept') {
    res.redirect('wip/adam/review-request/030-declaration-cat');
  } 
  if (yourDecision === 'comment') {
    res.redirect('wip/adam/review-request/110-comment');
  } 
  if (yourDecision === 'reject') {
    res.redirect('wip/adam/review-request/110-reject');
  } 

});

module.exports = router;

