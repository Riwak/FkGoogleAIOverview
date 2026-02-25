 (function() {

     const url = new URL(window.location.href);

     if (url.pathname === "/search" && !url.searchParams.has("udm")) {
         url.searchParams.append("udm", "14");
         location.replace(url);
     }

 })();
