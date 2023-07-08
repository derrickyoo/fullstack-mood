function createURL(path: string) {
  return `${window.location.origin}/${path}`;
}

export async function createNewEntry() {
  // Next.js fetch uses Request web standard (see MDN)
  const res = await fetch(
    new Request(createURL("/api/journal"), {
      method: "POST",
      body: JSON.stringify({}),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
}
