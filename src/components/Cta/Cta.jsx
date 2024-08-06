import "./Cta.css"

function Cta(){
    return(
        <div className='cta'>
            <div className='container'>
                <div className='cta__section'>
                    <div className='cta__section__text'>
                        <h2>Qabulga ro’yxatdan o’ting</h2>
                    </div>
                    <div className='cta__section__button'>
                        <button className='cta__section__button1'>Qo’ng’iroq qilish</button>
                        <button className='cta__section__button2'>Telegramdan yozish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta