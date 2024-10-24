const Footer = () => {
  return (
    <footer className="bg-white border-t py-4 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <span>&copy; </span>
        <a 
          href="https://lyvena.xyz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          Lyvena
        </a>
        <span>. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;