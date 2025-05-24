import cactusImg from '../../assets/Cactus.jpg'

const Card = () => {
    return(
        <section className='w-[368px] rounded-xl shadow-[8px_8px_20px_0px_rgba(85,_85,_0,_0.08)] font-display'>
            <figure className='py-4 px-4'>
                <img className='rounded-sm' src={cactusImg} alt="A picture of a cactus" />
            </figure>
            <span className='py-1.5 px-4 ml-4 bg-light-purple text-purple font-bold text-xs rounded-full'>Design</span>
            <h1 className='pt-4 px-4 text-lg font-semibold'>Embracing Minimalism</h1>
            <p className='block pt-1.5 px-4 font-light text-sm text-dark-gray mb-5'>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
            <div className=' relative after:content-[""] after:block after:mt-5 after:w-full after:h-[1px] after:bg-light-gray pb-5'></div>
            <span className='pb-5 px-4 block text-xs text-dark-gray'>Annie Spratt</span>
        </section>
    )
}

export { Card }