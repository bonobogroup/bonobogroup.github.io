(function() {
    var _id="44e1e0d9c7c31b6193430a957af93b77";
    while(document.getElementById("timer"+_id))_id=_id+"0";
    document.write("<div id='timer"+_id+"' style='min-width:431px;height:86px;'></div>");
    var _t=document.createElement("script");
    _t.src="https://bonobogroup.github.io/js/timer.min.js";
    var _f=function(_k) {
        var l=new MegaTimer(_id, {
            "view":[0, 1, 1, 1], "type": {
              "currentType":"3", "params": {
                "weekdays": [1, 1, 1, 1, 1, 1, 1], "usertime": true, "time": "00:00", "tz": -180, "hours": "24", "minutes": "0"
              }
            }
            , "design": {
              "type":"plate", "params": {
                "round":"17", "background":"gradient", "background-color":["#d9d9d9", "#ffffff"], "effect":"slide", "space":"2", "separator-margin":"20", "number-font-family": {
                  "family": "Arial"
                }
                , "number-font-size":"60", "number-font-color":"#000", "padding":"12", "separator-on":false, "separator-text":":", "text-on":false, "text-font-family": {
                  "family": "Comfortaa", "link": "<link href='https://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                }
                , "text-font-size":"12", "text-font-color":"red"
              }
            }
            , "designId":2, "theme":"white", "width":431, "height":86
          }
        );
        if(_k!=null)l.run();
      }
    ;
    _t.onload=_f;
    _t.onreadystatechange=function() {
      if(_t.readyState=="loaded")_f(1);
    }
    ;
    var _h=document.head||document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
  }

).call(this);
