function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-background text-textPrimary min-h-screen flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Circuit imprimé en fond */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10 pointer-events-none transition-transform duration-500 hover:opacity-50 hover:scale-110"
        style={{
          backgroundImage: "url('/src/assets/certfif1.png')", // Remplacez par le chemin correct
          backgroundSize: "60%",
          backgroundPosition: "center top",
        }}
      ></div>

      {/* Animation lumineuse */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-accent1/30 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-40 pointer-events-none"
        style={{
          backgroundBlendMode: "screen",
        }}
      ></div>

      {/* Texte d'introduction */}
      <p className="text-lg font-code text-accent1 mb-2 relative z-10">
        Bienvenue, je suis
      </p>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-retro text-primary mb-4 relative z-10">
        Brydel Fosso.
      </h1>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-code text-textSecondary mb-6 relative z-10">
        Je développe des systèmes embarqués.
      </h2>
      <p className="text-lg sm:text-xl font-code text-textSecondary max-w-2xl mb-8 relative z-10">
        Passionné par l'IoT et l'automatisation, je crée des solutions innovantes pour répondre à vos besoins.
      </p>
      <div className="relative z-10">
        <a
          href="#contact"
          className="bg-transparent text-textPrimary px-6 py-3 rounded-lg text-lg font-code shadow-custom-dark hover:bg-transparent transition-transform transform hover:scale-105"
        >
          Me Contacter
        </a>
      </div>
    </section>
  );
}

export default Hero;
