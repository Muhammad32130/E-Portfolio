// template_9c9svdw
// afAh1yi6uFuDhPzP1



function showInfo(){
    
    document.body.classList+=(' open--card')
}
function closeInfo(){
    setTimeout(function(){
        document.body.classList.remove('open--card')

    },100)
}
function contact(event){
    event.preventDefault();
    const loading = document.querySelector(' .loading ')
    const success = document.querySelector(' .success ')
    loading.classList += " visible"
    emailjs
        .sendForm(
            `service_4etywk5`,
            `template_9c9svdw`,
            event.target,
            `afAh1yi6uFuDhPzP1`
        ).then(()=>{
            loading.classList.remove("visible")
            success.classList += " visible"
        }).catch(()=>{
            loading.classList.remove("visible")
            alert(
                'The email service is temporarily unavalable. Please contact me directly on askari.muhammad321@gmail.com'
            )
        })


}
// const menu = document.querySelector(' .anchor__contain')
// function showMenuonClick(){
//     menu.classList += " showmenu"
// }
// function closemenu(){
//     menu.classList.remove("showmenu")
// }

    location.href=`${window.location.origin}/#index.html`

    
    
    
    
    window.addEventListener('scroll',
    ()=>{
        const project = document.querySelector('.project')
        let contentposition = project.getBoundingClientRect().top
        let screenPosition = window.innerHeight 

        if(contentposition<screenPosition){
            project.classList.add('show__project')
        }
        else{
            project.classList.remove('show__project')
        }
    }
    )
    
    

