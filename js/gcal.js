(function(){
  document.addEventListener('DOMContentLoaded',function(){
    var containers=document.querySelectorAll('.gcal-events-container');
    if(!containers.length)return;
    containers.forEach(function(el){
      var calId=el.getAttribute('data-cal-id');
      var key=el.getAttribute('data-cal-key');
      if(!calId||!key)return;
      var now=new Date().toISOString();
      var url='https://www.googleapis.com/calendar/v3/calendars/'+encodeURIComponent(calId)+'/events?key='+encodeURIComponent(key)+'&orderBy=startTime&singleEvents=true&timeMin='+encodeURIComponent(now)+'&maxResults=25';
      fetch(url).then(function(r){return r.json();}).then(function(data){
        if(!data.items||!data.items.length){el.innerHTML='<p class="gcal-empty">No upcoming events.</p>';return;}
        var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        el.innerHTML='<div class="events-list">'+data.items.map(function(ev){
          var start=ev.start.dateTime||ev.start.date;
          var d=new Date(start);
          var month=months[d.getMonth()];
          var day=d.getDate();
          var timeStr=ev.start.dateTime?d.toLocaleString('en-US',{hour:'numeric',minute:'2-digit',hour12:true}):'All day';
          var loc=ev.location?' · '+ev.location:'';
          var title=(ev.summary||'Untitled').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
          var link=ev.htmlLink?' onclick="window.open(''+ev.htmlLink+'','_blank')" style="cursor:pointer;"':'';
          return '<div class="event-item"'+link+'><div class="event-date"><div class="event-date-month">'+month+'</div><div class="event-date-day">'+day+'</div></div><div class="event-info"><h3>'+title+'</h3><p>'+timeStr+loc+'</p></div></div>';
        }).join('')+'</div>';
      }).catch(function(){el.innerHTML='<p class="gcal-empty">Could not load events. Check Calendar ID and API Key in builder.</p>';});
    });
  });
})();