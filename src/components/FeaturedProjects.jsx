import React from 'react'

const projects = [
  {
    title: 'Optimasi Funnel Onboarding',
    role: 'Lead UX',
    metric: '+42% konversi',
    details: 'Melalui eksperimen A/B dan perbaikan microcopy',
  },
  {
    title: 'Dashboard Prediktif Churn',
    role: 'Data Product',
    metric: '-18% churn',
    details: 'Model XGBoost + segmentasi perilaku pelanggan',
  },
  {
    title: 'Sistem Design Tokens',
    role: 'Design System',
    metric: '3x lebih cepat',
    details: 'Skalabilitas komponen lintas produk',
  },
]

const FeaturedProjects = () => {
  return (
    <section id="proyek-unggulan" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Proyek Unggulan</h2>
          <p className="text-sm text-gray-500">Maksimal 3 kartu proyek</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0,3).map((p, i) => (
            <article key={i} className="group border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug max-w-[70%]">{p.title}</h3>
                <span className="text-[11px] uppercase tracking-wide text-gray-500">{p.role}</span>
              </div>
              <p className="text-4xl font-extrabold text-gray-900 mb-2 leading-none">{p.metric}</p>
              <p className="text-sm text-gray-600">{p.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
