interface Props {
    title: string;
    subtitle: string;
    showIcon?: boolean;
}

function getIcon(showIcon: boolean) {
    if (showIcon) {
        return (
            <div style={{ display:"flex", flexDirection:"column", height: "50px",width:"50px" ,backgroundColor:"green" }} /> 
        )
    }

    return null   
}

function getIcon2(showIcon: boolean) {
    let icon = null

    if (showIcon) {
        icon = <div  style={{ display:"flex", flexDirection:"column", height: "50px",width:"50px" ,backgroundColor:"green" }} /> 
    }
    
    return icon
}


// function Header (props: Props) {
// const showIcon = props.showIcon
function Header ({ title, subtitle, showIcon = true }: Props) {

    return(
        <div style={{display:"flex", gap:"10px"}}>
            {/* {showIcon && (<div style={{ display:"flex", flexDirection:"column", height: "50px",width:"50px" ,backgroundColor:"green" }}> 
            </div>)} */}
            {/* {showIcon ? (<div style={{ display:"flex", flexDirection:"column", height: "50px",width:"50px" ,backgroundColor:"green" }}> 
                </div>) : null } */}
                {getIcon(showIcon)}
            <div style={{display:"flex",flexDirection:"column"}}>
                <span><b>{title}</b></span>
                <span>{subtitle}</span>
            </div>
        </div>        
 )
}

export default Header