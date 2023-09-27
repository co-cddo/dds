const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Access to publish
router.get('/bMVP_dev--dashboard-add-permission', (req, res) => {
  const permissions = req.session.data['DEV_settings_permissions'];
  if (permissions && permissions.includes("add")) {
    res.redirect('/DEV/publish/publish-dashboard.html');
  } else {
    res.redirect('/DEV/publish/no-add-permission.html');
  }
});

router.get('/bMVP--method-add-permission', (req, res) => {
  const permissions = req.session.data['DEV_settings_permissions'];
  if (permissions && permissions.includes("add")) {
    res.redirect('/DEV/publish/method.html');
  } else {
    res.redirect('/DEV/publish/no-add-permission.html');
  }
});

// Publisher journey
router.post('/DEV/method-answer', function(request, response) {

    var method = request.session.data['method']
    if (method == "dataset"){
        response.redirect("/DEV/publish/manual/title")
    } else if (method == "data service") {
        response.redirect("/DEV/publish/manual/title")
    } else if (method == "Upload a CSV file of metadata") {
        response.redirect("/DEV/publish/csv/start")
    } else {
        response.redirect("/DEV/publish/api/start")
    }
})

router.post('/DEV/licence-answer', function(request, response) {

    var licence = request.session.data['metadataLicence']
    if (licence == "Other"){
        response.redirect("/DEV/publish/manual/licence-other")
    } else {
        response.redirect("/DEV/publish/manual/security-classification")
    }
})

router.post('/DEV/modified-answer', function(request, response) {

    var modified = request.session.data['MetadataModified']
    if (modified == "Yes"){
        response.redirect("/DEV/publish/manual/modified-date")
    } else {
        response.redirect("/DEV/publish/manual/related")
    }
})

router.post('/DEV/type-answer', function(request, response) {

    var assetType = request.session.data['metadataType']
    if (assetType == "Dataset"){
        response.redirect("/DEV/publish/manual/frequency")
    } else {
        response.redirect("/DEV/publish/manual/endpoint-description")
    }
})

router.post('/DEV/service-type-answer', function(request, response) {

    var serviceType = request.session.data['MetadataServiceType']
    if (serviceType == "Other"){
        response.redirect("/DEV/publish/manual/service-type-other")
    } else {
        response.redirect("/DEV/publish/manual/service-status")
    }
})

router.post('/DEV/security-answer', function(request, response) {

    var securityType = request.session.data['MetadataSecurity']
    if (securityType == "Offical"){
        response.redirect("/DEV/publish/manual/related")
    } else {
        response.redirect("/DEV/publish/manual/security-error")
    }
})

router.post('/DEV/distribution-answer', function(request, response) {

    var addAnother = request.session.data['addAnotherDistribution']
    if (addAnother == "Yes"){
        response.redirect("/DEV/publish/manual/distribution-2/distribution-title")
    } else {
        response.redirect("/DEV/publish/manual/check-answers")
    }
})

router.post('/DEV/related-answer', function(request, response) {

    var relatedMethod = request.session.data['method']
    if (relatedMethod == "dataset"){
            response.redirect("/DEV/publish/manual/frequency")
    } else {
        response.redirect("/DEV/publish/manual/endpoint-url")
    }
})

router.post('/DEV/data-type-answer', function(request, response) {

    var dataCSV = request.session.data['data-CSV']
    var dataXML = request.session.data['data-XML']
    var dataXLXS = request.session.data['data-XLXS']
    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataCSV == "CSV"){
        response.redirect("/DEV/publish/manual/frequency")
    } else if (dataXML == "XML") {
        response.redirect("/DEV/publish/manual/frequency")
    } else if (dataXLXS == "XLXS") {
        response.redirect("/DEV/publish/manual/frequency")
    } else if (dataGeo == "GeoPackage") {
        response.redirect("/DEV/publish/manual/frequency")
    } else if (dataREST == "REST web service") {
        response.redirect("/DEV/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/DEV/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/DEV/publish/manual/add-data/event")
    } else {
        response.redirect("/DEV/publish/manual/check-answers")
    }
})

