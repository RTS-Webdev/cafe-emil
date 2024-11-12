"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Utensils } from 'lucide-react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
interface MenuItem {
    name: string
    price: string
    description: string
    category: string
}

export default function MenuItemPage() {
    const router = useRouter()
    const [menuItem, setMenuItem] = useState<MenuItem | null>(() => {
        try {
            const storedItem = localStorage.getItem('selectedMenuItem')
            if (storedItem) {
                localStorage.removeItem('selectedMenuItem')
                return JSON.parse(storedItem)
            }
        } catch (error) {
            console.error('Error reading from localStorage:', error)
        }
        return null
    })

    useEffect(() => {
        if (!menuItem) {
            router.push('/')
        }
    }, [menuItem, router])

    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="mt-24">
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <Image
                                    src={"/img.svg"}
                                    alt={menuItem?.name || ''}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover mx-auto"
                                />
                            </div>
                            <div className="md:w-1/2 p-6 flex flex-col justify-center items-start text-balance">
                                <header className="mb-4 flex justify-between">
                                    <div>
                                        <h1 className="text-2xl font-bold">{menuItem?.name}</h1>
                                        <section className="mt-2">
                                            <p className="text-sm text-gray-600 mb-4">{menuItem?.category}</p>
                                        </section>
                                        <p className="text-lg mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel dolores dolore voluptatem odit harum illum possimus nulla ab obcaecati ratione!</p>
                                    </div>
                                    <span className="text-2xl font-bold">{menuItem?.price},-</span>
                                </header>
                                <footer className="mt-4 flex justify-between gap-2">
                                    <button className="bg-[#1c1c1c] hover:bg-[#1c1c1c]/80 transition-colors duration-500 text-white py-2 px-4 rounded flex items-center justify-center">
                                        <Utensils className="mr-2 h-4 w-4" /> Tilføj til ordre
                                    </button>
                                    <button className="bg-[#1c1c1c] hover:bg-[#1c1c1c]/80 transition-colors duration-500 text-white py-2 px-4 rounded flex items-center justify-center">
                                        <Link href="/">Gå tilbage</Link>
                                    </button>
                                </footer>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

