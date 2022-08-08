import "./mailList.css"

const MailList = () =>{
    return (
        <div  className="mail">
            <h1 className="mailTitle">Save time. save money!</h1>
            <div className="mailDesc">Sign up and we'll send the best deals to you</div>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default MailList