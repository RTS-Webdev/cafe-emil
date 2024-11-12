"use client"

import { ChevronRight } from "lucide-react"
import { drikkevarer, madvarer } from "../constants"
import { useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "./ui/Tabs"
import { TabsContent } from "@radix-ui/react-tabs"

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
                    <Tabs defaultValue="spisekort" className="">
                        <TabsList>
                            <TabsTrigger value="spisekort">MAD</TabsTrigger>
                            <TabsTrigger value="drikkevarer">DRIKKEVARER</TabsTrigger>
                            <TabsTrigger value="vine">VINE</TabsTrigger>
                        </TabsList>
                        <TabsContent value="spisekort">
                            <div className="mx-auto bg-[#1c1c1c] text-white p-12 rounded-lg shadow-xl md:min-w-[80rem]">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 items-start">
                                    {madvarer.map((section) => (
                                    <MenuSection
                                        key={section.category}
                                        title={section.category.toUpperCase()}
                                        subtitle={section.subtitle}
                                        items={section.items.map(item => ({ ...item, price: item.price.toString() }))}
                                        />
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="drikkelse"></TabsContent>
                        <TabsContent value="vine"></TabsContent>
                    </Tabs>
                </div>
            </header>
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
    const router = useRouter()

    const handleItemClick = (item: MenuSectionProps['items'][0]) => {
        localStorage.setItem('selectedMenuItem', JSON.stringify({
            name: item.name,
            price: item.price,
            description: item.description || '',
            category: title,
        }))

        router.push('/menu')
    }

    return (
        <section>
            <h2 className="text-xl font-serif mb-4 tracking-wide text-[#6ae639] text-balance">{title}</h2>
            {subtitle && <p className="text-sm text-gray-400 mb-4 text-left">{subtitle}</p>}
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={index} className="mb-2">
                        <div className="flex justify-between items-baseline">
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleItemClick(item)
                                }}
                                className="text-white hover:text-[#6ae639] transition-colors duration-200 flex items-center group"
                            >
                                {item.name}
                                <ChevronRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </a>
                            <span className="text-white ml-4">{item.price},-</span>
                        </div>
                        {item.description && <p className="text-sm text-gray-400 text-left">{item.description}</p>}
                        {index < items.length - 1 && <hr className="my-2 border-gray-700" />}
                    </div>
                ))}
            </div>
        </section>
    )
}