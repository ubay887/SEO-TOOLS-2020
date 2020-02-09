// ===============================================
// Phase 1 Tools
// function genKey () {
//     //city input
//     let ph1cty = document.querySelector('#ph1cty');
//     let ctyArr = ph1cty.value.replace(/\r\n/g,"\n").split("\n");
//         ctyArr.forEach((item) => {
//             let word = item.toLowerCase().split(" ");
//             for (let i = 0; i < word.length; i++) {
//             word[i] = word[i][0].toUpperCase() + word[i].slice(1);  
//             }
//             city = word.join(" ")
//         });
//     // state input
//     let ph1ste = document.querySelector('#ph1ste');
//     let steArr = ph1ste.value.replace(/\r\n/g,"\n").split("\n");
//         steArr.forEach((item) => {
//             let abbr = item.length //check state abbreviation if more than 3 character
//             if (abbr <= 3) {
//                 state = item.toUpperCase();
//             } else {
//                 let word = item.toLowerCase().split(" ");
//                 for (let i = 0; i < word.length; i++) {
//                     word[i] = word[i][0].toUpperCase() + word[i].slice(1);  
//                     }
//                     state = word.join(" ")
//             }
//         });
//     // business name input
//     let ph1bns = document.querySelector('#ph1bns');
//     let bnsArr = ph1bns.value.replace(/\r\n/g,"\n").split("\n");
//         bnsArr.forEach((item) => {
//             let word = item.toLowerCase().split(" ");
//             for (let i = 0; i < word.length; i++) {
//             word[i] = word[i][0].toUpperCase() + word[i].slice(1);  
//             }
//             business = word.join(" ")
//         });
//     // variable concatenation
//     let info = `| ${city} ${state} | ${business}`;
//     //let link = `${city} ${state}`;
//        // link = link.toLowerCase().trim().split(/\s+/).join('-')
    
//     // keyword input
//     //let ph1kws = document.querySelector('#ph1kws');
//     let ph1kws = document.querySelector('#input');
//     let wordArr = ph1kws.value.replace(/\r\n/g,"\n").split("\n");
        
//     // node creation
//     //let getTag = document.querySelector('#seoValue');
//     let getTag = document.querySelector('#output');
//     let newTag = document.createElement('div');
    
//     // argument or condition 
//     if (ph1kws.value != '') {
//         wordArr.forEach((item, index) => {
//             let word = item.toLowerCase().split(" ");
//             for (let i = 0; i < word.length; i++) {
//             word[i] = word[i][0].toUpperCase() + word[i].slice(1);  
//             }
//             let keyword = word.join(" ")
//             let keylink = keyword.toLowerCase().trim().split(/\s+/).join('-')
//             newTag.appendChild(document.createElement("span")).append(`keyword ${index + 1}`);
//             newTag.appendChild(document.createElement("p")).append(`${keyword} ${info}`) ;
//             newTag.appendChild(document.createElement("p")).append(`${keyword} In ${city}, ${state}.`);
//             newTag.appendChild(document.createElement("p")).append(`${keylink}`);
//             //newTag.appendChild(document.createElement("p")).append(`${keylink}-${link}`);
//             newTag.appendChild(document.createElement("br"))
            
//         });
        
//         // select when clicked
//         let child = newTag.childNodes
//         child.forEach(function (item, index) {
//             item= item.setAttributes({
//                 "id": "pr" + `${index}`,
//                 "onClick": "selectAll(this.id)"
//             });
//         });
//         getTag.appendChild(newTag)
//         newTag.setAttribute('class', 'pages')
//     }//end of if condition  
// }
//============================================
// // character counter
// let mxChar = 150;
// $('#cnt_msg').html(mxChar + ' remaining');
// $('#charcount').keyup(function() {
//   let text_length = $('#charcount').val().length;
//   let text_remaining = mxChar - text_length;
//   $('#cnt_msg').html(text_remaining + ' remaining');
// });

// ============================================
// Phase 2 Tools
function trim () {
    let keyinput = document.querySelector('#triminput');
    let keyArr = keyinput.value.replace(/\r\n/g,"\n").split("\n");
    //console.log(keyArr)
    let outpt = document.querySelector('#trimoutput');
    let trimout = document.createElement('ul');
    keyArr.forEach((item) => {
                let items = item.split(" ");
                function checkValue(items) {
                    return items !== "keyword";
                    
                }//remove keyword phrase

                let elem = items.filter(checkValue)
                let arr = [elem.join(" ")]

                //remove number
                for (let i = 0; i < arr.length; i++) {
                    let value = arr[i].split("");
                    do {
                        value.splice(i, 1); 
                    } while (value[i] >= 0);

                        dta = value.join("")
                        
                }//remove number

                let keyItem = [dta]
                keyItem.forEach((item) => {
                    item = item.toLowerCase().split(" ");
                    for (let i = 0; i < item.length; i++){
                        item[i] =item[i][0].toUpperCase() + item[i].slice(1);
                    }//make sentence case
                    let trimedkey = item.join(" ")

                    trimout.appendChild(document.createElement("li")).append(`${trimedkey}`)
                    //trimout.append(`${trimedkey}`)
                    outpt.appendChild(trimout)
                    trimout.setAttribute('class', 'kytrm')
                    
                });

            });

}//trim keyword and numbers

