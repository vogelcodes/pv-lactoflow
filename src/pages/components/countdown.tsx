import Countdown from "react-countdown"
import dynamic from 'next/dynamic'

const CountdownReact = () => {
      
    const renderer = ({ days, hours, minutes, seconds, completed }:{days: number, hours: number, minutes: number, seconds: number, completed: boolean}) => {
        if (completed) {
          // Render a completed state
          return <span> Acabou a Promoção</span>;
        } else {
          if (days>0) {

              // Render a countdown
              return <span className="flex text-center text-sm" suppressHydrationWarning>{days.toString()} Dias, {hours.toString()} horas</span>;
            }  
          if (days<1) {

              // Render a countdown
              return <span className="flex text-center text-sm" suppressHydrationWarning>{hours.toString()}h, {minutes.toString()}min, {seconds.toString()}s</span>;
            }  
        }
      };
    
    return (<>
                    <div className="text-white w-[50%] flex flex-col items-center"> <div>Esta oferta acaba em:</div> <Countdown renderer={renderer} date={"2023-10-23T23:59:59"}/></div>

    </>)
}

export default CountdownReact