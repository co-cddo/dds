const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// New routes here 

router.get('/bMVP--review-permission', (req, res) => {
  const permissions = req.session.data['settings_permissions'];
  if (permissions && permissions.includes("review")) {
    res.redirect('/manage-shares/received-requests.html');
  } else {
    res.redirect('/manage-shares/no-review-permission.html');
  }
});

module.exports = router;