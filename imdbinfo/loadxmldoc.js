
function loadXMLDoc(dname) 
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,false);
xhttp.send();
return xhttp.responseXML;
}

function displayData(){

    var query = document.getElementById("title").value;
    var year = document.getElementById("year").value;
    if(year === 'Select year'){
		year = "";
	}
	else{
		year = '&y='+year; 
	}	
	xmlDoc=loadXMLDoc("http://www.omdbapi.com/?i=&t="+ query +"&r=xml&plot=full"+year);
	x=xmlDoc.getElementsByTagName("movie");
	if(x.length < 1) {		
		document.getElementById("result").innerHTML = "<span style='color:red'>Movie not found, please check spelling or year of release </span>";
	}
	var y = x[0].attributes;

	var datastr = "<table>";
        
	for (var i=0;i<y.length;i++)
	{
	  datastr += "<tr>";
	  datastr += "<td>"+ y[i].nodeName+"</td>";
          if(y[i].nodeName == "poster") datastr +=  "<img src='"+ y[i].nodeValue+"'>";
	  datastr += "<td>"+ y[i].nodeValue+"</td>";
	  datastr += "</tr>";
	}
	 datastr += "</table>";

	 document.getElementById("result").innerHTML = datastr;
	
}

function setSelect(){
	var date = new Date,
    year = date.getFullYear(),
    select = document.getElementById('year');
	
	var option = document.createElement('option'),
        yearText = document.createTextNode('Select year');

    option.appendChild(yearText);
    select.add(option);
	for (var i = 1900; i < year + 3 ; i++) {

    var option = document.createElement('option'),
        yearText = document.createTextNode(i);

    option.appendChild(yearText);
    select.add(option);   
	}	
}
