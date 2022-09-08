const apiKey = "ffVU1niXekr5NoYicDeeifcKqLfLqZUm";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${apiKey}`;
  console.log("URL: " + url);
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map((e) => {
    return {
      id: e.id,
      title: e.title,
      url: e.images?.downsized_medium.url,
    };
  });

  console.log(data);
  console.log(gifs);

  return gifs;
};
