(function () {
  const form = document.getElementById('beta-form');
  if (!form) return;

  const question = document.getElementById('beta-captcha-question');
  const answer = document.getElementById('beta-captcha-answer');
  const status = document.getElementById('beta-status');
  const submit = form.querySelector('[type="submit"]');
  const first = Math.floor(Math.random() * 8) + 2;
  const second = Math.floor(Math.random() * 8) + 2;
  const expected = first + second;
  question.textContent = `What is ${first} + ${second}?`;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (Number(answer.value) !== expected) {
      status.textContent = 'Please answer the security check correctly.';
      status.className = 'beta-status error';
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Sending…';
    status.textContent = '';

    try {
      const data = new FormData(form);
      data.set('message', `A user: ${data.get('name')} with email address: ${data.get('email')} has requested to join in the beta testing.`);
      data.set('replyto', data.get('email'));

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Submission failed');

      form.reset();
      status.textContent = 'Thank you. You have joined the Rosaryo beta signup.';
      status.className = 'beta-status success';
    } catch (error) {
      status.textContent = 'Sorry, signup could not be sent. Please try again.';
      status.className = 'beta-status error';
    } finally {
      submit.disabled = false;
      submit.textContent = 'Join the beta';
    }
  });
})();
