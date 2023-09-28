// #################################################
// Secure - WIP
// #################################################

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/wip--secure-signin-route', function(request, response) {

    var myorg = request.session.data['Organisation']
    var signinRoute = request.session.data['signinRoute']

    if (!myorg){
        response.redirect("/WIP/secure/complete-profile")
    } else if (signinRoute == "Find") {
        response.redirect("/WIP/find/find")
    } else if (signinRoute == "Manage") {
        response.redirect("/WIP/manage-shares/")
    } else if (signinRoute == "Publish") {
        response.redirect("/bMVP_wip--dashboard-add-permission")
    } else if (signinRoute == "ReviewRequest") {
        response.redirect("/WIP/review-request/200-request-start")
    } else {
        response.redirect("/WIP/start")
    }
});

module.exports = router;