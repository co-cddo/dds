const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Publisher journey
router.post('/method-answer', function(request, response) {

    var method = request.session.data['method']
    if (method == "dataset"){
        response.redirect("/publish/manual/start")
    } else if (method == "data service") {
        response.redirect("/publish/manual/start")
    } else if (method == "Upload a CSV file of metadata") {
        response.redirect("/publish/csv/start")
    } else {
        response.redirect("/publish/api/start")
    }
})

router.post('/licence-answer', function(request, response) {

    var licence = request.session.data['metadataLicence']
    if (licence == "Other"){
        response.redirect("/publish/manual/licence-other")
    } else {
        response.redirect("/publish/manual/security-classification")
    }
})

router.post('/modified-answer', function(request, response) {

    var modified = request.session.data['MetadataModified']
    if (modified == "Yes"){
        response.redirect("/publish/manual/modified-date")
    } else {
        response.redirect("/publish/manual/related")
    }
})

router.post('/type-answer', function(request, response) {

    var assetType = request.session.data['metadataType']
    if (assetType == "Dataset"){
        response.redirect("/publish/manual/frequency")
    } else {
        response.redirect("/publish/manual/endpoint-description")
    }
})

router.post('/service-type-answer', function(request, response) {

    var serviceType = request.session.data['MetadataServiceType']
    if (serviceType == "Other"){
        response.redirect("/publish/manual/service-type-other")
    } else {
        response.redirect("/publish/manual/service-status")
    }
})

router.post('/security-answer', function(request, response) {

    var securityType = request.session.data['MetadataSecurity']
    if (securityType == "Offical"){
        response.redirect("/publish/manual/creator")
    } else {
        response.redirect("/publish/manual/security-error")
    }
})

router.post('/distribution-answer', function(request, response) {

    var addAnother = request.session.data['addAnotherDistribution']
    if (addAnother == "Yes"){
        response.redirect("/publish/manual/distribution-2")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/related-answer', function(request, response) {

    var addAnotherRelated = request.session.data['addAnotherRelated']
    var relatedMethod = request.session.data['method']
    if (addAnotherRelated == "Yes"){
        response.redirect("/publish/manual/related-2")
    } else if (relatedMethod == "dataset"){
            response.redirect("/publish/manual/frequency")
    } else {
        response.redirect("/publish/manual/endpoint-url")
    }
})

router.post('/related-answer-2', function(request, response) {

    var relatedMethod = request.session.data['method']
    if (relatedMethod == "dataset"){
            response.redirect("/publish/manual/frequency")
    } else {
        response.redirect("/publish/manual/endpoint-url")
    }
})

router.post('/dist-size-answer', function(request, response) {

    var classification = request.session.data['metadataAccessRights']
    if (classification == "Official"){
            response.redirect("/publish/manual/distribution-url")
    } else {
        response.redirect("/publish/manual/distribution-type")
    }
})

module.exports = router;