import Searchbar from '@/components/Searchbar'

export default function Home() {
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className='bg-black w-full h-full lg:bg-opacity-45'>

                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-20 lg:h-2/5 lg:max-w-4xl rounded-md w-full'>
                        <h2 className="text-white text-4xl mb-8 font-semobold">
                            Pick User
                        </h2>

                        <Searchbar />
                    </div>

                </div>
            </div>
        </div>
    )
}
