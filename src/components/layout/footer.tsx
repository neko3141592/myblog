export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white text-center text-xs mt-8 rounded-t-sm shadow">
      <div>
        &copy; {new Date().getFullYear()} neko3141592 All rights reserved.
      </div>
    </footer>
  );
}