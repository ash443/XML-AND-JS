(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const cars = require("../data/MOCK_DATA.json");
    
    const getAllCars = (term, valueTerm) =>
      new Promise((resolve) => {
        let data = cars;
    
        if(term) {
    
            switch(term) {
                
                case "first_name":
                    data = data.filter((car) => car.first_name.toLowerCase().includes(valueTerm));
                    break;
                case "gender":
                    data = data.filter((car) => car.gender.toLowerCase() === valueTerm.toLowerCase());
                    break;
                case "email":
                    data = data.filter((car) => car.email.toLowerCase().includes(valueTerm));
                    break;
                case "car_company":
                    data = data.filter((car) => car.car_company.toLowerCase().includes(valueTerm));
                    break;
                case "car_color":
                     data = data.filter((car) => car.car_color.toLowerCase().includes(valueTerm));
                     break;
                case "ip_address":
                    data = data.filter((car) => car.ip_address.includes(valueTerm));
                    break;    
                default:
                    // do nothing
                    break;
            }
        }
          
        resolve({ code: 200, data: data });
      });
    
    const getCarById = (id) =>
      new Promise((resolve) => {
        const car = cars.find((car) => car.id=== Number(id.trim()));
    
        if (car) {
            resolve({ code: 200, data: Array(car) });
        } else {
            resolve({
                code: 404,
                data: { message: `No Car found for id ${id}` },
            });
        }
      });
    
    module.exports = {
      getAllCars,
      getCarById,
    };
    
    // build : browerift main.js -o dist/bundle.js
    },{"../data/MOCK_DATA.json":2}],2:[function(require,module,exports){
    module.exports=[{"id":1,"first_name":"Timmy","email":"tdutson0@boston.com","gender":"Female","ip_address":"51.248.62.220","car_company":"Daewoo","car_model":"Lanos","car_color":"Indigo","year":2000},
    {"id":2,"first_name":"Ethelyn","email":"eblenkharn1@skyrock.com","gender":"Polygender","ip_address":"39.101.55.162","car_company":"Lexus","car_model":"GX","car_color":"Khaki","year":2004},
    {"id":3,"first_name":"Blane","email":"bsanford2@tinyurl.com","gender":"Male","ip_address":"202.104.126.74","car_company":"GMC","car_model":"Sonoma","car_color":"Goldenrod","year":2000},
    {"id":4,"first_name":"Lilith","email":"lgonsalvo3@kickstarter.com","gender":"Female","ip_address":"205.235.94.94","car_company":"Toyota","car_model":"Tercel","car_color":"Fuscia","year":1992},
    {"id":5,"first_name":"Bryce","email":"bbucke4@reddit.com","gender":"Male","ip_address":"155.9.135.27","car_company":"Bentley","car_model":"Continental GT","car_color":"Violet","year":2009},
    {"id":6,"first_name":"Jean","email":"jloraine5@skype.com","gender":"Male","ip_address":"20.213.115.24","car_company":"Daewoo","car_model":"Lanos","car_color":"Aquamarine","year":2001},
    {"id":7,"first_name":"Arlen","email":"amatthews6@storify.com","gender":"Male","ip_address":"42.41.114.163","car_company":"Kia","car_model":"Sportage","car_color":"Khaki","year":1997},
    {"id":8,"first_name":"Bealle","email":"bhuleatt7@bloglines.com","gender":"Male","ip_address":"70.165.128.219","car_company":"GMC","car_model":"1500","car_color":"Crimson","year":1996},
    {"id":9,"first_name":"Shellysheldon","email":"sbarrick8@4shared.com","gender":"Male","ip_address":"111.88.142.30","car_company":"Dodge","car_model":"Intrepid","car_color":"Khaki","year":1999},
    {"id":10,"first_name":"Britt","email":"bfrisdick9@github.com","gender":"Male","ip_address":"135.12.121.183","car_company":"Nissan","car_model":"Quest","car_color":"Crimson","year":2004},
    {"id":11,"first_name":"Petunia","email":"pvancea@pagesperso-orange.fr","gender":"Female","ip_address":"140.219.183.109","car_company":"Buick","car_model":"Park Avenue","car_color":"Purple","year":2002},
    {"id":12,"first_name":"Axel","email":"ahinchamb@weather.com","gender":"Male","ip_address":"152.102.220.191","car_company":"Ford","car_model":"Crown Victoria","car_color":"Mauv","year":2002},
    {"id":13,"first_name":"Menard","email":"mwalickic@latimes.com","gender":"Male","ip_address":"100.91.106.242","car_company":"Chrysler","car_model":"300","car_color":"Crimson","year":2007},
    {"id":14,"first_name":"Suzy","email":"sleggingd@trellian.com","gender":"Female","ip_address":"40.181.220.230","car_company":"Plymouth","car_model":"Breeze","car_color":"Mauv","year":1999},
    {"id":15,"first_name":"Chiquita","email":"cgrishine@cbc.ca","gender":"Female","ip_address":"141.144.248.162","car_company":"Mitsubishi","car_model":"GTO","car_color":"Turquoise","year":1991},
    {"id":16,"first_name":"Bryon","email":"bswatlandf@harvard.edu","gender":"Male","ip_address":"233.195.23.173","car_company":"Lexus","car_model":"LS","car_color":"Goldenrod","year":2002},
    {"id":17,"first_name":"Paula","email":"pbellig@shutterfly.com","gender":"Female","ip_address":"165.218.15.56","car_company":"Maserati","car_model":"GranTurismo","car_color":"Indigo","year":2010},
    {"id":18,"first_name":"Leodora","email":"lkrikorianh@oaic.gov.au","gender":"Female","ip_address":"74.70.220.34","car_company":"Mercedes-Benz","car_model":"SLK-Class","car_color":"Green","year":2012},
    {"id":19,"first_name":"Melisa","email":"mgiacomoi@boston.com","gender":"Genderqueer","ip_address":"155.133.160.159","car_company":"Ram","car_model":"Dakota","car_color":"Mauv","year":2011},
    {"id":20,"first_name":"Jenni","email":"jlenoirj@live.com","gender":"Female","ip_address":"162.166.191.11","car_company":"Spyker","car_model":"C8","car_color":"Violet","year":2006},
    {"id":21,"first_name":"Yolande","email":"ymatchellk@who.int","gender":"Female","ip_address":"241.139.167.78","car_company":"Plymouth","car_model":"Voyager","car_color":"Fuscia","year":1993},
    {"id":22,"first_name":"Wendie","email":"wvilal@shop-pro.jp","gender":"Agender","ip_address":"99.92.135.136","car_company":"Honda","car_model":"Pilot","car_color":"Indigo","year":2004},
    {"id":23,"first_name":"Della","email":"dizakovm@merriam-webster.com","gender":"Female","ip_address":"207.183.112.29","car_company":"Pontiac","car_model":"GTO","car_color":"Yellow","year":2004},
    {"id":24,"first_name":"Giuseppe","email":"gduhameln@nbcnews.com","gender":"Male","ip_address":"23.90.219.112","car_company":"Suzuki","car_model":"Equator","car_color":"Goldenrod","year":2011},
    {"id":25,"first_name":"Wileen","email":"wvedishchevo@google.com.br","gender":"Female","ip_address":"140.43.224.94","car_company":"Oldsmobile","car_model":"Alero","car_color":"Violet","year":2004},
    {"id":26,"first_name":"Erin","email":"erumminsp@blogs.com","gender":"Male","ip_address":"98.189.29.82","car_company":"Dodge","car_model":"Dakota Club","car_color":"Fuscia","year":2003},
    {"id":27,"first_name":"Andris","email":"aheyburnq@cocolog-nifty.com","gender":"Male","ip_address":"179.202.173.138","car_company":"Hyundai","car_model":"Equus","car_color":"Blue","year":2013},
    {"id":28,"first_name":"Reg","email":"rthoumassonr@tinyurl.com","gender":"Male","ip_address":"44.185.73.122","car_company":"Isuzu","car_model":"Axiom","car_color":"Green","year":2003},
    {"id":29,"first_name":"Francis","email":"flukess@google.co.jp","gender":"Male","ip_address":"120.13.104.194","car_company":"Mercedes-Benz","car_model":"W201","car_color":"Goldenrod","year":1985},
    {"id":30,"first_name":"Moshe","email":"mcoltant@xinhuanet.com","gender":"Male","ip_address":"119.168.33.122","car_company":"Mazda","car_model":"626","car_color":"Green","year":1992},
    {"id":31,"first_name":"Leigh","email":"lclintu@google.co.uk","gender":"Male","ip_address":"221.238.15.51","car_company":"Audi","car_model":"A7","car_color":"Khaki","year":2012},
    {"id":32,"first_name":"Roarke","email":"rfehelyv@guardian.co.uk","gender":"Genderfluid","ip_address":"227.195.15.86","car_company":"Chevrolet","car_model":"Silverado","car_color":"Goldenrod","year":2010},
    {"id":33,"first_name":"Corrina","email":"creadwoodw@imgur.com","gender":"Female","ip_address":"207.115.196.221","car_company":"Land Rover","car_model":"Range Rover","car_color":"Orange","year":1989},
    {"id":34,"first_name":"Birch","email":"bpetricekx@cloudflare.com","gender":"Bigender","ip_address":"94.3.167.10","car_company":"GMC","car_model":"Sierra 1500","car_color":"Blue","year":2002},
    {"id":35,"first_name":"Jillayne","email":"jpoppletony@businesswire.com","gender":"Polygender","ip_address":"195.9.2.44","car_company":"Ford","car_model":"Tempo","car_color":"Khaki","year":1990},
    {"id":36,"first_name":"Culver","email":"criedelz@uiuc.edu","gender":"Genderqueer","ip_address":"36.126.240.233","car_company":"Toyota","car_model":"4Runner","car_color":"Fuscia","year":1999},
    {"id":37,"first_name":"Waneta","email":"wblincow10@bing.com","gender":"Genderqueer","ip_address":"177.21.154.227","car_company":"Saturn","car_model":"VUE","car_color":"Goldenrod","year":2007},
    {"id":38,"first_name":"Patrica","email":"pflower11@webs.com","gender":"Female","ip_address":"165.135.241.208","car_company":"Buick","car_model":"LeSabre","car_color":"Orange","year":2004},
    {"id":39,"first_name":"Deane","email":"dchimienti12@unesco.org","gender":"Genderfluid","ip_address":"201.22.58.206","car_company":"Dodge","car_model":"Stealth","car_color":"Turquoise","year":1993},
    {"id":40,"first_name":"Fara","email":"festerbrook13@wikispaces.com","gender":"Female","ip_address":"141.129.209.22","car_company":"Aston Martin","car_model":"Vantage","car_color":"Teal","year":2011},
    {"id":41,"first_name":"Isabel","email":"ihorlick14@adobe.com","gender":"Female","ip_address":"216.253.6.37","car_company":"GMC","car_model":"Savana","car_color":"Mauv","year":2008},
    {"id":42,"first_name":"Nancy","email":"nkienlein15@ihg.com","gender":"Female","ip_address":"83.99.188.74","car_company":"Jeep","car_model":"Grand Cherokee","car_color":"Teal","year":2001},
    {"id":43,"first_name":"Valina","email":"vworstall16@nature.com","gender":"Female","ip_address":"37.196.23.226","car_company":"Infiniti","car_model":"I","car_color":"Indigo","year":1996},
    {"id":44,"first_name":"Trudey","email":"tbaylay17@house.gov","gender":"Female","ip_address":"252.196.76.242","car_company":"Toyota","car_model":"Tercel","car_color":"Goldenrod","year":1995},
    {"id":45,"first_name":"Ara","email":"anotti18@oaic.gov.au","gender":"Agender","ip_address":"235.7.103.36","car_company":"Toyota","car_model":"Avalon","car_color":"Fuscia","year":2006},
    {"id":46,"first_name":"Ray","email":"rbiagioni19@paginegialle.it","gender":"Male","ip_address":"105.209.49.17","car_company":"Buick","car_model":"Reatta","car_color":"Green","year":1989},
    {"id":47,"first_name":"Kalila","email":"kdisbrey1a@clickbank.net","gender":"Female","ip_address":"137.197.238.197","car_company":"Volkswagen","car_model":"Cabriolet","car_color":"Violet","year":2001},
    {"id":48,"first_name":"Idalina","email":"isolano1b@flickr.com","gender":"Female","ip_address":"76.238.182.242","car_company":"Mitsubishi","car_model":"Montero","car_color":"Khaki","year":2003},
    {"id":49,"first_name":"Luci","email":"lsall1c@miibeian.gov.cn","gender":"Female","ip_address":"100.187.218.195","car_company":"Chevrolet","car_model":"Malibu","car_color":"Puce","year":2003},
    {"id":50,"first_name":"Broddie","email":"bathey1d@gizmodo.com","gender":"Male","ip_address":"4.82.163.158","car_company":"Nissan","car_model":"200SX","car_color":"Pink","year":1995},
    {"id":51,"first_name":"Boigie","email":"bnolte1e@facebook.com","gender":"Male","ip_address":"203.73.91.34","car_company":"Lincoln","car_model":"Town Car","car_color":"Khaki","year":1985},
    {"id":52,"first_name":"Elroy","email":"ecursons1f@wordpress.org","gender":"Male","ip_address":"113.163.120.3","car_company":"Buick","car_model":"Skylark","car_color":"Khaki","year":1997},
    {"id":53,"first_name":"Ezmeralda","email":"epopelay1g@prweb.com","gender":"Female","ip_address":"171.10.192.213","car_company":"GMC","car_model":"Savana 1500","car_color":"Puce","year":2012},
    {"id":54,"first_name":"Gustaf","email":"gnoonan1h@bigcartel.com","gender":"Male","ip_address":"86.206.116.147","car_company":"Toyota","car_model":"Matrix","car_color":"Red","year":2010},
    {"id":55,"first_name":"Robyn","email":"rstaten1i@sphinn.com","gender":"Female","ip_address":"184.129.176.103","car_company":"Chevrolet","car_model":"Monte Carlo","car_color":"Indigo","year":1996},
    {"id":56,"first_name":"Johannah","email":"jcastelluzzi1j@t-online.de","gender":"Female","ip_address":"22.123.105.16","car_company":"Chevrolet","car_model":"Astro","car_color":"Indigo","year":2005},
    {"id":57,"first_name":"Christie","email":"ccockerill1k@quantcast.com","gender":"Female","ip_address":"71.130.167.67","car_company":"Dodge","car_model":"Challenger","car_color":"Blue","year":2012},
    {"id":58,"first_name":"Liva","email":"lpickles1l@newsvine.com","gender":"Female","ip_address":"228.107.112.222","car_company":"Buick","car_model":"Park Avenue","car_color":"Khaki","year":2001},
    {"id":59,"first_name":"Mikey","email":"mlindgren1m@barnesandnoble.com","gender":"Male","ip_address":"28.229.225.46","car_company":"Pontiac","car_model":"GTO","car_color":"Violet","year":1973},
    {"id":60,"first_name":"Ardra","email":"akennermann1n@ihg.com","gender":"Female","ip_address":"173.59.246.246","car_company":"Cadillac","car_model":"DTS","car_color":"Teal","year":2009},
    {"id":61,"first_name":"Ermentrude","email":"elabuschagne1o@cbsnews.com","gender":"Female","ip_address":"151.66.156.55","car_company":"BMW","car_model":"530","car_color":"Yellow","year":2001},
    {"id":62,"first_name":"Carlos","email":"cfitzsymonds1p@diigo.com","gender":"Male","ip_address":"42.240.135.96","car_company":"Tesla","car_model":"Roadster","car_color":"Red","year":2011},
    {"id":63,"first_name":"Olly","email":"oeastby1q@paypal.com","gender":"Male","ip_address":"49.240.219.0","car_company":"Toyota","car_model":"Camry","car_color":"Green","year":2011},
    {"id":64,"first_name":"Jill","email":"jdulany1r@newyorker.com","gender":"Female","ip_address":"168.168.141.72","car_company":"Ford","car_model":"Explorer Sport Trac","car_color":"Turquoise","year":2010},
    {"id":65,"first_name":"Loretta","email":"lparlet1s@vk.com","gender":"Agender","ip_address":"61.84.52.115","car_company":"Ford","car_model":"LTD Crown Victoria","car_color":"Mauv","year":1991},
    {"id":66,"first_name":"Ermanno","email":"ebeckham1t@mozilla.org","gender":"Male","ip_address":"237.171.12.130","car_company":"Jaguar","car_model":"X-Type","car_color":"Aquamarine","year":2005},
    {"id":67,"first_name":"Giovanna","email":"gbowle1u@fotki.com","gender":"Female","ip_address":"206.134.207.127","car_company":"Chevrolet","car_model":"1500","car_color":"Green","year":1995},
    {"id":68,"first_name":"Lorens","email":"lbuglass1v@umich.edu","gender":"Male","ip_address":"237.34.171.175","car_company":"Chevrolet","car_model":"Corvette","car_color":"Puce","year":1996},
    {"id":69,"first_name":"Cissy","email":"cshipston1w@nbcnews.com","gender":"Genderqueer","ip_address":"183.175.174.163","car_company":"Infiniti","car_model":"M","car_color":"Khaki","year":2006},
    {"id":70,"first_name":"Griffie","email":"gwheldon1x@tripod.com","gender":"Male","ip_address":"229.200.192.100","car_company":"Ford","car_model":"Aerostar","car_color":"Yellow","year":1996},
    {"id":71,"first_name":"Loutitia","email":"lsayre1y@soup.io","gender":"Female","ip_address":"42.193.231.49","car_company":"Buick","car_model":"Century","car_color":"Mauv","year":1999},
    {"id":72,"first_name":"Amelie","email":"akiggel1z@washington.edu","gender":"Female","ip_address":"205.37.77.60","car_company":"Lexus","car_model":"LS","car_color":"Aquamarine","year":1990},
    {"id":73,"first_name":"Mordecai","email":"mshimmin20@tripod.com","gender":"Male","ip_address":"78.253.76.8","car_company":"Chevrolet","car_model":"Venture","car_color":"Indigo","year":2005},
    {"id":74,"first_name":"Abby","email":"abedingfield21@cdc.gov","gender":"Male","ip_address":"232.39.162.10","car_company":"Chevrolet","car_model":"Cavalier","car_color":"Khaki","year":1995},
    {"id":75,"first_name":"Sherie","email":"slukacs22@acquirethisname.com","gender":"Female","ip_address":"240.243.90.135","car_company":"MINI","car_model":"Countryman","car_color":"Purple","year":2011},
    {"id":76,"first_name":"Phip","email":"pbartlosz23@businessinsider.com","gender":"Male","ip_address":"10.90.103.111","car_company":"Ford","car_model":"Focus","car_color":"Maroon","year":2003},
    {"id":77,"first_name":"Brendon","email":"bmcclory24@amazon.com","gender":"Male","ip_address":"242.28.251.54","car_company":"Lincoln","car_model":"MKZ","car_color":"Pink","year":2011},
    {"id":78,"first_name":"Sisely","email":"sshepstone25@jiathis.com","gender":"Female","ip_address":"253.154.220.252","car_company":"Isuzu","car_model":"Trooper","car_color":"Fuscia","year":1995},
    {"id":79,"first_name":"Chandra","email":"cwheeldon26@accuweather.com","gender":"Female","ip_address":"138.0.43.80","car_company":"Audi","car_model":"A8","car_color":"Green","year":2003},
    {"id":80,"first_name":"Aline","email":"avalek27@pcworld.com","gender":"Female","ip_address":"45.37.213.86","car_company":"Mitsubishi","car_model":"Lancer","car_color":"Green","year":2009},
    {"id":81,"first_name":"Chuck","email":"cshewry28@youku.com","gender":"Male","ip_address":"223.1.92.9","car_company":"Audi","car_model":"90","car_color":"Maroon","year":1988},
    {"id":82,"first_name":"Pearce","email":"pmcpherson29@etsy.com","gender":"Male","ip_address":"97.175.122.77","car_company":"Saturn","car_model":"S-Series","car_color":"Blue","year":2001},
    {"id":83,"first_name":"Mabel","email":"mheams2a@reuters.com","gender":"Female","ip_address":"69.117.90.189","car_company":"Hyundai","car_model":"Azera","car_color":"Pink","year":2012},
    {"id":84,"first_name":"Deck","email":"druppel2b@adobe.com","gender":"Male","ip_address":"245.43.225.226","car_company":"GMC","car_model":"Yukon","car_color":"Crimson","year":1994},
    {"id":85,"first_name":"Andre","email":"ameiklejohn2c@reference.com","gender":"Male","ip_address":"193.124.252.73","car_company":"Cadillac","car_model":"CTS-V","car_color":"Turquoise","year":2007},
    {"id":86,"first_name":"Yalonda","email":"yshurey2d@newyorker.com","gender":"Female","ip_address":"62.234.103.152","car_company":"Pontiac","car_model":"LeMans","car_color":"Green","year":1991},
    {"id":87,"first_name":"Shurlock","email":"slefranc2e@163.com","gender":"Male","ip_address":"224.30.184.122","car_company":"Porsche","car_model":"Cayenne","car_color":"Crimson","year":2003},
    {"id":88,"first_name":"Lu","email":"ldomino2f@lulu.com","gender":"Genderfluid","ip_address":"238.131.186.112","car_company":"Isuzu","car_model":"Hombre","car_color":"Yellow","year":1997},
    {"id":89,"first_name":"Kathe","email":"kmarkos2g@imdb.com","gender":"Female","ip_address":"214.5.154.205","car_company":"Mitsubishi","car_model":"RVR","car_color":"Mauv","year":1994},
    {"id":90,"first_name":"Link","email":"lvere2h@usnews.com","gender":"Male","ip_address":"157.201.146.33","car_company":"Chevrolet","car_model":"Express 2500","car_color":"Blue","year":2007},
    {"id":91,"first_name":"Frederic","email":"fsalmons2i@chronoengine.com","gender":"Male","ip_address":"177.48.103.160","car_company":"Volvo","car_model":"S60","car_color":"Puce","year":2007},
    {"id":92,"first_name":"Lizzy","email":"lpedden2j@trellian.com","gender":"Female","ip_address":"178.78.9.14","car_company":"Honda","car_model":"Crosstour","car_color":"Teal","year":2012},
    {"id":93,"first_name":"Krysta","email":"kgrayer2k@meetup.com","gender":"Agender","ip_address":"204.50.234.223","car_company":"Hummer","car_model":"H1","car_color":"Khaki","year":2003},
    {"id":94,"first_name":"Emelina","email":"ezima2l@salon.com","gender":"Female","ip_address":"31.124.199.173","car_company":"Toyota","car_model":"Land Cruiser","car_color":"Goldenrod","year":1999},
    {"id":95,"first_name":"Lukas","email":"lmcmichell2m@wisc.edu","gender":"Genderfluid","ip_address":"53.222.37.124","car_company":"Chevrolet","car_model":"Tracker","car_color":"Orange","year":2003},
    {"id":96,"first_name":"Kacie","email":"kwadhams2n@army.mil","gender":"Female","ip_address":"111.226.235.148","car_company":"GMC","car_model":"Savana 1500","car_color":"Khaki","year":2007},
    {"id":97,"first_name":"Dionisio","email":"dhearne2o@webeden.co.uk","gender":"Male","ip_address":"159.163.223.221","car_company":"Jeep","car_model":"Grand Cherokee","car_color":"Purple","year":2007},
    {"id":98,"first_name":"Virginia","email":"vdonizeau2p@godaddy.com","gender":"Female","ip_address":"72.43.3.37","car_company":"Audi","car_model":"S6","car_color":"Aquamarine","year":1995},
    {"id":99,"first_name":"Boniface","email":"bmarcome2q@kickstarter.com","gender":"Male","ip_address":"2.102.93.30","car_company":"Toyota","car_model":"4Runner","car_color":"Puce","year":2005},
    {"id":100,"first_name":"Jeddy","email":"jcattroll2r@tuttocitta.it","gender":"Male","ip_address":"15.118.39.237","car_company":"Mitsubishi","car_model":"Mirage","car_color":"Fuscia","year":1987},
    {"id":101,"first_name":"Lavinia","email":"lcarrington2s@mapquest.com","gender":"Female","ip_address":"52.247.247.75","car_company":"Chevrolet","car_model":"Silverado 1500","car_color":"Violet","year":2001},
    {"id":102,"first_name":"Gunter","email":"gaddams2t@weebly.com","gender":"Male","ip_address":"13.178.203.148","car_company":"Audi","car_model":"5000S","car_color":"Red","year":1988},
    {"id":103,"first_name":"Jorrie","email":"jhasson2u@ucsd.edu","gender":"Female","ip_address":"175.14.219.50","car_company":"Chevrolet","car_model":"S10","car_color":"Indigo","year":2004},
    {"id":104,"first_name":"Blanca","email":"blowsely2v@pbs.org","gender":"Female","ip_address":"211.88.197.254","car_company":"Chevrolet","car_model":"Monte Carlo","car_color":"Indigo","year":1997},
    {"id":105,"first_name":"Arther","email":"agergolet2w@lulu.com","gender":"Male","ip_address":"103.227.42.46","car_company":"Mazda","car_model":"RX-8","car_color":"Blue","year":2005},
    {"id":106,"first_name":"Addie","email":"astammers2x@networkadvertising.org","gender":"Male","ip_address":"72.89.227.98","car_company":"Chevrolet","car_model":"Impala","car_color":"Maroon","year":2004},
    {"id":107,"first_name":"Harland","email":"hperrie2y@npr.org","gender":"Male","ip_address":"192.46.71.82","car_company":"Nissan","car_model":"Xterra","car_color":"Maroon","year":2006},
    {"id":108,"first_name":"Terri-jo","email":"tlomax2z@umn.edu","gender":"Female","ip_address":"89.235.25.227","car_company":"Acura","car_model":"TSX","car_color":"Blue","year":2004},
    {"id":109,"first_name":"Roze","email":"rdaniau30@netscape.com","gender":"Female","ip_address":"38.230.48.68","car_company":"Ford","car_model":"Thunderbird","car_color":"Violet","year":1958},
    {"id":110,"first_name":"Christoffer","email":"cludvigsen31@elegantthemes.com","gender":"Male","ip_address":"17.175.50.214","car_company":"Volvo","car_model":"XC70","car_color":"Maroon","year":2007},
    {"id":111,"first_name":"Ardine","email":"ahallet32@state.gov","gender":"Female","ip_address":"183.169.223.60","car_company":"Dodge","car_model":"Avenger","car_color":"Orange","year":2010},
    {"id":112,"first_name":"Selinda","email":"strouncer33@t.co","gender":"Female","ip_address":"25.146.207.51","car_company":"Mercedes-Benz","car_model":"E-Class","car_color":"Pink","year":1990},
    {"id":113,"first_name":"Eugenia","email":"eschutze34@smh.com.au","gender":"Female","ip_address":"134.157.130.111","car_company":"Nissan","car_model":"Rogue","car_color":"Turquoise","year":2012},
    {"id":114,"first_name":"Germana","email":"gshurman35@spotify.com","gender":"Female","ip_address":"115.87.170.123","car_company":"Lamborghini","car_model":"Countach","car_color":"Green","year":1985},
    {"id":115,"first_name":"Daphna","email":"dbynold36@canalblog.com","gender":"Female","ip_address":"217.49.172.112","car_company":"Hyundai","car_model":"Tiburon","car_color":"Pink","year":2001},
    {"id":116,"first_name":"James","email":"jkareman37@time.com","gender":"Male","ip_address":"21.83.178.166","car_company":"Land Rover","car_model":"Discovery","car_color":"Turquoise","year":1998},
    {"id":117,"first_name":"Sibby","email":"sszymanski38@1und1.de","gender":"Female","ip_address":"206.191.38.191","car_company":"Nissan","car_model":"Sentra","car_color":"Khaki","year":2012},
    {"id":118,"first_name":"Charlean","email":"ctrevethan39@un.org","gender":"Female","ip_address":"98.12.168.72","car_company":"Dodge","car_model":"Ram 1500","car_color":"Khaki","year":1995},
    {"id":119,"first_name":"Ginnifer","email":"glibbe3a@howstuffworks.com","gender":"Female","ip_address":"62.230.181.146","car_company":"Acura","car_model":"TSX","car_color":"Goldenrod","year":2008},
    {"id":120,"first_name":"Bamby","email":"bfarge3b@bluehost.com","gender":"Female","ip_address":"141.124.237.11","car_company":"Pontiac","car_model":"Safari","car_color":"Khaki","year":1988},
    {"id":121,"first_name":"Clarey","email":"crossiter3c@lycos.com","gender":"Female","ip_address":"110.82.152.159","car_company":"Lexus","car_model":"LS","car_color":"Goldenrod","year":2001},
    {"id":122,"first_name":"Jeffry","email":"jeggins3d@sogou.com","gender":"Male","ip_address":"131.186.27.192","car_company":"Ford","car_model":"Focus","car_color":"Blue","year":2000},
    {"id":123,"first_name":"Robin","email":"rsarre3e@apple.com","gender":"Male","ip_address":"73.0.227.242","car_company":"Toyota","car_model":"Land Cruiser","car_color":"Pink","year":2001},
    {"id":124,"first_name":"Anallese","email":"awimpey3f@list-manage.com","gender":"Female","ip_address":"184.100.84.5","car_company":"Suzuki","car_model":"Forenza","car_color":"Orange","year":2007},
    {"id":125,"first_name":"Mariellen","email":"mwimpeney3g@sbwire.com","gender":"Female","ip_address":"28.210.104.222","car_company":"Aston Martin","car_model":"DB9","car_color":"Aquamarine","year":2011},
    {"id":126,"first_name":"Janela","email":"jcranson3h@jigsy.com","gender":"Female","ip_address":"52.99.107.39","car_company":"Saab","car_model":"900","car_color":"Fuscia","year":1995},
    {"id":127,"first_name":"Boy","email":"btather3i@dailymotion.com","gender":"Male","ip_address":"198.9.29.18","car_company":"Suzuki","car_model":"Vitara","car_color":"Blue","year":2000},
    {"id":128,"first_name":"Genny","email":"gnotton3j@cbc.ca","gender":"Female","ip_address":"228.123.27.10","car_company":"Chevrolet","car_model":"Express 1500","car_color":"Aquamarine","year":2000},
    {"id":129,"first_name":"Tremain","email":"tdaventry3k@com.com","gender":"Male","ip_address":"128.86.109.171","car_company":"Toyota","car_model":"Venza","car_color":"Purple","year":2013},
    {"id":130,"first_name":"Cassey","email":"cbedward3l@taobao.com","gender":"Female","ip_address":"153.209.251.43","car_company":"Acura","car_model":"Integra","car_color":"Purple","year":1997},
    {"id":131,"first_name":"Birgit","email":"bhaddow3m@hatena.ne.jp","gender":"Female","ip_address":"187.212.36.69","car_company":"Toyota","car_model":"Camry","car_color":"Maroon","year":2009},
    {"id":132,"first_name":"Annora","email":"aschoales3n@timesonline.co.uk","gender":"Female","ip_address":"67.64.162.62","car_company":"Dodge","car_model":"Ram 2500","car_color":"Goldenrod","year":2001},
    {"id":133,"first_name":"Hall","email":"hcawley3o@a8.net","gender":"Genderfluid","ip_address":"182.181.210.249","car_company":"GMC","car_model":"Yukon XL 1500","car_color":"Khaki","year":2011},
    {"id":134,"first_name":"Orion","email":"olipsett3p@ifeng.com","gender":"Male","ip_address":"138.155.9.234","car_company":"Dodge","car_model":"Caravan","car_color":"Maroon","year":2005},
    {"id":135,"first_name":"Baird","email":"bgudgeon3q@house.gov","gender":"Male","ip_address":"138.31.49.118","car_company":"Mercedes-Benz","car_model":"G-Class","car_color":"Teal","year":2008},
    {"id":136,"first_name":"Adair","email":"aortega3r@businessweek.com","gender":"Male","ip_address":"151.217.255.39","car_company":"Mercury","car_model":"Sable","car_color":"Teal","year":2001},
    {"id":137,"first_name":"Axe","email":"avenner3s@paypal.com","gender":"Male","ip_address":"91.188.250.153","car_company":"Nissan","car_model":"Murano","car_color":"Orange","year":2007},
    {"id":138,"first_name":"Lazare","email":"lroydon3t@elegantthemes.com","gender":"Male","ip_address":"11.12.93.251","car_company":"Lotus","car_model":"Elan","car_color":"Orange","year":1990},
    {"id":139,"first_name":"Devan","email":"dlayman3u@dot.gov","gender":"Female","ip_address":"131.131.81.92","car_company":"Lincoln","car_model":"Mark LT","car_color":"Goldenrod","year":2008},
    {"id":140,"first_name":"Charis","email":"cguidera3v@diigo.com","gender":"Female","ip_address":"46.86.94.139","car_company":"Lincoln","car_model":"Mark VII","car_color":"Yellow","year":1992},
    {"id":141,"first_name":"Tabby","email":"tquan3w@dedecms.com","gender":"Male","ip_address":"182.36.11.55","car_company":"Mercury","car_model":"Tracer","car_color":"Puce","year":1999},
    {"id":142,"first_name":"Garfield","email":"gdavidofski3x@google.com.au","gender":"Male","ip_address":"58.198.120.163","car_company":"Volkswagen","car_model":"Jetta","car_color":"Indigo","year":2003},
    {"id":143,"first_name":"Georgie","email":"glillie3y@loc.gov","gender":"Male","ip_address":"151.178.143.66","car_company":"Mitsubishi","car_model":"Pajero","car_color":"Puce","year":1991},
    {"id":144,"first_name":"Emmerich","email":"eledekker3z@feedburner.com","gender":"Male","ip_address":"99.134.48.134","car_company":"Audi","car_model":"S4","car_color":"Maroon","year":2013},
    {"id":145,"first_name":"Bowie","email":"bkira40@intel.com","gender":"Male","ip_address":"241.78.85.154","car_company":"Ford","car_model":"F150","car_color":"Yellow","year":2009},
    {"id":146,"first_name":"Hamnet","email":"hhaucke41@irs.gov","gender":"Male","ip_address":"215.13.6.198","car_company":"Ford","car_model":"Mustang","car_color":"Purple","year":1965},
    {"id":147,"first_name":"Aubrey","email":"alanda42@bbb.org","gender":"Female","ip_address":"7.17.61.158","car_company":"Subaru","car_model":"Impreza","car_color":"Red","year":1993},
    {"id":148,"first_name":"Jose","email":"jloades43@github.com","gender":"Male","ip_address":"149.106.91.19","car_company":"Chevrolet","car_model":"3500","car_color":"Khaki","year":1995},
    {"id":149,"first_name":"Dareen","email":"dgoaley44@jiathis.com","gender":"Female","ip_address":"233.220.106.69","car_company":"Volvo","car_model":"S80","car_color":"Green","year":1999},
    {"id":150,"first_name":"Justina","email":"jblomefield45@desdev.cn","gender":"Female","ip_address":"81.45.11.26","car_company":"Jaguar","car_model":"XJ Series","car_color":"Khaki","year":1998},
    {"id":151,"first_name":"Derk","email":"dphilbrick46@squarespace.com","gender":"Male","ip_address":"22.114.186.235","car_company":"Acura","car_model":"SLX","car_color":"Yellow","year":1997},
    {"id":152,"first_name":"Rickie","email":"rcarss47@google.pl","gender":"Male","ip_address":"54.254.9.22","car_company":"Porsche","car_model":"Cayenne","car_color":"Fuscia","year":2004},
    {"id":153,"first_name":"Nero","email":"nbladen48@51.la","gender":"Male","ip_address":"170.152.49.36","car_company":"Toyota","car_model":"T100","car_color":"Teal","year":1993},
    {"id":154,"first_name":"Sherlock","email":"shamon49@harvard.edu","gender":"Male","ip_address":"254.58.208.218","car_company":"Volkswagen","car_model":"Tiguan","car_color":"Puce","year":2009},
    {"id":155,"first_name":"Travus","email":"tcastro4a@taobao.com","gender":"Male","ip_address":"122.123.217.232","car_company":"Dodge","car_model":"Nitro","car_color":"Pink","year":2010},
    {"id":156,"first_name":"Sly","email":"sbampfield4b@java.com","gender":"Male","ip_address":"221.37.149.69","car_company":"Ford","car_model":"Taurus","car_color":"Mauv","year":2010},
    {"id":157,"first_name":"Frederigo","email":"fpaule4c@yahoo.co.jp","gender":"Male","ip_address":"100.74.75.192","car_company":"Cadillac","car_model":"DTS","car_color":"Purple","year":2008},
    {"id":158,"first_name":"Hughie","email":"hwarrell4d@seesaa.net","gender":"Male","ip_address":"75.240.203.2","car_company":"Cadillac","car_model":"Escalade ESV","car_color":"Violet","year":2004},
    {"id":159,"first_name":"Annette","email":"apartington4e@wikispaces.com","gender":"Female","ip_address":"47.47.84.228","car_company":"Infiniti","car_model":"G35","car_color":"Crimson","year":2006},
    {"id":160,"first_name":"Cherlyn","email":"cchessun4f@nps.gov","gender":"Female","ip_address":"218.64.108.65","car_company":"Land Rover","car_model":"Range Rover","car_color":"Yellow","year":2011},
    {"id":161,"first_name":"Crin","email":"cekins4g@printfriendly.com","gender":"Female","ip_address":"76.75.227.180","car_company":"Aston Martin","car_model":"DBS","car_color":"Orange","year":2010},
    {"id":162,"first_name":"Chico","email":"cimpleton4h@usatoday.com","gender":"Male","ip_address":"46.55.159.186","car_company":"Cadillac","car_model":"DeVille","car_color":"Red","year":1999},
    {"id":163,"first_name":"Reiko","email":"rveevers4i@gmpg.org","gender":"Female","ip_address":"133.38.148.40","car_company":"Hummer","car_model":"H2 SUV","car_color":"Green","year":2006},
    {"id":164,"first_name":"Klarika","email":"kheinlein4j@youtube.com","gender":"Female","ip_address":"250.159.171.140","car_company":"Lotus","car_model":"Exige","car_color":"Fuscia","year":2011},
    {"id":165,"first_name":"Ellynn","email":"egoldup4k@state.gov","gender":"Female","ip_address":"0.49.39.128","car_company":"Nissan","car_model":"GT-R","car_color":"Violet","year":2011},
    {"id":166,"first_name":"Leslie","email":"llacroix4l@ucoz.ru","gender":"Male","ip_address":"197.241.178.35","car_company":"Pontiac","car_model":"Bonneville","car_color":"Indigo","year":1997},
    {"id":167,"first_name":"Deirdre","email":"dwankling4m@dailymail.co.uk","gender":"Female","ip_address":"235.136.248.165","car_company":"Mitsubishi","car_model":"Endeavor","car_color":"Green","year":2008},
    {"id":168,"first_name":"Carrol","email":"cpenright4n@uiuc.edu","gender":"Male","ip_address":"117.45.8.171","car_company":"Ford","car_model":"Aerostar","car_color":"Fuscia","year":1997},
    {"id":169,"first_name":"Carmina","email":"cgwynn4o@meetup.com","gender":"Agender","ip_address":"128.54.115.9","car_company":"Acura","car_model":"CL","car_color":"Pink","year":1999},
    {"id":170,"first_name":"Harmonie","email":"hagates4p@printfriendly.com","gender":"Female","ip_address":"66.144.136.94","car_company":"Chevrolet","car_model":"Caprice","car_color":"Yellow","year":1996},
    {"id":171,"first_name":"Vladamir","email":"vkembery4q@mtv.com","gender":"Male","ip_address":"200.153.254.11","car_company":"GMC","car_model":"Vandura G2500","car_color":"Violet","year":1995},
    {"id":172,"first_name":"Evvie","email":"eroll4r@europa.eu","gender":"Female","ip_address":"157.184.255.76","car_company":"Mazda","car_model":"CX-9","car_color":"Fuscia","year":2008},
    {"id":173,"first_name":"Kelcey","email":"klefloch4s@joomla.org","gender":"Female","ip_address":"45.243.71.94","car_company":"Lamborghini","car_model":"Gallardo","car_color":"Yellow","year":2006},
    {"id":174,"first_name":"Marci","email":"msleight4t@purevolume.com","gender":"Female","ip_address":"109.77.91.81","car_company":"Toyota","car_model":"Sienna","car_color":"Turquoise","year":2000},
    {"id":175,"first_name":"Delmore","email":"dgowan4u@mysql.com","gender":"Male","ip_address":"123.94.125.236","car_company":"Acura","car_model":"TL","car_color":"Red","year":2010},
    {"id":176,"first_name":"Kliment","email":"kbrader4v@stumbleupon.com","gender":"Male","ip_address":"125.46.79.139","car_company":"Plymouth","car_model":"Voyager","car_color":"Mauv","year":1993},
    {"id":177,"first_name":"Tiffany","email":"tjenyns4w@livejournal.com","gender":"Female","ip_address":"105.163.243.2","car_company":"Mitsubishi","car_model":"Chariot","car_color":"Aquamarine","year":1992},
    {"id":178,"first_name":"Curt","email":"cvickors4x@webnode.com","gender":"Male","ip_address":"247.232.110.230","car_company":"BMW","car_model":"545","car_color":"Green","year":2005},
    {"id":179,"first_name":"Dick","email":"dtraher4y@indiatimes.com","gender":"Male","ip_address":"170.39.19.229","car_company":"Mercury","car_model":"Grand Marquis","car_color":"Turquoise","year":2010},
    {"id":180,"first_name":"Susanne","email":"scardiff4z@craigslist.org","gender":"Female","ip_address":"102.114.42.35","car_company":"Buick","car_model":"Lucerne","car_color":"Khaki","year":2007},
    {"id":181,"first_name":"Georg","email":"gcleghorn50@people.com.cn","gender":"Male","ip_address":"44.144.157.151","car_company":"Buick","car_model":"Skyhawk","car_color":"Orange","year":1987},
    {"id":182,"first_name":"Paton","email":"pbastable51@earthlink.net","gender":"Male","ip_address":"113.141.212.31","car_company":"Mitsubishi","car_model":"Tundra","car_color":"Maroon","year":2009},
    {"id":183,"first_name":"Ingrim","email":"icyples52@china.com.cn","gender":"Male","ip_address":"249.144.69.239","car_company":"Chevrolet","car_model":"Malibu","car_color":"Orange","year":2006},
    {"id":184,"first_name":"Brooke","email":"bacreman53@merriam-webster.com","gender":"Male","ip_address":"180.250.38.197","car_company":"Ford","car_model":"Mustang","car_color":"Teal","year":1973},
    {"id":185,"first_name":"Pepi","email":"planfere54@tripod.com","gender":"Female","ip_address":"254.1.48.141","car_company":"Chevrolet","car_model":"Impala","car_color":"Fuscia","year":1996},
    {"id":186,"first_name":"Lira","email":"lladel55@furl.net","gender":"Female","ip_address":"254.120.49.174","car_company":"Mercedes-Benz","car_model":"600SL","car_color":"Teal","year":1993},
    {"id":187,"first_name":"Mohammed","email":"mgetcliffe56@state.gov","gender":"Male","ip_address":"255.191.133.17","car_company":"Isuzu","car_model":"Rodeo","car_color":"Red","year":1997},
    {"id":188,"first_name":"Goldia","email":"grivalant57@163.com","gender":"Female","ip_address":"68.246.136.6","car_company":"Honda","car_model":"CR-V","car_color":"Khaki","year":1997},
    {"id":189,"first_name":"Analiese","email":"aclaffey58@discovery.com","gender":"Female","ip_address":"71.188.98.20","car_company":"Toyota","car_model":"Prius","car_color":"Maroon","year":2007},
    {"id":190,"first_name":"Leighton","email":"lsalerno59@ox.ac.uk","gender":"Male","ip_address":"239.48.55.176","car_company":"Hyundai","car_model":"Tiburon","car_color":"Khaki","year":2008},
    {"id":191,"first_name":"Marco","email":"mshrive5a@360.cn","gender":"Genderfluid","ip_address":"59.39.69.122","car_company":"Ford","car_model":"Fiesta","car_color":"Turquoise","year":2001},
    {"id":192,"first_name":"Clayton","email":"cciraldo5b@adobe.com","gender":"Male","ip_address":"183.13.165.117","car_company":"Nissan","car_model":"Altima","car_color":"Pink","year":2010},
    {"id":193,"first_name":"Ade","email":"apithcock5c@desdev.cn","gender":"Male","ip_address":"211.255.91.38","car_company":"Saturn","car_model":"Outlook","car_color":"Khaki","year":2008},
    {"id":194,"first_name":"Merrie","email":"mrepp5d@un.org","gender":"Female","ip_address":"126.237.231.211","car_company":"Maybach","car_model":"62","car_color":"Yellow","year":2010},
    {"id":195,"first_name":"Grantley","email":"gwitcher5e@privacy.gov.au","gender":"Male","ip_address":"73.10.62.151","car_company":"GMC","car_model":"Savana 3500","car_color":"Aquamarine","year":2002},
    {"id":196,"first_name":"Ferdinand","email":"fllewelyn5f@wiley.com","gender":"Male","ip_address":"83.4.217.204","car_company":"Ford","car_model":"Expedition EL","car_color":"Green","year":2011},
    {"id":197,"first_name":"Rodrique","email":"rrippin5g@ft.com","gender":"Male","ip_address":"173.182.160.26","car_company":"Dodge","car_model":"Intrepid","car_color":"Blue","year":2000},
    {"id":198,"first_name":"Fayre","email":"fslucock5h@google.ru","gender":"Female","ip_address":"140.193.190.22","car_company":"Volkswagen","car_model":"Type 2","car_color":"Fuscia","year":1991},
    {"id":199,"first_name":"Dyanne","email":"dromushkin5i@thetimes.co.uk","gender":"Female","ip_address":"100.79.141.179","car_company":"Cadillac","car_model":"Escalade EXT","car_color":"Crimson","year":2007},
    {"id":200,"first_name":"Darryl","email":"dpulford5j@exblog.jp","gender":"Male","ip_address":"214.74.34.140","car_company":"Mazda","car_model":"B-Series Plus","car_color":"Blue","year":1992}]
    },{}],3:[function(require,module,exports){
    const { getAllCars, getCarById } = require("../api/car");
    
    const renderTable = (data) => {
      const tableBody = document.getElementById("table-body");
    
      if (!tableBody) {
        throw new Error("No table element found");
      }
      
      const rows = data.reduce(
        (acc, { id,first_name,email,gender,ip_address,car_company,car_model,car_color,year}) =>
          acc +
          `<tr>
            <td>${id}</td>
            <td>${first_name}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${ip_address}</td>
            <td>${car_company}</td>
            <td>${car_model}</td>
            <td>${car_color}</td>
            <td>${year}</td>
        </tr>`,
        ``
      );
    
      tableBody.innerHTML = rows;
    };
    
    
   
    getAllCars().then(({ data }) => renderTable(data));  
    
    const onSubmit = (event) => {
      event.preventDefault();
      const term = event.target.filters.value;
      const valueTerm = event.target.input.value;
      

      if(term === `id`) {
        getCarById(valueTerm).then(({ data }) => renderTable(data));
      } else {
        getAllCars(term, valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
      }
    };
    
    const onReset = () => {
      window.location.replace(window.location.pathname);
      getAllCars().then(({ data }) => renderTable(data));
    };
    
    document.getElementById("myForm").addEventListener("submit", onSubmit);
    document.getElementById("myForm").addEventListener("reset", onReset);
    
    },{"../api/car":1}]},{},[3]);