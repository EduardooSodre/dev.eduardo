// Button wrapper utilities for site

const ButtonHome = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="https://wa.me/18996198597"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm font-medium shadow-sm transition-colors"
      >
        Fale comigo
      </a>

      <a
        href="/Eduardo_Sodre_Desenvolvedor_Frontend_Nextjs.pdf"
        download
        className="inline-flex items-center gap-2 px-5 py-2 border border-neutral-700 text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors"
      >
        Download CV
      </a>
    </div>
  );
};

export { ButtonHome };

const ButtonHireMe = () => {
  return (
    <div>
      <a
        href="https://wa.me/18996198597"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm font-medium"
      >
        Fale comigo
      </a>
    </div>
  );
};

export { ButtonHireMe };
