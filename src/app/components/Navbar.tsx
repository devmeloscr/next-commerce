import Link from "next/link";
import {SignedIn, SignedOut, UserButton, SignInButton} from "@clerk/nextjs";
import { useCartStore } from "@/store";
import Image from "next/image";

function Navbar() {
    //const useStore = useCartStore(); 

    return (
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>
          <Link href='/' className='uppercase font-bold text-md h-12 flex items-center'>
              Next Store
          </Link>
          <div className="flex items-center gap-8">
            <div className="flex items-center hover:cursor-pointer relative">
                <Image
                    src="cart.svg"
                    alt="Cart Icon"
                    width={24}
                    height={24}
                    //onClick={() => useCartStore.getState().toggleCart()}
                >
                </Image>
                <span className='bg-teal-600 text-xs font-bold rounded-full h-4 w-4 text-center absolute left-4 bottom-3'>2</span>
            </div>
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut >
                    <SignInButton mode="modal"> 
                        <button className='border rounded-md border-gray-400 px-3 py-2 flex items-center'>
                            Fazer Login
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;