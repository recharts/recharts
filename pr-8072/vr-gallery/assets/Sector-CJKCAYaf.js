import{r as J}from"./entry-Dh6rrEM_.js";import{r as V,c as W,w as j,f as k,A as g,o as E}from"./useId-BDgAk-0v.js";import{J as m,b0 as u}from"./renderedTicksSlice-CO4rxH5h.js";const q=(s,n)=>{const o=E(n-s),a=Math.min(Math.abs(n-s),359.999);return o*a},P=({cx:s,cy:n,radius:o,angle:a,sign:t,isExternal:l,cornerRadius:r,cornerIsExternal:$})=>{const c=r*(l?1:-1)+o,e=Math.asin(r/c)/u,i=$?a:a+t*e,f=m(s,n,c,i),h=m(s,n,o,i),M=$?a-t*e:a,p=m(s,n,c*Math.cos(e*u),M);return{center:f,circleTangency:h,lineTangency:p,theta:e}},z=({cx:s,cy:n,innerRadius:o,outerRadius:a,startAngle:t,endAngle:l})=>{const r=q(t,l),$=t+r,c=m(s,n,a,t),e=m(s,n,a,$);let i=g`M ${c.x},${c.y}
    A ${a},${a},0,
    ${+(Math.abs(r)>180)},${+(t>$)},
    ${e.x},${e.y}
  `;if(o>0){const f=m(s,n,o,t),h=m(s,n,o,$);i+=g`L ${h.x},${h.y}
            A ${o},${o},0,
            ${+(Math.abs(r)>180)},${+(t<=$)},
            ${f.x},${f.y} Z`}else i+=g`L ${s},${n} Z`;return i},B=({cx:s,cy:n,innerRadius:o,outerRadius:a,cornerRadius:t,forceCornerRadius:l,cornerIsExternal:r,startAngle:$,endAngle:c})=>{const e=E(c-$),i=Math.abs($-c),f=!l&&!r&&i<180,h=Math.sin(i/2*u),M=f?Math.min(t,a*h/(1+h)):t,p=f?Math.min(t,o*h/(1-h)):t,{circleTangency:y,lineTangency:T,theta:N}=P({cx:s,cy:n,radius:a,angle:$,sign:e,cornerRadius:M,cornerIsExternal:r}),{circleTangency:C,lineTangency:S,theta:w}=P({cx:s,cy:n,radius:a,angle:c,sign:-e,cornerRadius:M,cornerIsExternal:r}),A=r?Math.abs($-c):Math.abs($-c)-N-w;if(A<0&&l)return g`M ${T.x},${T.y}
      a${t},${t},0,0,1,${t*2},0
      a${t},${t},0,0,1,${-t*2},0
    `;let b=g`M ${T.x},${T.y}
    A${M},${M},0,0,${+(e<0)},${y.x},${y.y}
    A${a},${a},0,${+(A>180)},${+(e<0)},${C.x},${C.y}
    A${M},${M},0,0,${+(e<0)},${S.x},${S.y}
  `;if(o>0){const{circleTangency:L,lineTangency:Z,theta:F}=P({cx:s,cy:n,radius:o,angle:$,sign:e,isExternal:!0,cornerRadius:p,cornerIsExternal:r}),{circleTangency:x,lineTangency:v,theta:H}=P({cx:s,cy:n,radius:o,angle:c,sign:-e,isExternal:!0,cornerRadius:p,cornerIsExternal:r}),D=r?Math.abs($-c):Math.abs($-c)-F-H;if(D<0&&t===0)return`${b}L${s},${n}Z`;b+=g`L${v.x},${v.y}
      A${p},${p},0,0,${+(e<0)},${x.x},${x.y}
      A${o},${o},0,${+(D>180)},${+(e>0)},${L.x},${L.y}
      A${p},${p},0,0,${+(e<0)},${Z.x},${Z.y}Z`}else b+=g`L${s},${n}Z`;return b},G={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},U=s=>{const n=V(s,G),{cx:o,cy:a,innerRadius:t,outerRadius:l,cornerRadius:r,forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i,className:f}=n;if(l<t||e===i)return null;const h=W("recharts-sector",f),M=l-t,p=j(r,M,0,!0);let y;return p>0&&Math.abs(e-i)<360?y=B({cx:o,cy:a,innerRadius:t,outerRadius:l,cornerRadius:Math.min(p,M/2),forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i}):y=z({cx:o,cy:a,innerRadius:t,outerRadius:l,startAngle:e,endAngle:i}),J.createElement("path",{...k(n),className:h,d:y})};export{U as S};
