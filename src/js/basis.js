/**
 * JavaScript
 */

////////////////////
// Copyright
////////////////////

window.SayMyName = function () {
	console.log(
		`%c
                                                          
                  MADE WITH TOO MUCH SKILLS:              
                                                          
                                                          
         333333    666    00000  PPPPPP  MM    MM IIIII   
            3333  66     00   00 PP   PP MMM  MMM  III    
           3333  666666  00   00 PPPPPP  MM MM MM  III    
             333 66   66 00   00 PP      MM    MM  III    
         333333   66666   00000  PP      MM    MM IIIII   
                                                          
                                                          
                      https://360pmi.com/                 
  `,
		'background: #e8404b; color: white'
	);
};

////////////////////
// IE Detecter
////////////////////

/* Sample function that returns boolean in case the browser is Internet Explorer*/
const isIE = () => {
	const ua = navigator.userAgent;
	/* MSIE used to detect old browsers and Trident used to newer ones*/
	const is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;

	return is_ie;
};
const checkIeCookie = (name) => {
	const dc = document.cookie;
	const prefix = name + '=';
	let begin = dc.indexOf('; ' + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	} else {
		begin += 2;
		var end = document.cookie.indexOf(';', begin);
		if (end == -1) {
			end = dc.length;
		}
	}
	// because unescape has been deprecated, replaced with decodeURI
	//return unescape(dc.substring(begin + prefix.length, end));
	return decodeURI(dc.substring(begin + prefix.length, end));
};
/* Create an alert to show if the browser is IE or not */
if (isIE() && !checkIeCookie('ie_cookie')) {
	alert('ie');
	const container = document.createElement('div');
	container.classList.add('ie-notification');

	container.innerHTML = `
        <p>Your web browser (Internet Explorer) is out of date. Please update your browser for more security, speed, and for the best experience on this site.</p>
        <div>
        <div>
          <a href="https://browsehappy.com/" target="_blank">Update my browser</a>
          <button class="ignore-update">Ignore</button>
        </div>
      `;
	document.body.appendChild(container);

	const ignoreUpdate = document.querySelector('.ignore-update');
	ignoreUpdate.addEventListener('click', (e) => {
		const d = new Date();

		d.setTime(d.getTime() + 1 * 60 * 60 * 1000);
		const expires = 'expires=' + d.toUTCString();
		document.cookie = 'ie_cookie' + '=' + 1 + ';' + expires + ';path=/';
		container.style.display = 'none';
	});
}

////////////////////
// Keyboard focus
////////////////////

function keyboardFocus(e) {
	if (e.keyCode === 9) {
		// Tab key
		document.documentElement.classList.add('keyboard-focus');
	}

	document.removeEventListener('keydown', keyboardFocus, false);
}

document.documentElement.classList.remove('no-js');
document.addEventListener('keydown', keyboardFocus, false);
