//------------------------Selectores
let aggGroupBtn = document.querySelector('.btn-agregar-grupo');
let formularioContainer = document.querySelector('.formulario');
let groupList = document.querySelector('.grupo-list');
//------------------------Eventlisteners
aggGroupBtn.addEventListener('click', newGroupGenerator)


//------------------------funciones
function newGroupGenerator(event){
    event.preventDefault();
    //Generando Div del formularioo que aparecera y desaparecera
    let divFormulario = document.createElement('div')
    divFormulario.classList.add('formulario-container')
    formularioContainer.appendChild(divFormulario)
    //Generando Div del titulo del nombre del grupo
    let divNewGrupoTitle = document.createElement('div')
    divNewGrupoTitle.classList.add('groupname-title-container')
    //Creando titulo "nombre de grupo"
    let groupNameTitle = document.createElement('h3')
    groupNameTitle.classList.add('groupname-title')
    groupNameTitle.innerText ='Nombre del Grupo :'
    divNewGrupoTitle.appendChild(groupNameTitle)
    divFormulario.appendChild(divNewGrupoTitle)
    //Generando Div del input
    let divGrupoInput = document.createElement('div')
    divGrupoInput.classList.add("grupo-input");//div class="grupo-input"
    //Agregar Div dentro del contenedor
    divFormulario.appendChild(divGrupoInput);
    //Generando input
    let inputGroupName = document.createElement('input')
    inputGroupName.type="text";
    inputGroupName.classList.add("input-groupname")
    divGrupoInput.appendChild(inputGroupName)
    aggGroupBtn.removeEventListener('click', newGroupGenerator)
    //Generar div para titulo selector
    let divGroupTypeTitle = document.createElement('div')
    divGroupTypeTitle.classList.add('groupType-container')
    //Generando Titulo para selector
    let groupTypeTitle = document.createElement('h3')
    groupTypeTitle.classList.add('groupType-title')
    groupTypeTitle.textContent = 'Tipo de Grupo :'
    divGroupTypeTitle.appendChild(groupTypeTitle)
    //Agregando div de titulo tipo de grupo a formulario
    divFormulario.appendChild(divGroupTypeTitle) 
    //Generar div para selector
    let divNewSelector = document.createElement('div')
    divNewSelector.classList.add('new-group-selector')
    //Generando elemento selector
    let newSelector = document.createElement('select')
    newSelector.classList.add('selector-item')
    //Generando array que contendran las opciones
    let groupTipeValue = ["Familiar", "Roomate", "Pareja", "Viaje"];
    for (let i =0; i<groupTipeValue.length; i++){
        //Asignando Valor y texto a cada opcion
        let optionItemSelector = document.createElement('option')
        optionItemSelector.value = groupTipeValue[i];
        optionItemSelector.text = groupTipeValue[i];
        //integrandro Cada opcion a Select
        newSelector.appendChild(optionItemSelector)    
    }
    //Agregando selector al Div.selector
    divNewSelector.appendChild(newSelector)
    //Agregar div.selector a formulario
    divFormulario.appendChild(divNewSelector)
    //Agregar boton Summit Formulario
    let summitGroupBtn = document.createElement('button')
    summitGroupBtn.classList.add("summit-group") 
    summitGroupBtn.innerHTML = 'Crear Grupo   <i class="fas fa-check-square"></i>'
    divFormulario.appendChild(summitGroupBtn)
    summitGroupBtn.addEventListener('click', createGroup)


    //Generar Grupo 
    function createGroup(subevent){
        subevent.preventDefault();
        if (inputGroupName.value != "") {
            //Generando elemento li
            let newGroup = document.createElement('li')
            newGroup.classList.add('new-group-item')
            groupList.appendChild(newGroup)
            //Generar hipervinculo para grupo
            let goTotheGroup = document.createElement('a')
            goTotheGroup.href = '/Listas/ListasPrototipo.html'
            goTotheGroup.innerText = inputGroupName.value;
            newGroup.appendChild(goTotheGroup);
            //Reactivar el btn para abrir formulario
            inputGroupName.value= "";
            divFormulario.style.display = "none";
            aggGroupBtn.addEventListener('click', newGroupGenerator)
        }
    }
}
