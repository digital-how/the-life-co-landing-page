export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4" style={{ color: '#01609C' }}>
              TheLifeCo
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming lives through sustainable wellness and medically-supervised detox programs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#01609C] transition-colors">7-Day Intensive</a></li>
              <li><a href="#" className="hover:text-[#01609C] transition-colors">14-Day Reset</a></li>
              <li><a href="#" className="hover:text-[#01609C] transition-colors">21-Day Journey</a></li>
              <li><a href="#" className="hover:text-[#01609C] transition-colors">Virtual Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#01609C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#01609C] transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-[#01609C] transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-[#01609C] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#01609C] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#01609C] transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-[#01609C] transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-[#01609C] transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 TheLifeCo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#01609C] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#01609C] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#01609C] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}