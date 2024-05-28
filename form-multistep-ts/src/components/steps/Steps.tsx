// icons
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

// css
import './Steps.css'

type stepProps = {
    currentStep: number
}

export const Steps = ({ currentStep }: stepProps) => {
    return (
        <div className='steps'>
            <div className="step active">
                <AiOutlineUser />
                <p>indentificação</p>
            </div>
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                <AiOutlineStar />
                <p>Avaliação</p>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    )
}
