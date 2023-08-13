window.onload = (event) => {

	console.log('go for it')

	// Create fragment
	// source: https://stackoverflow.com/a/814649
	const create = (htmlStr) => {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    return frag;
	}

	const renderNavItem = (url, title) => {
		return `<a href="${url}" style="
			font-size: 14px;
			color: #666;
			font-family: sans-serif;
			font-weight: ${document.location.href.indexOf(url) > -1 ? 'bold' : 'normal'};
			margin: 0 10px;
			padding: 5px 0;
			display: inline-block;
		">${title}</a>`
	}

	const fragment = create(`<nav align="center">
		${renderNavItem('https://kennisbank.nijverhoekrotterdam.nl/', 'Kennisbank')}
		${renderNavItem('https://feed.nijverhoek.nl/', 'Feed')}
		${renderNavItem('https://app.nijverhoek.nl/', 'Sloop')}
	</nav>`);

	// You can use native DOM methods to insert the fragment:
	document.body.insertBefore(fragment, document.body.childNodes[0]);

};
