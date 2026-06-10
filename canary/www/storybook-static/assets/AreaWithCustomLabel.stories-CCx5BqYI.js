import{R as e}from"./iframe-Sgab1gUe.js";import{R as c}from"./zIndexSlice-BrzbkbEI.js";import{C as d}from"./ComposedChart-DQqePUzc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D9kQJNkt.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-jmjMSL8D.js";import"./index-BLkVzwy_.js";import"./index-90Rz6XAP.js";import"./get-BJyukGiE.js";import"./resolveDefaultProps-CNXENHcX.js";import"./isWellBehavedNumber-CJXdc3tU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTduNXvU.js";import"./index-BkOZFEZb.js";import"./index-BsnSQtU-.js";import"./renderedTicksSlice-CVwVFFGF.js";import"./axisSelectors-8GhzU9TS.js";import"./d3-scale-Bg12AftI.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CY44eXB-.js";import"./chartDataContext-NIXL8iaZ.js";import"./CategoricalChart-DwEPGx0k.js";import"./Layer-Dy3UQ8V8.js";import"./AnimatedItems-CFJVJstG.js";import"./Label-pFFfknml.js";import"./Text-Bwmob33r.js";import"./DOMUtils-CmwtFJfy.js";import"./ZIndexLayer-DBRcOItw.js";import"./useAnimationId-D0bn0X4e.js";import"./ActivePoints-_LL_I5Qc.js";import"./Dot-BvExYRbB.js";import"./types-CA2ETL4c.js";import"./RegisterGraphicalItemId-BSYxTo0u.js";import"./GraphicalItemClipPath-BB2uZM8Q.js";import"./SetGraphicalItem-Cu_IpSGW.js";import"./getRadiusAndStrokeWidthFromDot-bqVMqQYj.js";import"./ActiveShapeUtils-CypivSKC.js";import"./Curve-DfhFB3Po.js";import"./step-CWFXO9ga.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B2HDnJwF.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
