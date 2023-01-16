import Option from "../../containers/Options/Option"
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

const Optionc = () => {

    const data = "Sep 26, 2021";
    const data2 = "Sep 26, 2021";
    const data3 = "Sep 26, 2021";
    const data4 = "Sep 26, 2021";
    const data5  = "Sep 26, 2021";

    return(
        <>
         <Option 
           img1={blog01}
           img2={blog02}
           img3={blog03}
           img4={blog04}
           img5={blog05}
           data1={<p>{data}</p>}
           data2={<p>{data2}</p>}
           data3={<p>{data3}</p>}
           data4={<p>{data4}</p>}
           data5={<p>{data5}</p>}
           />
        </>
    )
}

export default Optionc;