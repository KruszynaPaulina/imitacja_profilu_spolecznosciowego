function isLog() {
	var user = faker.fake("{{random.boolean}}");

	if(user === 'true') {
		console.log('zalogowany');
		var bodyHTML = document.getElementsByTagName('body'),
			containerHTML = document.createElement('div');

			bodyHTML[0].appendChild(containerHTML);
			containerHTML.className += 'container';
			containerHTML.innerHTML = "<div class='boxAvatar'></div>";

		function showImage() {
			var imageFaker = faker.fake("<img class='avatar' src='{{internet.avatar}}' alt='avatar'>"),
			boxAvatarHTML = document.getElementsByClassName('boxAvatar');
			boxAvatarHTML[0].innerHTML = imageFaker;
		}

		function showName() {
			var firstNameFaker = faker.fake("{{name.firstName}}"),
				lastNameFaker = faker.fake("{{name.lastName}}"),
				nameHTML = document.createElement('h1');
			
			nameHTML.className += 'name';
			containerHTML.appendChild(nameHTML);
			nameHTML.innerHTML = firstNameFaker + ' ' + lastNameFaker;
			
			var socialLinkFaker = faker.fake("{{internet.url}}"),
				socilaLinkHTML = document.createElement('p');

			socilaLinkHTML.className += 'social';
			containerHTML.appendChild(socilaLinkHTML);
			socilaLinkHTML.innerHTML = "<a href='" + socialLinkFaker + "'>@" + firstNameFaker + lastNameFaker + "</a>";

			var webHTML = document.createElement('p'),
			domainSuffixFaker = faker.fake("{{internet.domainSuffix}}");
			webHTML.className += 'web';
			webHTML.innerHTML = "<i class='fa fa-link' aria-hidden='true'></i> <a href='" + socialLinkFaker + "'>" + firstNameFaker + lastNameFaker + "." + domainSuffixFaker + "</a>";
			return webHTML;
		}

		function showBio() {
			var titleJobFaker = faker.fake("{{name.title}}"),
				companyNameFaker = faker.fake("{{company.companyName}}"),
				comapnySufficFaker = faker.fake("{{company.companySuffix}}"),
				wordsFaker = faker.fake("{{lorem.words}}"),
				wordsFakerTwo = faker.fake("{{lorem.words}}"),
				wordFaker = faker.fake("{{lorem.word}}"),
				wordFakerTwo = faker.fake("{{lorem.word}}"),
				socialLinkFaker = faker.fake("{{internet.url}}"),
				loremParagraphFaker = faker.fake("{{lorem.paragraph}}"),
				bioHTML = document.createElement('p');
			
			bioHTML.className += 'bio';
			containerHTML.appendChild(bioHTML);
			bioHTML.innerHTML = titleJobFaker + " at " + companyNameFaker + " " + comapnySufficFaker + ", " + wordsFaker + " <a href='" + socialLinkFaker + "'>@" + wordFaker + "</a> " + wordsFakerTwo + " <a href='" + socialLinkFaker + "'>#" + wordFakerTwo + "</a>" + ". " + loremParagraphFaker;
		}

		function showData() {
			var cityHTML = document.createElement('p'),
				cityFaker = faker.fake("{{address.city}}"),
				stateFaker = faker.fake("{{address.stateAbbr}}"),
				dateHTML = document.createElement('p'),
				monthFaker = faker.fake("{{date.month}}");
			cityHTML.className += 'city';
			dateHTML.className += 'date';
			containerHTML.appendChild(cityHTML);
			cityHTML.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>' + " " + cityFaker + "," + " " + stateFaker;
			containerHTML.appendChild(webHTML);
			containerHTML.appendChild(dateHTML);
			dateHTML.innerHTML = '<i class="fa fa-calendar" aria-hidden="true"></i> Joined ' + monthFaker + " 2011";


		}

		function showButton() {
			var buttonHTML = document.createElement('button'),
				nameHTML = document.getElementsByClassName('name'),
				name = nameHTML[0].innerText,
				socialLinkFaker = faker.fake("{{internet.url}}");
			buttonHTML.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Tweet to ' + name;
			containerHTML.appendChild(buttonHTML);
			buttonHTML.addEventListener('click', function() {
				window.open(socialLinkFaker, '_self');
			});

		}

		showImage();
		webHTML = showName();
		showBio();
		showData()
		showButton();

	} else {
		console.log('niezalogowany');
	}
}

isLog();

