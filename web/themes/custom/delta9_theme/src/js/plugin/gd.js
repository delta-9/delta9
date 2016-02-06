/*
Exemple :
if(gd.processed(this)) return;
*/
var gd = {
  s: {},
  debug: true,
  processed : function(k)
  {
    k = k.attach.toString().replace(/\W/g,'').substr(0,600);
    return gd.s[k] ? 1 : !(gd.s[k]=1)
  },
  rootfs: function()
  {
    return jQuery('html').css('font-size').replace('px','');
  },
  rem_px: function(px)
  {
    var fs = gd.rootfs();

    var px = px / 10;

    return px * fs;
  },
  px_rem: function(px)
  {
    var rem = px / 10;

    return rem + 'rem';
  },
  log: function(v1, v2)
  {
    if(!gd.debug) return;

    if(typeof v2 !== 'undefined')
    {
      console.log(v1, v2);
    }
    else
    {
      console.log(v1);
    }
  },
  h: function()
  {
    return document.location.hash.replace('#','');
  },
  $: function(selector)
  {
    return document.querySelectorAll(selector);
  },

};