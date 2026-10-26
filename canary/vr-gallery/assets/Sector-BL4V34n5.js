import{r as K}from"./entry-BFEXXyxO.js";import{r as V,c as W,a6 as _,K as j,ak as m,_ as E}from"./useId-CnWnhL-b.js";import{c as y,R as u}from"./renderedTicksSlice-n-IqjM_0.js";const q=(s,n)=>{const a=E(n-s),o=Math.min(Math.abs(n-s),359.999);return a*o},P=({cx:s,cy:n,radius:a,angle:o,sign:t,isExternal:l,cornerRadius:r,cornerIsExternal:$})=>{const c=r*(l?1:-1)+a,e=Math.asin(r/c)/u,i=$?o:o+t*e,g=y(s,n,c,i),h=y(s,n,a,i),M=$?o-t*e:o,p=y(s,n,c*Math.cos(e*u),M);return{center:g,circleTangency:h,lineTangency:p,theta:e}},w=({cx:s,cy:n,innerRadius:a,outerRadius:o,startAngle:t,endAngle:l})=>{const r=q(t,l),$=t+r,c=y(s,n,o,t),e=y(s,n,o,$);let i=m`M ${c.x},${c.y}
    A ${o},${o},0,
    ${+(Math.abs(r)>180)},${+(t>$)},
    ${e.x},${e.y}
  `;if(a>0){const g=y(s,n,a,t),h=y(s,n,a,$);i+=m`L ${h.x},${h.y}
            A ${a},${a},0,
            ${+(Math.abs(r)>180)},${+(t<=$)},
            ${g.x},${g.y} Z`}else i+=m`L ${s},${n} Z`;return i},z=({cx:s,cy:n,innerRadius:a,outerRadius:o,cornerRadius:t,forceCornerRadius:l,cornerIsExternal:r,startAngle:$,endAngle:c})=>{const e=E(c-$),i=Math.abs($-c),g=!l&&!r&&i<180,h=Math.sin(i/2*u),M=g?Math.min(t,o*h/(1+h)):t,p=g?Math.min(t,a*h/(1-h)):t,{circleTangency:f,lineTangency:T,theta:N}=P({cx:s,cy:n,radius:o,angle:$,sign:e,cornerRadius:M,cornerIsExternal:r}),{circleTangency:C,lineTangency:S,theta:k}=P({cx:s,cy:n,radius:o,angle:c,sign:-e,cornerRadius:M,cornerIsExternal:r}),L=r?Math.abs($-c):Math.abs($-c)-N-k;if(L<0&&l)return m`M ${T.x},${T.y}
      a${t},${t},0,0,1,${t*2},0
      a${t},${t},0,0,1,${-t*2},0
    `;let b=m`M ${T.x},${T.y}
    A${M},${M},0,0,${+(e<0)},${f.x},${f.y}
    A${o},${o},0,${+(L>180)},${+(e<0)},${C.x},${C.y}
    A${M},${M},0,0,${+(e<0)},${S.x},${S.y}
  `;if(a>0){const{circleTangency:A,lineTangency:Z,theta:F}=P({cx:s,cy:n,radius:a,angle:$,sign:e,isExternal:!0,cornerRadius:p,cornerIsExternal:r}),{circleTangency:x,lineTangency:v,theta:H}=P({cx:s,cy:n,radius:a,angle:c,sign:-e,isExternal:!0,cornerRadius:p,cornerIsExternal:r}),D=r?Math.abs($-c):Math.abs($-c)-F-H;if(D<0&&t===0)return`${b}L${s},${n}Z`;b+=m`L${v.x},${v.y}
      A${p},${p},0,0,${+(e<0)},${x.x},${x.y}
      A${a},${a},0,${+(D>180)},${+(e>0)},${A.x},${A.y}
      A${p},${p},0,0,${+(e<0)},${Z.x},${Z.y}Z`}else b+=m`L${s},${n}Z`;return b},B={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},Q=s=>{const n=V(s,B),{cx:a,cy:o,innerRadius:t,outerRadius:l,cornerRadius:r,forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i,className:g}=n;if(l<t||e===i)return null;const h=W("recharts-sector",g),M=l-t,p=_(r,M,0,!0);let f;return p>0&&Math.abs(e-i)<360?f=z({cx:a,cy:o,innerRadius:t,outerRadius:l,cornerRadius:Math.min(p,M/2),forceCornerRadius:$,cornerIsExternal:c,startAngle:e,endAngle:i}):f=w({cx:a,cy:o,innerRadius:t,outerRadius:l,startAngle:e,endAngle:i}),K.createElement("path",{...j(n),className:h,d:f})};export{Q as S};
