import TiltCard from "./hoverCard";

export default function OurEvents() {
    return (
        <div className="p-5">
            <h1 className="text-white font-extrabold text-7xl p-3">Our biggest events</h1>
            <div className="flex justify-center flex-wrap -m-4">
                <div className="flex justify-center  p-4 sm:w-1/2 lg:w-1/4">
                    <TiltCard text="SRT Training Weekends - where we teach you SRT techiques at the YSS training facility."/>
                </div>
                <div className="flex justify-center p-4 sm:w-1/2 lg:w-1/4">
                    <TiltCard text="Chrimmermeet - Our christmas caving special. "/>
                </div>
                <div className="flex justify-center p-4 sm:w-1/2 lg:w-1/4">
                    <TiltCard text="Dinnermeet - The biggest event of the year, where we meet with past DUSA memebers"/>
                </div>
                <div className="flex justify-center p-4 sm:w-1/2 lg:w-1/4">
                    <TiltCard text=""/>
                </div>
            </div>
        </div>
    )
}
