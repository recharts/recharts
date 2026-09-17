import{r as W}from"./entry-o3_tfdDI.js";import{r as V,c as j,t as k,f as q,v as M,p as E}from"./useId-_H0WhIP1.js";import{p as g,aW as x}from"./renderedTicksSlice-D297OWWQ.js";const w=(n,$)=>{const s=E($-n),a=Math.min(Math.abs($-n),359.999);return s*a},P=({cx:n,cy:$,radius:s,angle:a,sign:t,isExternal:p,cornerRadius:l,cornerIsExternal:o})=>{const c=l*(p?1:-1)+s,e=Math.asin(l/c)/x,h=o?a:a+t*e,i=g(n,$,c,h),r=g(n,$,s,h),f=o?a-t*e:a,y=g(n,$,c*Math.cos(e*x),f);return{center:i,circleTangency:r,lineTangency:y,theta:e}},A=({cx:n,cy:$,innerRadius:s,outerRadius:a,startAngle:t,endAngle:p})=>{const l=w(t,p),o=t+l,c=g(n,$,a,t),e=g(n,$,a,o);let h=M`M ${c.x},${c.y}
    A ${a},${a},0,
    ${+(Math.abs(l)>180)},${+(t>o)},
    ${e.x},${e.y}
  `;if(s>0){const i=g(n,$,s,t),r=g(n,$,s,o);h+=M`L ${r.x},${r.y}
            A ${s},${s},0,
            ${+(Math.abs(l)>180)},${+(t<=o)},
            ${i.x},${i.y} Z`}else h+=M`L ${n},${$} Z`;return h},z=({cx:n,cy:$,innerRadius:s,outerRadius:a,cornerRadius:t,forceCornerRadius:p,cornerIsExternal:l,startAngle:o,endAngle:c})=>{const e=E(c-o),{circleTangency:h,lineTangency:i,theta:r}=P({cx:n,cy:$,radius:a,angle:o,sign:e,cornerRadius:t,cornerIsExternal:l}),{circleTangency:f,lineTangency:y,theta:m}=P({cx:n,cy:$,radius:a,angle:c,sign:-e,cornerRadius:t,cornerIsExternal:l}),b=l?Math.abs(o-c):Math.abs(o-c)-r-m;if(b<0)return p?M`M ${i.x},${i.y}
        a${t},${t},0,0,1,${t*2},0
        a${t},${t},0,0,1,${-t*2},0
      `:A({cx:n,cy:$,innerRadius:s,outerRadius:a,startAngle:o,endAngle:c});let T=M`M ${i.x},${i.y}
    A${t},${t},0,0,${+(e<0)},${h.x},${h.y}
    A${a},${a},0,${+(b>180)},${+(e<0)},${f.x},${f.y}
    A${t},${t},0,0,${+(e<0)},${y.x},${y.y}
  `;if(s>0){const{circleTangency:S,lineTangency:C,theta:D}=P({cx:n,cy:$,radius:s,angle:o,sign:e,isExternal:!0,cornerRadius:t,cornerIsExternal:l}),{circleTangency:L,lineTangency:Z,theta:N}=P({cx:n,cy:$,radius:s,angle:c,sign:-e,isExternal:!0,cornerRadius:t,cornerIsExternal:l}),v=l?Math.abs(o-c):Math.abs(o-c)-D-N;if(v<0&&t===0)return`${T}L${n},${$}Z`;T+=M`L${Z.x},${Z.y}
      A${t},${t},0,0,${+(e<0)},${L.x},${L.y}
      A${s},${s},0,${+(v>180)},${+(e>0)},${S.x},${S.y}
      A${t},${t},0,0,${+(e<0)},${C.x},${C.y}Z`}else T+=M`L${n},${$}Z`;return T},B={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},J=n=>{const $=V(n,B),{cx:s,cy:a,innerRadius:t,outerRadius:p,cornerRadius:l,forceCornerRadius:o,cornerIsExternal:c,startAngle:e,endAngle:h,className:i}=$;if(p<t||e===h)return null;const r=j("recharts-sector",i),f=p-t,y=k(l,f,0,!0);let m;return y>0&&Math.abs(e-h)<360?m=z({cx:s,cy:a,innerRadius:t,outerRadius:p,cornerRadius:Math.min(y,f/2),forceCornerRadius:o,cornerIsExternal:c,startAngle:e,endAngle:h}):m=A({cx:s,cy:a,innerRadius:t,outerRadius:p,startAngle:e,endAngle:h}),W.createElement("path",{...q($),className:r,d:m})};export{J as S};
