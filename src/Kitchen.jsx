import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = () => {
  return ( 
    <div>
      <h1>Kitchen</h1>
      <div>
        <Oven />
      </div>
      <div>
        <Sink />
      </div>
    </div>
  );
}
 
export default Kitchen;