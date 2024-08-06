import "./Services.css"
import Img1 from "./Img1.svg"
import Img2 from "./Img2.svg"
import Img3 from "./Img3.svg"
import Img4 from "./Img4.svg"

function Services(){
    return(
        <div className="services">
            <div className='container'>
                <h2 className="services__text">Xizmatlar</h2>
                <div className='services__column'>
                    <div className='services__column__section'>
                        <div className='services__column__section__img'>
                            <img src={Img1} alt="Rasm bor"/>
                        </div>
                        <div className='services__column__section__text'>
                            <h3>Hijoma</h3>
                            <p>Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh
                                sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng
                                yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar
                                kunlaridir).</p>
                        </div>
                    </div>

                    <div className='services__column__section'>
                        <div className='services__column__section__img'>
                            <img src={Img2} alt="Rasm bor"/>
                        </div>
                        <div className='services__column__section__text'>
                            <h3>Manual terapiya</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus
                                placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere
                                lorem. Fusce sed massa sit amet elit viverra hendrerit.</p>
                        </div>
                    </div>

                    <div className='services__column__section'>
                        <div className='services__column__section__img'>
                            <img src={Img3} alt="Rasm bor"/>
                        </div>
                        <div className='services__column__section__text'>
                            <h3>Zuluk bilan davolash</h3>
                            <p>Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία — «davolash») —
                                ma’lum kasalliklarni dorivor zuluklar (Hirudo medicinalis) yordamida davolash
                                usuli. Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar
                                ushbu kichik sinf chuvchalchanglariga oid yagona tur hisoblanadi, qolganlari
                                shifobaxsh ta’sir ko’rsatmaydi.</p>
                        </div>
                    </div>

                    <div className='services__column__section'>
                        <div className='services__column__section__img'>
                            <img src={Img4} alt="Rasm bor"/>
                        </div>
                        <div className='services__column__section__text'>
                            <h3>Tabiiy dori vositalari</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla ac metus placerat, pellentesque enim ac, rhoncus
                                lectus. Maecenas et posuere lorem. Fusce sed massa sit
                                amet elit viverra hendrerit.</p>
                        </div>
                    </div>
                </div>
                <button className='button services__button'>Qabulga yozilish</button>
            </div>
        </div>
    )
}

export default Services