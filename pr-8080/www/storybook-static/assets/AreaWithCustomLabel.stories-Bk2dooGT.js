import{R as r}from"./iframe-zw95Jg5I.js";import{R as c}from"./zIndexSlice-BhhR1tic.js";import{C as d}from"./ComposedChart-CTgj0L1M.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BB05D8vL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-oavmg9-5.js";import"./throttle-Cgnp6_V2.js";import"./index-CWbrX-i7.js";import"./index-CWy5ARPc.js";import"./RechartsWrapper-DNF4noKd.js";import"./axisSelectors-DAhbEMcv.js";import"./polarAxisSelectors-DUH0PWke.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXUDNojI.js";import"./index-BPsqxPXN.js";import"./index-BEzQf4L4.js";import"./renderedTicksSlice-BhGNFZVD.js";import"./index-bXT-B2Zu.js";import"./CartesianChart-CAbKVIox.js";import"./chartDataContext-DsEiNuFy.js";import"./CategoricalChart-DSpSOmf_.js";import"./Layer-KXbvniH8.js";import"./activeStyles-Dzq6_wuP.js";import"./Label-B1gN_1pg.js";import"./Text-d1Lwh7G9.js";import"./pageBackground-04zbeTMB.js";import"./useId-CtBeXuXP.js";import"./ZIndexLayer-DT4lNh0N.js";import"./dataEntryStyles-B6Pg3he4.js";import"./useAnimationId-DHyavBGa.js";import"./ActivePoints-DhDmo-r8.js";import"./Dot-gB6O6AIc.js";import"./types-BkYRfFSe.js";import"./Symbols-g6eOoLF6.js";import"./symbol-D4N1oQUq.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-Ci1zbwmF.js";import"./SetGraphicalItem-D5SILBm3.js";import"./getRadiusAndStrokeWidthFromDot-BjYb5x8U.js";import"./ActiveShapeUtils-KL7GHwh1.js";import"./Curve-D_d6vzaM.js";import"./step-Q9jA4NJI.js";import"./useEffectiveDataKey-ak6DNGcC.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
