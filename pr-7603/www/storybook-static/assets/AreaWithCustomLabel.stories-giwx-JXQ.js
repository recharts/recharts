import{R as e}from"./iframe-VZ2aM8fP.js";import{R as c}from"./zIndexSlice-CQOPOcrz.js";import{C as d}from"./ComposedChart-BflrR0gu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C4E6QKY3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CpHch1iP.js";import"./index-RAnsrEyk.js";import"./index-5JKLnMLz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-_p4e6Off.js";import"./isWellBehavedNumber-B1YHMHRX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BgtBwIWT.js";import"./index-B8NmJaJc.js";import"./index-BdOpZNUA.js";import"./renderedTicksSlice-BWvg2Uuk.js";import"./axisSelectors-BuT92BdO.js";import"./d3-scale-2P7n4BrN.js";import"./CartesianChart-Bc8fypAa.js";import"./chartDataContext-Ci6amljO.js";import"./CategoricalChart-CxsxsIbU.js";import"./Layer-D5KpKuLh.js";import"./AnimatedItems-B1Uj1Gzk.js";import"./Label-Bcx9yaip.js";import"./Text-BxYT9j-0.js";import"./DOMUtils-D8EYtam3.js";import"./ZIndexLayer-BQK00jlT.js";import"./useAnimationId-BWSvDpI-.js";import"./ActivePoints-oAKWC-6n.js";import"./Dot-CNR-wtas.js";import"./types-BixaCUGO.js";import"./RegisterGraphicalItemId-C7us6vqj.js";import"./GraphicalItemClipPath-BhbKOYCd.js";import"./SetGraphicalItem-BqP4f3rQ.js";import"./getRadiusAndStrokeWidthFromDot-D2NN5p-Y.js";import"./ActiveShapeUtils-C3jZ13_H.js";import"./Curve-B5MshFyr.js";import"./step-DBa2Myk3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BD0xBJsD.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
