// #################################################
// Secure - UR
// #################################################

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/dev--secure-signin-route', function(request, response) {

    var myorg = request.session.data['Organisation']
    var signinRoute = request.session.data['signinRoute']

    if (!myorg){
        response.redirect("/DEV/secure/complete-profile")
    } else if (signinRoute == "Find") {
        response.redirect("/DEV/find/find")
    } else if (signinRoute == "Manage") {
        response.redirect("/DEV/manage-shares/")
    } else if (signinRoute == "Publish") {
        response.redirect("/bMVP_dev--dashboard-add-permission")
    } else if (signinRoute == "ReviewRequest") {
        response.redirect("/DEV/review-request/200-request-start")
    } else {
        response.redirect("/DEV/start")
    }
});

module.exports = router;