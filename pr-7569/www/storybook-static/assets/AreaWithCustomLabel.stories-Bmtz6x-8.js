import{R as e}from"./iframe-3EJ0a-7l.js";import{R as c}from"./zIndexSlice-c2FXiYNl.js";import{C as d}from"./ComposedChart-D-953FuV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BiGhF4uC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CPX4UzZG.js";import"./index-0T8Ohuwb.js";import"./index-Bew5wRIt.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BuDtgz7X.js";import"./isWellBehavedNumber-BhkIWxYY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bn0d5D9a.js";import"./index-BjSUzMQ4.js";import"./index-tuDXSbu0.js";import"./renderedTicksSlice-gv74no8c.js";import"./axisSelectors-Bmyn61pB.js";import"./d3-scale-iKC8386d.js";import"./CartesianChart-BDgOOMut.js";import"./chartDataContext-D6a_Yhjw.js";import"./CategoricalChart-CxrO1b6T.js";import"./Layer-DpkyIzcZ.js";import"./AnimatedItems-_aFnnDci.js";import"./Label-C0w-bdKA.js";import"./Text-Tcv7e8Zm.js";import"./DOMUtils-DXgkUmDa.js";import"./ZIndexLayer-DNvDkown.js";import"./useAnimationId-BfMO6PtV.js";import"./ActivePoints-DJDGdwM2.js";import"./Dot-Cv5hb360.js";import"./types-CU0G9DUW.js";import"./RegisterGraphicalItemId-DGaDllRs.js";import"./GraphicalItemClipPath-BH3HlCRV.js";import"./SetGraphicalItem-BJF2lEB0.js";import"./getRadiusAndStrokeWidthFromDot-Ds3sY1DQ.js";import"./ActiveShapeUtils-Cy1FCqFR.js";import"./Curve-BO7dzXGY.js";import"./step-oroBBTM2.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B05IV_cU.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
