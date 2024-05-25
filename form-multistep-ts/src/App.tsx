// components
import { UserForm } from './components/userForm/UserForm';
import { ReviewForm } from './components/reviewForm/ReviewForm';
import { Thanks } from './components/thanks/Thanks';
import { ReactElement, useState } from 'react';
import { Steps } from './components/steps/Steps';

// hooks
import { UseForm } from './hooks/UseForm';

// icons
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';

// css
import './App.css'

export type FormProps = {
  name: string,
  email: string,
  review: string,
  comment: string
}

const formTemplate: FormProps = {
  name: '',
  email: '',
  review: '',
  comment: '',
}

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData(prev => {
      return { ...prev, [key]: value }
    })
  }

  const formComponents: ReactElement[] = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ]

  const { changeStep, currentStep, currentComponent, isLastStep } = UseForm(formComponents);

  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos feliz com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">
              {currentComponent}
            </div>
            <div className="actions">
              <button onClick={(e) => changeStep(currentStep - 1, e)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              {isLastStep ? (
                <button>
                  <span>Enviar</span>
                  <FiSend />
                </button>
              ) : (
                <button>
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
