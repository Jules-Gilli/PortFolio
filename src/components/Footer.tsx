export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.05] py-6 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Jules Gilli
        </p>
      </div>
    </footer>
  );
}
