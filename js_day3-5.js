document.querySelector("#image").addEventListener("mouseover",function()
{
    document.querySelector("#image").style.width="800px";
    document.querySelector("#image").style.height="800px";
    

}),
document.querySelector("#image").addEventListener("mouseleave",function()
{
    document.querySelector("#image").style.width="200px";
    document.querySelector("#image").style.height="200px";
});
