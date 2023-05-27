'use strict';

const btn = document.querySelector('#contact');
const mainarticle = document.querySelector('.main_article');
btn.addEventListener('click', (evt) => {
  mainarticle.innerHTML = '';

  const form = mainarticle.appendChild(document.createElement('form'));
  const inputfield1title = form.appendChild(document.createElement('h2'));
  const inputfield1 = form.appendChild(document.createElement('input'));
  const inputfield2title = form.appendChild(document.createElement('h2'));
  const inputfield2 = form.appendChild(document.createElement('input'));
  const inputfield3title = form.appendChild(document.createElement('h2'));
  const inputfield3 = form.appendChild(document.createElement('textarea'));
  const submitbutton = form.appendChild(document.createElement('input'));

  form.action = function send() {

  }
  submitbutton.type = 'submit';
  submitbutton.classList.add('contact');

  inputfield1.classList.add('contactinfo');
  inputfield2.classList.add('contactinfo');
  inputfield3.classList.add('contactmsg');

  document.querySelectorAll('form h2').forEach((inp) => {
        inp.classList.add('formh2');
      },
  );

  inputfield1title.innerText = 'Sinun nimesi';
  inputfield2title.innerText = 'Sähköpostiosoitteesi';
  inputfield3title.innerText = 'Viesti';
});
