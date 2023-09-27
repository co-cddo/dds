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
    } else {
        response.redirect("/start")
    }
})

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
    } else {
        response.redirect("/WIP/start")
    }
})

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
    } else {
        response.redirect("/DEV/start")
    }
})

// #################################################
// Find (Acquirer)
// #################################################

const find_dev = require('./routes/find/dev.js')
router.use('', find_dev);

const find_ur = require('./routes/find/ur.js')
router.use('', find_ur);

const find_wip = require('./routes/find/wip.js')
router.use('', find_wip);


// #################################################
// Request (Acquirer)
// #################################################

const request_dev = require('./routes/request/dev.js')
router.use('', request_dev);

const request_ur = require('./routes/request/ur.js')
router.use('', request_ur);

const request_wip = require('./routes/request/wip.js')
router.use('', request_wip);


// #################################################
// Publish (Supplier) 
// #################################################

const publish_dev = require('./routes/publish/dev.js')
router.use('', publish_dev);

const publish_ur = require('./routes/publish/ur.js')
router.use('', publish_ur);

const publish_wip = require('./routes/publish/wip.js')
router.use('', publish_wip);


// #################################################
// Review request (Supplier)
// #################################################

const reviewRequest_dev = require('./routes/review-request/dev.js')
router.use('', reviewRequest_dev);

const reviewRequest_ur = require('./routes/review-request/ur.js')
router.use('', reviewRequest_ur);

const reviewRequest_wip = require('./routes/review-request/wip.js')
router.use('', reviewRequest_wip);

// #################################################
// Manage-shares 
// #################################################

const manageShares_dev = require('./routes/manage-shares/dev.js')
router.use('', manageShares_dev);

const manageShares_ur = require('./routes/manage-shares/ur.js')
router.use('', manageShares_ur);

const manageShares_wip = require('./routes/manage-shares/wip.js')
router.use('', manageShares_wip);

module.exports = router;