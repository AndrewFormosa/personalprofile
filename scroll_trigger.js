  //ENABLE TRIGGERS WHEN AN ELEMENT HITS A PARTICULAR SCROLL POSITION
    //An example function that can be called when scroll triger is activated

    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;
      //Parameters for defining the triggerd elements
      const transformingEllementsArray = [
        {
          'elementClass': 'scroll_effect_1', //define the ID of the element to trigger
          'Y_TriggerPosition': 0.8, // sets the point on the screen as a proportion of screen height at which the trigger is activated
          'newStyle': 'translate: 0px -100px;opacity:1;font-size:2rem;color:white;', //sets the stlye change activated on trigger
          'function': function () { // optional function that can be defined when triger is activated
            console.log("TRINGGERED");
          }
        },
        {
        'elementClass': 'scroll_effect_2',
        'Y_TriggerPosition':0.5,
        'newStyle':'margin:0rem 2rem 3rem 3rem;font-weight:800; opacity:1; font-family:"Alexandria", sans-serif;  translate: 0px 0px;opacity:1',
        'function':function() {}
        }
      ]
  
  
  
      $(window).on('scroll', function () { //called when screen is scrolled
        transformingEllementsArray.forEach(element => { //check through all of the transforming elements
          var elements = document.getElementsByClassName(element.elementClass); //get the object
          
         for (var f=0;f<elements.length;f++){
         
          object = elements[f];
           console.log("eles:"+f);
          elementY = object.getBoundingClientRect().top / viewHeight; //get the element's position on the screen
          console.log("Y:" + elementY); //if the object has passed the triger point
          if (elementY < element.Y_TriggerPosition) {
            if(element.newStyle!=''){
            object.style = element.newStyle; //then set the new style
            }
            if (element.function != null) {// if there is a function call included within the parameters array
            element.function(); // then call that function.
          }

          }
         }


         
         
        });
      });
  