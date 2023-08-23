

const Header1 = ({children} : {
    children: React.ReactNode
}) => {
    return(
        <h1 className="mb-[14.4px] mt-6 px-4 text-center text-[25px] font-extrabold leading-[29.17px] tracking-[-25] sm:px-2 lg:text-[31.25px]">
{children}
        </h1>)

}
export default Header1