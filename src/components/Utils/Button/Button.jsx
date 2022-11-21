const Button = (props) => {
    let st = 'bg-white text-black';
    switch (props.style) {
        case 'transp': st = 'hover:bg-white hover:text-black'
            break;
        case 'midtransp': st = `border-mid-transparent bg-mid-hard-transparent`
            break;
        case 'white': st = 'bg-white text-black'
    }
    return (
        <a className={"rounded-xl border p-2 rounded-lg sm:btn-sm duration-200 hover:scale-105 " + st} href={props.href} >{props.title}</a>
    )
}

export default Button;