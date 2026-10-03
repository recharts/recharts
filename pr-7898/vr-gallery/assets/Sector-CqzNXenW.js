import{r as V}from"./entry-4wQI74sJ.js";import{r as W,c as X,t as j,f as k,y as f,o as E}from"./useId-DRdNAcWj.js";import{J as g,aX as u}from"./renderedTicksSlice-B7vrPEOu.js";const q=(s,n)=>{const a=E(n-s),o=Math.min(Math.abs(n-s),359.999);return a*o},P=({cx:s,cy:n,radius:a,angle:o,sign:t,isExternal:l,cornerRadius:r,cornerIsExternal:$})=>{const c=r*(l?1:-1)+a,e=Math.asin(r/c)/u,i=$?o:o+t*e,y=g(s,n,c,i),h=g(s,n,a,i),M=$?o-t*e:o,p=g(s,n,c*Math.cos(e*u),M);return{center:y,circleTangency:h,lineTangency:p,theta:e}},w=({cx:s,cy:n,innerRadius:a,outerRadius:o,startAngle:t,endAngle:l})=>{const r=q(t,l),$=t+r,c=g(s,n,o,t),e=g(s,n,o,$);let i=f`M ${c.x},${c.y}
    A ${o},${o},0,
    ${+(Math.abs(r)>180)},${+(t>$)},
    ${e.x},${e.y}
  `;if(a>0){const y=g(s,n,a,t),h=g(s,n,a,$);i+=f`L ${h.x},${h.y}
            A ${a},${a},0,
            ${+(Math.abs(r)>180)},${+(t<=$)},
            ${y.x},${y.y} Z`}else i+=f`L ${s},${n} Z`;return i},z=({cx:s,cy:n,innerRadius:a,outerRadius:o,cornerRadius:t,forceCornerRadius:l,cornerIsExternal:r,startAngle:$,endAngle:c})=>{const e=E(c-$),i=Math.abs($-c),y=!l&&!r&&i<180,h=Math.sin(i/2*u),M=y?Math.min(t,o*h/(1+h)):t,p=y?Math.min(t,a*h/(1-h)):t,{circleTangency:m,lineTangency:T,theta:N}=P({cx:s,cy:n,radius:o,angle:$,sign:e,cornerRadius:M,cornerIsExternal:r}),{circleTangency:C,lineTangency:S,theta:F}=P({cx:s,cy:n,radius:o,angle:c,sign:-e,cornerRadius:M,cornerIsExternal:r}),L=r?Math.abs($-c):Math.abs($-c)-N-F;if(L<0&&l)return f`M ${T.x},${T.y}
      a${t},${t},0,0,1,${t*2},0
      a${t},${t},0,0,1,${-t*2},0
    `;let b=f`M ${T.x},${T.y}
    A${M},${M},0,0,${+(e<0)},${m.x},${m.y}
    A${o},${o},0,${+(L>180)},${+(e<0)},${C.x},${C.y}
    A${M},${M},0,0,${+(e<0)},${S.x},${S.y}
  `;if(a>0){const{circleTangency:A,lineTangency:Z,theta:H}=P({cx:s,cy:n,radius:a,angle:$,sign:e,isExternal:!0,cornerRadius:p,cornerIsExternal:r}),{circleTangency:x,lineTangency:v,theta:J}=P({cx:s,cy:n,radius:a,angle:c,sign:-e,isExternal:!0,cornerRadius:p,cornerIsExternal:r}),D=r?Math.abs($-c):Math.abs($-c)-H-J;if(D<0&&t===0)return`${b}L${s},${n}Z`;b+=f`L${v.x},${v.y}
      A${p},${p},0,0,${+(e<0)},${x.x},${x.y}
      A${a},${a},0,${+(D>180)},${+(e>0)},${A.x},${A.y}
      A${p},${p},0,0,${+(e<0)},${Z.x},${Z.y}Z`}else b+=f`L${s},${n}Z`;return b},B={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},Q=s=>{const n=W(s,B),{cx:a,cy:o,innerRadius:t,outerRadius:l,cornerRadius:r,forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i,className:y}=n;if(l<t||e===i)return null;const h=X("recharts-sector",y),M=l-t,p=j(r,M,0,!0);let m;return p>0&&Math.abs(e-i)<360?m=z({cx:a,cy:o,innerRadius:t,outerRadius:l,cornerRadius:Math.min(p,M/2),forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i}):m=w({cx:a,cy:o,innerRadius:t,outerRadius:l,startAngle:e,endAngle:i}),V.createElement("path",{...k(n),className:h,d:m})};export{Q as S};
