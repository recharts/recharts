import{R as e}from"./iframe-DSGjjpNU.js";import{R as c}from"./zIndexSlice-CA6E8vFi.js";import{C as d}from"./ComposedChart-DrbKDWrp.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-XhzsOUBs.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Py-Ymz2c.js";import"./index-zgKj8xSX.js";import"./index-BP6oFGIz.js";import"./get-DWY5eETe.js";import"./resolveDefaultProps-C7JBpnaB.js";import"./isWellBehavedNumber-DJkwFvMJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DLTVJ7et.js";import"./index-BppypMuk.js";import"./index-BXnOwVVg.js";import"./renderedTicksSlice-Dt_MkN4R.js";import"./axisSelectors-ChSlicBm.js";import"./d3-scale-DFnee9kt.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dc9cHP3f.js";import"./chartDataContext-dw-RuqgE.js";import"./CategoricalChart-4qFfYNuc.js";import"./Layer-CQXD14hs.js";import"./AnimatedItems-DmxYIflg.js";import"./Label-BCa7jxpl.js";import"./Text-CzUj4xGW.js";import"./DOMUtils-91PmpcqE.js";import"./ZIndexLayer-BY8ImL1x.js";import"./useAnimationId-Da38KlFl.js";import"./ActivePoints-CI7vIZx0.js";import"./Dot-BA1tdqH4.js";import"./types-C1TBc4OL.js";import"./RegisterGraphicalItemId-Cr8a7rd9.js";import"./GraphicalItemClipPath-JjCltWFk.js";import"./SetGraphicalItem-CMSYXoAN.js";import"./getRadiusAndStrokeWidthFromDot-B6xtN6Lv.js";import"./ActiveShapeUtils-c7K_sKfu.js";import"./Curve-gomJXmPu.js";import"./step-MzBMmcWb.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-VMcvjSe7.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
