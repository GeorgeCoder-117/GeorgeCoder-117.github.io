(function() {

	const showinfo = document.querySelector("#hide");

	let maintemplate = ``;

	maintemplate += `

	<a class="whats-btn" href="https://api.whatsapp.com/send?phone=+525576578841" target="_blank"><i class="uil uil-whatsapp"></i></a>

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
					<li><a href="#contactme"><i class="uil uil-envelope-exclamation"></i> Contacto</a></li>
				</ul>
			</div>

			<label for="menu-toggle">
				<i class="uil uil-bars"></i>
			</label>
		</header>

		<div class="me">
			<div>
				<h1>Hola ! <br> Mi nombre es Jorge.</h1>
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
					<p>Desarrollador Web Junior con más de 1 año y medio de experiencia en el campo, Front End y Back End, apasionado por la tecnología.</p>
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
		<div class="divide-line right"></div>
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
					<small><a href="https://mandiles.epizy.com/main" target="_blank"><i class="uil uil-location-arrow"></i><i class="uil uil-globe"></i></a></small>

					<div class="image2-project1"></div>
				</div>

				<div class="portfolio">
					<h3><i class="uil uil-google"></i></h3>
					<h3>Google Apis</h3>

					<div class="image3-project1"></div>
				</div>
			</div>
		</section>

	</div>

	<div class="page-divide">
		<div class="divide"></div>
		<div class="divide-line left"></div>
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
						<p><i class="uil uil-calendar-alt"></i> 2018-2020</p>
						<p>Test en Inglés EFSET -> <a href="http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NTES1&r=LTc3MTA5MDc1NzcS1&j=MTc2NDI3MjMxMgS2&mt" target="_blank"><i class="uil uil-link-alt"></i></a></p>
					</div>
				</li>

				<li class="item" id="cefodeh">
					<a href="#cefodeh" class="btn">Cefodeh</a>
					<div class="experience">
						<p>Desarrollador Web</p>
						<p><i class="uil uil-calendar-alt"></i> 2020-2021</p>
					</div>
				</li>

				<li class="item" id="freelancer">
					<a href="#freelancer" class="btn">Freelancer</a>
					<div class="experience">
						<p>Desarrollador Web Junior</p>
						<p><i class="uil uil-calendar-alt"></i> 2021-Actualidad</p>
					</div>
				</li>
			</div>			
		</section>

	</div>

	<div class="page-divide">
		<div class="divide"></div>
		<div class="divide-line right"></div>
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
						<li><a href="tel:+525576578841"><i class="uil uil-outgoing-call"></i> Llámame</a></li>
						<li><a href="mailto:geeorge_13@hotmail.com"><i class="uil uil-envelope-edit"></i> E-mail</a></li>						
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

	window.onload = function() {

		$(function(){
    	    $("#skillcircle-1").percircle({progressBarColor: '#00CBCE'});
    	    $("#skillcircle-2").percircle({progressBarColor: '#00CBCE'});
    	    $("#skillcircle-3").percircle({progressBarColor: '#00CBCE'});
    	    $("#skillcircle-4").percircle({progressBarColor: '#00CBCE'});
    	});

    }	

})();
