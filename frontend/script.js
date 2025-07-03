document.getElementById('reservationForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const date = e.target.date.value;

  try {
    const response = await fetch('http://localhost:5000/reserve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, date })
    });

    const result = await response.text();
    document.getElementById('responseMsg').textContent = result;
  } catch (error) {
    document.getElementById('responseMsg').textContent = "Error sending reservation.";
  }
});
