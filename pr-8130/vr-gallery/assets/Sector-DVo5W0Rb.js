import{r as P}from"./entry-VgAzn5Hx.js";import{r as W,m as k,a8 as q,N as w,ah as y,Z as j}from"./DOMUtils-BB-et53b.js";import{m as z}from"./fillDefinitions-Cwdzh9nw.js";import{c as g,R as S}from"./renderedTicksSlice-BElsRv9C.js";const B=(n,t)=>{const s=j(t-n),o=Math.min(Math.abs(t-n),359.999);return s*o},u=({cx:n,cy:t,radius:s,angle:o,sign:e,isExternal:i,cornerRadius:l,cornerIsExternal:$})=>{const c=l*(i?1:-1)+s,a=Math.asin(l/c)/S,r=$?o:o+e*a,M=g(n,t,c,r),h=g(n,t,s,r),m=$?o-e*a:o,f=g(n,t,c*Math.cos(a*S),m);return{center:M,circleTangency:h,lineTangency:f,theta:a}},G=({cx:n,cy:t,innerRadius:s,outerRadius:o,startAngle:e,endAngle:i})=>{const l=B(e,i),$=e+l,c=g(n,t,o,e),a=g(n,t,o,$);let r=y`M ${c.x},${c.y}
    A ${o},${o},0,
    ${+(Math.abs(l)>180)},${+(e>$)},
    ${a.x},${a.y}
  `;if(s>0){const M=g(n,t,s,e),h=g(n,t,s,$);r+=y`L ${h.x},${h.y}
            A ${s},${s},0,
            ${+(Math.abs(l)>180)},${+(e<=$)},
            ${M.x},${M.y} Z`}else r+=y`L ${n},${t} Z`;return r},J=({cx:n,cy:t,innerRadius:s,outerRadius:o,cornerRadius:e,forceCornerRadius:i,cornerIsExternal:l,startAngle:$,endAngle:c})=>{const a=j(c-$),r=Math.abs($-c),M=!i&&!l&&r<180,h=Math.sin(r/2*S),m=M?Math.min(e,o*h/(1+h)):e,f=M?Math.min(e,s*h/(1-h)):e,{circleTangency:p,lineTangency:T,theta:F}=u({cx:n,cy:t,radius:o,angle:$,sign:a,cornerRadius:m,cornerIsExternal:l}),{circleTangency:C,lineTangency:E,theta:H}=u({cx:n,cy:t,radius:o,angle:c,sign:-a,cornerRadius:m,cornerIsExternal:l}),L=l?Math.abs($-c):Math.abs($-c)-F-H;if(L<0&&i)return y`M ${T.x},${T.y}
      a${e},${e},0,0,1,${e*2},0
      a${e},${e},0,0,1,${-e*2},0
    `;let b=y`M ${T.x},${T.y}
    A${m},${m},0,0,${+(a<0)},${p.x},${p.y}
    A${o},${o},0,${+(L>180)},${+(a<0)},${C.x},${C.y}
    A${m},${m},0,0,${+(a<0)},${E.x},${E.y}
  `;if(s>0){const{circleTangency:Z,lineTangency:A,theta:O}=u({cx:n,cy:t,radius:s,angle:$,sign:a,isExternal:!0,cornerRadius:f,cornerIsExternal:l}),{circleTangency:x,lineTangency:N,theta:V}=u({cx:n,cy:t,radius:s,angle:c,sign:-a,isExternal:!0,cornerRadius:f,cornerIsExternal:l}),v=l?Math.abs($-c):Math.abs($-c)-O-V;if(v<0&&e===0)return`${b}L${n},${t}Z`;b+=y`L${N.x},${N.y}
      A${f},${f},0,0,${+(a<0)},${x.x},${x.y}
      A${s},${s},0,${+(v>180)},${+(a>0)},${Z.x},${Z.y}
      A${f},${f},0,0,${+(a<0)},${A.x},${A.y}Z`}else b+=y`L${n},${t}Z`;return b},K={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},D=n=>{const t=W(n,K),{cx:s,cy:o,innerRadius:e,outerRadius:i,cornerRadius:l,forceCornerRadius:$,cornerIsExternal:c,startAngle:a,endAngle:r,className:M}=t;if(i<e||a===r)return null;const h=k("recharts-sector",M),m=i-e,f=q(l,m,0,!0);let p;return f>0&&Math.abs(a-r)<360?p=J({cx:s,cy:o,innerRadius:e,outerRadius:i,cornerRadius:Math.min(f,m/2),forceCornerRadius:$,cornerIsExternal:c,startAngle:a,endAngle:r}):p=G({cx:s,cy:o,innerRadius:e,outerRadius:i,startAngle:a,endAngle:r}),P.createElement("path",{...w(t),className:h,d:p})},_=n=>{const{fill:t}=n;return t!=null&&typeof t=="object"?P.createElement(z,{fill:t},s=>P.createElement(D,{...n,fill:s})):P.createElement(D,{...n,fill:t})};export{_ as S};
