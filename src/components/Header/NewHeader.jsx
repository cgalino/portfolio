/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import TypingAnimationHeader from './TypingAnimationHeader'
import { useTranslation } from "react-i18next";

const navigation = [
    { name: 'Conóceme', href: '#about' },
    { name: 'Habilidades', href: '#SoftSkills' },
    { name: 'Conocimientos', href: '#HardSkills' },
    { name: 'Proyectos', href: '#Projects' }
]

export default function NewHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { t } = useTranslation();

    let animationTexts = [
        t("hola"),
        t("holaSoy")
    ]

    return (
        <div>
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Carles Galino</span>
                    <img className="h-4" src="./img/logo.svg" alt="" />
                </a>
            </div>
            <div className="px-6 pt-6 lg:px-8">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Carles Galino</span>
                                <img className="h-16" src="./img/logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Abrir menú</span>
                                <Bars3Icon className="h-6 w-6 text-gray-200" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-2">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="font-semibold rounded-3xl px-4 py-2 text-gray-300 hover:text-gray-800 hover:bg-gray-300 hover:shadow-xl">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-black px-6 py-6 lg:hidden">
                            <div className="flex h-9 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Carles Galino</span>
                                        <img className="h-16" src="./img/logo.svg" alt="" />
                                    </a>
                                </div>
                                <div className="flex">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="my-6  divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-400 hover:bg-gray-400/10 hover:shadow-xl"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>
            <main className='overflow-hidden'>
                <div className="relative flex justify-center px-6 lg:px-8">
                    <div className="min-h-screen max-w-3xl flex flex-row justify-center items-center">
                        <div className='m-auto'>
                            <div className="my-8 flex justify-center">
                                <div className="relative rounded-full py-2 px-4 text-md sm:text-xl leading-6 bg-gray-900 shadow-xl">
                                    <span className="text-gray-300">
                                        Frontend Developer
                                        <a href="#" className="font-semibold text-indigo-600">

                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    <TypingAnimationHeader texts={animationTexts} />
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-400 sm:text-center">
                                    Desarrollador web apasionado por la tecnología y la programación
                                </p>
                                <div className="mt-8 flex gap-x-4 justify-center">
                                    <a
                                        href="#about"
                                        className="inline-block rounded-lg bg-gradient-to-r text-sm from-blue-600 to-purple-600 drop-shadow-md  shadow-cla-blue px-4 py-1.5 text-base shadow-xl leading-7 text-white hover:bg-indigo-700"
                                    >
                                        Conóceme{' '}
                                    </a>
                                    <a
                                        title="Descargar CV" href="CarlesGalinoCV.pdf"
                                        className="inline-block truncate rounded-lg bg-gradient-to-r text-sm from-purple-600 to-blue-600 drop-shadow-md  shadow-cla-blue px-4 py-1.5 text-base shadow-xl leading-7 text-white hover:bg-indigo-700"
                                    >
                                        Descargar CV
                                    </a>
                                </div>
                            </div>
                            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                                <svg
                                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                    viewBox="0 0 1155 678"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                        fillOpacity=".3"
                                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                            x1="1155.49"
                                            x2="-78.208"
                                            y1=".177"
                                            y2="474.645"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#9089FC" />
                                            <stop offset={1} stopColor="#FF80B5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
