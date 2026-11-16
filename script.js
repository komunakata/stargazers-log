fetch("events.json")
    .then((response) => {
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return response.json();
  })
    .then((events) => {
        const list = document.querySelector("#starred");
        events.forEach((event) => {
            const item = document.createElement("li");
            item.textContent = `${event.name} - starred ${event.starred}`;
            list.appendChild(item);
        })
    })