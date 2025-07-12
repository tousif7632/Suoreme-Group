export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-white to-blue-100 h-150 flex items-center justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-32 items-center mb-40">
          {/* Logo + Name */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-8">
              {/* Logo Circle with S */}
              <div className="w-16 h-16 rounded-full border-2 border-[#0072c6] flex items-center justify-center">
                <span className="text-3xl font-bold text-[#0072c6]">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#0072c6] leading-none">SUPREME</span>
                <span className="text-base font-semibold text-[#0072c6] leading-none">GROUP</span>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-black mb-6 uppercase tracking-wide text-xl">Applications</div>
            <ul className="space-y-4">
              <li className="text-gray-700 text-base">Apparel</li>
              <li className="text-gray-700 text-base">Automotive</li>
              <li className="text-gray-700 text-base">Filtration</li>
              <li className="text-gray-700 text-base">Customised Nonwoven</li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-black mb-6 uppercase tracking-wide text-xl">Company</div>
            <ul className="space-y-4">
              <li className="text-gray-700 text-base">Who We Are</li>
              <li className="text-gray-700 text-base">Global Competency</li>
              <li className="text-gray-700 text-base">Innovation</li>
              <li className="text-gray-700 text-base">ESG Impact</li>
            </ul>
          </div>

          {/* More */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-black mb-6 uppercase tracking-wide text-xl">More</div>
            <ul className="space-y-4">
              <li className="text-gray-700 text-base">Contact Us</li>
              <li className="text-gray-700 text-base">Careers</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-black mb-6 uppercase tracking-wide text-xl">Follow Us</div>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#0072c6] transition-colors text-base">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-32 border-t-2 border-blue-200 pt-20 gap-10">
          <div className="text-gray-700 text-base font-semibold text-center">©2025 Supreme Group. All Rights Reserved.</div>
          <div className="text-gray-700 text-base font-semibold text-center md:text-right">Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</div>
        </div>
      </div>
    </footer>
  );
} 