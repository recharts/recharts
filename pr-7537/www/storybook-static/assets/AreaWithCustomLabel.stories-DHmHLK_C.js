import{R as e}from"./iframe-BZg1zG5B.js";import{R as c}from"./zIndexSlice-CkkPSViG.js";import{C as d}from"./ComposedChart-Czc2DQcq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-SSpK3vc_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DFHrPmFV.js";import"./index-BzAnTBpk.js";import"./index-Cmvzg-0C.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CI_HL12t.js";import"./isWellBehavedNumber-Bk-91M8w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DyRofC5m.js";import"./index-DuAyB1ct.js";import"./index-BSOub4mJ.js";import"./renderedTicksSlice-DxnsaDc8.js";import"./axisSelectors-CZQj26DE.js";import"./d3-scale-CHbHYnH2.js";import"./CartesianChart-NJt7vXp9.js";import"./chartDataContext-gkePnQjL.js";import"./CategoricalChart-CacFZjBO.js";import"./Layer-AM2ZERM9.js";import"./AnimatedItems-C9XnYXoB.js";import"./Label-D1KCxb60.js";import"./Text-K_EkIkuP.js";import"./DOMUtils-Bs3ZzMQS.js";import"./ZIndexLayer-oU6a0KMz.js";import"./useAnimationId-D8zRqkvh.js";import"./ActivePoints-kipmWAm6.js";import"./Dot-BCNxr43y.js";import"./types-CP45QuEc.js";import"./RegisterGraphicalItemId-CnFfEqxk.js";import"./GraphicalItemClipPath-DCZKfxi9.js";import"./SetGraphicalItem-DRJD094C.js";import"./getRadiusAndStrokeWidthFromDot-Wk5YU4K6.js";import"./ActiveShapeUtils-9Jnofarx.js";import"./Curve-BscR4dmI.js";import"./step-DGy1Mip9.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DZoCF1F0.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
