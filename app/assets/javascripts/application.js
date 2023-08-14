//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

//TO DO - Create seperate JS files (with prefixes) for each sub-service and import them into this file

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  if ( document.getElementById('appUpload') ) {
    document.getElementById('appUpload').addEventListener('click', function() {
      document.getElementById('appBrowse').classList.add('active');
    });

    document.getElementById('errorButton').addEventListener('click', function() {
      document.getElementById('noNavigate').style.display = 'none';
      document.getElementById('noErrorNavigate').style.display = 'none';
      document.getElementById('errorNavigate').style.display = 'inline-block';
      document.getElementById('appBrowse').classList.remove('active');
      document.getElementById('appUploadText').textContent = 'my_data_file_with_error.csv';
    });

    document.getElementById('noErrorButton').addEventListener('click', function() {
      document.getElementById('noNavigate').style.display = 'none';
      document.getElementById('errorNavigate').style.display = 'none';
      document.getElementById('noErrorNavigate').style.display = 'inline-block';
      document.getElementById('appBrowse').classList.remove('active');
      document.getElementById('appUploadText').textContent = 'my_data_file_without_errors.csv';
    });
  }

  $('.app-c-expander__button').on('click', function (e) {
    let toggleValue = 'true'
    $(this).attr('aria-expanded') === 'true' ? toggleValue = 'false' : toggleValue = 'true';
    $(this).attr('aria-expanded', toggleValue)
    // console.log($(this).closest('app-c-expander__content'))
    $(this).parent().next('.app-c-expander__content').toggleClass('app-c-expander__content--visible')
})

})
