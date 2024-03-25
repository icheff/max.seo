fetch('./sidebar').then(response => response.ok ? response.text() : Promise.reject('Not found')).then(sidebarData => document.getElementById('sidebar').innerHTML = sidebarData).catch(error => console.error(error.message));