/* UAParser.js v2.0.0-alpha.2
   Copyright © 2012-2023 Faisal Salman <f@faisalman.com>
   MIT License */
!function(i,u){"use strict";function e(i){for(var e={},t=0;t<i.length;t++)e[i[t].toUpperCase()]=i[t];return e}function n(i,e){if(!(typeof i===d&&0<i.length))return typeof i===s&&-1!==fi(e).indexOf(fi(i));for(var t in i)if(fi(i[t])==fi(e))return 1}function t(i,e){for(var t in e)if(typeof e[t]===d&&0<e[t].length){for(var o=0;o<e[t].length;o++)if(n(e[t][o],i))return"?"===t?u:t}else if(n(e[t],i))return"?"===t?u:t;return i}var w="",c="function",b="undefined",d="object",s="string",l="major",p="model",h="name",f="type",o="vendor",m="version",g="architecture",r="console",v="mobile",a="tablet",x="smarttv",k="wearable",y="embedded",_="user-agent",S=350,C="brands",T="fullVersionList",q="platform",A="platformVersion",z="bitness",N="sec-ch-ua",O=N+"-full-version-list",H=N+"-arch",P=N+"-bitness",I=N+"-mobile",U=N+"-model",E=N+"-platform",R=E+"-version",j=["brands","fullVersionList",v,p,"platform","platformVersion",g,"bitness"],M="browser",V="cpu",B="device",F="engine",D="os",$="result",L="Amazon",W="Apple",G="ASUS",X="BlackBerry",Z="Google",K="Huawei",Q="LG",Y="Microsoft",J="Motorola",ii="Samsung",ei="Sony",ti="Xiaomi",oi="Zebra",ri="Mobile ",ai=" Browser",si="Chrome",ni="Firefox",wi="Opera",bi="Facebook",li="Windows",ui=typeof i!==b&&i.navigator?i.navigator:u,ci=ui&&ui.userAgentData?ui.userAgentData:u,di=function(i,e){var t,o={};for(t in i)o[t]=e[t]&&e[t].length%2==0?e[t].concat(i[t]):i[t];return o},pi=function(i){for(var e in i)return/^(browser|cpu|device|engine|os)$/.test(e)},hi=function(i){if(!i)return u;for(var e=[],t=vi(/\\?\"/g,i).split(", "),o=0;o<t.length;o++){var r=t[o].split(";v=");e[o]={brand:r[0],version:r[1]}}return e},fi=function(i){return typeof i===s?i.toLowerCase():i},mi=function(i){return typeof i===s?vi(/[^\d\.]/g,i).split(".")[0]:u},gi=function(i){for(var e in i){e=i[e];typeof e==d&&2==e.length?this[e[0]]=e[1]:this[e]=u}return this},vi=function(i,e){return e.replace(i,w)},xi=function(i){return typeof i===s?vi(/\"/g,i):i},ki=function(i,e){if(typeof i===s)return i=vi(/^\s\s*/,i),typeof e===b?i:i.substring(0,S)},yi=function(i,e){if(i&&e)for(var t,o,r,a,s,n=0;n<e.length&&!a;){for(var w=e[n],b=e[n+1],l=t=0;l<w.length&&!a&&w[l];)if(a=w[l++].exec(i))for(o=0;o<b.length;o++)s=a[++t],typeof(r=b[o])===d&&0<r.length?2===r.length?typeof r[1]==c?this[r[0]]=r[1].call(this,s):this[r[0]]=r[1]:3===r.length?typeof r[1]!==c||r[1].exec&&r[1].test?this[r[0]]=s?s.replace(r[1],r[2]):u:this[r[0]]=s?r[1].call(this,s,r[2]):u:4===r.length&&(this[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):u):this[r]=s||u;n+=2}},_i={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Si={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[h,ri+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[h,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[h,m],[/opios[\/ ]+([\w\.]+)/i],[m,[h,wi+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[h,wi]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[h,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[h,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[m,[h,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[h,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[h,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[h,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[h,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[h,/(.+)/,"$1 Secure"+ai],m],[/\bfocus\/([\w\.]+)/i],[m,[h,ni+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[h,wi+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[h,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[h,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[h,wi+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[h,"MIUI"+ai]],[/fxios\/([\w\.-]+)/i],[m,[h,ri+ni]],[/\bqihu|(qi?ho?o?|360)browser/i],[[h,"360"+ai]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[h,/(.+)/,"$1"+ai],m],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[h,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[h],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[h,bi],m],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[h,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[h,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[h,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[h,si+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[h,si+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[h,"Android"+ai]],[/chrome\/([\w\.]+) mobile/i],[m,[h,ri+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[h,m],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[m,[h,ri+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[h,ri+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[m,h],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[h,[m,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[h,m],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[h,ri+ni],m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[h,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[h,ni+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[h,m],[/(cobalt)\/([\w\.]+)/i],[h,[m,/[^\d\.]+./,w]]],cpu:[[/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i],[[g,"amd64"]],[/(ia32(?=;))/i,/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,w,fi]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,fi]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[p,[o,ii],[f,a]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[p,[o,ii],[f,v]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[p,[o,W],[f,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[p,[o,W],[f,a]],[/(macintosh);/i],[p,[o,W]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[p,[o,"Sharp"],[f,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[p,[o,K],[f,a]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[p,[o,K],[f,v]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[p,/_/g," "],[o,ti],[f,v]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[p,/_/g," "],[o,ti],[f,a]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[p,[o,"OPPO"],[f,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[p,[o,"Vivo"],[f,v]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[p,[o,"Realme"],[f,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[p,[o,J],[f,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[p,[o,J],[f,a]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[p,[o,Q],[f,a]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[p,[o,Q],[f,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[p,[o,"Lenovo"],[f,a]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[p,/_/g," "],[o,"Nokia"],[f,v]],[/(pixel c)\b/i],[p,[o,Z],[f,a]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[p,[o,Z],[f,v]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[p,[o,ei],[f,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[p,"Xperia Tablet"],[o,ei],[f,a]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[p,[o,"OnePlus"],[f,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[p,[o,L],[f,a]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[p,/(.+)/g,"Fire Phone $1"],[o,L],[f,v]],[/(playbook);[-\w\),; ]+(rim)/i],[p,o,[f,a]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[p,[o,X],[f,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[p,[o,G],[f,a]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[p,[o,G],[f,v]],[/(nexus 9)/i],[p,[o,"HTC"],[f,a]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[p,/_/g," "],[f,v]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[p,[o,"Acer"],[f,a]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[p,[o,"Meizu"],[f,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,p,[f,v]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[o,p,[f,a]],[/(surface duo)/i],[p,[o,Y],[f,a]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[p,[o,"Fairphone"],[f,v]],[/(shield[\w ]+) b/i],[p,[o,"Nvidia"],[f,a]],[/(sprint) (\w+)/i],[o,p,[f,v]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[o,Y],[f,v]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[p,[o,oi],[f,a]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[p,[o,oi],[f,v]],[/smart-tv.+(samsung)/i],[o,[f,x]],[/hbbtv.+maple;(\d+)/i],[[p,/^/,"SmartTV"],[o,ii],[f,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,Q],[f,x]],[/(apple) ?tv/i],[o,[p,W+" TV"],[f,x]],[/crkey/i],[[p,si+"cast"],[o,Z],[f,x]],[/droid.+aft(\w)( bui|\))/i],[p,[o,L],[f,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[p,[o,"Sharp"],[f,x]],[/(bravia[\w ]+)( bui|\))/i],[p,[o,ei],[f,x]],[/(mitv-\w{5}) bui/i],[p,[o,ti],[f,x]],[/Hbbtv.*(technisat) (.*);/i],[o,p,[f,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[o,ki],[p,ki],[f,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[f,x]],[/(ouya)/i,/(nintendo) (\w+)/i],[o,p,[f,r]],[/droid.+; (shield) bui/i],[p,[o,"Nvidia"],[f,r]],[/(playstation \w+)/i],[p,[o,ei],[f,r]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[p,[o,Y],[f,r]],[/((pebble))app/i],[o,p,[f,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[p,[o,W],[f,k]],[/droid.+; (glass) \d/i],[p,[o,Z],[f,k]],[/droid.+; (wt63?0{2,3})\)/i],[p,[o,oi],[f,k]],[/(quest( 2| pro)?)/i],[p,[o,bi],[f,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[f,y]],[/(aeobc)\b/i],[p,[o,L],[f,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[p,[f,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[p,[f,a]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[f,a]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[f,v]],[/(android[-\w\. ]{0,9});.+buil/i],[p,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[h,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[h,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[h,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,h]],os:[[/microsoft (windows) (vista|xp)/i],[h,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[h,[m,t,_i]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[h,li],[m,t,_i]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[h,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[h,"macOS"],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,h],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[h,m],[/\(bb(10);/i],[m,[h,X]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[h,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[h,ni+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[h,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[h,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[h,si+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[h,"Chrome OS"],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[h,m],[/(sunos) ?([\w\.\d]*)/i],[[h,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[h,m]]},Ci=(si={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}},gi.call(si.init,[[M,[h,m,l]],[V,[g]],[B,[f,p,o]],[F,[h,m]],[D,[h,m]]]),gi.call(si.isIgnore,[[M,[m,l]],[F,[m]],[D,[m]]]),gi.call(si.isIgnoreRgx,[[M,/ ?browser$/i],[D,/ ?os$/i]]),gi.call(si.toString,[[M,[h,m]],[V,[g]],[B,[o,p]],[F,[h,m]],[D,[h,m]]]),si),Ti=function(e,i){var t=Ci.init[i],o=Ci.isIgnore[i]||0,r=Ci.isIgnoreRgx[i]||0,a=Ci.toString[i]||0;function s(){gi.call(this,t)}return s.prototype.getItem=function(){return e},s.prototype.withClientHints=function(){return ci?ci.getHighEntropyValues(j).then(function(i){return e.setCH(new qi(i,!1)).parseCH().get()}):e.parseCH().get()},s.prototype.withFeatureCheck=function(){return e.detectFeature().get()},i!=$&&(s.prototype.is=function(i){var e,t=!1;for(e in this)if(this.hasOwnProperty(e)&&!n(o,e)&&fi(r?vi(r,this[e]):this[e])==fi(r?vi(r,i):i)){if(t=!0,i!=b)break}else if(i==b&&t){t=!t;break}return t},s.prototype.toString=function(){var i,e=w;for(i in a)typeof this[a[i]]!==b&&(e+=(e?" ":w)+this[a[i]]);return e||b}),ci||(s.prototype.then=function(i){var e=this,t=function(){for(var i in e)e.hasOwnProperty(i)&&(this[i]=e[i])};t.prototype={is:s.prototype.is,toString:s.prototype.toString};t=new t;return i(t),t}),new s};function qi(i,e){if(i=i||{},gi.call(this,j),e)gi.call(this,[[C,hi(i[N])],[T,hi(i[O])],[C,hi(i[N])],[v,/\?1/.test(i[I])],[p,xi(i[U])],[q,xi(i[E])],[A,xi(i[R])],[g,xi(i[H])],[z,xi(i[P])]]);else for(var t in i)this.hasOwnProperty(t)&&typeof i[t]!==b&&(this[t]=i[t])}function Ai(i,e,t,o){return this.get=function(i){return i?this.data.hasOwnProperty(i)?this.data[i]:u:this.data},this.set=function(i,e){return this.data[i]=e,this},this.setCH=function(i){return this.uaCH=i,this},this.detectFeature=function(){if(ui&&ui.userAgent==this.ua)switch(this.itemType){case M:ui.brave&&typeof ui.brave.isBrave==c&&this.set(h,"Brave");break;case B:!this.get(f)&&ci&&ci[v]&&this.set(f,v),"Macintosh"==this.get(p)&&ui&&typeof ui.standalone!==b&&ui.maxTouchPoints&&2<ui.maxTouchPoints&&this.set(p,"iPad").set(f,a);break;case D:!this.get(h)&&ci&&ci[q]&&this.set(h,ci[q]);break;case $:var e=this.data,i=function(i){return e[i].getItem().detectFeature().get()};this.set(M,i(M)).set(V,i(V)).set(B,i(B)).set(F,i(F)).set(D,i(D))}return this},this.parseUA=function(){return this.itemType!=$&&yi.call(this.data,this.ua,this.rgxMap),this.itemType==M&&this.set(l,mi(this.get(m))),this},this.parseCH=function(){this.ua;var e=this.uaCH,i=this.rgxMap;switch(this.itemType){case M:var t=e[T]||e[C];if(t)for(var o in t){var r=t[o].brand,a=t[o].version;!/not.a.brand/i.test(r)&&(o<1||/chromi/i.test(this.get(h)))&&this.set(h,vi(Z+" ",r)).set(m,a).set(l,mi(a))}break;case V:var s=e[g];s&&(s&&"64"==e[z]&&(s+="64"),yi.call(this.data,s+";",i));break;case B:e[v]&&this.set(f,v),e[p]&&this.set(p,e[p]);break;case D:s=e[q];s&&(w=e[A],s==li&&(w=13<=parseInt(mi(w),10)?"11":"10"),this.set(h,s).set(m,w));break;case $:var n=this.data,w=function(i){return n[i].getItem().setCH(e).parseCH().get()};this.set(M,w(M)).set(V,w(V)).set(B,w(B)).set(F,w(F)).set(D,w(D))}return this},gi.call(this,[["itemType",i],["ua",e],["uaCH",o],["rgxMap",t],["data",Ti(this,i)]]),this}function zi(i,e,t){if(typeof i===d?(e=pi(i)?(typeof e===d&&(t=e),i):(t=i,u),i=u):typeof i!==s||pi(e)||(t=e,e=u),!(this instanceof zi))return new zi(i,e,t).getResult();var o=typeof i===s?i:ui&&ui.userAgent?ui.userAgent:t&&t[_]?t[_]:w,r=new qi(t,!0),a=e?di(Si,e):Si,e=function(i){return i==$?function(){return new Ai(i,o,a,r).set("ua",o).set(M,this.getBrowser()).set(V,this.getCPU()).set(B,this.getDevice()).set(F,this.getEngine()).set(D,this.getOS()).get()}:function(){return new Ai(i,o,a[i],r).parseUA().get()}};return gi.call(this,[["getBrowser",e(M)],["getCPU",e(V)],["getDevice",e(B)],["getEngine",e(F)],["getOS",e(D)],["getResult",e($)],["getUA",function(){return o}],["setUA",function(i){return typeof i===s&&(o=i.length>S?ki(i,S):i),this}]]).setUA(o),this}zi.VERSION="2.0.0-alpha.2",zi.BROWSER=e([h,m,l]),zi.CPU=e([g]),zi.DEVICE=e([p,o,f,r,v,x,a,k,y]),zi.ENGINE=zi.OS=e([h,m]),typeof exports!==b?(typeof module!==b&&module.exports&&(exports=module.exports=zi),exports.UAParser=zi):typeof define===c&&define.amd?define(function(){return zi}):typeof i!==b&&(i.UAParser=zi);var Ni,Oi=typeof i!==b&&(i.jQuery||i.Zepto);Oi&&!Oi.ua&&(Ni=new zi,Oi.ua=Ni.getResult(),Oi.ua.get=function(){return Ni.getUA()},Oi.ua.set=function(i){Ni.setUA(i);var e,t=Ni.getResult();for(e in t)Oi.ua[e]=t[e]})}("object"==typeof window?window:this);