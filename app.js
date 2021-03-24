const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(301, {"Location": "https://app.powerbi.com/groups/87b31c89-830b-425f-a3fd-39aff57521e7/reports/465504c2-8bdc-4d1a-a333-5648f0c2baa5/ReportSection"});
        res.end();
    }    
});

server.listen(5868);

console.log('Listening')




