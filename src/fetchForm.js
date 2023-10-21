export async function sendFormUserData(formUserData) {
  // Public access

  const url = 'https://hydra-vr-default-rtdb.firebaseio.com/';

  try {
    const response = await fetch(`${url}users.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formUserData),
    });

    if (!response.ok) throw new Error(`HTTP error. Status: ${response.status}`);

    alert(`Succeed! Your form data has been sent.`);
    console.log('Succeed');
    location.reload();
  } catch (err) {
    alert(`Unsuccessful! Try again`);
    console.error('unsuccessful');
  }
}
