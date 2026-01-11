import Logo from "@/assets/Logo";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
      <div className="flex items-center">
        <Logo className="h-10 w-10" />
        <span className="text-xl font-bold tracking-tight">TaskFlow</span>
      </div>
      <Link to="/tasks"> Tasks</Link>
      <Link to="/users"> Users</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
