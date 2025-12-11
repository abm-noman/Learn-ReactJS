import { AiFillStar } from "react-icons/ai"
import { BsFillBagPlusFill } from "react-icons/bs"

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
            <section className="card">
          <img src={img} alt={title} />
          <div className="card_details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />{star}
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <span className="prev-price"><del>{prevPrice}</del> </span>
                <span className="new-price">{newPrice}</span>
              </div>

              <div className="bag">
                <BsFillBagPlusFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
  )
}

export default Card
