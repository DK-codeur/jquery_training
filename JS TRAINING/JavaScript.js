 //concatenation 
 /*
    var userName, start, end, nb1, nb2, res;
    
     start = 'Bonjour ';
     end = ' bienvenue sur notre site';
     userName = prompt('votre prenom');
     alert(start + userName + end);
     
  //Calcul
     nb1 = prompt('Entrer le premier nombre');
     nb2 = prompt('Entrer le deuxième nombre');
     res = parseInt(nb1) + parseInt(nb2);
     alert(res);
*/
  
//if
    
    // var nombre1, nombre2,resultat;
    // nombre1 = prompt('Entrer un premier nombre');
    // nombre2 = prompt('Entrer un deuxieme nombre');
    // resultat = parseInt(nombre1) == parseInt(nombre2);
    
    // if (resultat)
    //     {
    //        alert( 'bravo ces nombres sont egaux');
    //     }
        
    // else
    //     {
    //          alert('desolé ces nombre ne sont pas egaux');
    //     }
    
    
//confirm
    /*
        if (confirm('voulez-vous vraiment afficher cette page'))
            {
                alert('Bienvenue sur notre site');
            }
    */
    
//else if
    /*
     var ageUser;
       ageUser = parseInt(prompt('Quelle age avez-vous ?'));
       if (ageUser >= 6 && ageUser <= 12)
           {
               alert('Bienvenue GAMIN de '+ ageUser +' amuse toi bien');
           }
       else if (ageUser >= 13 && ageUser <= 19)
           {
               alert('Bienvenue Ado de '+ ageUser +' ans amuse toi bien');
           }
       else if (ageUser >= 20)
           {
               alert('Bienvenue Monsieur de '+ ageUser +' ans amusez-vous bien');
           }
       else
           alert('Desole ce site n\'est pas fait pour vous');
    */
    
//ternaire
    /*
        var qst = confirm('voulez-vous vraiment continuer sur ce site'), varTern;
       varTern = qst ? 'bienvenue' : 'Desole';
       alert (varTern);
    */

//condition
//utilisation de var de boucle (ou var temmoin) pour arrêter la boucle
    /*
        var vartem = true; //var temoin
        var pren;
        var espac = ' ';
        
    while(vartem) // ou while(true)
        {
            pren = prompt('Votre prenom ! ');
            if(pren)
                {
                    espac += pren + ' ';
                }
                else
                    {
                        vartem = false; //arret de boucle //ou break
                    }
        }
    alert('Bienvenue ' + espac);
    */

//for
    /*
    var tour;
    for(var tour=0; tour < 5; tour++)
        {
            alert('tour No ' + tour);
        }
    */
    
    // for (var i=0,  espac=" ", pren; true, i<3; i++)
    //     {
    //        pren = prompt('Votre prenom !');
    //        if(pren)
    //         {
    //             espac += pren + "\n";
    //         }
    //         else
    //             {
    //                 break;
    //             }
    //     }
    // alert("vous avez saisir "  + i + " Prenoms : \n" + espac );
    
    
//fonction, Argument
    
    // function triple ()
    //     {
    //         var nombre;
    //         nombre = parseInt(prompt('Entrer un nombre a tripler '));
    //         alert('le triple est '+ nombre * 3);
    //     }
        
    //     triple();
    
    
//Avec Argument
/*
function textaffich (monarg)
    {
        alert('ce que l\'user a ecrit est ' +'"'+ monarg+'"' );
    }
    
    textaffich(prompt('votre argument ?'));
*/

//deux Argument
// function deuxarg (arg1)
//     {
//         if (typeof arg1 === 'undefined')
//             {
//                 arg1 = false;
//             }
//             else
//                 {
//                    alert('premier argument : ' + arg1); 
//                 }
//     }
// deuxarg(prompt('entrer quelque chose'));


    //objet

//creation 
/*
var myObject =
    {   //prop
        nom: 'dk',
        prenom: 'codeur',
        age: '21',

        //method
        presentation: function()
            {
                return this.nom +' '+ this.prenom;
            }
    }

    //appel de presentation

    // alert (myObject.presentation());
    var jean = Object.create(myObject);
    jean.nom = 'jean';
*/
    //les methode de l'objet string
