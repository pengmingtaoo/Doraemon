let string = `
#app{
    min-width: 50vw;
    position: relative;
    animation: volar 2s linear infinite;
    margin-top:20px
}
/* 接下来我要开始画竹蜻蜓 */
.fly{
    width: 100px;
	height: 5px;
    background: transparent;
    margin: 0 auto;
    margin-bottom: 10px;
    position: relative;
}
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
    background: #35A1C9;
    border: 2px solid black;
}
.left_beards{
    float: left;
    left: 16px;
}
.left_beard1 {
    margin-bottom: 18px;
    transform: rotate(25deg);
    background-color: black;
}
.left_beard2 {
    margin-bottom: 10px;
    background-color: black;
}
.left_beard3 {
    transform: rotate(-10deg);
    background-color: black;
}
.right_beards {
    float:right;
    right: 16px;
}
.right_beard1 {
    margin-bottom: 18px;
    transform: rotate(-25deg);
    background-color: black;
}
.right_beard2 {
    margin-bottom: 10px;
    background-color: black;
}
.right_beard3 {
    transform: rotate(10deg);
    background-color: black;
}
.face{
	background: white;
	border: 2px solid black;
}

.eyes li{
    background: white;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 1px solid black;
    overflow: hidden;
}
.left_eye{
    left: 58px;
    background: black;
}
.left_eyeball{
    top: 5px;
    left: 10px;
    background: white;
}
.right_eye{
    right: 58px;
    background: black;
}
.right_eyeball{
    background: white;
    right: 7px;
    top: 9px;
}
.right_empty{
    background-color: white;
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
  }
  .noise_white{
    background: white; 
    border: 1px solid #fff;
  }
  .centre_beard{
    background-color: black;
  }
  .mouth{
    background: #B11635;
}

.mouth_in::before,.mouth_in::after{
    background: #CA2533;
}

/*  接下来我要开始画身体 */
.main{
    background: #35A1C9;
    border: 2px solid black;
}
.scarf{
    background:#A1172E;
}
.bell{
    border: 2px solid black;
    background-color: #F19629;
}
.bell_up{
    background-color:black;
}
.bell_down{
    background-color: black;
}
.pocket_cloth{
    background: white;
}
.pocket{
    background: white;
    border: 2px solid black;
}

.elbow_left{
   transform: rotate(-45deg);
   left: -46px;
   background: #35A1C9;
   border: 2px solid black; 
}
.elbow_right{
   transform: rotate(45deg);
   right: -46px;
   background: #35A1C9;
   border: 2px solid black; 
}

.hand_left{
    top: -35px;
    background-color: white;
    border: 2px solid black;
}
.hand_right{
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