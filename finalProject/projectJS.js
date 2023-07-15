//email check via regex
document.getElementById('email').addEventListener('blur', function() {
    let emailTxt = document.getElementById('email')
    let regex =  /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    if (!regex.test(emailTxt.value)) {
        alert('Please provide a valid email address');
        emailTxt.focus;
        emailTxt.value= 'Enter valid email'
}})
// create a table
function createTable() {
    const myTable = document.getElementById('myTable')
    const header = document.createElement('thead')
    const body = document.createElement('tbody')
    const tableHeader = [
        ' ',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]
    const rowHeaders = [
        'Breakfast',
        'First Snack',
        'Lunch',
        'Second Snack',
        'Dinner'
    ]

    for (i in tableHeader) {
        let headerCell = document.createElement('th')
        let headerText = document.createTextNode(tableHeader[i])
        headerCell.appendChild(headerText)
        header.appendChild(headerCell)
    }

    myTable.appendChild(header)

    for (j in rowHeaders) {
        let row = document.createElement('tr')
        row.id = rowHeaders[j]
        for (i in tableHeader) {
            let cell = document.createElement('td')
            row.appendChild(cell)
            for (i = 1; i < row.children.length; i++) {
                row.children[
                    i
                ].innerHTML = `<input type='text' class='meals' id=${tableHeader[i]}>`
            }
            row.children[0].innerHTML = rowHeaders[j]
        }
        body.appendChild(row)
    }
    myTable.appendChild(body)
    return myTable
}
//call function to create input table
createTable()

//function to download the plan
const downloadButton = document.getElementById('download_link')
downloadButton.addEventListener('click', downld)

function downld() {
    
    var cells = document.getElementsByTagName('td');
    var repText = "Report"
    for (i = 0; i < cells.length; i++) {
        //repText += '\n';
        if (cells[i].textContent != "undefined"){
            repText += (cells[i].value);
    }}
    var txt = document.documentElement.outerHTML
    var text = new Blob([repText], { type: 'data:plain/text' })
    var hiddenElement = document.createElement('a');
    hiddenElement.href = URL.createObjectURL(text);
    hiddenElement.download = 'PlanDownload.txt';
    hiddenElement.click();
}

//function to clear table
document.getElementById('resetButton').addEventListener('click', function () {
    let cells = document.querySelectorAll(".meals");
    for (let i = 0; i < cells.length; i++) {
        cells[i].value = "";
    }
})

//function to create report
document.getElementById("myButton").addEventListener('click', myWindow)
function myWindow() {
    document.getElementById('myForm').submit()
    oldTable = document.getElementsByTagName("table")[0];
    newTable = oldTable.cloneNode(true);
    let x = newTable.getElementsByClassName('meals')
    for (i = 0; i < x.length; i++) {
        x[i].style.width = '50%';
        x[i].style.textAlign = 'center';
    }
    let y = newTable.getElementsByTagName('tr')
    for (i = 0; i < y.length; i++) {
        y[i].style.width = '20%';
        y[i].style.textAlign = 'center';
    }
    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    email = document.getElementById("email").value;
    myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
    myText += ("Hello " + fName + " " + lName + " " + ", here is your meal plan for the week: " + "<br><br><br>");
    endText = ("</body>\n</html>");
    flyWindow = window.open('about:blank', 'Meal Plan', 'width=1000,height=500,left=100,top=100');
    flyWindow.document.write(myText);
    flyWindow.document.body.appendChild(newTable);
    flyWindow.document.write("<input type='button' style='width: 25%; align-self: center;' id='download_link' value='Download plan' />")
    flyWindow.document.write(endText);

}


