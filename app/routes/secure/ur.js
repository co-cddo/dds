// #################################################
// Secure - UR
// #################################################

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/secure-signin-route', function(request, response) {

    var myorg = request.session.data['Organisation']
    var signinRoute = request.session.data['signinRoute']

    if (!myorg){
        response.redirect("/secure/complete-profile")
    } else if (signinRoute == "Find") {
        response.redirect("/find/find")
    } else if (signinRoute == "Manage") {
        response.redirect("/manage-shares/")
    } else if (signinRoute == "Publish") {
        response.redirect("/bMVP--dashboard-add-permission")
    } else if (signinRoute == "ReviewRequest") {
        response.redirect("/review-request/200-request-start")
    } else {
        response.redirect("/start")
    }
});

module.exports = router;