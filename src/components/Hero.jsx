import React from 'react'

const Hero = ({ role = 'UX Designer' }) => {
  return (
    <section className="relative bg-white text-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 min-h-[75vh]">
          {/* Text Column */}
          <div className="order-2 md:order-1">
            <p className="uppercase tracking-widest text-xs md:text-sm text-gray-500 mb-3">Portofolio Pribadi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              {role} yang berfokus pada hasil, bukan sekadar deliverable
            </h1>
            <p className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base max-w-xl">
              Saya membantu tim mencapai target dengan pendekatan sistematis, data-driven, dan eksekusi yang presisi.
            </p>
            <div className="mt-6 md:mt-8 flex items-center gap-4">
              {/* Monochrome palette with a strong contrasting accent (black) */}
              <a
                href="#proyek-unggulan"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              >
                Lihat Proyek Terbaik
              </a>
              <span className="text-gray-400 text-xs md:text-sm">Tanpa scroll di bagian ini</span>
            </div>
          </div>

          {/* Photo Column */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full max-w-sm md:max-w-none md:w-4/5 ml-auto">
              <div className="absolute -inset-6 hidden md:block rounded-[2rem] bg-gradient-to-br from-gray-100 to-gray-200" aria-hidden></div>
              <div className="relative h-full w-full rounded-[2rem] bg-gray-100 border border-gray-200 overflow-hidden shadow-sm flex items-center justify-center">
                {/* Placeholder for professional photo */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 border border-gray-200" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-gray-900" />
                <p className="text-xs text-gray-700">Foto profesional • 300dpi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