function gen () {
//city input
let ph1cty = document.querySelector('#ph1cty');
let ctyArr = ph1cty.value.replace(/\r\n/g,"\n").split("\n");
    ctyArr.forEach((item) => {
        let word = item.toLowerCase().split(" ");
        for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].slice(1);  
        }
        city = word.join(" ")
    });
// state input
let ph1ste = document.querySelector('#ph1ste');
let steArr = ph1ste.value.replace(/\r\n/g,"\n").split("\n");
    steArr.forEach((item) => {
        let abbr = item.length //check state abbreviation if more than 3 character
        if (abbr <= 3) {
            state = item.toUpperCase();
        } else {
            let word = item.toLowerCase().split(" ");
            for (let i = 0; i < word.length; i++) {
                word[i] = word[i][0].toUpperCase() + word[i].slice(1);  
                }
                state = word.join(" ")
        }
    });
// business name input
let ph1bns = document.querySelector('#ph1bns');
let bnsArr = ph1bns.value.replace(/\r\n/g,"\n").split("\n");
    bnsArr.forEach((item) => {
        let word = item.toLowerCase().split(" ");
        for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].slice(1);  
        }
        business = word.join(" ")
    });
// variable concatenation
let info = `| ${city} ${state} | ${business}`;
//let link = `${city} ${state}`;
   // link = link.toLowerCase().trim().split(/\s+/).join('-')

// keyword input
//let ph1kws = document.querySelector('#ph1kws');
let ph1kws = document.querySelector('#input');
let wordArr = ph1kws.value.replace(/\r\n/g,"\n").split("\n");
    
// node creation
//let getTag = document.querySelector('#seoValue');
let getTag = document.querySelector('#output');
let newTag = document.createElement('div');

    if (ph1kws.value != '') {
        wordArr.forEach((item, index) => {
            let word = item.toLowerCase().split(" ");
            for (let i = 0; i < word.length; i++) {
            word[i] = word[i][0].toUpperCase() + word[i].slice(1);  
            }
            let keyword = word.join(" ")
            let keylink = keyword.toLowerCase().trim().split(/\s+/).join('-')
            newTag.appendChild(document.createElement("span")).append(`keyword ${index + 1}`);
            newTag.appendChild(document.createElement("p")).append(`${keyword} ${info}`) ;
            newTag.appendChild(document.createElement("p")).append(`${keyword} In ${city}, ${state}.`);
            newTag.appendChild(document.createElement("p")).append(`${keylink}`);
            //newTag.appendChild(document.createElement("p")).append(`${keylink}-${link}`);
            newTag.appendChild(document.createElement("br"))
            
        });
        
        // select when clicked
        let child = newTag.childNodes
        child.forEach(function (item, index) {
            item= item.setAttributes({
                "id": "pr" + `${index}`,
                "onClick": "selectAll(this.id)"
            });
        });
        getTag.appendChild(newTag)
        newTag.setAttribute('class', 'pages')
    }//end of if condition  

// Single Item
    let  input = document.querySelector('#input');
    let data = input.value.replace(/\r\n/g,"\n").split("\n");
    let  output = document.querySelector('#output2');
    let  newElement = document.createElement("div");
 
    if (data != '') {
            data.forEach((item) => {
                item = item.toLowerCase().split(" ");
                for (let i = 0; i < item.length; i++){
                    item[i] =item[i][0].toUpperCase() + item[i].slice(1);
                }//make sentence case
                let cleankeyword = item.join(" ")
                newElement.appendChild(document.createElement("p")).append(`<meta name="keywords" content="${cleankeyword}"/>`)
                output.appendChild(newElement)
                newElement.setAttribute('class', 'pages')  
            });

    }
    let child = newElement.childNodes
        child.forEach(function (item, index) {
            item= item.setAttributes({
                "id": "meta" + `${index}`,
                "onClick": "selectAll(this.id)"
            });
        });
//======================================================  
// //Mulitiple Item
//     let  input2 = document.querySelector('#input2');
//     //let  data22 = input2.value.replace(/(\r\n|\n|\r)/gm,", ").split("\n");
//     let  data2 = input2.value.replace(/\r\n/g,"\n").split("\n");
//     console.log(data2);
    
//     let  output2 = document.querySelector('#output2');
//     let  newElement2 = document.createElement("p");

//    // if (data2 >= '') {
    
//         data2.forEach((item) => {
//             let items = item.split(" ");
//             function checkValue(items) {
//                 return items !== "keyword";
//                 }//remove keyword phrase
                
