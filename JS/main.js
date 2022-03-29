(function() {

	const showinfo = document.querySelector("#hide");

	let maintemplate = ``;

	maintemplate += `

	<div class="loader">
		<span style="--i:1;"></span>
		<span style="--i:2;"></span>
		<span style="--i:3;"></span>
		<span style="--i:4;"></span>
		<span style="--i:5;"></span>
		<span style="--i:6;"></span>
		<span style="--i:7;"></span>
		<span style="--i:8;"></span>
		<span style="--i:9;"></span>
		<span style="--i:10;"></span>
		<span style="--i:11;"></span>
		<span style="--i:12;"></span>
		<span style="--i:13;"></span>
		<span style="--i:14;"></span>
		<span style="--i:15;"></span>
		<span style="--i:16;"></span>
		<span style="--i:17;"></span>
		<span style="--i:18;"></span>
		<span style="--i:19;"></span>
		<span style="--i:20;"></span>
	</div>

	<div class="container-btn">
		<input type="checkbox" id="btn-plus">
		<div class="btnplus">
			<label for="btn-plus" class="uil uil-plus-circle"></label>
		</div>
		<div class="hiddenBtns">
			<a class="whats-btn" href="https://api.whatsapp.com/send?phone=+525576578841" target="_blank"><i class="uil uil-whatsapp"></i></a>
			<a class="language-btn"><i class="uil uil-globe"></i> <p>EN</p></a>
		</div>
	</div>	

	<div class="scroll-up">
		<i class="uil uil-sort"></i>
	</div>

	<div class="wrapper">

		<input type="checkbox" id="menu-toggle">
		<header>
			<h3>MI CV <i class="uil uil-user"></i></h3>
			<div class="main-menu">
				<ul>
					<li><a href="#beginning">Inicio</a></li>
					<li><a href="#myskills">Habilidades</a></li>
					<li><a href="#myportfolio">Portafolio</a></li>
					<li><a href="#myexperience">Experiencia</a></li>
					<li><a href="#myservices">Servicios</a></li>
					<li><a id="tocontact" href="#contactme"><i class="uil uil-envelope-exclamation"></i> Contacto</a></li>
				</ul>
			</div>

			<label for="menu-toggle">
				<i class="uil uil-bars"></i>
			</label>
		</header>

		<div class="me">
			<div>
				<h1>Hola ! <br> Mi nombre es Jorge <br> soy Ing. en Sistemas</h1>
				<a id="beginning" href="#aboutmyself"><i class="uil uil-angle-double-right"></i> Empecemos</a>
			</div>
			<img src="Img/mee.jpg" alt="">			
		</div>

	</div>

	<div class="page-divide">
		<div class="divide"></div>
		<div class="divide-line right"></div>
	</div>

	<div class="wrapper">
		
		<section>
			<div class="section-title" id="aboutmyself">
				<h1 >Acerca de Mi</h1>
				<div class="underline"></div>
			</div>

			<div class="aboutme-wrapper">
				<div class="aboutme-grap left"></div>
				<div class="aboutme-grap right"></div>
				<div class="aboutme">
					<p>Desarrollador web con más de 2 años y medio de experiencia en el campo, Front End y Back End, apasionado por la tecnología.</p>
				</div>
			</div>			
		</section>

	</div>

	<div class="page-divide">
		<div class="divide"></div>
		<div class="divide-line left"></div>
	</div>

	<div class="slider-container">
		<center><h1>Certificados</h1></center>
		<div class="underline-slider"></div>
		<br><br>
		<div class="slider">
			<div></div>
			<div></div>
			<div></div>			
		</div>		
	</div>

	<div class="page-divide">
		<div class="divide"></div>
		<div class="divide-line right"></div>
	</div>

	<div class="wrapper">
		
		<section>
			<div class="section-title" id="myskills">
				<h1>Habilidades</h1>
				<div class="underline"></div>
			</div>
			<div class="skills-wrapper">
				<div class="skill">
					<div id="skillcircle-1" data-percent="70"></div>
					<p>HTML <i class="uil uil-html5"></i></p>					
				</div>
				<div class="skill">
					<div id="skillcircle-2" data-percent="60"></div>
					<p>CSS <i class="uil uil-css3-simple"></i></p>					
				</div>
				<div class="skill">
					<div id="skillcircle-3" data-percent="65"></div>
					<p><i class="uil uil-java-script"></i> JavaScript </p>					
				</div>
				<div class="skill">
					<div id="skillcircle-4" data-percent="65"></div>
					<p><i class="uil uil-arrow"></i> PHP </p>					
				</div>
			</div>
		</section>

	</div>

	<div class="page-divide">
		<div class="divide"></div>
		<div class="divide-line left"></div>
	</div>

	<div class="wrapper">
		
		<section>
			<div class="section-title" id="myportfolio">
				<h1>Portafolio</h1>
				<div class="underline"></div>
				<small>Estos son algunos de los proyectos web que he hecho.</small>
				<h2>E-commerce y Landing Pages</h2>
				<small>Vitales para todo tipo de negocio.</small>
			</div>


			<div class="portfolio-wrapper">
				<div class="bg-grap left"></div>
				<div class="bg-grap right"></div>
				<div class="portfolio">
					<h3><i class="uil uil-selfie"></i></h3>
					<h3>Responsive Design</h3>

					<div class="image1-project1"></div>
				</div>

				<div class="portfolio">
					<h3>Enlace a Web abajo</h3>
					<small id="webproject"><a href="https://mandiles.epizy.com/main" target="_blank"><i class="uil uil-location-arrow"></i><i class="uil uil-globe"></i></a></small>

					<div class="image2-project1"></div>
				</div>

				<div class="portfolio">
					<h3><i class="uil uil-google"></i></h3>
					<h3>Google Maps</h3>

					<div class="image3-project1"></div>
				</div>
			</div>
		</section>

	</div>

	<div class="page-divide">
		<div class="divide"></div>
		<div class="divide-line right"></div>
	</div>

	<div class="new-wrapper">
		
		<section>
			<div class="section-title" id="myexperience">
				<h1>Experiencia Profesional</h1>
			</div>

			<div class="experience-wrapper">
				<li class="item" id="atento">
					<a href="#atento" class="btn">Atento</a>
					<div class="experience">
						<p>Soporte técnico bilingüe</p>
						<p><i class="uil uil-calendar-alt"></i> 2018-2019</p>
						<p>Test en Inglés EFSET -> <a href="http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NTES1&r=LTc3MTA5MDc1NzcS1&j=MTc2NDI3MjMxMgS2&mt" target="_blank"><i class="uil uil-link-alt"></i></a></p>
					</div>
				</li>

				<li class="item" id="cefodeh">
					<a href="#cefodeh" class="btn">Cefodeh</a>
					<div class="experience">
						<p>Desarrollador web junior </p>
						<p><i class="uil uil-calendar-alt"></i> 2020-2021</p>
					</div>
				</li>

				<li class="item" id="freelancer">
					<a href="#freelancer" class="btn">Freelancer</a>
					<div class="experience">
						<p>Desarrollador web</p>
						<p><i class="uil uil-calendar-alt"></i> 2021- Julio 2021</p>
					</div>
				</li>

				<li class="item" id="scholastico">
					<a href="#scholastico" class="btn">Scholastico</a>
					<div class="experience">
						<p>Desarrollador Web Full Stack</p>
						<p><i class="uil uil-calendar-alt"></i> Agosto 2021-Actualidad</p>
					</div>
				</li>
			</div>			
		</section>

	</div>

	<div class="page-divide">
		<div class="divide"></div>
		<div class="divide-line left"></div>
	</div>

	<div class="wrapper">
		
		<section>
			<div class="section-title" id="myservices">
				<h1>Servicios</h1>
				<div class="underline"></div>
			</div>

			<div class="service-grid">
				<div class="service">
					<h3>Desarrollo Web</h3>
					<span><i class="uil uil-arrow"></i> <i class="uil uil-html5"></i> <i class="uil uil-css3-simple"></i>
					<i class="uil uil-java-script"></i></span>
					<p>Enfocado en dar una agradable experiencia de usuario, e interfaz de usuario intuitiva.</p>
				</div>

				<div class="service">
					<h3>Personalización de QR</h3>
					<span><i class="uil uil-qrcode-scan"></i> <i class="uil uil-palette"></i></span>
					<p>Códigos QR llamativos y vistosos con personalización de Logo y de colores.</p>
				</div>

				<div class="service">
					<h3>Configuración de Web Server</h3>
					<span><i class="uil uil-wifi-router"></i> <i class="uil uil-modem"></i></span>
					<p>Administración de servidor Web basado en Linux con CPanel.</p>
				</div>

				<div class="service">
					<h3>Soporte Técnico a equipos</h3>
					<span><i class="uil uil-windows"></i> <i class="uil uil-desktop"></i> <i class="uil uil-mouse-alt-2"></i></span>
					<p>Mantenimiento preventivo y correctivo de computadoras así como limpieza y fluidez del S.O.</p>
				</div>
			</div>			
		</section>

	</div>

	<footer>
		<div class="wrapper">

			<div class="footer-grid" id="contactme">
				<div class="links">
					<h3>Contacto</h3>
					<ul>
						<li><a id="callme" href="tel:+525576578841"><i class="uil uil-outgoing-call"></i> Llámame</a></li>
						<li><a id="emailme" href="mailto:geeorge_13@hotmail.com"><i class="uil uil-envelope-edit"></i> E-mail</a></li>						
					</ul>
					<br>
					<a href="sms:+525576578841" class="btn-sms"><i class="uil uil-comment-alt-lines"></i> Envíame un SMS</a>
				</div>

				<div class="links">
					<h3>Accesos Directos</h3>
					<ul>
						<li><a href="#beginning">Inicio</a></li>
						<li><a href="#myskills">Habilidades</a></li>
						<li><a href="#myportfolio">Portafolio</a></li>
						<li><a href="#myservices">Servicios</a></li>
					</ul>
				</div>
			</div>

		</div>
	</footer>	

	`;

	showinfo.innerHTML = maintemplate;

	//WEB Animation reload

	window.addEventListener("load", () => {
		const loader = document.querySelector(".loader");
		loader.className += " hidden";
	}); 

	window.onload = function() {

		// BTN Plus Function

		let btnPlusActive = 0;
		let btnPlus = document.querySelector(".uil-plus-circle");

		btnPlus.addEventListener('click', () => {

			if (btnPlusActive == 0) {
				btnPlusActive += 1;
				btnPlus.className = "uil-times-circle";
			}

			else if (btnPlusActive == 1) {
				btnPlusActive = 0;
				btnPlus.className = "uil-plus-circle";
			}

		});

		// SKILL Function

		// $(function(){
  //   	    $("#skillcircle-1").percircle({progressBarColor: '#00CBCE'});
  //   	    $("#skillcircle-2").percircle({progressBarColor: '#00CBCE'});
  //   	    $("#skillcircle-3").percircle({progressBarColor: '#00CBCE'});
  //   	    $("#skillcircle-4").percircle({progressBarColor: '#00CBCE'});
  //   	});


    	// CERT SLIDER FUNCTION

    	let slider1 = document.querySelector(".slider div:nth-child(1)");
    	let slider2 = document.querySelector(".slider div:nth-child(2)");
    	let slider3 = document.querySelector(".slider div:nth-child(3)");

    	slider2.style.display = "none";
    	slider3.style.display = "none";    	

    	let sliderInterval = window.setInterval(changeSlider, 6000);

    	function changeSlider() {

    		if (slider2.style.display == "none"  && slider3.style.display == "none") {
    			slider1.style.display = "none";
    			slider2.style.display = "block";
    		}

    		else if (slider2.style.display == "block") {
    			slider3.style.display = "block";
    			slider2.style.display = "none";
    		}

    		else if (slider3.style.display == "block") {
    			slider1.style.display = "block";
    			slider3.style.display = "none";    			
    		}

    		// else if (slider2.style.display == "block") {
    		// 	slider1.style.display = "block";
    		// 	slider2.style.display = "none";
    		// }

    	}

    	// CHANGE LANGUAGE

    	let langBtn = document.querySelector(".language-btn");

    	let langBtnActive = 0; 

    	langBtn.addEventListener('click', () => {

    		if (langBtnActive == 0) {

    			langBtn.innerHTML = "<i class='uil uil-globe' style='color:#FFFFFF;'></i> <p>ES</p>";
    			langBtn.style = "background-color: #00CBCE; border: solid 3px #FFFFFF;";

    			let mainmenu = document.querySelector(".main-menu");
    			let Ulmainmenu = mainmenu.firstChild.nextSibling;
    		
    			Ulmainmenu.querySelector("li:nth-child(1)").innerHTML = "<a href='#beginning'>Main</a>";
    			Ulmainmenu.querySelector("li:nth-child(2)").innerHTML = "<a href='#myskills'>Skills</a>";
    			Ulmainmenu.querySelector("li:nth-child(3)").innerHTML = "<a href='#myportfolio'>Portfolio</a>";
    			Ulmainmenu.querySelector("li:nth-child(4)").innerHTML = "<a href='#myexperience'>Experience</a>";
    			Ulmainmenu.querySelector("li:nth-child(5)").innerHTML = "<a href='#myservices'>Services</a>";
    			Ulmainmenu.querySelector("li:nth-child(6)").innerHTML = "<a href='#contactme'><i class='uil uil-envelope-exclamation'></i> Contact</a>";

    			let me = document.querySelector(".me");
    			let Divme = me.firstChild.nextSibling;

    			Divme.querySelector("h1:nth-child(1)").innerHTML = 
    			"<h1 style='font-size:2.8rem; line-height: 4.2rem;'>Hi ! <br> My name is Jorge <br> I'm a computer <br> systems engineer</h1>";

    			Divme.querySelector("a").innerHTML =
    			"<a id='beginning' href='#aboutmyself'><i class='uil uil-angle-double-right'></i> Let's go!</a>";

    			//me.querySelector("img").style = "width: 20vw;";

    			let aboutMyself = document.querySelector("#aboutmyself");
    			aboutMyself.querySelector("h1").innerHTML = "<h1>About Me</h1>";

    			let aboutMee = document.querySelector(".aboutme");
    			aboutMee.querySelector("p").innerHTML = 
    			"<p>Web developer with almost 3 years of experience on the field, Front End and Back End , I love coding.</p>";

    			let certificate = document.querySelector(".slider-container");
    			certificate.querySelector("h1").innerHTML = "Certificates"; 

    			let mySkills = document.querySelector("#myskills");
    			mySkills.querySelector("h1").innerHTML = "<h1>Web Skills</h1>";

    			let myPortfolio = document.querySelector("#myportfolio");
    			myPortfolio.querySelector("h1").innerHTML = "<h1>Portfolio</h1>";    			
    			myPortfolio.querySelector("h2").innerHTML = "<h2>E-commerce & Landing Pages</h2>";

    			let myPortfolioSmall = myPortfolio.getElementsByTagName("small");
				myPortfolioSmall[0].innerHTML = "Here are some web projects that I've developed";
    			myPortfolioSmall[1].innerHTML = "Essential for all kind of business";

    			let portfolioWrapperDiv = document.querySelectorAll(".portfolio");
    			portfolioWrapperDiv[0].querySelector("h3:nth-child(2)").innerHTML = "<h3>Responsive Design</h3>";
    			portfolioWrapperDiv[1].querySelector("h3:nth-child(1)").innerHTML = "<h3>Web Link below</h3>";
    			portfolioWrapperDiv[2].querySelector("h3:nth-child(2)").innerHTML = "<h3>Google Services</h3>";

    			let experiences = document.querySelector("#myexperience");
    			experiences.querySelector("h1").innerHTML = "<h1>Experience</h1>";

    			let jobs = document.querySelectorAll(".experience");
    			jobs[0].querySelector("p:nth-child(1)").innerHTML = "Bilingual Technical Support";
    			jobs[0].querySelector("p:nth-child(3)").innerHTML = 
    			"English Test EFSET -> <a href='http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NTES1&r=LTc3MTA5MDc1NzcS1&j=MTc2NDI3MjMxMgS2&mt' target='_blank'><i class='uil uil-link-alt'></i></a>";
    			jobs[1].querySelector("p:nth-child(1)").innerHTML = "Junior Web Developer";
    			jobs[2].querySelector("p:nth-child(1)").innerHTML = "Web Developer";
    			jobs[2].querySelector("p:nth-child(2)").innerHTML = "<i class='uil uil-calendar-alt'></i> 2021-July 2021";
    			jobs[3].querySelector("p:nth-child(1)").innerHTML = "Full Stack Web Developer";
    			jobs[3].querySelector("p:nth-child(2)").innerHTML = "<i class='uil uil-calendar-alt'></i> August 2021-Today";

    			let myServices = document.querySelector("#myservices");
    			myServices.querySelector("h1").innerHTML = "<h1>Services</h1>";

    			let serviceDiv = document.querySelectorAll(".service");
    			serviceDiv[0].querySelector("h3").innerHTML = "<h3>Web Development</h3>";
    			serviceDiv[0].querySelector("p").innerHTML = "<p>Focused on giving a nice user experience and awesome intuitive user interface.</p>";
    			serviceDiv[1].querySelector("h3").innerHTML = "<h3>QR Personalization</h3>";
    			serviceDiv[1].querySelector("p").innerHTML = "<p>Awesome colorful QR codes with Logo personalization, easy on the eye.</p>";
    			serviceDiv[2].querySelector("h3").innerHTML = "<h3>Web Server Settings</h3>";
    			serviceDiv[2].querySelector("p").innerHTML = "<p>Linux based Web Server management with control CPanel.</p>";
    			serviceDiv[3].querySelector("h3").innerHTML = "<h3>Technical Support</h3>";
    			serviceDiv[3].querySelector("p").innerHTML = "<p>Preventive and corrective maintenance of your desktop computer or laptop, as well as smooth O.S.</p>";

    			let contactMeDiv = document.querySelectorAll(".links");

    			contactMeDiv[0].querySelector("h3").innerHTML = "<h3>Contact</h3>";

    			let contactMeDiv1Ul = contactMeDiv[0].querySelector("ul");
    			contactMeDiv1Ul.querySelector("li:nth-child(1)").innerHTML = 
    			"<li><a id='callme' href='tel:+525576578841'><i class='uil uil-outgoing-call'></i> Call me!</a></li>";
    			document.querySelector(".btn-sms").innerHTML = 
    			"<a href='sms:+525576578841' class='btn-sms'><i class='uil uil-comment-alt-lines'></i> Send me a SMS</a>";

    			contactMeDiv[1].querySelector("h3").innerHTML = "<h3>ShortCuts</h3>";

    			let contactMeDiv2Ul = contactMeDiv[1].querySelector("ul");
    			contactMeDiv2Ul.querySelector("li:nth-child(1)").innerHTML = 
    			"<li><a href='#beginning'>Main</a></li>";
    			contactMeDiv2Ul.querySelector("li:nth-child(2)").innerHTML = 
    			"<li><a href='#myskills'>Skills</a></li>";
    			contactMeDiv2Ul.querySelector("li:nth-child(3)").innerHTML = 
    			"<li><a href='#myportfolio'>Portfolio</a></li>";
    			contactMeDiv2Ul.querySelector("li:nth-child(4)").innerHTML = 
    			"<li><a href='#myservices'>Services</a></li>";


    			langBtnActive = 1;

    		}

    		else if (langBtnActive == 1) {

    			location.reload();

    		}
    		
    	});
	   	

    }

    // IMPROVEMENT WEB

    /** F12 TOOLS .. DEVELOPER ACCESS PERSONALIZATION **/
	console.error('%cStop!', 'color: red;font-size:2.5rem;font-weight:bold;');  
	console.warn('%cThis console was destinated for developers. If you copy or paste code here to enable some function that unset the integrity of the website you will be reported and we will take actions against you executing a XSS attack.. you were notified.','font-size:1.25rem;line-height:1.1;'); 

	/** DISABLE RIGHT CLICK **/
	document.oncontextmenu = function() {
		alert('WARNING \nThe security on the website was improved.');
    	
    	return false;
	};

	/** DISABLE SCREEN SHOT **/
	document.addEventListener('keyup', (e) => {

    	if (e.key == 'PrintScreen') {
        	navigator.clipboard.writeText('');
        	
        	alert('ERROR SCREENSHOT DISABLED! \nDont try it again or you will be reported');
	    }

	});

	/** DISABLE SCREEN IMPRESSION OR PDF EXPORT WITH (CTRL+P) & DISABLE SCREENCUTS (CTRL+SHIFT+S)**/
	document.addEventListener('keydown', (e) => {

    	if (e.ctrlKey && e.key == 'p' || e.ctrlKey && e.key == 'P') {
    		alert('ERROR This section doesnt allow impression or PDF export \nDont try it again or your access will be denied and reported');
        	
        	e.preventDefault();
	    }

	    else if (e.metaKey && e.shiftKey) {
	    	alert('SCREENCUTS DETECTED! \nDont try it again or your access will be denied and reported');

    	}

    	else if (e.ctrlKey && e.key == 's' || e.ctrlKey && e.key == 'S') {
    		alert('ERROR This Website cant be downloaded \nDont try it again or your access will be denied and reported');
        	
        	e.preventDefault();
    	} 

    	else if (e.ctrlKey && e.key == 'c' || e.ctrlKey && e.key == 'C') {
    		alert('ERROR This Website doesnt allow copy \nDont try it again or your access will be denied and reported');
        	
        	e.preventDefault();
    	}

    	else if (e.ctrlKey && e.key == 'x' || e.ctrlKey && e.key == 'X') {
    		alert('ERROR This Website doesnt allow cut \nDont try it again or your access will be denied and reported');
        	
        	e.preventDefault();
    	}

    	else if (e.ctrlKey && e.key == 'v' || e.ctrlKey && e.key == 'V') {
    		alert('ERROR This Website doesnt allow paste \nDont try it again or your access will be denied and reported');
        	
        	e.preventDefault();
    	}

	});	

})();
