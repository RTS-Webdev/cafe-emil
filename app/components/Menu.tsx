import Link from "next/link"
import { menu } from "../constants"

export default function Component() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8 lg:p-16">
      <header className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-serif mb-4 text-gray-900">Menukort</h1>
        <p className="text-sm text-gray-600 mb-6 text-balance">
          Vi brænder for at skaffe friske ingredienser, kombinere dem med traditionelle smagsvarianter og konstant udvikle
          vores menukort for at skabe en spiseoplevelse, der er helt unik.
        </p>
        <div className="flex justify-center gap-8 text-sm">
          <span className="text-gray-900 border-b-2 border-gray-900 pb-1">SPISEKORT</span>
          <span className="text-gray-600">DRIKKELSE</span>
          <span className="text-gray-600">VINE</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto bg-[#1c1c1c] text-white p-12 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 items-start">
          {menu.map((section) => (
            <MenuSection
              key={section.category}
              title={section.category.toUpperCase()}
              subtitle={section.subtitle}
              items={section.items.map(item => ({ ...item, price: item.price.toString() }))}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface MenuSectionProps {
  title: string
  subtitle?: string
  items: {
    name: string
    description?: string
    price: string
  }[]
}

function MenuSection({ title, subtitle, items }: MenuSectionProps) {
  return (
    <section className="">
      <h2 className="text-xl font-serif mb-2 tracking-wide text-[#e63946] text-balance">{title}</h2>
      {subtitle && <p className="text-sm text-gray-400 mb-2">{subtitle}</p>}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between items-baseline">
              <Link href={`menu/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-white">{item.name}</Link>
              <span className="text-white ml-4">{item.price},-</span>
            </div>
            {item.description && <p className="text-sm text-gray-400">{item.description}</p>}
            {index < items.length - 1 && <hr className="my-2 border-gray-700" />}
          </div>
        ))}
      </div>
    </section>
  )
}