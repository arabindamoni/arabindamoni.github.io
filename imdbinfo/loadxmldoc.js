function loadXMLDoc(e){if(window.XMLHttpRequest){xhttp=new XMLHttpRequest}else{xhttp=new ActiveXObject("Microsoft.XMLHTTP")}xhttp.open("GET",e,false);xhttp.send();return xhttp.responseXML}function displayData(){var e=document.getElementById("title").value;var t=document.getElementById("year").value;if(t==="Select year"){t=""}else{t="&y="+t}xmlDoc=loadXMLDoc("http://www.omdbapi.com/?i=&t="+e+"&r=xml&plot=full"+t);x=xmlDoc.getElementsByTagName("movie");if(x.length<1){document.getElementById("result").innerHTML="<span style='color:red'>Movie not found, please check spelling or year of release </span>"}var n=x[0].attributes;var r="<table>";r+="<iframe id='moviePoster' height='200px' width='200px' frameBorder='0' src='tt2334879"+n[13].nodeValue+"'><p>Your browser does not support iframe</p></iframe>";for(var i=0;i<n.length;i++){r+="<tr>";r+="<td>"+n[i].nodeName+"</td>";r+="<td>"+n[i].nodeValue+"</td>";r+="</tr>"}r+="</table>";document.getElementById("result").innerHTML=r;document.getElementById("year").value="Select year"}function setSelect(){var e=new Date,t=e.getFullYear(),n=document.getElementById("year");var r=document.createElement("option"),i=document.createTextNode("Select year");r.appendChild(i);n.add(r);for(var s=1900;s<t+3;s++){var r=document.createElement("option"),i=document.createTextNode(s);r.appendChild(i);n.add(r)}}
