const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Publisher journey
router.post('/method-answer', function(request, response) {

    var method = request.session.data['method']
    if (method == "dataset"){
        response.redirect("/publish/manual/title")
    } else if (method == "data service") {
        response.redirect("/publish/manual/title")
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
        response.redirect("/publish/manual/related")
    } else {
        response.redirect("/publish/manual/security-error")
    }
})

router.post('/distribution-answer', function(request, response) {

    var addAnother = request.session.data['addAnotherDistribution']
    if (addAnother == "Yes"){
        response.redirect("/publish/manual/distribution-2/distribution-title")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/related-answer', function(request, response) {

    var relatedMethod = request.session.data['method']
    if (relatedMethod == "dataset"){
            response.redirect("/publish/manual/frequency")
    } else {
        response.redirect("/publish/manual/endpoint-url")
    }
})

router.post('/data-type-answer', function(request, response) {

    var dataCSV = request.session.data['data-CSV']
    var dataXML = request.session.data['data-XML']
    var dataXLXS = request.session.data['data-XLXS']
    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataCSV == "CSV"){
        response.redirect("/publish/manual/frequency")
    } else if (dataXML == "XML") {
        response.redirect("/publish/manual/frequency")
    } else if (dataXLXS == "XLXS") {
        response.redirect("/publish/manual/frequency")
    } else if (dataGeo == "GeoPackage") {
        response.redirect("/publish/manual/frequency")
    } else if (dataREST == "REST web service") {
        response.redirect("/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/publish/manual/add-data/event")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/frequency-answer', function(request, response) {

    var dataCSV = request.session.data['data-CSV']
    var dataXML = request.session.data['data-XML']
    var dataXLXS = request.session.data['data-XLXS']
    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataCSV == "CSV"){
        response.redirect("/publish/manual/add-data/csv")
    } else if (dataXML == "XML") {
        response.redirect("/publish/manual/add-data/xml")
    } else if (dataXLXS == "XLXS") {
        response.redirect("/publish/manual/add-data/xlxs")
    } else if (dataGeo == "GeoPackage") {
        response.redirect("/publish/manual/add-data/geopackage")
    } else if (dataREST == "REST web service") {
        response.redirect("/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/publish/manual/add-data/event")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/csv-answer', function(request, response) {

    var dataXML = request.session.data['data-XML']
    var dataXLXS = request.session.data['data-XLXS']
    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataXML == "XML") {
        response.redirect("/publish/manual/add-data/xml")
    } else if (dataXLXS == "XLXS") {
        response.redirect("/publish/manual/add-data/xlxs")
    } else if (dataGeo == "GeoPackage") {
        response.redirect("/publish/manual/add-data/geopackage")
    } else if (dataREST == "REST web service") {
        response.redirect("/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/publish/manual/add-data/event")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/xml-answer', function(request, response) {

    var dataXLXS = request.session.data['data-XLXS']
    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataXLXS == "XLXS") {
        response.redirect("/publish/manual/add-data/xlxs")
    } else if (dataGeo == "GeoPackage") {
        response.redirect("/publish/manual/add-data/geopackage")
    } else if (dataREST == "REST web service") {
        response.redirect("/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/publish/manual/add-data/event")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/xlxs-answer', function(request, response) {

    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataGeo == "GeoPackage") {
        response.redirect("/publish/manual/add-data/geopackage")
    } else if (dataREST == "REST web service") {
        response.redirect("/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/publish/manual/add-data/event")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/geo-answer', function(request, response) {

    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataREST == "REST web service") {
        response.redirect("/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/publish/manual/add-data/event")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/rest-answer', function(request, response) {

    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataSOAP == "SOAP web service") {
        response.redirect("/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/publish/manual/add-data/event")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/soap-answer', function(request, response) {

    var dataEvent = request.session.data['data-event']

    if (dataEvent == "Event based service") {
        response.redirect("/publish/manual/add-data/event")
    } else {
        response.redirect("/publish/manual/check-answers")
    }
})

router.post('/dist-url-question', function(request, response) {

    var classification = request.session.data['metadataAccessRights']
    if (classification == "Open"){
            response.redirect("/publish/manual/distribution-1/distribution-url")
    } else {
        response.redirect("/publish/manual/distribution-1/distribution-type")
    }
})

router.post('/dist-url-question2', function(request, response) {

    var classification = request.session.data['metadataAccessRights']
    if (classification == "Open"){
            response.redirect("/publish/manual/distribution-2/distribution-url")
    } else {
        response.redirect("/publish/manual/distribution-2/distribution-type")
    }
})

router.post('/upload-error', function(request, response) {

    var error = request.session.data['error']
    if (error == "yes"){
            response.redirect("/publish/csv/upload-summary-error")
    } else {
        response.redirect("/publish/csv/upload-summary")
    }
})


module.exports = router;