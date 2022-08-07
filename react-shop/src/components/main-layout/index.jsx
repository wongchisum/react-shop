/*
 * @Author: wongchisum 
 * @Date: 2022-08-07 14:31:51 
 * @Last Modified by: wongchisum
 * @Last Modified time: 2022-08-07 15:28:54
 * 
 * 頁面主要的佈局
 */
import './index.css';
import ScoreImg from '../../assets/imgs/home-score.svg'
import LogoImg from '../../assets/imgs/josh-logo.webp'
import BgImg from '../../assets/imgs/BN-02_1060x.webp'
import Btn1Img from '../../assets/imgs/home-btn-1.svg'
import Btn2Img from '../../assets/imgs/home-btn-2.svg'
import Btn3Img from '../../assets/imgs/home-btn-3.svg'
import Btn4Img from '../../assets/imgs/home-btn-4.svg'

import SearchList from '../search-list';

export default function MainLayout() {
    return (
        <div className='main-layout-wrapper'>
            <div className='main-layout'>
            <div className='left'>
                <div className="logo">
                    <img src={LogoImg} alt="" />
                </div>
                <div className="search-list-wrapper">
                    <SearchList />
                </div>
            </div>
            <div className="right">
                <div className="banner">
                    <div className='banner-left'>
                        <img src={BgImg} alt="" />
                    </div>
                    <div className='banner-right'/>
                </div>
                <div className='series'>
                    <div className='series-item'>
                        <img src={Btn1Img} alt="" />
                    </div>
                    <div className='series-item'>
                        <img src={Btn2Img} alt="" />
                    </div>
                    <div className='series-item'>
                        <img src={Btn3Img} alt="" />
                    </div>
                    <div className='series-item'>
                        <img src={Btn4Img} alt="" />
                    </div>
                </div>
                <div className="score">
                    <img src={ScoreImg} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}
