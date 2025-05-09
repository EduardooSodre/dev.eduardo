/* eslint-disable @next/next/no-img-element */
const SocialMedia = () => {
  return (
    <div className="mt-10 flex space-x-4">
      <a href="https://www.instagram.com/eduardo.s.dev_" className="group">
        <div className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center hover:bg-gray-700 transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            className="w-4 h-4 group-hover:scale-110 transition-transform"
          />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/eduardo-sodr%C3%A9-65bb30293/"
        className="group">
        <div className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center hover:bg-gray-700 transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-4 h-4 group-hover:scale-110 transition-transform"
          />
        </div>
      </a>

      <a href="https://github.com/EduardooSodre" className="group">
        <div className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center hover:bg-gray-700 transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            className="w-4 h-4 group-hover:scale-110 transition-transform"
          />
        </div>
      </a>

      <a href="https://www.behance.net/eduardosodr3" className="group">
        <div className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center hover:bg-gray-700 transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145799.png"
            alt="Behance"
            className="w-4 h-4 group-hover:scale-110 transition-transform"
          />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
