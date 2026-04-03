
const Footer: React.FC = () => {
    return (
        <footer className="border-t border-[#141414] py-12 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-linear-to-br from-[#e8733a] to-[#c45e2a] rounded-lg flex items-center justify-center">
                            <span className="text-white font-extrabold text-xs">D</span>
                        </div>
                        <span className="font-bold font-montserrat text-lg">Dragg</span>
                    </div>
                    <p className="text-xs font-open-sans text-[#555] leading-relaxed max-w-[200px]">
                        Build Telegram Mini-Apps without coding. Deploy to the TON ecosystem in seconds.
                    </p>
                </div>
                {[
                    { title: 'Product', links: ['Features', 'Pricing', 'Components', 'Changelog'] },
                    { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
                    { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Status'] },
                ].map((col, i) => (
                    <div key={i}>
                        <h4 className="text-xs font-semibold font-montserrat text-[#888] mb-3 tracking-wider uppercase">
                            {col.title}
                        </h4>
                        <div className="flex flex-col gap-2">
                            {col.links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-xs text-[#555] hover:text-[#e8733a] transition-colors no-underline"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#444]">© 2024 Dragg. All rights reserved.</p>
                <div className="flex gap-4">
                    {['𝕏', 'in', 'f', '○'].map((icon, i) => (
                        <span key={i} className="text-sm text-[#444] cursor-pointer hover:text-[#e8733a] transition-colors">
                            {icon}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
