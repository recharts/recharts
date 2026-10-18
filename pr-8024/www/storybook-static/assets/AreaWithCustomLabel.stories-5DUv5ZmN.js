import{R as r}from"./iframe-Cs9VT9SX.js";import{R as c}from"./zIndexSlice-BdtHtScS.js";import{C as d}from"./ComposedChart-CBGO3KHX.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BfIZZxI2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DO7D3GPa.js";import"./index-xMFBNBU3.js";import"./index-Ccb8EBp4.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BxA5_OWP.js";import"./isWellBehavedNumber-CVBN0S-y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5YZJO9f.js";import"./axisSelectors-gCAVib4T.js";import"./d3-scale-B33rCp3E.js";import"./index-Co8WVvE-.js";import"./index-Cjg5XPAC.js";import"./renderedTicksSlice-CLNxhMWR.js";import"./index-iO7lXoIC.js";import"./CartesianChart-BoDGj9iP.js";import"./chartDataContext-neHnT-17.js";import"./CategoricalChart-D0wW8A9V.js";import"./Layer-DyApFY3D.js";import"./activeStyles-CIXVWOxz.js";import"./Label-CtA6iQna.js";import"./Text-NwXvdk36.js";import"./pageBackground-Oh548Gvn.js";import"./useId-pJJcLuGB.js";import"./useBackwardsCompatibleTheme-BWsBUWUZ.js";import"./ZIndexLayer-6baMIq5x.js";import"./useAnimationId-1jmYsVjg.js";import"./dataEntryStyles-Bogdu71F.js";import"./ActivePoints-zHs9ig4S.js";import"./Dot-D9tJW78F.js";import"./types-BderJbki.js";import"./GraphicalItemClipPath-BhbyQIog.js";import"./SetGraphicalItem-Dqm-RVU6.js";import"./getRadiusAndStrokeWidthFromDot-CqwHrRi4.js";import"./ActiveShapeUtils-DP1vY-Az.js";import"./Curve-C5hSs_Mg.js";import"./step-C0n0sZGY.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-KP9u_G2c.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
