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
          <input type="radio" value='unsatisfied' name='review' required 
          checked={data.review == 'unsatisfied'}
          onChange={e => updateFieldHandler('review', e.target.value)}/>
          <BsFillEmojiFrownFill />
          <p>insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='neutral' name='review' required 
          checked={data.review == 'neutral'}
          onChange={e => updateFieldHandler('review', e.target.value)}/>
          <BsFillEmojiNeutralFill />
          <p>poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='satisfied' name='review' required 
          checked={data.review == 'satisfied'}
          onChange={e => updateFieldHandler('review', e.target.value)}/>
          <BsFillEmojiSmileFill />
          <p>satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='very_satisfied' name='review' required 
          checked={data.review == 'very_satisfied'}
          onChange={e => updateFieldHandler('review', e.target.value)}/>
          <BsFillEmojiHeartEyesFill />
          <p>muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment"
          placeholder="Conte como foi a sua experiência com o produto..."
          required
          value={data.comment}
          onChange={e => updateFieldHandler('comment', e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}
