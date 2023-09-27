const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// New routes here 

router.get('/bMVP_dev--review-permission', (req, res) => {
  const permissions = req.session.data['DEV_settings_permissions'];
  if (permissions && permissions.includes("review")) {
    res.redirect('/DEV/manage-shares/received-requests.html');
  } else {
    res.redirect('/DEV/manage-shares/no-review-permission.html');
  }
});

module.exports = router;