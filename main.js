function toggleDivs() {
            let panel1 = document.getElementById("panel1");
            let panel2 = document.getElementById("panel2");
            let panel3 = document.getElementById("panel3");
            let panel4 = document.getElementById("panel4");
            let panel5 = document.getElementById("panel5");
            
            let panels = [panel1,panel2,panel3,panel4,panel5];

            for(let i = 0; i < panels.length; i++) {
                if(panels[i].style.display == "block") {

                    if(i < panels.length - 1) {
                    panels[i].style.display = "none";
                    panels[i+1].style.display = "block";
                    break;
                }
                    if(i == panels.length - 1) {
                        panels[i].style.display = "none";
                        panels[0].style.display = "block";
                        break;
                    }
                }

              

        }

    }


document.addEventListener('DOMContentLoaded', function () {

let counter = 0;

const selector = document.getElementById('wordList');
const cairoList = document.getElementsByClassName('cairo');
const readList = document.getElementsByClassName('read');



if(selector) {
    selector.addEventListener("change", function() {
         if (this.value == "read") {
            for(i =0;i<readList.length;i++) {
                readList[i].style.display="block";
            }


            for(i =0;i<cairoList.length;i++) {
                cairoList[i].style.display="none";
            }
        }
        if(this.value == "cairo") {
        
             for(i =0;i<cairoList.length;i++) {
                cairoList[i].style.display="block";
            }


            for(i =0;i<readList.length;i++) {
                readList[i].style.display="none";
            }


       

        }
    });

}

});