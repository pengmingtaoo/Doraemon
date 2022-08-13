let string = `
/*接下来，我要画一个哆啦A梦*/
#app{
    min-width: 100vw;
    position: relative;
    margin-top:20px;
    animation: volar 2s linear infinite;
}
/*开始画竹蜻蜓了*/
.turn{
    width: 100px;
    height: 5px;
    background-color: gray;
    border-radius: 5px;
    border: 2px solid gray;
    z-index: 100;
    opacity: 0.6;
    position: absolute;
    top: 10px;
    /*开始旋转了*/
    animation: rotar .1s infinite linear;
}
.up{
    width: 20px;
    height: 10px;
    display: block;
    border: 2px solid #555;
    background: #BD8D22;
    border-radius: 100px 100px 0 0;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -10px;
    z-index: 2;
}
.down{
    width: 7px;
    height: 30px;
    z-index: 1;
    background: #FCC136;
    position: relative;
    top: 7px;
    border: 2px solid black;
    margin: 0 auto;
}
@keyframes rotar {
    from{transform:rotate3D(0,1,0,0deg);}
    to{transform:rotate3D(0,1,0,360deg);}
}
/* 接下来我要开始画头 */
.big_head{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    overflow: hidden;
    background: #35A1C9;
    border: 2px solid black;
}
.face{
    width: 170px;
    height: 170px;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -85px;
    margin-left: -85px;
    background: white;
    border: 2px solid black;
}
/* 接下来我要开始画眼睛 */
.eyes li{
    background: white;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 1px solid black;
    overflow: hidden;
}
.left_eye{
    background: black;
    position: absolute;
    top: 20px;
    left: 58px;
}
.left_eyeball{
    position: absolute;
    top: 5px;
    left: 10px;
    background: white;
}
.right_eye{
    background: black;
    position: absolute;
    top: 20px;
    right: 58px;
}
.right_eyeball{
    position: absolute;
    right: 7px;
    top: 9px;
    background: white;
}
.right_empty{
    background-color: white;
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    animation: pulse 2s infinite;
    z-index: 1;
}
.right_empty:after {
    content: "⌒";
    width: 48px;
    line-height: 2.5;
    font-size: 30px;
    position: absolute;
    text-align: center;
    font-weight: bold;
}
.right_empty:after {
    color: #000;
}
@keyframes pulse {
    to {
        bottom: 100px;
    }
    from {
        bottom: 0;
    }
}
.noise{
    background: #B11735;
    border: 1px solid black;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    margin: 0 auto;
    position: relative;
    top: -8px;
}
.noise_white{
    background: white;
    border: 1px solid #fff;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    top: 6px;
    left: 8px;
}
.left_beards{
    float: left;
    z-index: 9999;
    position: relative;
    display: inline-block;
    top: 59px;
    left: 16px;
}
.left_beard1 {
    margin-bottom: 18px;
    transform: rotate(25deg);
    background-color: black;
    width: 60px;
    height: 2px;
}
.left_beard2 {
    margin-bottom: 10px;
    background-color: black;
    width: 60px;
    height: 2px;
}
.left_beard3 {
    transform: rotate(-10deg);
    background-color: black;
    width: 60px;
    height: 2px;
}
.right_beards {
    float:right;
    right: 16px;
    z-index: 9999;
    position: relative;
    display: inline-block;
    top: 59px;
}
.right_beard1 {
    margin-bottom: 18px;
    transform: rotate(-25deg);
    background-color: black;
    width: 60px;
    height: 2px;
}
.right_beard2 {
    margin-bottom: 10px;
    background-color: black;
    width: 60px;
    height: 2px;
}
.right_beard3 {
    transform: rotate(10deg);
    background-color: black;
    width: 60px;
    height: 2px;
}
.centre_beard{
    width: 2px;
    height: 20px;
    margin: 0 auto;
    position: relative;
    top: -8px;
    background-color: black;
}
.mouth{
    width: 140px;
    height: 70px;
    border-radius: 140px 140px 0 0;
    overflow: hidden;
    position: relative;
    left:13px;
    top: -10px;
    transform: rotate(180deg);
    background: #B11635;
}
.mouth_in::before,.mouth_in::after{
    content: "";
    position: absolute;
    left: 50px;
    top:0;
    width: 50px;
    display: block;
    height: 80px;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    background: #CA2533;
}
.mouth_in::after{
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
}
/*  接下来我要开始画身体 */
.main{
    width: 142px;
    height: 172px;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    margin: 0 auto;
    position: relative;
    top: -100px;
    z-index: 2;
    background: #35A1C9;
    border: 2px solid black;
}
.scarf{
    width: 100px;
    height: 50px;
    margin: 0 auto;
    border-radius: 100px / 50px;
    position: relative;
    top: 55px;
    z-index: 2;
    background:#A1172E;
}
.bell{
    width: 35px;
    height: 35px;
    border-radius: 100%;
    position: absolute;
    top: 96px;
    left: 52px;
    z-index: 3;
    border: 2px solid black;
    background-color: #F19629;
}
.bell_up{
    width: 8px;
    height: 8px;
    border-radius: 100%;
    position: absolute;
    top: 10px;
    left: 12px;
    background-color:black;
}
.bell_down{
    width: 2px;
    height: 15px;
    margin: 0 auto;
    transform: rotate(180deg);
    position: relative;
    top: 18px;
    left: .5px;
    background-color: black;
}
.pocket_cloth{
    width: 100px;
    height: 60px;
    margin: 0 auto;
    border-radius: 100px / 60px;
    position: relative;
    top: 40px;
    background: white;
}
.pocket{
    background: white;
    border: 2px solid black;
}
/* 接下来,我要开始画手臂了 */
.elbow_left{
    position: relative;
    top: -90px;
    left: -46px;
    background: #35A1C9;
    border: 2px solid black;
    transform: rotate(-45deg);
}
.elbow_right{
    position: relative;
    top: -90px;
    right: -46px;
    transform: rotate(45deg);
    background: #35A1C9;
    border: 2px solid black;
}
.hand_left{
    position: absolute;
    top: -35px;
    background-color: white;
    border: 2px solid black;
}
.hand_right{
    position: absolute;
    top: -35px;
    left: -3px;
    background-color: white;
    border: 2px solid black;
}
/* 接下来,我要开始画腿了 */

.leg_left,
.leg_right{
    background: white;
    border: 2px solid black;
}
@keyframes volar{
    0%   {left:0px;}
    25%  {left:-10px;}
    50%  {left:0px;}
    75%  {left:10px;}
    100% {left:0px;}
}
`;
export default string;