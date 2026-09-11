import{r as V}from"./entry-DaPgwJmX.js";import{r as W,c as j,t as k,f as q,v as M,o as E}from"./useId-BV2R2BG1.js";import{V as g,b1 as x}from"./renderedTicksSlice-DmXBAunT.js";const w=(n,$)=>{const s=E($-n),o=Math.min(Math.abs($-n),359.999);return s*o},b=({cx:n,cy:$,radius:s,angle:o,sign:t,isExternal:r,cornerRadius:l,cornerIsExternal:a})=>{const c=l*(r?1:-1)+s,e=Math.asin(l/c)/x,h=a?o:o+t*e,i=g(n,$,c,h),f=g(n,$,s,h),p=a?o-t*e:o,y=g(n,$,c*Math.cos(e*x),p);return{center:i,circleTangency:f,lineTangency:y,theta:e}},A=({cx:n,cy:$,innerRadius:s,outerRadius:o,startAngle:t,endAngle:r})=>{const l=w(t,r),a=t+l,c=g(n,$,o,t),e=g(n,$,o,a);let h=M`M ${c.x},${c.y}
    A ${o},${o},0,
    ${+(Math.abs(l)>180)},${+(t>a)},
    ${e.x},${e.y}
  `;if(s>0){const i=g(n,$,s,t),f=g(n,$,s,a);h+=M`L ${f.x},${f.y}
            A ${s},${s},0,
            ${+(Math.abs(l)>180)},${+(t<=a)},
            ${i.x},${i.y} Z`}else h+=M`L ${n},${$} Z`;return h},z=({cx:n,cy:$,innerRadius:s,outerRadius:o,cornerRadius:t,forceCornerRadius:r,cornerIsExternal:l,startAngle:a,endAngle:c})=>{const e=E(c-a),{circleTangency:h,lineTangency:i,theta:f}=b({cx:n,cy:$,radius:o,angle:a,sign:e,cornerRadius:t,cornerIsExternal:l}),{circleTangency:p,lineTangency:y,theta:m}=b({cx:n,cy:$,radius:o,angle:c,sign:-e,cornerRadius:t,cornerIsExternal:l}),P=l?Math.abs(a-c):Math.abs(a-c)-f-m;if(P<0)return r?M`M ${i.x},${i.y}
        a${t},${t},0,0,1,${t*2},0
        a${t},${t},0,0,1,${-t*2},0
      `:A({cx:n,cy:$,innerRadius:s,outerRadius:o,startAngle:a,endAngle:c});let T=M`M ${i.x},${i.y}
    A${t},${t},0,0,${+(e<0)},${h.x},${h.y}
    A${o},${o},0,${+(P>180)},${+(e<0)},${p.x},${p.y}
    A${t},${t},0,0,${+(e<0)},${y.x},${y.y}
  `;if(s>0){const{circleTangency:S,lineTangency:C,theta:D}=b({cx:n,cy:$,radius:s,angle:a,sign:e,isExternal:!0,cornerRadius:t,cornerIsExternal:l}),{circleTangency:L,lineTangency:Z,theta:N}=b({cx:n,cy:$,radius:s,angle:c,sign:-e,isExternal:!0,cornerRadius:t,cornerIsExternal:l}),v=l?Math.abs(a-c):Math.abs(a-c)-D-N;if(v<0&&t===0)return`${T}L${n},${$}Z`;T+=M`L${Z.x},${Z.y}
      A${t},${t},0,0,${+(e<0)},${L.x},${L.y}
      A${s},${s},0,${+(v>180)},${+(e>0)},${S.x},${S.y}
      A${t},${t},0,0,${+(e<0)},${C.x},${C.y}Z`}else T+=M`L${n},${$}Z`;return T},B={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},J=n=>{const $=W(n,B),{cx:s,cy:o,innerRadius:t,outerRadius:r,cornerRadius:l,forceCornerRadius:a,cornerIsExternal:c,startAngle:e,endAngle:h,className:i}=$;if(r<t||e===h)return null;const f=j("recharts-sector",i),p=r-t,y=k(l,p,0,!0);let m;return y>0&&Math.abs(e-h)<360?m=z({cx:s,cy:o,innerRadius:t,outerRadius:r,cornerRadius:Math.min(y,p/2),forceCornerRadius:a,cornerIsExternal:c,startAngle:e,endAngle:h}):m=A({cx:s,cy:o,innerRadius:t,outerRadius:r,startAngle:e,endAngle:h}),V.createElement("path",{...q($),className:f,d:m})};export{J as S};
