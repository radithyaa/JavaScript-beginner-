async function fetchData() {
  try {
    const pokemonName = document
      .querySelector(`.pokemonName`)
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const pokeImg = document.querySelector(`.pokemonSprite`);
    const errorMessage = document.querySelector(".error-message");

    if (!response.ok && pokemonName !== ``) {
      // Sembunyikan gambar jika tidak ditemukan
      pokeImg.style.display = `none`;
      // Tampilkan pesan error
      errorMessage.textContent = `Could not find pokemon`;
      errorMessage.style.display = "block";
      return;
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    pokeImg.src = pokemonSprite;
    pokeImg.alt = `${pokemonName} sprite`;
    pokeImg.style.display = `block`;
    // Sembunyikan pesan error jika gambar berhasil dimuat
    errorMessage.style.display = "none";
  } catch (error) {
    console.error(error);
    const errorMessage = document.querySelector(".error-message");
    errorMessage.textContent = "Please fill the box";
    errorMessage.style.display = "block";
  }
}
