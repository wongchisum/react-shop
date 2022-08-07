/*
 * @Author: wongchisum 
 * @Date: 2022-08-07 14:04:02 
 * @Last Modified by: wongchisum
 * @Last Modified time: 2022-08-07 14:27:34
 * 
 * 頭部導航組件
 */
import searchIcon from '../../assets/imgs/search.png';
import shopcartIcon from '../../assets/imgs/shop-cart-1.png'
import './index.css';

export default function NavBar() {
    return (
        <>
        <div className='nav-tip'>因近日疫情嚴峻，為確保您可以順利收到商品，建議取貨方式選擇「宅配」 </div>
         <div className="nav-bar">
            <div className="left">
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='搜尋'/>
                <span className='action'>登入</span>
                <span className='action'>註冊</span>
            </div>
            <div className="right">
                <img src={shopcartIcon} alt="" />
                <span>購物車（0）</span>
            </div>
        </div>
        </>
       
    )
}


