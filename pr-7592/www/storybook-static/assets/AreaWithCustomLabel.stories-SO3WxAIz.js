import{R as e}from"./iframe-KfsXDyYe.js";import{R as c}from"./zIndexSlice-DRQ5ZoPP.js";import{C as d}from"./ComposedChart-DZx5d73W.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BO-YNuSm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-0X77pc-d.js";import"./index-B8nw1mbK.js";import"./index-USmxlz8z.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CJQcFjaM.js";import"./isWellBehavedNumber-B9hqvBfv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1g5OPk8.js";import"./index-BcSxHpM2.js";import"./index-D3u1xKBW.js";import"./renderedTicksSlice-VAstzL9_.js";import"./axisSelectors-DqRFL16u.js";import"./d3-scale-CwZ0fpJQ.js";import"./CartesianChart-CedzGa4b.js";import"./chartDataContext-CrbAMOHN.js";import"./CategoricalChart-D28QOUrV.js";import"./Layer-DvnIPp0b.js";import"./AnimatedItems-CsvMn_0v.js";import"./Label-dJq5mBhi.js";import"./Text-Cvia8ncb.js";import"./DOMUtils-r4qPFFQL.js";import"./ZIndexLayer-DyFku1ry.js";import"./useAnimationId-BRufZRyg.js";import"./ActivePoints-DD9eCF-L.js";import"./Dot-BXiPHS-i.js";import"./types-Cp7Kv4cO.js";import"./RegisterGraphicalItemId-BVy8O7ka.js";import"./GraphicalItemClipPath-CLORxtCR.js";import"./SetGraphicalItem-BXsnmgyo.js";import"./getRadiusAndStrokeWidthFromDot-D62YsXR3.js";import"./ActiveShapeUtils-YGV0Qwxy.js";import"./Curve-DHdhUSXl.js";import"./step-ww9sKUkN.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B7OD38_b.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
