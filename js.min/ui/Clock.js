define([],function(){var t=function(t){return 10>t?"0"+t:t},e=function(t,e){this._element=t,this._options=e,this._time=document.createElement("p"),this._element.appendChild(this._time),this._tick()};return e.options={time:!0},e.prototype._tick=function(){var e=this,n=new Date,i=t(n.getDate())+"/"+(n.getMonth()+1)+"/"+n.getFullYear(),o=t(n.getHours())+":"+t(n.getMinutes())+":"+t(n.getSeconds());this._time.innerHTML=i+(this._options.time?" - "+o:""),this._options.time&&(this._timer=setTimeout(function(){e._tick()},900))},e.prototype.unload=function(){clearTimeout(this._timer),this._time.parentNode.removeChild(this._time)},e});