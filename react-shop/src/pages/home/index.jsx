/**
 * 首頁
 */
import { useNavigate } from "react-router-dom";


 /**有沒有權限 */
 const hasAccess = false; 

function Home() {
    const nav = useNavigate()
    /**判斷有沒有權限，有權限則跳轉detail，沒有權限彈窗提示 */
    function handleGoDetail() {
        if (hasAccess) {
            nav("/detail")
        } else {
            alert("你沒有權限跳轉！")
        }
    }
    return (
        <div>
            Home
            <div onClick={handleGoDetail}>Go Detail</div>
        </div>
    )
};

export default Home