const api = "http://localhost:4000/";

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const res = await fetch(`${api}planets`);
  return await res.json();
}

async function httpGetLaunches() {
  const res = await fetch(`${api}launches`);
  const fetchedLaunches = await res.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try {
    return await fetch(`${api}launches`, {
      method: "POST",
      body: JSON.stringify(launch),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error,
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    return await fetch(`${api}launches/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
