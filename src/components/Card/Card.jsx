
import PropTypes from 'prop-types';
const Card = ({selectActor,rmaining,totalCost}) => {
  
    return (
        <div className=' font-bold'>
            <h1>total:{selectActor.length}</h1>
            <h2>Total Cost:{totalCost}</h2>
            <h3>Remaining:{rmaining}</h3>
            {
                selectActor.map((actor)=>(
                    <li key={actor.is}>{actor.name}</li>
                ))
            }
        </div>
    );
};
Card.propTypes ={
    selectActor:PropTypes.array,
    rmaining:PropTypes.number,
    totalCost:PropTypes.number
}
export default Card;