router.post('/DEV/frequency-answer', function(request, response) {

    var dataCSV = request.session.data['data-CSV']
    var dataXML = request.session.data['data-XML']
    var dataXLXS = request.session.data['data-XLXS']
    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataCSV == "CSV"){
        response.redirect("/DEV/publish/manual/add-data/csv")
    } else if (dataXML == "XML") {
        response.redirect("/DEV/publish/manual/add-data/xml")
    } else if (dataXLXS == "XLXS") {
        response.redirect("/DEV/publish/manual/add-data/xlxs")
    } else if (dataGeo == "GeoPackage") {
        response.redirect("/DEV/publish/manual/add-data/geopackage")
    } else if (dataREST == "REST web service") {
        response.redirect("/DEV/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/DEV/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/DEV/publish/manual/add-data/event")
    } else {
        response.redirect("/DEV/publish/manual/check-answers")
    }
})

router.post('/DEV/csv-answer', function(request, response) {

    var dataXML = request.session.data['data-XML']
    var dataXLXS = request.session.data['data-XLXS']
    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataXML == "XML") {
        response.redirect("/DEV/publish/manual/add-data/xml")
    } else if (dataXLXS == "XLXS") {
        response.redirect("/DEV/publish/manual/add-data/xlxs")
    } else if (dataGeo == "GeoPackage") {
        response.redirect("/DEV/publish/manual/add-data/geopackage")
    } else if (dataREST == "REST web service") {
        response.redirect("/DEV/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/DEV/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/DEV/publish/manual/add-data/event")
    } else {
        response.redirect("/DEV/publish/manual/check-answers")
    }
})

router.post('/DEV/xml-answer', function(request, response) {

    var dataXLXS = request.session.data['data-XLXS']
    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataXLXS == "XLXS") {
        response.redirect("/DEV/publish/manual/add-data/xlxs")
    } else if (dataGeo == "GeoPackage") {
        response.redirect("/DEV/publish/manual/add-data/geopackage")
    } else if (dataREST == "REST web service") {
        response.redirect("/DEV/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/DEV/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/DEV/publish/manual/add-data/event")
    } else {
        response.redirect("/DEV/publish/manual/check-answers")
    }
})

router.post('/DEV/xlxs-answer', function(request, response) {

    var dataGeo = request.session.data['data-geo']
    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataGeo == "GeoPackage") {
        response.redirect("/DEV/publish/manual/add-data/geopackage")
    } else if (dataREST == "REST web service") {
        response.redirect("/DEV/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/DEV/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/DEV/publish/manual/add-data/event")
    } else {
        response.redirect("/DEV/publish/manual/check-answers")
    }
})

router.post('/DEV/geo-answer', function(request, response) {

    var dataREST = request.session.data['data-REST']
    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataREST == "REST web service") {
        response.redirect("/DEV/publish/manual/add-data/rest")
    } else if (dataSOAP == "SOAP web service") {
        response.redirect("/DEV/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/DEV/publish/manual/add-data/event")
    } else {
        response.redirect("/DEV/publish/manual/check-answers")
    }
})

router.post('/DEV/rest-answer', function(request, response) {

    var dataSOAP = request.session.data['data-SOAP']
    var dataEvent = request.session.data['data-event']

    if (dataSOAP == "SOAP web service") {
        response.redirect("/DEV/publish/manual/add-data/soap")
    } else if (dataEvent == "Event based service") {
        response.redirect("/DEV/publish/manual/add-data/event")
    } else {
        response.redirect("/DEV/publish/manual/check-answers")
    }
})

router.post('/DEV/soap-answer', function(request, response) {

    var dataEvent = request.session.data['data-event']

    if (dataEvent == "Event based service") {
        response.redirect("/DEV/publish/manual/add-data/event")
    } else {
        response.redirect("/DEV/publish/manual/check-answers")
    }
})

router.post('/DEV/dist-url-question', function(request, response) {

    var classification = request.session.data['metadataAccessRights']
    if (classification == "Open"){
            response.redirect("/DEV/publish/manual/distribution-1/distribution-url")
    } else {
        response.redirect("/DEV/publish/manual/distribution-1/distribution-type")
    }
})

router.post('/DEV/dist-url-question2', function(request, response) {

    var classification = request.session.data['metadataAccessRights']
    if (classification == "Open"){
            response.redirect("/DEV/publish/manual/distribution-2/distribution-url")
    } else {
        response.redirect("/DEV/publish/manual/distribution-2/distribution-type")
    }
})

router.post('/DEV/upload-error', function(request, response) {

    var error = request.session.data['error']
    if (error == "yes"){
            response.redirect("/DEV/publish/csv/upload-summary-error")
    } else {
        response.redirect("/DEV/publish/csv/upload-summary")
    }
})


module.exports = router;