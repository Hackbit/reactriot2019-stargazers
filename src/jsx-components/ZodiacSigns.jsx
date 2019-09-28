import React, { Component } from 'react';
import ZodiacSignTemplete from './ZodiacSignTemplete';
import '../css-components/ZodiacSigns.css'
class ZodiacSigns extends Component {
    render() {
        return (
            <div className="Zodiac-Sign">
                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/28/22/02/aries-2549974_960_720.png"
                    signName="ARIES "
                    dateRange="March 21 - April 19"
                    signDetails="Aries rules the head and leads with the head, often literally walking head first, leaning forwards for speed and focus. Its representatives are naturally brave and rarely afraid of trial and risk. They possess youthful strength and energy, regardless of their age and quickly perform any given tasks."
                />
                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/28/22/46/taurus-2550112_960_720.png"
                    signName="Taurus"
                    dateRange="April 20 - May 20"
                    signDetails="A Taurus is the most stubborn of them all. They know what they are doing. They have good work ethics and love to indulge in finer things of life. They usually don’t open up too well but they do expect loyalty from the ones close to them. So, consider yourself lucky if they let you see a different part of them because you must be really special."
                />

                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/28/23/22/gemini-2550197_960_720.png"
                    signName="Gemini"
                    dateRange="May 21 - June 20"
                    signDetails="Geminis possess a split personality. At times they will be outgoing and high on life. and meeting new people, again at times, they will be reserved and won’t be seen socializing much. They have a charismatic and captivating personality that draws people towards them. Usually, they are warm and friendly but, won’t open their strong independent side."
                />
                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/29/13/07/cancer-2551431_960_720.png"
                    signName="Cancer"
                    dateRange="June 21 -  July 22"
                    signDetails="Although Cancereons may come across as sensitive dependable, all they want is beloved. It is kind of difficult to understand their personality. They can be too friendly with a person, at the same time struggle opening up to that very same person. They are friendly and vulnerable at the same time."
                />

                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/29/12/19/leo-2551352_960_720.png"
                    signName="Leo"
                    dateRange="July 23 - August 22"
                    signDetails="Leos just love the limelight. They love attention and love it when they are the center of attraction. But, once you get to know them, they are most lovable and warm individuals you’ll ever come across. Any Leo is a people person and is usually the life of the party. Although, their independent personality makes them hard to approach and can be difficult at times."
                />
                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/29/18/09/virgo-2552259_960_720.png"
                    signName="Virgo"
                    dateRange="August 23 - September 22"
                    signDetails="Virgos are extremely practical-minded. They usually come across as uptight and rigid and always finds a logical solution to every problem. So, next you have a problem to be solved, just call a Virgo. They do not allow their emotions to come in their way. They enjoy having intelligent conversations."
                />

                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/29/19/42/libra-2552502_960_720.png"
                    signName="Libra"
                    dateRange="September 23 - October 22"
                    signDetails="Librans are quite collective by nature. They are always on their right mind. They avoid drama at any circumstances and always leave their personality mark wherever they go. On the contrary to Leos, they are quite approachable and are easy to talk to. Libras worship balance in life."
                />
                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/29/16/44/scorpio-2552035_960_720.png"
                    signName="Scorpio"
                    dateRange="October 23 - November 21"
                    signDetails="Their mysterious nature is what makes them so alluring. At times, they can be extremely difficult to read. They can even seduce their way out. Their sweet innocent side can turn into vengeful and spiteful in a fraction of a second if, you ever trigger anger in them."
                />

                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/29/12/37/sagittarius-2551400_960_720.png"
                    signName="Sagittarius"
                    dateRange="November 22 - December 21"
                    signDetails="They love to live life to the fullest. They are active personalities and love challenges and adventures. They hate being still can get bored very easily. It is important for them to keep themselves around people and they just love to talk. So, whoever wants to befriend them make sure to keep up with their fast pace life."
                />
                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/29/18/41/capricorn-2552366_960_720.png"
                    signName="Capricorn"
                    dateRange="December 22 -  January 19"
                    signDetails="They are ambitious, strong willed and hardworking sign. Sometimes, they are too caught up with work to the extent it’s difficult to pull them out from their office chair. Although they are quite dedicated to their loved ones and will never fail to show that how much they adore that person."
                />
                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/29/13/24/aquarius-2551502_960_720.png"
                    signName="Aquarius"
                    dateRange="January 20 - February 18"
                    signDetails="If you want to be friends with an Aquarius then you better have an open mind and should love intellectual conversations. They love to learn and gather knowledge on culture, people and the world. They are in fact, the most interesting people you’ll ever meet."
                />
                <ZodiacSignTemplete
                    imgURL="https://cdn.pixabay.com/photo/2017/07/29/15/56/pisces-2551918_960_720.png"
                    signName="Pisces"
                    dateRange="February 19 - March 20"
                    signDetails="They are imaginative and would love live in a fantastical world. This often makes them daydream and their approach towards life may seem impractical. No matter what, they have a lovable nature and never ever leave the side of their loved ones."
                />

            </div>

        );
    }
}

export default ZodiacSigns;