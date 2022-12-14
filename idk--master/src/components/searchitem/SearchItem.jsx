import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img 
            src="https://t-cf.bstatic.com/xdata/images/hotel/square600/277896486.webp?k=2dafc898598cd102fcb378e58c9bd91e18e51e947dcf97c3ce2274d5629a68ea&o=&s=1"
            alt=""
            className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartment</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport texi</span>
                <span className="siSubtitle">
                Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                Entire studio . 1 bathroom . 1 full bed 
                </span>    
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                You can cancel later. so lock in this great  
                </span>        
            </div>
            <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <span className="siCheckButton">See availability</span>
            </div>
            </div>
        </div>
    );
};

export default SearchItem;