import{r as J}from"./entry-CWonLkvG.js";import{r as W,c as j,t as k,f as q,v as g,o as E}from"./useId-Brk2s2v7.js";import{J as m,aV as u}from"./renderedTicksSlice-CX1jYPPT.js";const w=(s,n)=>{const a=E(n-s),o=Math.min(Math.abs(n-s),359.999);return a*o},P=({cx:s,cy:n,radius:a,angle:o,sign:t,isExternal:l,cornerRadius:r,cornerIsExternal:$})=>{const c=r*(l?1:-1)+a,e=Math.asin(r/c)/u,i=$?o:o+t*e,f=m(s,n,c,i),h=m(s,n,a,i),M=$?o-t*e:o,p=m(s,n,c*Math.cos(e*u),M);return{center:f,circleTangency:h,lineTangency:p,theta:e}},z=({cx:s,cy:n,innerRadius:a,outerRadius:o,startAngle:t,endAngle:l})=>{const r=w(t,l),$=t+r,c=m(s,n,o,t),e=m(s,n,o,$);let i=g`M ${c.x},${c.y}
    A ${o},${o},0,
    ${+(Math.abs(r)>180)},${+(t>$)},
    ${e.x},${e.y}
  `;if(a>0){const f=m(s,n,a,t),h=m(s,n,a,$);i+=g`L ${h.x},${h.y}
            A ${a},${a},0,
            ${+(Math.abs(r)>180)},${+(t<=$)},
            ${f.x},${f.y} Z`}else i+=g`L ${s},${n} Z`;return i},B=({cx:s,cy:n,innerRadius:a,outerRadius:o,cornerRadius:t,forceCornerRadius:l,cornerIsExternal:r,startAngle:$,endAngle:c})=>{const e=E(c-$),i=Math.abs($-c),f=!l&&!r&&i<180,h=Math.sin(i/2*u),M=f?Math.min(t,o*h/(1+h)):t,p=f?Math.min(t,a*h/(1-h)):t,{circleTangency:y,lineTangency:T,theta:N}=P({cx:s,cy:n,radius:o,angle:$,sign:e,cornerRadius:M,cornerIsExternal:r}),{circleTangency:C,lineTangency:S,theta:V}=P({cx:s,cy:n,radius:o,angle:c,sign:-e,cornerRadius:M,cornerIsExternal:r}),L=r?Math.abs($-c):Math.abs($-c)-N-V;if(L<0&&l)return g`M ${T.x},${T.y}
      a${t},${t},0,0,1,${t*2},0
      a${t},${t},0,0,1,${-t*2},0
    `;let b=g`M ${T.x},${T.y}
    A${M},${M},0,0,${+(e<0)},${y.x},${y.y}
    A${o},${o},0,${+(L>180)},${+(e<0)},${C.x},${C.y}
    A${M},${M},0,0,${+(e<0)},${S.x},${S.y}
  `;if(a>0){const{circleTangency:A,lineTangency:Z,theta:F}=P({cx:s,cy:n,radius:a,angle:$,sign:e,isExternal:!0,cornerRadius:p,cornerIsExternal:r}),{circleTangency:v,lineTangency:x,theta:H}=P({cx:s,cy:n,radius:a,angle:c,sign:-e,isExternal:!0,cornerRadius:p,cornerIsExternal:r}),D=r?Math.abs($-c):Math.abs($-c)-F-H;if(D<0&&t===0)return`${b}L${s},${n}Z`;b+=g`L${x.x},${x.y}
      A${p},${p},0,0,${+(e<0)},${v.x},${v.y}
      A${a},${a},0,${+(D>180)},${+(e>0)},${A.x},${A.y}
      A${p},${p},0,0,${+(e<0)},${Z.x},${Z.y}Z`}else b+=g`L${s},${n}Z`;return b},G={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},U=s=>{const n=W(s,G),{cx:a,cy:o,innerRadius:t,outerRadius:l,cornerRadius:r,forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i,className:f}=n;if(l<t||e===i)return null;const h=j("recharts-sector",f),M=l-t,p=k(r,M,0,!0);let y;return p>0&&Math.abs(e-i)<360?y=B({cx:a,cy:o,innerRadius:t,outerRadius:l,cornerRadius:Math.min(p,M/2),forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i}):y=z({cx:a,cy:o,innerRadius:t,outerRadius:l,startAngle:e,endAngle:i}),J.createElement("path",{...q(n),className:h,d:y})};export{U as S};
