import{r as P}from"./entry-CFBLh4Sb.js";import{r as V,m as W,a9 as _,N as k,ai as y,_ as j}from"./DOMUtils-COePmuxT.js";import{aQ as q}from"./RechartsWrapper-DWzS-e23.js";import{c as g,R as S}from"./renderedTicksSlice-D1lNce9g.js";const w=(n,t)=>{const s=j(t-n),o=Math.min(Math.abs(t-n),359.999);return s*o},u=({cx:n,cy:t,radius:s,angle:o,sign:e,isExternal:i,cornerRadius:l,cornerIsExternal:$})=>{const c=l*(i?1:-1)+s,a=Math.asin(l/c)/S,r=$?o:o+e*a,M=g(n,t,c,r),h=g(n,t,s,r),m=$?o-e*a:o,f=g(n,t,c*Math.cos(a*S),m);return{center:M,circleTangency:h,lineTangency:f,theta:a}},z=({cx:n,cy:t,innerRadius:s,outerRadius:o,startAngle:e,endAngle:i})=>{const l=w(e,i),$=e+l,c=g(n,t,o,e),a=g(n,t,o,$);let r=y`M ${c.x},${c.y}
    A ${o},${o},0,
    ${+(Math.abs(l)>180)},${+(e>$)},
    ${a.x},${a.y}
  `;if(s>0){const M=g(n,t,s,e),h=g(n,t,s,$);r+=y`L ${h.x},${h.y}
            A ${s},${s},0,
            ${+(Math.abs(l)>180)},${+(e<=$)},
            ${M.x},${M.y} Z`}else r+=y`L ${n},${t} Z`;return r},B=({cx:n,cy:t,innerRadius:s,outerRadius:o,cornerRadius:e,forceCornerRadius:i,cornerIsExternal:l,startAngle:$,endAngle:c})=>{const a=j(c-$),r=Math.abs($-c),M=!i&&!l&&r<180,h=Math.sin(r/2*S),m=M?Math.min(e,o*h/(1+h)):e,f=M?Math.min(e,s*h/(1-h)):e,{circleTangency:p,lineTangency:T,theta:F}=u({cx:n,cy:t,radius:o,angle:$,sign:a,cornerRadius:m,cornerIsExternal:l}),{circleTangency:C,lineTangency:E,theta:H}=u({cx:n,cy:t,radius:o,angle:c,sign:-a,cornerRadius:m,cornerIsExternal:l}),L=l?Math.abs($-c):Math.abs($-c)-F-H;if(L<0&&i)return y`M ${T.x},${T.y}
      a${e},${e},0,0,1,${e*2},0
      a${e},${e},0,0,1,${-e*2},0
    `;let b=y`M ${T.x},${T.y}
    A${m},${m},0,0,${+(a<0)},${p.x},${p.y}
    A${o},${o},0,${+(L>180)},${+(a<0)},${C.x},${C.y}
    A${m},${m},0,0,${+(a<0)},${E.x},${E.y}
  `;if(s>0){const{circleTangency:A,lineTangency:Z,theta:O}=u({cx:n,cy:t,radius:s,angle:$,sign:a,isExternal:!0,cornerRadius:f,cornerIsExternal:l}),{circleTangency:x,lineTangency:N,theta:Q}=u({cx:n,cy:t,radius:s,angle:c,sign:-a,isExternal:!0,cornerRadius:f,cornerIsExternal:l}),v=l?Math.abs($-c):Math.abs($-c)-O-Q;if(v<0&&e===0)return`${b}L${n},${t}Z`;b+=y`L${N.x},${N.y}
      A${f},${f},0,0,${+(a<0)},${x.x},${x.y}
      A${s},${s},0,${+(v>180)},${+(a>0)},${A.x},${A.y}
      A${f},${f},0,0,${+(a<0)},${Z.x},${Z.y}Z`}else b+=y`L${n},${t}Z`;return b},G={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},D=n=>{const t=V(n,G),{cx:s,cy:o,innerRadius:e,outerRadius:i,cornerRadius:l,forceCornerRadius:$,cornerIsExternal:c,startAngle:a,endAngle:r,className:M}=t;if(i<e||a===r)return null;const h=W("recharts-sector",M),m=i-e,f=_(l,m,0,!0);let p;return f>0&&Math.abs(a-r)<360?p=B({cx:s,cy:o,innerRadius:e,outerRadius:i,cornerRadius:Math.min(f,m/2),forceCornerRadius:$,cornerIsExternal:c,startAngle:a,endAngle:r}):p=z({cx:s,cy:o,innerRadius:e,outerRadius:i,startAngle:a,endAngle:r}),P.createElement("path",{...k(t),className:h,d:p})},Y=n=>{const{fill:t}=n;return t!=null&&typeof t=="object"?P.createElement(q,{fill:t},s=>P.createElement(D,{...n,fill:s})):P.createElement(D,{...n,fill:t})};export{Y as S};
