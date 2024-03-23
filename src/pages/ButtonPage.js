import Button from '../components/Button';
import {GoBellFill, GoCloud, GoDatabase} from 'react-icons/go'

function ButtonPage() {
  
  return (
    <div >
      <div>
        <Button  secondary outline rounded >
          <GoBellFill />
          Click Me!!
          </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloud  />
           Buy Now</Button>
      </div>
      <div>
        
        <Button warning>
          <GoDatabase /> See Deal!!</Button>
      </div>
      <div>
        <Button secondary outline>Hide Ads!!</Button>
      </div>
      <div>
        <Button primary rounded>Somethin!!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;