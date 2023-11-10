import Link from "next/link";
import Countdown from "react-countdown"

const PreCountdownReact = () => {
      
    const renderer = ({ days, hours, minutes, seconds, completed }:{days: number, hours: number, minutes: number, seconds: number, completed: boolean}) => {
        if (completed) {
          // Render a completed state
          return <Link href=""><span> Oferta disponível!<br/> Clique Aqui</span></Link>;
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
                    <div className="text-cream w-[50%] flex flex-col items-center"> <div>Oferta revelada daqui a</div> <span><Countdown renderer={renderer} date={Date.parse('Nov 20 2023 12:00:00 GMT+0000')}/></span></div>

    </>)
}

export default PreCountdownReact