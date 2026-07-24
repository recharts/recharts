import{R as e}from"./iframe-DwOXtgzn.js";import{R as c}from"./zIndexSlice-Dmyle4yQ.js";import{C as d}from"./ComposedChart-BpGZdJrE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DKZMPYSo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-xTjEl_pc.js";import"./index-CrEwMW4H.js";import"./index-QUHlWLUZ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bx4BRzZ6.js";import"./isWellBehavedNumber-CHPTSSoT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mJXYZQqb.js";import"./index-ELFXx2ej.js";import"./index-bc6z-CkW.js";import"./renderedTicksSlice-DOm8uXLN.js";import"./axisSelectors-Dzpx2B0P.js";import"./d3-scale-MfXP3SuX.js";import"./CartesianChart-EebZWKim.js";import"./chartDataContext-C0SbFtj0.js";import"./CategoricalChart-D1DyaryK.js";import"./Layer-DB__irZe.js";import"./AnimatedItems-C0i9fXY5.js";import"./Label-CIRdFLpv.js";import"./Text-CSVGnOzm.js";import"./DOMUtils-B10qim04.js";import"./ZIndexLayer-IkkcGrga.js";import"./useAnimationId-7jXy7qds.js";import"./ActivePoints-Lpp61Dot.js";import"./Dot-B5UvlLlr.js";import"./types-BWK-xR3U.js";import"./RegisterGraphicalItemId-BuwJHRgI.js";import"./GraphicalItemClipPath-CjcrufCA.js";import"./SetGraphicalItem-k8fj3X8g.js";import"./getRadiusAndStrokeWidthFromDot-D8rcgLH2.js";import"./ActiveShapeUtils-Bczue4Wz.js";import"./Curve-7y6VsND5.js";import"./step-AQXoGS_1.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-1TbS7_E7.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