/*
    var text = "les developpeur NANIENS";
    var taille = text.length;
    alert(taille);
    var textMaj = text.toUpperCase();   
    var textMin = text.toLowerCase();
    alert("text maj :" + textMaj);
    alert("\ntext min :" + textMin);

    var position1 = text.charAt(1);
    alert(positionO);

    var dataFirstPos = text.indexOf("l");
    var dataLastPos = text.lastIndexOf("l");
    alert("la premiere position de 'l' se trouve :" + dataFirstPos);
    alert("la derniere position de 'l' se trouve :" + dataLastPos);

    alert(text.replace("NANIENS", "JAVASCRIPT"));  

    alert(text.slice(4, 15));

    alert(text.trim());
*/


    //les methode de l'objet number
/*
    var x = 23.346;
    var y = x.toString();
    var d = x.toFixed(2);
    var p = x.toPrecision(3);

    alert("type de x :" + typeof(x));
    alert("type de y :" + typeof(y));
    alert("x arrondi 2 :" + d);
    alert("type de d :" + typeof(d));
    alert("p prend les 3 premier chiffre :" + p);
*/

    //tableau
    // var prenoms = ["adorgeles", "cdk", "danick", "bmanno"], espac = " ";
    // var nom = ['kk', 'ff', 'gg'];

    // var concatenation = nom.concat(prenoms);
    // alert(concatenation);
    // prenoms.sort();
    // prenoms.reverse();
    // var famille = "ama, amo, ami, amp,";
    // var convertTab = famille.split(' ');

    // alert(convertTab);

    // prenoms[prenoms.length] = "codeur";

    // prenoms.push('lucia');
    // prenoms.pop();
    // alert(prenoms);

    // for(var i=0; i<prenoms.length; i++)
    //     {
    //         espac += "prenoms N°" +(i+1)+ ": " + prenoms[i] + "\n";
    //     }

    // alert(espac);

    //objet date

    // var d = new Date();
        //get
    // var dms = d.getTime();
    // var dy = d.getFullYear();
    // var dm = d.getMonth();
    // var dd = d.getDate();
    // var dday = d.getDay();
    // var dh = d.getHours();

        //set
    // d.setFullYear(1997,10,23);
    // d.setHours(11);

    // alert(d);

        //objet math
    // var x = Math.random()*10;
    // var y = Math.round(x);

    // alert(y);

        //les closures
    // function compteur()
    //     {
    //         var i = 0;

    //         return function()
    //             {
    //                 return i++;
    //             }
    //     }
    
    // var x = compteur()
    // var y = compteur();

    // alert(x());
    // alert(x());
    // alert(x());

    // alert(y());
    // alert(y());
    // alert(y());

        //DOM   
        //insert before
    // var p = document.createElement('p');
    // var t = document.createTextNode('mon super paragraphe en javascript');
    // p.appendChild(t);
    // var p1 = document.querySelector('.p1');
    // document.body.insertBefore(p, p1);

        //suppr
    // var parent = document.body;
    // var s = document.getElementById('suppr');

    // parent.removeChild(s);

        //ecraser
    // var ancien = document.getElementById('anc');

    // var parent = document.body;
    // var nouveau = document.createElement('h2');
    // nouveau.id = 'nvo';

    // nouveau.innerHTML = 'TOUT CODE JS IC...';
    // parent.replaceChild(nouveau, ancien);

        //Event
    // var event = document.getElementById('event');

    // event.addEventListener('mouseup', fonct1);
    // event.addEventListener('mouseout', fonct2);

    // function fonct1()
    //     {
    //         this.style.background = 'yellow';
    //     }

    // function fonct2()
    //     {
    //         this.style.background = 'red';     
    //     }

        //propagation
    // var div = document.getElementById('div');
    // var p1 = document.getElementById('p1');

    // div.addEventListener('click', msgDiv);
    // p1.addEventListener('click', msgp1);

    // function msgDiv()
    //     {
    //         alert('div message');
    //     }

    // function msgp1(e)
    //     {
    //         e.stopPropagation();
    //         alert('p1 message');
    //     }

        //keydown
    // var x = document.querySelector('#a');
    // x.addEventListener('keydown', fonct)

    // function fonct(e)
    //     {
    //         var lettre = String.fromCharCode(e.keyCode);
    //         if(lettre != "A")
    //             {
    //                 e.preventDefault();
    //             }
    //     }

        //checkbox
    // var form = document.querySelector('#form');
    // var cb = document.querySelector('#cb');

    // form.addEventListener('submit', fonct)

    // function fonct(e)
    //     {
    //         if(!cb.checked)
    //             {
    //                 alert('je vais te gifle fo pas cocher hin');
    //                 e.preventDefault;
    //             }
    //     }

        //objet window
    // let fenetre = '';
    // let ouvrir = document.querySelector('#ouvrir');
    // let fermer = document.querySelector('#fermer');
    // let modifier = document.querySelector('#modifier');

    // ouvrir.addEventListener('click', fouvrir);
    // fermer.addEventListener('click', ffermer);
    // modifier.addEventListener('click', fmodifier);

    // function fouvrir()
    //     {
    //         fenetre = window.open('F:/VS%20CODE/NaN/PROJET%20BOOTSTRAP/index.html', '_blank', 'width=500, height=300');
    //     }

    // function fmodifier()
    //     {
    //         fenetre.resizeTo(300, 300);
    //     }

    // function ffermer()
    //     {
    //         fenetre.close();
    //     }


        //navigator
        alert('lang :' + navigator.language +
            '\nppname :' + navigator.appName +
            '\nppCodnam :' + navigator.appCodeName +
            '\nappVers :' + navigator.appVersion +
            '\nproduct :' + navigator.product +
            '\nonLine :' + navigator.onLine +
            '\nua :' + navigator.userAgent +
            '\ncooki :' + navigator.cookieEnabled +
            '\nplatfrm :' + navigator.platform 
            );
     












    /*************ECMAScript******** */
        //tableau
    // let tab = ["a", "b", "c"];

        //parcourir avec forEach
    // tab.forEach(p => {console.log(p);} )

        //fusionner
    // let tab1 = ["d", "e", "f"];
    // let tab2 = ["a", "b", "c", ...tab1];

    // console.log(tab2)

    


    //objet
        //cree

    // var myObject = 
    //     {
    //         nom : 'koble',
    //         prenoms : 'dk',
    //         age : '21',

    //         afficheEleve()
    //             {
    //                 return 'je m\'appele ' + this.nom + ' ' + this.prenoms + ' et j\ai ' + this.age + ' ans'
    //             }
    //     }

        //appel

    // alert(myObject.afficheEleve())

        //constructor avec param ou pas

    // class myClasse
    //     {
    //         //constructor
    //         constructor(p, n, a)
    //             {
    //                 this.prenoms = p;
    //                 this.nom = n;
    //                 this.age = a;
    //             }

    //         //method
    //         presentationH()
    //             {
    //                 return 'je me nomme ' + this.nom + ' ' + this.prenoms + 'je suis HOMME';
    //              }
    //     }

    //         //instance
    //     let etd1 = new myClasse("dk", "codeur", 21); //etd1 cree avec les constructeur de myClasse
    //     let etudiant1 = etd1.presentationH();
    //     // alert(etudiant1);

    //         //heritage de class
    //     class myClasse2 extends myClasse
    //         {
    //             //method
    //             presentationF()
    //                 {
    //                     return 'je me nomme ' + this.nom + ' ' + this.prenoms + 'je suis FEMME';
    //                 }
    //         }


    //         //instance
    //     let etd2 = new myClasse2("messou", "evelyne", 23);
    //     let etudiant2 = etd2.presentationF();
    //     alert(etudiant2);
        

    











    // try 
    //     {

    //     } 
    // catch (error)
    //     {
    //        console.log("attention une erreur :" + error.stack);
    //     }




