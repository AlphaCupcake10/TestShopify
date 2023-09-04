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
function OpenCartMenu()
{
    cartDrawerDynamic.classList.add("cart-active");
}
function CloseCartMenu()
{
    cartDrawerDynamic.classList.remove("cart-active");
}

// document.querySelectorAll('form[action="/cart/add"]').forEach(form=>{
//     form.onsubmit = async (e)=>{
//         e.preventDefault();
//         setTimeout(async () => {
//             await updateCartDrawer();
//             OpenCartMenu();
//         }, 500);
//     }
// })

document.querySelector("#cart-drawer-dynamic").addEventListener("click",(e)=>{
    CloseCartMenu();
})
document.querySelector(".cart-drawer-card").addEventListener("click",(e)=>{
    e.stopPropagation();
})
updateCartDrawer();
async function updateCartDrawer()
{
    let response = await (await fetch('?/section_id=cart-drawer')).text();
    console.log(response);

    const html = document.createElement("html");
    html.innerHTML = response;

    let newBox = html.querySelector(".cart-drawer-card").innerHTML;
    document.querySelector(".cart-drawer-card").innerHTML = newBox;

    newBox = html.querySelector(".header-dynamic__cart-button").innerHTML;
    document.querySelector(".header-dynamic__cart-button").innerHTML = newBox;

    const removeBtn = document.querySelector('.header-dynamic__remove-button');
    removeBtn.addEventListener("click",()=>{
        updateQuantity(removeBtn.getAttribute("data-key"),0);
    })

    document.querySelectorAll("#cart-drawer-dynamic .counter").forEach(counter=>{
        const minus = counter.children[0];
        const input = counter.children[1];
        const plus = counter.children[2];
        const key = counter.getAttribute("data-key");
    
        minus.addEventListener("click",()=>{
            let current = parseInt(input.innerHTML,10);
            current --;
            input.innerHTML = current.toString();
            updateQuantity(key,current);
        })
        plus.addEventListener("click",()=>{
            let current = parseInt(input.innerHTML,10);
            current ++;
            input.innerHTML = current.toString();
            updateQuantity(key,current);
        })
    })

    OpenCartMenu();
}


async function updateQuantity(key,quantity)
{
    const res = await fetch("/cart/update.js",{
        method:"post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({updates:{ [key]:quantity }})
    })
    console.log(res);
    updateCartDrawer();
}