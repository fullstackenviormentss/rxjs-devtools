import * as rxSpy from './utils/rxSpy';

chrome.devtools.panels.create("RxJs",
    "extension/panel/icon.png",
    "extension/panel/panel.html",
    function (panel) {
        console.log('Extension running...');
        console.log('RxSpy isPreset = ', rxSpy.exists())
    }
);

// chrome.devtools.panels.elements.createSidebarPane("Sidebar",
//     function (sidebar) {
//         sidebar.setPage("sidebar.html");
//     }
// );