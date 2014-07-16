
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
	xmlDoc=loadXMLDoc("http://www.omdbapi.com/?i=&t="+ query +"&r=xml&plot=full");

	x=xmlDoc.getElementsByTagName("movie");
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
	 datastr += "</table>"

	 document.getElementById("result").innerHTML = datastr;
	
}
