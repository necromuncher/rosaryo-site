const form = document.getElementById('contact-form');
if (form) {
const question = document.getElementById('captcha-question');
const answer = document.getElementById('captcha-answer');
const submitButton = form.querySelector('[type="submit"]');

let status = document.getElementById('contact-status');
if (!status) {
  status = document.createElement('p');
  status.id = 'contact-status';
  status.className = 'contact-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  submitButton.insertAdjacentElement('afterend', status);
}

const first = Math.floor(Math.random() * 8) + 2;
const second = Math.floor(Math.random() * 8) + 2;
const expected = first + second;
question.textContent = `What is ${first} + ${second}?`;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (Number(answer.value) !== expected) {
    status.textContent = 'Please answer the security check correctly.';
    status.className = 'contact-status error';
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
  status.textContent = '';

  const data = new FormData(form);
  data.set('subject', `[Rosaryo Inquiry] ${data.get('subject')}`);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });
    const result = await response.json();

    if (response.ok && result.success) {
      form.reset();
      status.textContent = 'Thank you. Your inquiry has been sent.';
      status.className = 'contact-status success';
    } else {
      throw new Error(result.message || 'Submission failed.');
    }
  } catch (error) {
    status.textContent = 'Sorry, your inquiry could not be sent. Please try again.';
    status.className = 'contact-status error';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Send Inquiry →';
  }
});
}
