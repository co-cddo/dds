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

let global = {};

const init =  async function() {
   global.organisations = await helpers.getData('./app/data/organisations.json');
   global.topics = await helpers.getData('./app/data/topics.json');
   global.types = await helpers.getData('./app/data/asset-types.json');
   global.resources = [];
   const catalogue = await helpers.getData('./app/data/catalogue.json');
   const mappedCatalogue = helpers.mapLiveSchemaToSpec(catalogue);
   const nhs = await helpers.getData('./app/data/nhs.json');
   const mappedNhs = await helpers.mapLiveSchemaToSpec(nhs.apis, 'nhs-digital', 'health');
   global.resources =  await global.resources.concat(mappedCatalogue);

   global.index = searchSetup(global.resources);
}

// #################################################
// Find (Acquirer)
// #################################################

// Iteration: 0
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

// Iteration: 0
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

module.exports = router;