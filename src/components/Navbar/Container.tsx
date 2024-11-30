
import Controls from "../Controlls";

interface Props{
    children: React.ReactNode;
}
export function Container({children}:Props) {
  return (
    <header className="bg-transparent fixed z-10 flex gap-2 pl-4 items-center h-14">
        {children}
        <Controls />
    </header>
  )
}
