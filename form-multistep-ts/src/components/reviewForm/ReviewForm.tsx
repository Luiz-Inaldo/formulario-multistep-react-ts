// icons
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

// css
import './ReviewForm.css'

type ReviewProps = {
  data: {
    review: string,
    comment: string
  },
  updateFieldHandler: (key: string, value: string) => void
}

export const ReviewForm = ({ data, updateFieldHandler }: ReviewProps) => {
  return (
    <div className="review-form">
      <div className='form-control score-container'>
        <label className="radio-container">
          <input type="radio" value='unsatisfied' name='review' required />
          <BsFillEmojiFrownFill />
          <p>insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='neutral' name='review' required />
          <BsFillEmojiNeutralFill />
          <p>poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='satisfied' name='review' required />
          <BsFillEmojiSmileFill />
          <p>satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='very_satisfied' name='review' required />
          <BsFillEmojiHeartEyesFill />
          <p>muito satisfeito</p>
        </label>
      </div>
    </div>
  )
}
