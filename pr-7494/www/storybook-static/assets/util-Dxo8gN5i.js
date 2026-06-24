const t=a=>a.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`),n=(a,e,s)=>a.map(o=>`${t(o)} ${e}ms ${s}`).join(",");export{n as g};
