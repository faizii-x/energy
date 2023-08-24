import { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";

export default function Drawer({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <div className="h-6 w-6 text-white" aria-hidden="true">
                          X
                        </div>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#240060] py-3 shadow-xl">
                    <div className="container grid grid-cols-1 p-4">
                      <Link href="/">
                        <h2 className="text-white font-nunito mt-6">Home</h2>
                      </Link>
                      <Link href="/compaign">
                        <h2 className="text-white font-nunito mt-2">
                          Compaigns
                        </h2>
                      </Link>
                      <Link href="/refferal">
                        <h2 className="text-white font-nunito mt-2">
                          Refferals
                        </h2>
                      </Link>
                      <Link href="/promotion">
                        <h2 className="text-white font-nunito mt-2">
                          Promotions
                        </h2>
                      </Link>
                      <Link href="/blog">
                        <h2 className="text-white font-nunito mt-2">Blog</h2>
                      </Link>
                      <Link href="/contact">
                        <h2 className="text-white font-nunito mt-2">Contact</h2>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
