import './card.style.css'
import './card.type'
import Button from '../Button/Button'
import {DeleteIcon,Code2Icon,TextInitialIcon,LucideImage} from 'lucide-react'
import type { CardProps } from './card.type'

export default function Card({contentType}:CardProps) {
  return (
    <div className='card-container'>
      <section>
        <div className='card__avatar'>
            {
                contentType === 'Code' ?
                    <Code2Icon/>
                    :
                    contentType === 'Text' ? 
                    <TextInitialIcon/>
                    : <LucideImage/>
            }
        </div>
      </section>
      <section className='card__content'>

        <p className='card__content-heading'>Title</p>
        <div className='card__content-datetime'>
            <p>Date</p>
            <p>Time</p>
        </div>

      </section>
      
      <section className='card__actions'>
        <Button btnType='Secondary' title='Copy'/>
        <Button btnType='Secondary'  leftIcon={<DeleteIcon/>}/>
      </section>

    </div>
  )
}
