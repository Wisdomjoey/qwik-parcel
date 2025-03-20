import './Quality.css';

export default function Quality({ head, txt, icon }) {
  return (
    <div className='quality'>
        
        { icon }
        <h3>{ head }</h3>
        <p>{ txt }</p>

    </div>
  )
}
