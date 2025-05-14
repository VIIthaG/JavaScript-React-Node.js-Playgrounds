function Button() {
  let flag = false;
  const iurl = "./src/assets/dark-souls.jpg";

  const handleClick = (e) => {
    if (!flag) { e.target.textContent = "stop"; }
    if (flag) { e.target.textContent = "ouch"; }
    flag = !flag;
  };

  const picSwap = <img style={{ height: "100px" }} src={iurl} onClick={(e) => { document.querySelector("button").textContent = "ds1"; }} />;
  const buttonChange = <button onClick={handleClick}>Click</button>;

  return (
    <div>
      {picSwap}
      {buttonChange}
    </div>
  );
}

export default Button;


<img src="" onClick={(e)=>{console.log(ouch)}}></img>


