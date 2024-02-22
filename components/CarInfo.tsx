"use client";

import { CarProps } from '@/types';
import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';



interface CarInfoProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps
}
const CarInfo = ({ isOpen, closeModal, car }: CarInfoProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='Opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25'>

            </div>
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'></div>

          </div>
        </Dialog>
      
      </Transition>
    </>
    )
}

      export default CarInfo