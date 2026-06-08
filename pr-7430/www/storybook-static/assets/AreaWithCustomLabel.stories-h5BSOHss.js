import{R as e}from"./iframe-D_P_Mvdh.js";import{R as c}from"./zIndexSlice-DWG8bKuL.js";import{C as d}from"./ComposedChart-C2CR4N0a.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DO64-z-5.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-zUUuTuVf.js";import"./index-CPg71y3f.js";import"./index-DK1y_UWu.js";import"./get-B4It9gJG.js";import"./resolveDefaultProps-D055Uems.js";import"./isWellBehavedNumber-CxbXcWx5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DF8D9EH3.js";import"./index-B9DAC9X3.js";import"./index-B6Dv4SpM.js";import"./renderedTicksSlice-BNdYyHmj.js";import"./axisSelectors-CousMoEm.js";import"./d3-scale-Bmp1cDWa.js";import"./string-B6fdYHAA.js";import"./CartesianChart-iR1LAWUH.js";import"./chartDataContext-Dv19WRuB.js";import"./CategoricalChart-D93P9I6f.js";import"./Layer-DPlEhKnR.js";import"./AnimatedItems-TOHLuZU5.js";import"./Label-XikFYvD7.js";import"./Text-C1WaZOPt.js";import"./DOMUtils-B5W7y1y7.js";import"./ZIndexLayer-B_lVTO01.js";import"./useAnimationId-B85ZSEKA.js";import"./ActivePoints-1kyrVvID.js";import"./Dot-BAS0IQWR.js";import"./types-BEWgGyLa.js";import"./RegisterGraphicalItemId-C0Rctadm.js";import"./GraphicalItemClipPath-BH1bphsQ.js";import"./SetGraphicalItem-BXfByqWK.js";import"./getRadiusAndStrokeWidthFromDot-BQbb3rIK.js";import"./ActiveShapeUtils-h9V9VuFf.js";import"./Curve-CAkixkLO.js";import"./step-DWwWZa2n.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-beDx0GkI.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
