import{a as V}from"./lightTheme-lBxNBN17.js";import{r as W,c as j,t as k,f as q,v as M,o as E}from"./useId-pVXaFXcV.js";import{V as g,b0 as x}from"./renderedTicksSlice-BmoGe1Ml.js";const w=(n,$)=>{const s=E($-n),a=Math.min(Math.abs($-n),359.999);return s*a},b=({cx:n,cy:$,radius:s,angle:a,sign:t,isExternal:f,cornerRadius:l,cornerIsExternal:o})=>{const c=l*(f?1:-1)+s,e=Math.asin(l/c)/x,h=o?a:a+t*e,i=g(n,$,c,h),p=g(n,$,s,h),r=o?a-t*e:a,y=g(n,$,c*Math.cos(e*x),r);return{center:i,circleTangency:p,lineTangency:y,theta:e}},A=({cx:n,cy:$,innerRadius:s,outerRadius:a,startAngle:t,endAngle:f})=>{const l=w(t,f),o=t+l,c=g(n,$,a,t),e=g(n,$,a,o);let h=M`M ${c.x},${c.y}
    A ${a},${a},0,
    ${+(Math.abs(l)>180)},${+(t>o)},
    ${e.x},${e.y}
  `;if(s>0){const i=g(n,$,s,t),p=g(n,$,s,o);h+=M`L ${p.x},${p.y}
            A ${s},${s},0,
            ${+(Math.abs(l)>180)},${+(t<=o)},
            ${i.x},${i.y} Z`}else h+=M`L ${n},${$} Z`;return h},z=({cx:n,cy:$,innerRadius:s,outerRadius:a,cornerRadius:t,forceCornerRadius:f,cornerIsExternal:l,startAngle:o,endAngle:c})=>{const e=E(c-o),{circleTangency:h,lineTangency:i,theta:p}=b({cx:n,cy:$,radius:a,angle:o,sign:e,cornerRadius:t,cornerIsExternal:l}),{circleTangency:r,lineTangency:y,theta:m}=b({cx:n,cy:$,radius:a,angle:c,sign:-e,cornerRadius:t,cornerIsExternal:l}),P=l?Math.abs(o-c):Math.abs(o-c)-p-m;if(P<0)return f?M`M ${i.x},${i.y}
        a${t},${t},0,0,1,${t*2},0
        a${t},${t},0,0,1,${-t*2},0
      `:A({cx:n,cy:$,innerRadius:s,outerRadius:a,startAngle:o,endAngle:c});let T=M`M ${i.x},${i.y}
    A${t},${t},0,0,${+(e<0)},${h.x},${h.y}
    A${a},${a},0,${+(P>180)},${+(e<0)},${r.x},${r.y}
    A${t},${t},0,0,${+(e<0)},${y.x},${y.y}
  `;if(s>0){const{circleTangency:S,lineTangency:C,theta:D}=b({cx:n,cy:$,radius:s,angle:o,sign:e,isExternal:!0,cornerRadius:t,cornerIsExternal:l}),{circleTangency:L,lineTangency:Z,theta:N}=b({cx:n,cy:$,radius:s,angle:c,sign:-e,isExternal:!0,cornerRadius:t,cornerIsExternal:l}),v=l?Math.abs(o-c):Math.abs(o-c)-D-N;if(v<0&&t===0)return`${T}L${n},${$}Z`;T+=M`L${Z.x},${Z.y}
      A${t},${t},0,0,${+(e<0)},${L.x},${L.y}
      A${s},${s},0,${+(v>180)},${+(e>0)},${S.x},${S.y}
      A${t},${t},0,0,${+(e<0)},${C.x},${C.y}Z`}else T+=M`L${n},${$}Z`;return T},B={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},J=n=>{const $=W(n,B),{cx:s,cy:a,innerRadius:t,outerRadius:f,cornerRadius:l,forceCornerRadius:o,cornerIsExternal:c,startAngle:e,endAngle:h,className:i}=$;if(f<t||e===h)return null;const p=j("recharts-sector",i),r=f-t,y=k(l,r,0,!0);let m;return y>0&&Math.abs(e-h)<360?m=z({cx:s,cy:a,innerRadius:t,outerRadius:f,cornerRadius:Math.min(y,r/2),forceCornerRadius:o,cornerIsExternal:c,startAngle:e,endAngle:h}):m=A({cx:s,cy:a,innerRadius:t,outerRadius:f,startAngle:e,endAngle:h}),V.createElement("path",{...q($),className:p,d:m})};export{J as S};
