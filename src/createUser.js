export async function createUser(user) {
  // Public access

  const url = 'https://hydra-vr-default-rtdb.firebaseio.com/';

  try {
    const response = await fetch(`${url}users.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error(`HTTP error. Status: ${response.status}`);

    alert(`Succeed! Your form data has been sent.`);
    location.reload();
  } catch (err) {
    alert(`Unsuccessful! Try again`);
  }
}
