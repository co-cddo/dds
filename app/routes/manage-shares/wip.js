const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// New routes here 

router.get('/bMVP_wip--review-permission', (req, res) => {
  const permissions = req.session.data['WIP_settings_permissions'];
  if (permissions && permissions.includes("review")) {
    res.redirect('/WIP/manage-shares/received-requests.html');
  } else {
    res.redirect('/WIP/manage-shares/no-review-permission.html');
  }
});

module.exports = router;