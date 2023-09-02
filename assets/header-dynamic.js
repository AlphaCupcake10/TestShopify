const header_dynamic_links = document.querySelector("#header-dynamic").querySelectorAll(".header-link");
const header_dynamic_sections = document.querySelector("#header-dynamic").querySelectorAll(".expanded-menu-content");

header_dynamic_sections[0].classList.add("active-menu");

header_dynamic_links.forEach((Element,index)=>{
    Element.addEventListener("mouseover",()=>{
        header_dynamic_sections.forEach((item)=>{
            item.classList.remove("active-menu");
        })
        header_dynamic_links.forEach((item)=>{
            item.classList.remove("active-menu");
        })
        header_dynamic_sections[index].classList.add("active-menu");
        Element.classList.add("active-menu");
    })
})

let mobileNav = document.querySelector("#header-dynamic-mobile");
function ToggleNavMenu()
{
    mobileNav.classList.toggle("active-menu");
}

let submenus = document.querySelector("#header-dynamic-mobile").querySelectorAll(".sub-menu-title");
submenus.forEach((Element)=>{
    Element.addEventListener("click",()=>{
        Element.parentElement.classList.toggle("active-menu");
    })
})

let cartDrawerDynamic = document.querySelector("#cart-drawer-dynamic");
function ToggleCartMenu()
{
    cartDrawerDynamic.classList.toggle("cart-active");
}

let counterpluses = cartDrawerDynamic.querySelectorAll('.counter_plus');
let counterminuses = cartDrawerDynamic.querySelectorAll('.counter_minus');
let countervalues = cartDrawerDynamic.querySelectorAll('.counter_value');


counterpluses.forEach((Element,index)=>{
    Element.addEventListener("click",()=>{
        let prev = countervalues[index].innerHTML;
        prev = parseInt(prev,10) + 1;
        countervalues[index].innerHTML = prev;
        const key = Element.getAttribute("data-key");
        changeItemQuantity(key,prev);
    })
})
counterminuses.forEach((Element,index)=>{
    Element.addEventListener("click",()=>{
        let prev = countervalues[index].innerHTML;
        prev = parseInt(prev,10);
        if(prev >= 2)
        {
            prev --;
        }
        countervalues[index].innerHTML = prev;
        const key = Element.getAttribute("data-key");
        changeItemQuantity(key,prev);
    })
})

async function changeItemQuantity(key,quantity)
{
    console.log(key,quantity);
    let response = await (await fetch("/cart/change.js",{
        body:
        {
            "id":key,
            "quantity":quantity
        }
    })).json();
    console.log(response);
}