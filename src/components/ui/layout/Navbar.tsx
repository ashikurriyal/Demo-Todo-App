import Logo from "@/assets/Logo";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <Logo className="h-10 w-10"/>
        <span className="text-xl font-bold tracking-tight">TaskFlow</span>
      </div>
    </nav>
  );
}
