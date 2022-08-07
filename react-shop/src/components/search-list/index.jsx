/*
 * @Author: wongchisum
 * @Date: 2022-08-07 14:50:41
 * @Last Modified by: wongchisum
 * @Last Modified time: 2022-08-07 14:58:32
 *
 * 主頁左側的搜索列表
 */
import './index.css';

/**靜態數據源，用於迴圈渲染列表 */
const SEARCH_DATA = [
  {
    text: "首頁",
  },
  {
    text: "品牌概念",
  },
  {
    text: "全部商品",
  },
  {
    text: "熱銷商品",
  },
  {
    text: "媽寶系列",
  },
  {
    text: "球賽開幕",
  },
  {
    text: "Josh YT",
  },
  {
    text: "Josh IG",
  },
  {
    text: "Josh FB",
  },
];

export default function SearchList() {
  return (
    <div className="search-list">
      {SEARCH_DATA.map(({ text }, index) => {
        return (
          <div key={index} className="search-item">
            <span className='count'>{index + 1}</span>
            <span className='text'>{text}</span>
          </div>
        );
      })}
    </div>
  );
}
