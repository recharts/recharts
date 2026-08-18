import{R as r}from"./iframe-BMarL12M.js";import{R as c}from"./zIndexSlice-C3zFoeWv.js";import{C as d}from"./ComposedChart-DmXgJ0VK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B9NWlTcf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-szqIxzqv.js";import"./index-Dlh6vJO1.js";import"./index-D9BBRgqz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C6wBzGKi.js";import"./isWellBehavedNumber-DBs0imhW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2ncjDjR.js";import"./index-rELjxh9R.js";import"./index-vTpJvilY.js";import"./axisSelectors-DONKf7kg.js";import"./d3-scale-C4M2cZc9.js";import"./renderedTicksSlice-BGVDzAbm.js";import"./CartesianChart-Bsi6NNhA.js";import"./chartDataContext-BcZuDILO.js";import"./CategoricalChart-D3itWTr1.js";import"./Layer-DPtUoMDp.js";import"./AnimatedItems-BsByAcaR.js";import"./Label-wMX0Bukp.js";import"./Text-CGkcqRdd.js";import"./DOMUtils-DSG72bMg.js";import"./useBackwardsCompatibleTheme-DDTyJRfe.js";import"./ZIndexLayer-4Y9-7gYz.js";import"./useAnimationId-W_lOfRkr.js";import"./ActivePoints-CaZ5IFfg.js";import"./Dot-BRm5AFxN.js";import"./types-B-ESMolm.js";import"./RegisterGraphicalItemId-CxNs_80A.js";import"./GraphicalItemClipPath-CUFqqD93.js";import"./SetGraphicalItem-B6tJU4_Z.js";import"./getRadiusAndStrokeWidthFromDot-qR9Ssn50.js";import"./ActiveShapeUtils-_BzuEdws.js";import"./Curve-CqaRxmR5.js";import"./step-B2Vat6Ch.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BqDrOfHf.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
