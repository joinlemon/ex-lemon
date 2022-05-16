export const Footer = () => {
    return (
        <footer className="w-full p-5 text-white footer-section">
            <h1 className="mb-1 text-2xl font-black text-white drop-shadow-lg">
                🍋 Lemon
            </h1>
            <div className="flex flex-col">
                <h2 className="border-b border-white/20 py-1 mb-2 text-lg font-light text-white">Link group here</h2>
                <p className="text-sm">Link</p>
                <p className="text-sm">Longer link</p>
                <p className="text-sm">Link</p>
                <br/>
                <h2 className="border-b border-white/20 py-1 mb-2 text-lg font-light text-white">Link group here</h2>
                <p className="text-sm">Link</p>
                <p className="text-sm">Longer link</p>
                <p className="text-sm">Link</p>
            </div>
        </footer>
    )
}