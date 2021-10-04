(this["webpackJsonpcommand-line-generator"]=this["webpackJsonpcommand-line-generator"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e){e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"github.schema.json#","title":"List of Commands","description":"A list of frequently-used commands for each Sourcegraph deployment type.","allowComments":true,"type":"object","additionalProperties":false,"Docker":{"Function":{"value":"Function","command":"[CHOOSE FUNCTION]","description":"Default option"},"Get Logs":{"command":"docker logs","option":"$CONTAINER","description":"Get the logs of a container."},"List Containers":{"command":"docker ps -A","option":"","description":"Get a list of containers."},"Install or Start Sourcegraph":{"command":"docker run -d --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm --volume ~/.sourcegraph/config:/etc/sourcegraph --volume ~/.sourcegraph/data:/var/opt/sourcegraph sourcegraph/server:","option":"$VERSION","description":"The docker run command first creates a writeable container layer over the specified image, and then starts it using the specified command."},"Upgrade Sourcegraph":{"command":"docker run -d --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm --volume ~/.sourcegraph/config:/etc/sourcegraph --volume ~/.sourcegraph/data:/var/opt/sourcegraph sourcegraph/server:","option":"$VERSION","description":"All you need to do to upgrade Sourcegraph is to restart your Docker server with a new image tag."},"Run Bash Shell":{"command":"docker exec -it","option":"$CONTAINER","command2":"bash","description":"This allows you to execute an interactive bash shell on a running container."},"Kill Container":{"command":"docker kill","option":"$CONTAINER","description":"Kill one or more containers."},"Restart Container":{"command":"docker restart","option":"$CONTAINER","description":"Restart one or more containers."},"Run Interactive Shell":{"command":"docker exec -it","option":"$CONTAINER","command2":"shell","description":"This allows you to execute an interactive shell on a running container."}},"Docker Compose":{"Function":{"value":"Function","command":"[CHOOSE FUNCTION]","description":"Default option"},"Get Logs":{"command":"docker-compose logs","option":"$CONTAINER","description":"Get the logs of a container."},"List Containers":{"command":"docker-compose ps -a","option":"","description":"Get a list of containers."},"Kill Containers":{"command":"docker-compose kill","option":"","description":"Get a list of containers."},"Start Sourcegraph":{"command":"docker-compose up -d","option":"","description":"Builds, (re)creates, starts, and attaches to containers for Sourcegraph. `-d` flag starts the container in the detached mode where the container runs in the background."},"Shutdown Sourcegraph":{"command":"docker-compose down","option":"","description":"Stops containers and removes containers, networks, volumes, and images created by docker up."},"Run Bash Shell":{"command":"docker-compose exec -it","option":"$CONTAINER","command2":"bash","description":"This allows you to execute an interactive bash shell on a running container."},"Access pgsql database":{"command":"docker exec -it pgsql psql -U sg","option":"","description":"This allows you to access the main database and run psql commands on a running container."},"Access codeintel database":{"command":"docker exec -it codeintel-db psql -U sg","option":"","description":"This allows you to access codeintel database and run psql commands on a running container."},"Generate the database dumps":{"command":"docker exec","option":"pgsql","command2":"sh -c \'pg_dump -C --username sg sg\' > sourcegraph_db.out","description":"This allows you to generate the database dumps for the main database. Replace pgsql to codeintel-db for codeintel-db."}},"Kubernetes":{"Function":{"value":"Function","command":"[CHOOSE FUNCTION]","description":"Default option"},"Get Logs":{"command":"kubectl logs","option":"$POD","description":"Get the logs of a specified pod."},"List Pods":{"command":"kubectl get pods -A","option":"","description":"Get a list of pods within the cluster and their health status."},"Describe Pod":{"command":"kubectl describe pod","option":"$POD","description":"Display detailed information about the status of a single pod"},"Restart Sourcegraph":{"command":"kubectl rollout restart deployment/sourcegraph-frontend","option":"$POD","description":"Restart Sourcegraph Instance by restarting the frontend pod."},"Get Events":{"command":"kubectl get events","option":"","description":"List all events in the cluster\u2019s history."},"Delete a Pod":{"command":"kubectl delete pod","option":"$POD","description":"Delete a failing pod so that it will get recreated, possibly on a different node."},"List Persistent Volume Claims (PVCs)":{"command":"kubectl get pvc","option":"","description":"List all Persistent Volume Claims (PVCs) and their statuses."},"List Persistent Volumes (PVs)":{"command":"kubectl get pv","option":"","description":"List all Persistent Volumes (PVs) that have been provisioned."},"Port Forward Sourcegraph Frontend":{"command":"kubectl port-forward svc/sourcegraph-frontend 3080:30080","option":"","description":"This allows you to access your deployed Sourcegraph instance locally."},"Run Interactive Shell":{"command":"kubectl exec -it","option":"$POD","command2":" sh","description":"This allows you to execute an interactive shell on a Pod."},"Check Dirty Database":{"command":"kubectl exec","option":"$PGSQL_POD","command2":"-- psql -U sg -c \'SELECT * FROM schema_migrations\'","description":"Get inside the PGSQL Pod to check for dirty database."},"Generate Postgres Database Dump":{"command":"kubectl exec -it -- bash","option":"$PGSQL_POD","command2":"-c \'pg_dump -C -U sg\' > sourcegraph_db.out","description":"This allows you to generate a database dump for Postgres."},"Generate Code Intel Database Dump":{"command":"kubectl exec -it -- bash","option":"$CODEINTEL_POD","command2":"-c \'pg_dump -C -U sg\' > codeintel_db.out","description":"This allows you to generate a database dump for the Code Intel service."},"Stop existing deployment":{"command":"kubectl scale --replicas=0 deployment/sourcegraph-frontend","option":"","description":"Stop the existing deployment by removing the frontend."},"Show pod metrics":{"command":"kubectl top pod -- containers","option":"$POD","description":"This allows you to show metrics for a given pod and it\'s containers."},"Check Storage Class":{"command":"kubectl get storage class","option":"","description":"This allows you to check the existence of a storage class and it\'s name."}}}')},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(5),s=n(10),i=n.n(s),r=(n(18),n(2)),d=Object(a.b)({key:"modeState",default:"light"}),l=(n(19),n(0));function m(e){var t=e.selectedDeployment,n=e.setSelectedDeployment,o=e.setSelectedAction,c=e.hasNamespace,a=e.setHasNamespace,s=e.namespace,i=e.setNamespace,r=e.setOption,d=e.setGeneratedURI,m=e.mode;return Object(l.jsxs)("div",{className:"deployment-container",children:[Object(l.jsxs)("div",{className:"deployment-type",children:[Object(l.jsx)("h4",{className:"section ".concat("dark"===m?"dark":"light"),children:"Select deployment"}),Object(l.jsxs)("select",{onChange:function(e){n(e.target.value),i(""),a(!1),o("Function"),r(""),d("")},value:t,className:"dropdown-menu ".concat("dark"===m?"dark":"light"),children:[Object(l.jsx)("option",{value:"select-deployment",children:"Select Your Deployment Type..."}),Object(l.jsx)("option",{value:"Docker",children:"Docker"}),Object(l.jsx)("option",{value:"Docker Compose",children:"Docker Compose"}),Object(l.jsx)("option",{value:"Kubernetes",children:"Kubernetes"})]})]}),"Kubernetes"===t&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"namespace-check",children:[c?Object(l.jsx)("input",{type:"checkbox",value:c,className:"ns-check ".concat("dark"===m&&"dark"),onChange:function(){return a(!c)},checked:!0}):Object(l.jsx)("input",{type:"checkbox",value:c,className:"ns-check ".concat("dark"===m&&"dark"),onChange:function(){return a(!c)}}),Object(l.jsx)("label",{className:"namespace-label ".concat("dark"===m?"dark":"light"),name:"namespace",children:"I am using a namespace."})]}),c&&Object(l.jsx)("div",{className:"namespace-input",children:Object(l.jsx)("input",{type:"text",placeholder:"$NAMESPACE",value:s,onChange:function(e){return i(e.target.value)},className:"text-input ".concat("dark"===m?"dark":"light")})})]})]})}function p(e){var t=e.value,n=e.opt;return Object(l.jsx)("option",{value:t,opt:n,children:t})}function u(e){var t=e.defaultValue,n=e.map,c=e.optionValues,a=e.option,s=e.setOption,i=e.selectedDeployment,r=e.setSelectedAction,d=e.selectedAction,m=e.command,u=e.setCommand,h=e.hasNamespace,b=e.namespace,j=e.setGeneratedURI,g=e.mode;return Object(o.useEffect)((function(){var e=n[d].command,t=n[d].command2?n[d].command2:null;u(h&&""===a?"".concat(e," -n ").concat(b," ").concat(t||""):h&&""!==a?"".concat(e," ").concat(a," -n ").concat(b," ").concat(t||""):h||""===a?"".concat(e," ").concat(t||""):"".concat(e," ").concat(a," ").concat(t||""))}),[u,d,n,b,h,a,m]),Object(l.jsxs)("div",{className:"deployment-type",children:[Object(l.jsx)("h4",{className:"section ".concat("dark"===g?"dark":"light"),children:"Select function"}),Object(l.jsx)("select",{onChange:function(e){r(e.target.value),s(""),j("")},defaultValue:t,value:i,className:"dropdown-menu ".concat("dark"===g?"dark":"light"),children:c&&c.map((function(e,t){return Object(l.jsx)(p,{value:e,opt:n[e].option||null},"option-".concat(t))}))})]})}var h=n(21),b=function(e){var t=[];for(var n in e)t.push(n);return t};n(22);function j(e){var t=e.selectedDeployment,n=e.selectedAction,o=e.setSelectedAction,c=e.option,a=e.setOption,s=e.setCommand,i=e.namespace,r=e.hasNamespace,d=e.setGeneratedURI,m=e.mode,p=h.Docker,j=h["Docker Compose"],g=h.Kubernetes,O=b(p),k=b(j),f=b(g);return Object(l.jsxs)("div",{className:"actions-container",children:["Docker"===t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{selectedAction:n,defaultValue:n,optionValues:O,option:c,setOption:a,map:p,setSelectedAction:o,command:s,setCommand:s,setGeneratedURI:d,mode:m}),p[n].option&&Object(l.jsx)("div",{className:"action-option",children:Object(l.jsx)("input",{type:"text",placeholder:p[n].option,value:c,onChange:function(e){return a(e.target.value)},className:"text-input ".concat("dark"===m&&"dark")})})]}),"Docker Compose"===t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{selectedAction:n,defaultValue:n,optionValues:k,map:j,option:c,setOption:a,setSelectedAction:o,command:s,setCommand:s,setGeneratedURI:d,mode:m}),j[n].option&&Object(l.jsx)("div",{className:"action-option",children:Object(l.jsx)("input",{type:"text",placeholder:j[n].option,value:c,onChange:function(e){return a(e.target.value)},className:"text-input ".concat("dark"===m&&"dark")})})]}),"Kubernetes"===t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{selectedAction:n,defaultValue:n,optionValues:f,map:g,option:c,setOption:a,setSelectedAction:o,setCommand:s,command:s,hasNamespace:r,namespace:i,setGeneratedURI:d,mode:m}),g[n].option&&Object(l.jsx)("div",{className:"action-option",children:Object(l.jsx)("input",{type:"text",placeholder:g[n].option,value:c,onChange:function(e){return a(e.target.value)},className:"text-input ".concat("dark"===m&&"dark")})})]})]})}n(12);function g(e){var t=e.func,n=e.info,c=e.currentInfoOpen,a=e.setCurrentInfoOpen,s=e.mode,i=Object(o.useState)(!1),d=Object(r.a)(i,2),m=d[0],p=d[1],u=Object(o.useState)(!1),h=Object(r.a)(u,2),b=h[0],j=h[1],g=function(){c!==t?(a(t),j(!0)):(a("Function"),j(!1))};return Object(o.useEffect)((function(){}),[c]),Object(l.jsx)(l.Fragment,{children:"Function"!==t&&Object(l.jsxs)("div",{className:"desc-item ".concat("dark"===s?"dark":"light"),onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},onClick:g,children:[Object(l.jsxs)("div",{className:"row ".concat(c===t&&"expanded"," ").concat("dark"===s?"dark":"light"),children:[Object(l.jsx)("div",{children:t}),Object(l.jsxs)("button",{className:"expand ".concat(m&&"active"," ").concat("dark"===s?"dark":"light"),onClick:g,children:[Object(l.jsx)("div",{children:"i\xa0"}),b&&c===t?Object(l.jsx)("div",{className:"rotated",children:"<"}):Object(l.jsx)("div",{className:"not-rotated",children:"<"})]})]}),c===t&&Object(l.jsx)("div",{className:"command-info ".concat("dark"===s?"dark":"light"),children:Object(l.jsx)("ul",{className:"description ".concat("dark"===s&&"dark"),children:Object(l.jsx)("li",{children:n.description})})})]})})}function O(e){var t=e.selectedDeployment,n=e.mode,c=h[t],a=b(c),s=Object(o.useState)("Function"),i=Object(r.a)(s,2),d=i[0],m=i[1],p=a.length;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h4",{className:"section ".concat("dark"===n?"dark":"light"),children:["Function Descriptions \xa0",0!==p&&Object(l.jsx)("span",{className:"instruction",children:"- \xa0click to expand"})]}),0!==p?Object(l.jsx)("div",{className:"desc-list",children:a.map((function(e,t){var o=c[e];return Object(l.jsx)(g,{func:a[t],info:o,currentInfoOpen:d,setCurrentInfoOpen:m,mode:n},"desc-".concat(t))}))}):Object(l.jsx)("div",{className:"desc-list placeholder ".concat("dark"===n?"dark":"light"),children:Object(l.jsx)("p",{children:"Choose Deployment type on the left to list function descriptions."})})]})}var k=n(3),f=n.n(k),x=n(9);n(23);function v(e){var t=e.selectedAction,n=e.copyCommand,o=e.mode;return Object(l.jsx)(l.Fragment,{children:"Function"===t?Object(l.jsx)("button",{className:"btn ".concat("dark"===o?"dark":"light"),onClick:n,disabled:!0,children:"Copy Command"}):Object(l.jsx)("button",{className:"btn ".concat("dark"===o?"dark":"light"),onClick:n,children:"Copy Command"})})}function N(e){var t=e.selectedAction,n=e.mode,o=e.copyURL;return Object(l.jsx)(l.Fragment,{children:"Function"===t?Object(l.jsx)("button",{className:"btn ".concat("dark"===n?"dark":"light"),onClick:o,disabled:!0,children:"Copy as URL"}):Object(l.jsx)("button",{className:"btn ".concat("dark"===n?"dark":"light"),onClick:o,children:"Copy as URL"})})}n(24);function C(e){var t=e.selectedDeployment,n=e.selectedAction,c=e.command,a=e.generatedURI,s=e.setGeneratedURI,i=e.namespace,d=e.option,m=e.mode,p=Object(o.useState)(!1),u=Object(r.a)(p,2),h=u[0],b=u[1],j=Object(o.useState)(!1),g=Object(r.a)(j,2),O=g[0],k=g[1],C=function(){var e=Object(x.a)(f.a.mark((function e(){var o,c,a,r,l,m,p;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),b(!1),k(!0),o=window.location.href.split("?")[0],c=t?"?deployment=".concat(encodeURIComponent(t)):"",a=n?"&function=".concat(encodeURIComponent(n)):"",r=i?"&namespace=".concat(i):"",l=d?"&option=".concat(d):"",m=c+a+r+l,navigator.clipboard.writeText("".concat(o).concat(m)),e.next=12,navigator.clipboard.readText();case 12:(p=e.sent)?s(p):console.log("Unable to copy this url.");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){}),[a]),Object(o.useEffect)((function(){h&&(k(!1),setTimeout((function(){b(!1)}),3e3)),O&&(b(!1),setTimeout((function(){k(!1)}),3e3))}),[h,b,O,k]),Object(l.jsxs)("div",{className:"generated-command-container",children:[Object(l.jsx)("div",{className:"generated-command ".concat("dark"===m?"dark":"light"),children:"select-deployment"===t?Object(l.jsx)(l.Fragment,{children:"[SELECT DEPLOYMENT TYPE and FUNCTION]"}):Object(l.jsx)(l.Fragment,{children:c})}),Object(l.jsxs)("div",{className:"btns-container",children:[h&&Object(l.jsx)("p",{className:"copied-message show ".concat("dark"===m?"dark":"light"),children:"Command copied to clipboard."}),O&&Object(l.jsx)("p",{className:"copied-message show ".concat("dark"===m?"dark":"light"),children:"URL copied to clipboard."}),!O&&!h&&Object(l.jsx)("p",{className:"copied-message show ".concat("dark"===m?"dark":"light")}),Object(l.jsxs)("div",{className:"btns",children:[Object(l.jsx)(v,{selectedAction:n,copyCommand:function(){navigator.clipboard.writeText(c),k(!1),b(!0)},mode:m}),Object(l.jsx)(N,{selectedAction:n,copyURL:C,mode:m})]})]})]})}var y=n.p+"static/media/Sourcegraph_Logo_FullColor_dark.ad85e056.png",S=n.p+"static/media/Sourcegraph_Logo_FullColor_light.66076257.png";n(25);var D=function(){var e=Object(a.c)(d),t=Object(r.a)(e,2),n=t[0],c=t[1],s=new URLSearchParams(window.location.search),i=s.get("deployment"),p=s.get("function"),u=s.get("namespace"),h=s.get("option"),b=Object(o.useState)(i||"select-deployment"),g=Object(r.a)(b,2),k=g[0],f=g[1],x=Object(o.useState)(p||"Function"),v=Object(r.a)(x,2),N=v[0],D=v[1],w=Object(o.useState)(u||""),I=Object(r.a)(w,2),R=I[0],T=I[1],A=Object(o.useState)(!!u),F=Object(r.a)(A,2),P=F[0],E=F[1],U=Object(o.useState)(h||""),L=Object(r.a)(U,2),G=L[0],$=L[1],V=Object(o.useState)(""),_=Object(r.a)(V,2),q=_[0],K=_[1],M=Object(o.useState)(""),B=Object(r.a)(M,2),H=B[0],J=B[1];return Object(o.useEffect)((function(){window.matchMedia("(prefers-color-scheme: dark)").matches&&c("dark")}),[n,c]),Object(l.jsxs)("div",{className:"App ".concat("dark"===n&&"dark"),children:[Object(l.jsx)("img",{alt:"sourcegraph-logo ".concat("dark"===n&&"dark"),src:"dark"===n?y:S,className:"logo"}),"dark"===n?Object(l.jsx)("h2",{className:"subtitle dark",children:"command line generator"}):Object(l.jsx)("h2",{className:"subtitle",children:"command line generator"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"deploy-container",children:[Object(l.jsx)(m,{selectedDeployment:k,setSelectedDeployment:f,setSelectedAction:D,hasNamespace:P,setHasNamespace:E,namespace:R,setNamespace:T,setCommand:K,setOption:$,setGeneratedURI:J,mode:n}),Object(l.jsx)(j,{selectedDeployment:k,selectedAction:N,setSelectedAction:D,option:G,setOption:$,command:q,setCommand:K,hasNamespace:P,namespace:R,setGeneratedURI:J,mode:n})]}),Object(l.jsx)("div",{className:"line-break"}),Object(l.jsx)("div",{className:"descriptions-container",children:Object(l.jsx)(O,{selectedDeployment:k,mode:n})})]}),Object(l.jsx)("div",{className:"user-options-container",children:Object(l.jsx)(C,{selectedDeployment:k,selectedAction:N,command:q,namespace:R,option:G,setGeneratedURI:J,generatedURI:H,mode:n})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),a(e),s(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(a.a,{children:Object(l.jsx)(D,{})})}),document.getElementById("root")),w()}],[[26,1,2]]]);
//# sourceMappingURL=main.3a363110.chunk.js.map