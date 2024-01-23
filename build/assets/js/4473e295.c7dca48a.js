"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[258],{3230:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>t,toc:()=>l});var o=s(5893),i=s(1151);const n={slug:"phishing-kali-linux",title:"Phishing com Kali Linux/setoolkit e apache2 HTTP server",authors:"lucas",tags:["linux","hacker"]},r="Phishing com Kali Linux/setoolkit e apache2 HTTP server",t={permalink:"/blog/phishing-kali-linux",source:"@site/blog/2023-11-22-phishing-kali/phishing-kali-linux.md",title:"Phishing com Kali Linux/setoolkit e apache2 HTTP server",description:"Configura\xe7\xf5es:",date:"2023-11-22T00:00:00.000Z",formattedDate:"22 de novembro de 2023",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"hacker",permalink:"/blog/tags/hacker"}],readingTime:3.04,hasTruncateMarker:!1,authors:[{name:"Lucas Picinini",title:"Desenvolvedor e Graduando em Ci\xeancia da Computa\xe7\xe3o",url:"https://github.com/lucaspicinini",imageURL:"https://github.com/lucaspicinini.png",key:"lucas"}],frontMatter:{slug:"phishing-kali-linux",title:"Phishing com Kali Linux/setoolkit e apache2 HTTP server",authors:"lucas",tags:["linux","hacker"]},unlisted:!1,prevItem:{title:"Entendo o Hoisting no JavaScript",permalink:"/blog/hoisting-javascript"}},d={authorsImageUrls:[void 0]},l=[{value:"Configura\xe7\xf5es:",id:"configura\xe7\xf5es",level:2},{value:"Vamos abrir o arquivo com um editor de texto e editar as linhas sublinhadas nas imagens a seguir, deixando da forma como est\xe3o exibidas neste exemplo:",id:"vamos-abrir-o-arquivo-com-um-editor-de-texto-e-editar-as-linhas-sublinhadas-nas-imagens-a-seguir-deixando-da-forma-como-est\xe3o-exibidas-neste-exemplo",level:3},{value:"Porque utilizar o apache2 ?",id:"porque-utilizar-o-apache2-",level:3},{value:"Passo 1:",id:"passo-1",level:2},{value:"Passo 2:",id:"passo-2",level:2},{value:"Passo 3:",id:"passo-3",level:2},{value:"Passo 4:",id:"passo-4",level:2},{value:"Passo 5:",id:"passo-5",level:2},{value:"Passo 6:",id:"passo-6",level:2},{value:"Onde os logs ser\xe3o salvos?",id:"onde-os-logs-ser\xe3o-salvos",level:2},{value:"Acessando a p\xe1gina clonada:",id:"acessando-a-p\xe1gina-clonada",level:2},{value:"Resultado:",id:"resultado",level:2}];function c(e){const a={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"configura\xe7\xf5es",children:"Configura\xe7\xf5es:"}),"\n",(0,o.jsx)(a.p,{children:"Antes de iniciar o setoolkit, precisamos realizar algumas configura\xe7\xf5es para utiliz\xe1-lo com o apache2. Por default, as configura\xe7\xf5es do setoolkit ficam no arquivo set.config no path -> /etc/setoolkit/set.config/ ."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 8",src:s(8212).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.hr,{}),"\n",(0,o.jsx)(a.h3,{id:"vamos-abrir-o-arquivo-com-um-editor-de-texto-e-editar-as-linhas-sublinhadas-nas-imagens-a-seguir-deixando-da-forma-como-est\xe3o-exibidas-neste-exemplo",children:"Vamos abrir o arquivo com um editor de texto e editar as linhas sublinhadas nas imagens a seguir, deixando da forma como est\xe3o exibidas neste exemplo:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 9",src:s(8025).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 10",src:s(6556).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 11",src:s(838).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"OBS:"})," ",(0,o.jsx)(a.em,{children:"Caso voc\xea tenha definido outro diret\xf3rio raiz para o Apache que n\xe3o seja o padr\xe3o, acrescente esse path no lugar do caminho /var/www/html/ ."})]}),"\n",(0,o.jsx)(a.h3,{id:"porque-utilizar-o-apache2-",children:"Porque utilizar o apache2 ?"}),"\n",(0,o.jsx)(a.p,{children:"Como informado no arquivo de configura\xe7\xe3o do pr\xf3prio setoolkit, a utiliza\xe7\xe3o do apache2 aumenta a performance do vetor de ataque quando utilizado no lugar do web server default, que \xe9 o Python Web Server."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 12",src:s(7821).Z+"",title:"imagem",width:"715",height:"75"})}),"\n",(0,o.jsx)(a.h1,{id:"vamos-come\xe7ar",children:"Vamos come\xe7ar!"}),"\n",(0,o.jsx)(a.h2,{id:"passo-1",children:"Passo 1:"}),"\n",(0,o.jsx)(a.p,{children:"Com as configura\xe7\xf5es previamente realizadas, abra seu terminal como root e execute o seguinte comando:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-zsh",children:"$ setoolkit\n"})}),"\n",(0,o.jsx)(a.p,{children:'Selecione a primeira op\xe7\xe3o na tela que ser\xe1 exibida, "Social-Engineering Attacks".'}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 1",src:s(1672).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.h2,{id:"passo-2",children:"Passo 2:"}),"\n",(0,o.jsx)(a.p,{children:'Selecione a segunda op\xe7\xe3o, "Website Attack Vectors".'}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 2",src:s(4699).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.h2,{id:"passo-3",children:"Passo 3:"}),"\n",(0,o.jsx)(a.p,{children:'Selecione a terceira op\xe7\xe3o, "Credential Harvester Attack Method".'}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 3",src:s(2852).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.h2,{id:"passo-4",children:"Passo 4:"}),"\n",(0,o.jsx)(a.p,{children:'Selecione a segunda op\xe7\xe3o, "Site Cloner".'}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 4",src:s(4032).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.p,{children:"Essa op\xe7\xe3o nos permite criar uma fakepage est\xe1tica, clonando uma p\xe1gina de formul\xe1rio POST qualquer e rodando em um servidor particular. Caso a pessoa preencha os dados do formul\xe1rio falso, vamos receber os valores e redirecionar a pessoa para a p\xe1gina original na qual ela estava tentando acessar (p\xe1gina clonada)."}),"\n",(0,o.jsx)(a.h2,{id:"passo-5",children:"Passo 5:"}),"\n",(0,o.jsxs)(a.p,{children:["Nesta etapa, \xe9 preciso informar o IP hospedeiro da p\xe1gina fake e o site a ser clonado via protocolo HTTP. O setoolkit j\xe1 sugere o ip do host no momento da sele\xe7\xe3o da ferramenta Site Cloner. Basta pressionar Enter caso queira utilizar o IP sugerido ou adicionar outro de sua prefer\xeancia ",(0,o.jsx)(a.em,{children:"(Aten\xe7\xe3o para manter as mesmas configura\xe7\xf5es no apache2. As portas tamb\xe9m precisam ser as mesmas no apache2 e no setoolkit, que escutam na porta 80 por default)"}),". Em seguida, \xe9 preciso inserir a URL do site que ser\xe1 clonado via HTTP. O processo pode demorar alguns minutos."]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 5",src:s(9496).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.h2,{id:"passo-6",children:"Passo 6:"}),"\n",(0,o.jsx)(a.p,{children:"Ap\xf3s o fim do processo, \xe9 poss\xedvel que o terminal nos informe que o service do apache2 pode n\xe3o estar rodando e se queremos que o setoolkit o inicie para n\xf3s. Vamos confirmar com a letra y."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 14",src:s(2745).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.h2,{id:"onde-os-logs-ser\xe3o-salvos",children:"Onde os logs ser\xe3o salvos?"}),"\n",(0,o.jsx)(a.p,{children:"Logo ap\xf3s a c\xf3pia do site ter sido conclu\xedda, somos informados que o servi\xe7o j\xe1 est\xe1 no ar e que os logs ser\xe3o salvos no diret\xf3rio raiz do apache, sob o nome de harvester seguido das informa\xe7\xf5es da data e no formato .txt."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 15",src:s(3629).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.h2,{id:"acessando-a-p\xe1gina-clonada",children:"Acessando a p\xe1gina clonada:"}),"\n",(0,o.jsx)(a.p,{children:"Agora, ao inserirmos o IP na barra de endere\xe7os do navegador, ser\xe1 exibida uma vers\xe3o falsa da p\xe1gina clonada. Depois de preecher o formul\xe1rio e submeter, a pessoa ser\xe1 redirecionada ao site original e poderemos ter acesso aos dados inseridos no formul\xe1rio."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 6",src:s(4954).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 6-1",src:s(4782).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.h2,{id:"resultado",children:"Resultado:"}),"\n",(0,o.jsx)(a.p,{children:"Pronto! Se tudo deu certo, os valores inseridos no formul\xe1rio estar\xe3o contidos no local informado pelo setoolkit, que \xe9 o diret\xf3rio raiz do apache2, no caso deste exemplo, /var/www/html ."}),"\n",(0,o.jsx)(a.p,{children:"Abrindo o terminal e nos movendo para o diret\xf3rio, podemos ver o arquivo harvester_DATADEUSO.txt"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 16",src:s(6389).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.hr,{}),"\n",(0,o.jsxs)(a.p,{children:["Utilizando o comando ",(0,o.jsx)(a.code,{children:"cat"})," para exibir o conte\xfado do arquivo ou simplesmente abrindo com um editor de texto, podemos ver o registro dos valores inseridos pela pessoa no formul\xe1rio."]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"imagem 17",src:s(8785).Z+"",title:"imagem",width:"1366",height:"768"})}),"\n",(0,o.jsx)(a.hr,{}),"\n",(0,o.jsx)(a.h1,{id:"utilize-os-aprendizados-com-sabedoria",children:(0,o.jsx)(a.em,{children:"Utilize os aprendizados com sabedoria!"})})]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1672:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/1-036f77dcf92f311063837972ffdef602.png"},6556:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/10-ef17f81091daf9a7999a7f57e8ccdadc.png"},838:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/11-9c3bca105a81f1c035ce6af5d5bbf4b4.png"},7821:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/12-9627132f535ff1893630c8d544ce4e92.png"},2745:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/14-83221a9dfa4349cef4b316187fb29fd2.png"},3629:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/15-d42e73c116551dcc40cc45a41a4a949c.png"},6389:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/16-24e5b31fd2334011f6ff62b7598caed5.png"},8785:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/17-169a5625da7d3c0e46540db5e85be0ac.png"},4699:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/2-abfb77ee1d340b9c3cc9c1ef6ae2afd6.png"},2852:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/3-c04b2b17dd897c5f3801a40eb065fb9b.png"},4032:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/4-1b9599b3c5c2d305aaed38465b5cf3a0.png"},9496:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/5-65ed28d102dfc37c61d08981182528f2.png"},4782:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/6-1-dd4a1b961f96d74983b8208ba6047458.png"},4954:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/6-63fcdfab4c4801d6afa4949d554fec57.png"},8212:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/8-b4c82d7d993148cd65d781a1f8925e46.png"},8025:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/9-4d0fd7eadf578c5f6c7c10305fefec02.png"},1151:(e,a,s)=>{s.d(a,{Z:()=>t,a:()=>r});var o=s(7294);const i={},n=o.createContext(i);function r(e){const a=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);