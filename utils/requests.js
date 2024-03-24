const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// FETCH ALL PROPERTIES
async function fetchProperties() {
  try {
    // HANDLE WHERE DOMAIN IS NOT AVAILABLE YET
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Failed To Fetch");
    }
    return res.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}

// FETCH SINGLE PROPERTY
async function fetchProperty(id) {
  try {
    // HANDLE WHERE DOMAIN IS NOT AVAILABLE YET
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed To Fetch");
    }
    return res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
}

export { fetchProperties, fetchProperty };
