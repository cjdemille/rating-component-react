import { useState } from "react";
import './Card.css'

export default function Card() {
    const [submitted, setSubmitted] = useState(false);
    const [rating, setRating] = useState(3);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(!submitted)
    }
    if (!submitted) {
        return (
            <section className="Card">
                <div className="Card__icon-holder">
                    <img src="../public/icon-star.svg" alt="star icon" className="Card__icon" />
                </div>
                <h1 className="Card__heading">
                    How did we do?
                </h1>
                <p className="Card__text">
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <form action="#" className="rating-form" value={rating} onChange={(e) => setRating(e.target.value)} onSubmit={(e) => handleSubmit(e)}>
                    <input type="radio" id="1" className="form__input" name="rating" value="1" /><label className="form__label" htmlFor="1">1</label>
                    <input type="radio" id="2" className="form__input" name="rating" value="2" /><label className="form__label" htmlFor="2">2</label>
                    <input type="radio" id="3" className="form__input" name="rating" value="3" /><label className="form__label" htmlFor="3">3</label>
                    <input type="radio" id="4" className="form__input" name="rating" value="4" /><label className="form__label" htmlFor="4">4</label>
                    <input type="radio" id="5" className="form__input" name="rating" value="5" /><label className="form__label" htmlFor="5">5</label>
                    <button className="form__submit">submit</button>
                </form>
            </section >
        )
    } if (submitted) {
        return (
            <section className="Card">
                <img src="../public/illustration-thank-you.svg" alt="" className="Card__img" />
                <div className="Card__rating-submitted">
                    You selected {rating} out of 5
                </div>
                <h1 className="Card__heading -u-text-centered">
                    Thank You!
                </h1>
                <p className="Card__text -u-text-centered">
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!
                </p>
            </section >
        )
    }

}