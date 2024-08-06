import "./Hero.css"
import HeroImg from './hero.svg'

function Hero(){
    return(
        <div className='hero'>
            <div className='container'>
                <div className='hero__column'>
                    <div className='hero__text'>
                        <h3>Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.</h3>
                        <p>Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p uchraydigan kasalliklarni
                            yengishda yordam beradi. Sog’ligingizni o’z ishining professionallariga ishonib
                            topshiring.</p>
                        <button className='button'>Qabulga yozilish</button>
                    </div>
                    <div className='hero__img'>
                        <img src={HeroImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero