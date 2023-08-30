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