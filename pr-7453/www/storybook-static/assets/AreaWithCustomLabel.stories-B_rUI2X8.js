import{R as e}from"./iframe-BCtefvpd.js";import{R as c}from"./zIndexSlice-DLtTjfC4.js";import{C as d}from"./ComposedChart-B-FcUFTM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DF36eHmz.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DIhiteEo.js";import"./index-DA3zv02Q.js";import"./index-BqWWOLm7.js";import"./get-DFMRZS9d.js";import"./resolveDefaultProps-CVGnLM0G.js";import"./isWellBehavedNumber-OR7M83Gu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cp9N8_Bk.js";import"./index-BcefENIv.js";import"./index-C3JFnZZi.js";import"./renderedTicksSlice-kBir8HDa.js";import"./axisSelectors-DOKBLmJM.js";import"./d3-scale-CVyajGd1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-COa7p1e9.js";import"./chartDataContext-qlylvQc9.js";import"./CategoricalChart-B2VvTH4v.js";import"./Layer-sJOcNnwh.js";import"./AnimatedItems-C8IovmVa.js";import"./Label-CC74cj4o.js";import"./Text-BeTx0pmM.js";import"./DOMUtils-BhG_b4P2.js";import"./ZIndexLayer-DEcD4grM.js";import"./useAnimationId-Bcchcs5m.js";import"./ActivePoints-B96wLJJz.js";import"./Dot-B9o-wKF1.js";import"./types-Cdi5Da9N.js";import"./RegisterGraphicalItemId-6mFWr6Iy.js";import"./GraphicalItemClipPath-B0sf68Y7.js";import"./SetGraphicalItem-DFYwZ-xH.js";import"./getRadiusAndStrokeWidthFromDot-w6-BSgwG.js";import"./ActiveShapeUtils-4S977V9W.js";import"./Curve-Du81AbUE.js";import"./step-trh3ABoh.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CDWfuhcE.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
