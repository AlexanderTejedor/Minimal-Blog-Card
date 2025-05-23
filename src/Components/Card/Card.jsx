import cactusImg from '../../assets/Cactus.jpg'

const Card = () => {
    return(
        <section className=''>
            <figure>
                <img src={cactusImg} alt="A picture of a cactus" />
            </figure>
            <span>Design</span>
            <h1>Embracing Minimalism</h1>
            <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
            <span>Annie Spratt</span>
        </section>
    )
}

export { Card }