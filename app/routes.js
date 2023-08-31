//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const { promises: fs } = require("fs");

const got = require('got');
let cache = {};
let itemsjs;
let items;

// #################################################
// Global
// #################################################

router.post('/bMVP_ur--signin-route', function(request, response) {

    var signinRoute = request.session.data['signinRoute']
    if (signinRoute == "Find"){
        response.redirect("/find/find")
    } else if (signinRoute == "Manage") {
        response.redirect("/manage-shares/")
    } else {
        response.redirect("/publish/publish-dashboard")
    }
})

router.post('/bMVP_wip--signin-route', function(request, response) {

    var signinRoute = request.session.data['signinRoute']
    if (signinRoute == "Find"){
        response.redirect("/WIP/find/find")
    } else if (signinRoute == "Manage") {
        response.redirect("/WIP/manage-shares/")
    } else {
        response.redirect("/WIP/publish/publish-dashboard")
    }
})

router.post('/bMVP_wip--secure-signin-route', function(request, response) {

    var myorg = request.session.data['Organisation']
    var signinRoute = request.session.data['signinRoute']

    if (!myorg){
        response.redirect("/WIP/ben/secure/complete-profile")
    } else if (signinRoute == "Find") {
        response.redirect("/WIP/ben/find/find")
    } else if (signinRoute == "Manage") {
        response.redirect("/WIP/ben/manage-shares/")
    } else if (signinRoute == "Publish") {
        response.redirect("/WIP/ben/publish/publish-dashboard")
    } else {
        response.redirect("/WIP/ben/start")
    }
})

// #################################################
// Find (Acquirer)
// #################################################

const find_ur = require('./routes/find/ur.js')
router.use('', find_ur);

const find_wip = require('./routes/find/wip.js')
router.use('', find_wip);

// #################################################
// Request (Acquirer)
// #################################################

const request_ur = require('./routes/request/ur.js')
router.use('', request_ur);

const request_wip = require('./routes/request/wip.js')
router.use('', request_wip);


// #################################################
// Publish (Supplier) 
// #################################################

const publish_ur = require('./routes/publish/ur.js')
router.use('', publish_ur);


// #################################################
// Review request (Supplier)
// #################################################

const reviewRequest_ur = require('./routes/review-request/ur.js')
router.use('', reviewRequest_ur);

const reviewRequest_wip = require('./routes/review-request/wip.js')
router.use('', reviewRequest_wip);

// #################################################
// Manage-shares 
// #################################################

const manageShares_ur = require('./routes/manage-shares/ur.js')
router.use('', manageShares_ur);

const manageShares_wip = require('./routes/manage-shares/wip.js')
router.use('', manageShares_wip);

module.exports = router;