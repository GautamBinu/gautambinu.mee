
const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-10 border-t border-white/10">
      <div className="flex justify-between items-center">
        <p className="text-xs tracking-wide opacity-60">
          © GAUTAM BINU {new Date().getFullYear()}
        </p>
        
        <div className="flex space-x-6">
          <a href="https://github.com/GautamBinu" className="text-xs tracking-wide opacity-60 hover:opacity-100 transition-opacity">
            GITHUB
          </a>
          <a href="https://www.instagram.com/gautam.binu/" className="text-xs tracking-wide opacity-60 hover:opacity-100 transition-opacity">
            INSTAGRAM
          </a>
          <a href="https://www.linkedin.com/in/gautambinu/" className="text-xs tracking-wide opacity-60 hover:opacity-100 transition-opacity">
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
