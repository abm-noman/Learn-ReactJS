import { AiFillStar } from "react-icons/ai"
import { BsFillBagPlusFill } from "react-icons/bs"

const Card = () => {
  return (
            <section className="card">
          <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />
          <div className="card_details">
            <h3 className="product-title">Nike Air Max 270</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <span className="prev-price"><del>$250.00</del> </span>
                <span className="new-price">$200.00</span>
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
