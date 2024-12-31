import logo from '../assets/logo.png'; // Assurez-vous que le chemin est correct

function Loader() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <img
        src={logo}
        alt="Logo"
        className="h-160 w-160 animate-pulse"
      />
    </div>
  );
}

export default Loader;