//                 let elem = items.filter(checkValue)
//                 let arr = [elem.join(" ")]
                
//                 for (let i = 0; i < arr.length; i++) {
//                     let value = arr[i].split("");                           
//                     do {
//                       value.splice(i, 1); 
//                     } while (value[i] >= 0);
//                       dta = value.join("")
                    
                    
//                 }//remove number
//                 let keyItem = [dta]
//                 keyItem.forEach((item) => {
//                     item = item.toLowerCase().split(" ");
//                     for (let i = 0; i < item.length; i++){
//                         item[i] =item[i][0].toUpperCase() + item[i].slice(1);
//                     }//make sentence case
                    
//                     newElement2.append(`${item.join(" ")} `)
//                     output2.appendChild(newElement2);   
//                  });
                     
//         });

//     //}//end of if
//     newElement2.prepend('<meta name="keywords" content="');
//     newElement2.append('"/>');
//     newElement2.setAttributes({
//         "id": "learnmore",
//         "class": "pages",
//         "onClick": "selectAll(this.id)"
//     });    
    
}

// ==================================================
    // case converter
function cnvrt () {
    
    let inputKey = document.querySelector('#key');
    let keyArr = key.value.replace(/\r\n/g,"\n").split("\n");
    // console.log(keyArr);
    let outputKey = document.querySelector('#outputKey');
    let = newElem = document.createElement("ul");
    let caseSelect = document.querySelector('#optn').value
    
    if (caseSelect == "lwrCase") {
        keyArr.forEach((str) => {
            str= str.toLowerCase();
            newElem.appendChild(document.createElement("li")).append(`${str} `);
            outputKey.appendChild(newElem);
            newElem.setAttribute('class', 'phrse')  
        });
        let child = newElem.childNodes
        child.forEach(function (item, index) {
            item= item.setAttributes({
                "id": "lwrCse" + `${index}`,
                "onClick": "selectAll(this.id)"
            });
        });
    } else if (caseSelect == "uprCase") {
        keyArr.forEach((str) => {
            str= str.toUpperCase();
            newElem.appendChild(document.createElement("li")).append(`${str} `);
            outputKey.appendChild(newElem);
            newElem.setAttribute('class', 'phrse')
        });
        let child = newElem.childNodes
        child.forEach(function (item, index) {
            item= item.setAttributes({
                "id": "uprCse" + `${index}`,
                "onClick": "selectAll(this.id)"
            });
        });
    } else if (caseSelect == "tleCase") {
            keyArr.forEach((str) => {
               let words = str.toLowerCase().split(" ");
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
                } 
                newElem.appendChild(document.createElement("li")).append(words.join(" "));
                outputKey.appendChild(newElem);
                newElem.setAttribute('class', 'phrse')
                
            });
            let child = newElem.childNodes
            child.forEach(function (item, index) {
                item= item.setAttributes({
                    "id": "tlecse" + `${index}`,
                    "onClick": "selectAll(this.id)"
                });
            });
    } //end if

}
// ====================================
     // clear button
function clearItem () {
        let toRemov = document.querySelector('.pages')
        toRemov.parentNode.removeChild(toRemov);
}
function clearItem2 () {
    let toRemov = document.querySelector('.phrse')
    toRemov.parentNode.removeChild(toRemov);
}
function clearItem3 () {
    let toRemov = document.querySelector('.phrse')
    toRemov.parentNode.removeChild(toRemov);
}
function clearItem4 () {
    let toRemov = document.querySelector('.kytrm')
    toRemov.parentNode.removeChild(toRemov);
}
   //=====================================
     // select all text on click
        function selectAll(id){
            let sel, range;
            let el = document.getElementById(id); //get element id
            if (window.getSelection && document.createRange) { //Browser compatibility
              sel = window.getSelection();
              if(sel.toString() == ''){ //no text selection
                 window.setTimeout(function(){
                    range = document.createRange(); //range object
                    range.selectNodeContents(el); //sets Range
                    sel.removeAllRanges(); //remove all ranges from selection
                    sel.addRange(range);//add Range to a Selection.
                },1);
              }
            }else if (document.selection) { //older ie
                sel = document.selection.createRange();
                if(sel.text == ''){ //no text selection
                    range = document.body.createTextRange();//Creates TextRange object
                    range.moveToElementText(el);//sets Range
                    range.select(); //make selection.
                }
            }
        }
//==========================================
    // Element prototype
        Element.prototype.setAttributes = function (attrs) {
            for (var idx in attrs) {
                if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
                    for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop];}
                } else if (idx === 'html') {
                    this.innerHTML = attrs[idx];
                } else {
                    this.setAttribute(idx, attrs[idx]);
                }
            }
        };
//=========================================
    //Error Message
// window.onerror = function () {
//     let message = "Remove Extra Spaces, Field Cannot Be Blank!!\nNothing to Clear!!";
//     alert(message);
//     return true;
// };

