var headingsH2 = document.querySelectorAll('.s1 h2');
var contentBox = document.getElementById('content');
var unorder = document.createElement('ul');
for (var i=0; i<headingsH2.length; i++){
    var listItem = document.createElement('li');
    var anchorElement = document.createElement('a');

    var headingText = document.createTextNode(headingsH2[i].innerHTML);
    anchorElement.appendChild(headingText);

    anchorElement.href = "#"+(i+1);

    var subHeading = document.getElementsByClassName("sub-"+(i+1));
    var subUnorder = document.createElement('ul');

    listItem.appendChild(anchorElement);
    unorder.appendChild(listItem);

    for (var j=0; j<subHeading.length; j++){
        var subListItem = document.createElement('li');
        var subAnchorElement = document.createElement('a');

        var subHeadingText = document.createTextNode(subHeading[j].innerHTML);
        subAnchorElement.appendChild(subHeadingText);

        subAnchorElement.href = "#"+(i+1)+"-"+(j+1);
        subListItem.appendChild(subAnchorElement);
        subUnorder.appendChild(subListItem);
    }
    unorder.appendChild(subUnorder);
        
}
contentBox.appendChild(unorder);