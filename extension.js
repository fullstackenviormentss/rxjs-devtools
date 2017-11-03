chrome.devtools.panels.create("RxJs",
    "MyPanelIcon.png",
    "panel.html",
    function (panel) {
        console.log('Extension running...');
    }
);

// chrome.devtools.panels.elements.createSidebarPane("Sidebar",
//     function (sidebar) {
//         sidebar.setPage("sidebar.html");
//     }
// );