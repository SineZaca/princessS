(function(){
  const target = new Date('2023-07-15T21:55:00');
  const el = document.getElementById('timer');
  if(!el) return;

  function update(){
    const now = new Date();
    let start = new Date(target);
    let end = new Date(now);
    if(end < start) [start, end] = [end, start];

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    if (seconds < 0) { seconds += 60; minutes--; }
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) { months--; days += new Date(end.getFullYear(), end.getMonth(), 0).getDate(); }
    if (months < 0) { months += 12; years--; }

    el.innerHTML = `
      <div class="timer-card">
        <div><div class="time-num">${years}</div><div class="time-label">Years</div></div>
        <div><div class="time-num">${months}</div><div class="time-label">Months</div></div>
        <div><div class="time-num">${days}</div><div class="time-label">Days</div></div>
        <div><div class="time-num">${hours}</div><div class="time-label">Hours</div></div>
        <div><div class="time-num">${minutes}</div><div class="time-label">Minutes</div></div>
        <div><div class="time-num">${seconds}</div><div class="time-label">Seconds</div></div>
      </div>
    `;
  }

  update();
  setInterval(update, 1000);
})();