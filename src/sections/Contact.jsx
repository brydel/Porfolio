function Contact() {
  return (
    <section
      id="contact"
      className="bg-background text-text min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 lg:px-24"
    >
      <h2 className="text-3xl sm:text-4xl font-retro text-primary mb-4 text-center">
        <span className="text-accent1 text-4xl mr-2">04.</span> Restons en contact
      </h2>
      <p className="text-md sm:text-lg text-text text-center max-w-xl mb-8 font-retro">
        Si vous avez des questions, des suggestions ou si vous souhaitez collaborer sur un projet, mon inbox est toujours ouverte. Je ferai de mon mieux pour vous répondre rapidement !
      </p>
      <a
        href="mailto:bsaounde@gmail.com"
        className="bg-transparent border border-primary text-primary px-8 py-3 rounded-lg font-code text-lg hover:bg-primary hover:text-background transition"
      >
        Envoyer un email
      </a>
    </section>
  );
}

export default Contact;
