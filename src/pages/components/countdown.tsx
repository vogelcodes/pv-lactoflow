import Countdown from "react-countdown"

const CountdownReact = () => {
      
    const renderer = ({ days, hours, minutes, seconds, completed }:{days: number, hours: number, minutes: number, seconds: number, completed: boolean}) => {
        if (completed) {
          // Render a completed state
          return <span> Acabou a Promoção</span>;
        } else {
          if (days>0) {

              // Render a countdown
              return <span className="flex text-center text-sm" suppressHydrationWarning>{days} Dias, {hours} horas</span>;
            }  
          if (days<1) {

              // Render a countdown
              return <span className="flex text-center text-sm" suppressHydrationWarning>{hours}h, {minutes}min, {seconds}s</span>;
            }  
        }
      };
    
    return (<>
                    <div className="text-white w-[50%] flex flex-col items-center"> <div>Esta oferta acaba em:</div> <Countdown renderer={renderer} date={Date.parse('Nov 28 2023 02:59:59 GMT+0000')}/></div>

    </>)
}

export default CountdownReact