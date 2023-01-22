let box=document.getElementById("main")
let filterel=document.getElementById("filter")
let fetched=[]
fetch("./flight.json")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
    fetched=data
    display(data)
})
.catch((err)=>{
    console.log(err)
})
filterel.addEventListener("change",function(){
    if(filterel.value==""){
        display(fetched)
    }else{
        let filtered=fetched.filter((el)=>{
            if(filterel.value==el.boldFont){
                return true
            }else{
                return false
            }
        })
        display(filtered)
    }
})
let sortel=document.getElementById("Sort")
sortel.addEventListener("change",function(){
    if(sortel.value==""){
        display(fetched)
    }
    if(sortel.value=="High"){
        fetched.sort(function(a,b){
            return b.blackText3-a.blackText3
        })
        display(fetched)
    }
    if(sortel.value=="Low"){
        fetched.sort(function(a,b){
            return a.blackText3-b.blackText3
        })
        display(fetched)

    }
})



function display(data){
    box.innerHTML=""
    data.forEach((el)=>{
        let div=document.createElement("div")
        let div1=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div4=document.createElement("div")
        let div5=document.createElement("div")
        let name=document.createElement("h2")
        name.innerText=el.boldFont
        let code=document.createElement("p")
        code.innerText=el.fliCode
        let dep=document.createElement("h2")
        dep.innerText="Departure"
        let deptime=document.createElement("h3")
        deptime.innerText=el.appendBottom2
        let ret=document.createElement("h2")
        ret.innerText="Return"
        let rettime=document.createElement("h3")
        rettime.innerText=el.appendBottom2_2
        let Price=document.createElement("h2")
        Price.innerText="Price"
        let price=document.createElement("h3")
        price.innerText=el.blackText3
        let ticket=document.createElement("h2")
        ticket.innerText="Book Tickets"
        let book=document.createElement("a")
        book.innerText="Book Now"
        book.href="./form.html"
        div1.append(name,code)
        div2.append(dep,deptime)
        div3.append(ret,rettime)
        div4.append(Price,price)
        div5.append(ticket,book)
        div.append(div1,div2,div3,div4,div5)
        box.append(div)


    })
}