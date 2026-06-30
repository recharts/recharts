import{R as e}from"./iframe-C1w5v_Qk.js";import{R as c}from"./zIndexSlice-B1EdpB6R.js";import{C as d}from"./ComposedChart-Cez35_ir.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DKcLlQTJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-xmruF8UK.js";import"./index-CsIOsjrg.js";import"./index-BlJOskHH.js";import"./get-BiWVgPl2.js";import"./resolveDefaultProps-CoJ3EeKY.js";import"./isWellBehavedNumber-NxDVn2o3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjIXVxen.js";import"./index-3W1J-0s3.js";import"./index-DRD7DMzc.js";import"./renderedTicksSlice-CHw04Oxj.js";import"./axisSelectors-CF8b5amj.js";import"./d3-scale-Vx2OsAoJ.js";import"./CartesianChart-DmhCfUcK.js";import"./chartDataContext-BJtHxGB9.js";import"./CategoricalChart-CQ9KgY5m.js";import"./Layer-DdWQTUzH.js";import"./AnimatedItems-DUYSPF-a.js";import"./Label-C6ZIo4e5.js";import"./Text-CLhlhxNo.js";import"./DOMUtils-B6Ajdyx4.js";import"./ZIndexLayer-C25IbVUt.js";import"./useAnimationId-CzIDWQBI.js";import"./ActivePoints-C8Lsw_QN.js";import"./Dot-DKLsSZb_.js";import"./types-D2g1bX1e.js";import"./RegisterGraphicalItemId-B4g8fd0n.js";import"./GraphicalItemClipPath-Ct_Dr2Hp.js";import"./SetGraphicalItem-BUNBwVyh.js";import"./getRadiusAndStrokeWidthFromDot-BO1985Pr.js";import"./ActiveShapeUtils-SLeDfFDD.js";import"./Curve-j2uTsuDC.js";import"./step-C7bwrN9b.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BrKdDVI4.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
