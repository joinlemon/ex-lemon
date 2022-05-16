import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="border border-black/20 backdrop-blur-sm bg-white/80 flex justify-between items-center py-4 px-2 z-10 shadow-xl rounded-xl fixed top-0 left-0 right-0 w-11/2 m-4 mx-10">
            <div className="flex items-center w-fit h-10 px-4 py-2 mx-2 rounded-lg hover:drop-shadow-lg text-3xl"><Link href="/">🍋</Link></div>
            <div className="flex">
                <div className="flex items-center w-fit h-10 px-4 py-2 mx-1 rounded-lg hover:bg-black/10"><Link href="/">Link</Link></div>
                <div className="flex items-center w-fit h-10 px-4 py-2 mx-1 rounded-lg hover:bg-black/10"><Link href="/">Link</Link></div>
                <div className="flex items-center w-fit h-10 px-4 py-2 mx-1 rounded-lg hover:bg-black/10"><Link href="/">Link</Link></div>
            </div>
        </nav>
    )
}