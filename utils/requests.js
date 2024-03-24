const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

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
    console.log("WE ARE HERE");
    return res.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}

export { fetchProperties };
