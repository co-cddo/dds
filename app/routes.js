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

router.post('/signin-route', function(request, response) {

    var signinRoute = request.session.data['signinRoute']
    if (signinRoute == "Find"){
        response.redirect("/find/find")
    } else if (signinRoute == "Manage") {
        response.redirect("/manage-shares/")
    } else {
        response.redirect("/publish/publish-dashboard")
    }
})

// #################################################
// Find (Acquirer)
// #################################################

const find_i0 = require('./routes/find/i0.js')
router.use('', find_i0);

// #################################################
// Request (Acquirer)
// #################################################

const request_i0 = require('./routes/request/i0.js')
router.use('', request_i0);

// Iteration: 1
const request_i1 = require('./routes/request/i1.js')
router.use('', request_i1);


// #################################################
// Publish (Supplier) 
// #################################################

const publish_i0 = require('./routes/publish/i0.js')
router.use('', publish_i0);


// #################################################
// Review request (Supplier)
// #################################################

const reviewRequest_i0 = require('./routes/review-request/i0.js')
router.use('', reviewRequest_i0);

// Iteration: 1
const reviewRequest_i1 = require('./routes/review-request/i1.js')
router.use('', reviewRequest_i1);

// #################################################
// Manage-shares 
// #################################################

const manageShares_i0 = require('./routes/manage-shares/i0.js')
router.use('', manageShares_i0);

module.exports = router;