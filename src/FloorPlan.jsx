import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  const bedNum = [1, 2, 3]
  const size = 'full bath'
  return ( 
    <>
      <div>
        <Kitchen />
      </div>
      <div>
        <LivingRoom />
      </div>
      <div>
        <Bedroom bedNum ={1}/>
      </div>
      <div>
        <Bedroom bedNum ={2}/>
      </div>
      <div>
        <Bedroom bedNum ={3}/>
      </div>
      <div>
        <Bath size = 'full'/>
      </div>
      <div>
        <Bath size = 'half'/>
      </div>
      
    </>
   );
}
 
export default FloorPlan;