import React from "react";
import Login from "../../Auth/login";

export default function Header({ user }) {
    return (
        <>
            <nav
                className="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
                data-te-navbar-ref
            >
                <div className="flex w-full flex-wrap items-center justify-between px-6">
                    <button
                        className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </button>
                    <div
                        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent1"
                        data-te-collapse-item
                    >
                        <a
                            className="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
                            href="#"
                        >
                            <span className=" font-bold from-neutral-500">
                                Zatec Music
                            </span>
                        </a>
                        <ul
                            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                            data-te-navbar-nav-ref
                        >
                            <li className="lg:pr-2" data-te-nav-item-ref>
                                <a
                                    className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    href="/"
                                    data-te-nav-link-ref
                                >
                                    Search
                                </a>
                            </li>

                            {user && (
                                <>
                                    <li
                                        className="lg:pr-2"
                                        data-te-nav-item-ref
                                    >
                                        <a
                                            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                            href="/favourite/album"
                                            data-te-nav-link-ref
                                        >
                                            My Albums
                                        </a>
                                    </li>
                                    <li
                                        className="lg:pr-2"
                                        data-te-nav-item-ref
                                    >
                                        <a
                                            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                            href="/favourite/artist"
                                            data-te-nav-link-ref
                                        >
                                            My Artists
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className="relative flex items-center">
                        {user && (
                            <>
                                <a className=" p-4 mx-2" href="/signout">
                                    Sign out
                                </a>
                                <div className="relative" data-te-dropdown-ref>
                                    <a
                                        className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                                        href="#"
                                        id="dropdownMenuButton2"
                                        role="button"
                                        data-te-dropdown-toggle-ref
                                        aria-expanded="false"
                                    >
                                        <img
                                            src={user.avatar}
                                            className="rounded-full"
                                            height={"25px"}
                                            width={"25px"}
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                    <ul
                                        className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                        aria-labelledby="dropdownMenuButton2"
                                        data-te-dropdown-menu-ref
                                    >
                                        <li>
                                            <a
                                                className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                                href="#"
                                                data-te-dropdown-item-ref
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                                href="#"
                                                data-te-dropdown-item-ref
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                                href="#"
                                                data-te-dropdown-item-ref
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}

                        {!user && <Login />}
                    </div>
                </div>
            </nav>
        </>
    );
}

{
    /* <nav
className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
aria-label="Global"
>
<div className="flex lg:flex-1">
    <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
        />
    </a>
</div>
<div className="flex lg:hidden">
    <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    >
        <span className="sr-only">Open main menu</span>
        <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
    </button>
</div>
<div className="hidden lg:flex lg:gap-x-12">
    <div className="relative">
        <button
            type="button"
            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            aria-expanded="false"
        >
            Product
            <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>

       
    </div>

    <a
        href="#"
        className="text-sm font-semibold leading-6 text-gray-900"
    >
        Features
    </a>
    <a
        href="#"
        className="text-sm font-semibold leading-6 text-gray-900"
    >
        Marketplace
    </a>
    <a
        href="#"
        className="text-sm font-semibold leading-6 text-gray-900"
    >
        Company
    </a>
</div>
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
    {!data.user && <Login />}
    {data.user && (
       
       
            <a
        href="#"
        className="text-sm font-semibold leading-6 text-gray-900"
    >
        {data.user.name}<span aria-hidden="true">&rarr;</span>
    </a>

    )}

</div>
</nav> */
}
