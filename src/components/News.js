import React from 'react'

function News() {
    return (
        <div>
            <div className='news-container margin-top'>
                <div className='news-image'>
                </div>
                <div className='news-info'>
                    <p className='news-info--title'>The all new C63S Coupe is available right now!</p>

                    <p className='news-info--text'>          Sportiness combined with emotion and intelligence – the C-Class Coupé facelift offers design and driving pleasure at the highest level. In addition to decided dynamism, the model's central characteristics are above all its sporty and racy design, innovative technologies and trailblazing safety.
           The Mercedes-AMG C 63 and the Mercedes-AMG C 63 S stand for performance at the very highest level that can be seen and experienced. High-tech components, some of which come from motorsports, and a progressive tuning take their power to the road. Their extreme dynamics can be recognized in every detail – with the facelift the dominant design has been further sharpened and now presents itself in a manner more striking and expressive than ever. And in the interior, too, the AMG feeling is perceptible in each and every detail – the result is a perfect fusion between first-class materials and sporty ambience.</p>
                    
                    <p className='news-info--data'>700 Nm</p>
                    <p className='news-info--data'>3.9s 0-100km/h</p>
                    <p className='news-info--data'>510 hp</p>

                    <a href='/' className='news-info--button'>Offers</a>
                </div>
            </div>
        </div>
    )
}

export default News
