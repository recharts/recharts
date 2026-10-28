import{r as W}from"./entry-Db_94UwF.js";import{r as _,m as j,a9 as k,N as q,ai as g,_ as D}from"./pageBackground-DDpWr9S6.js";import{c as y,R as u}from"./renderedTicksSlice-Av1lW4FG.js";const w=(s,n)=>{const a=D(n-s),o=Math.min(Math.abs(n-s),359.999);return a*o},P=({cx:s,cy:n,radius:a,angle:o,sign:t,isExternal:l,cornerRadius:r,cornerIsExternal:$})=>{const c=r*(l?1:-1)+a,e=Math.asin(r/c)/u,i=$?o:o+t*e,p=y(s,n,c,i),h=y(s,n,a,i),M=$?o-t*e:o,m=y(s,n,c*Math.cos(e*u),M);return{center:p,circleTangency:h,lineTangency:m,theta:e}},z=({cx:s,cy:n,innerRadius:a,outerRadius:o,startAngle:t,endAngle:l})=>{const r=w(t,l),$=t+r,c=y(s,n,o,t),e=y(s,n,o,$);let i=g`M ${c.x},${c.y}
    A ${o},${o},0,
    ${+(Math.abs(r)>180)},${+(t>$)},
    ${e.x},${e.y}
  `;if(a>0){const p=y(s,n,a,t),h=y(s,n,a,$);i+=g`L ${h.x},${h.y}
            A ${a},${a},0,
            ${+(Math.abs(r)>180)},${+(t<=$)},
            ${p.x},${p.y} Z`}else i+=g`L ${s},${n} Z`;return i},B=({cx:s,cy:n,innerRadius:a,outerRadius:o,cornerRadius:t,forceCornerRadius:l,cornerIsExternal:r,startAngle:$,endAngle:c})=>{const e=D(c-$),i=Math.abs($-c),p=!l&&!r&&i<180,h=Math.sin(i/2*u),M=p?Math.min(t,o*h/(1+h)):t,m=p?Math.min(t,a*h/(1-h)):t,{circleTangency:f,lineTangency:T,theta:E}=P({cx:s,cy:n,radius:o,angle:$,sign:e,cornerRadius:M,cornerIsExternal:r}),{circleTangency:C,lineTangency:S,theta:F}=P({cx:s,cy:n,radius:o,angle:c,sign:-e,cornerRadius:M,cornerIsExternal:r}),L=r?Math.abs($-c):Math.abs($-c)-E-F;if(L<0&&l)return g`M ${T.x},${T.y}
      a${t},${t},0,0,1,${t*2},0
      a${t},${t},0,0,1,${-t*2},0
    `;let b=g`M ${T.x},${T.y}
    A${M},${M},0,0,${+(e<0)},${f.x},${f.y}
    A${o},${o},0,${+(L>180)},${+(e<0)},${C.x},${C.y}
    A${M},${M},0,0,${+(e<0)},${S.x},${S.y}
  `;if(a>0){const{circleTangency:A,lineTangency:Z,theta:H}=P({cx:s,cy:n,radius:a,angle:$,sign:e,isExternal:!0,cornerRadius:m,cornerIsExternal:r}),{circleTangency:x,lineTangency:N,theta:V}=P({cx:s,cy:n,radius:a,angle:c,sign:-e,isExternal:!0,cornerRadius:m,cornerIsExternal:r}),v=r?Math.abs($-c):Math.abs($-c)-H-V;if(v<0&&t===0)return`${b}L${s},${n}Z`;b+=g`L${N.x},${N.y}
      A${m},${m},0,0,${+(e<0)},${x.x},${x.y}
      A${a},${a},0,${+(v>180)},${+(e>0)},${A.x},${A.y}
      A${m},${m},0,0,${+(e<0)},${Z.x},${Z.y}Z`}else b+=g`L${s},${n}Z`;return b},G={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},Q=s=>{const n=_(s,G),{cx:a,cy:o,innerRadius:t,outerRadius:l,cornerRadius:r,forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i,className:p}=n;if(l<t||e===i)return null;const h=j("recharts-sector",p),M=l-t,m=k(r,M,0,!0);let f;return m>0&&Math.abs(e-i)<360?f=B({cx:a,cy:o,innerRadius:t,outerRadius:l,cornerRadius:Math.min(m,M/2),forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i}):f=z({cx:a,cy:o,innerRadius:t,outerRadius:l,startAngle:e,endAngle:i}),W.createElement("path",{...q(n),className:h,d:f})};export{Q as S};
