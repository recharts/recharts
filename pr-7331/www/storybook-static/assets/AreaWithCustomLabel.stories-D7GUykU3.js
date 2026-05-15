import{e as t}from"./iframe-CFLjOTm5.js";import{g as c}from"./arrayEqualityCheck-ChmsrC0B.js";import{C as d}from"./ComposedChart-FER9Vi0e.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-COs-Cf-U.js";import{R as u}from"./RechartsHookInspector-BDSD1XTs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BU0Jf3lU.js";import"./immer-e_Tfrumf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7LYgHfU.js";import"./index-DU898aRA.js";import"./hooks-C_Gw3bpR.js";import"./axisSelectors-DczBvRuT.js";import"./d3-scale-CTwBFda5.js";import"./zIndexSlice-Cx77az4x.js";import"./renderedTicksSlice-odoaHiua.js";import"./CartesianChart-Dkwg52u_.js";import"./chartDataContext-CdLUr7Zf.js";import"./CategoricalChart-BQR3q1EG.js";import"./Curve-BhvAwYBS.js";import"./types-CgNdS23P.js";import"./step-BuRaAczm.js";import"./Layer-CWq3y3ul.js";import"./ReactUtils-DhONHYWu.js";import"./Label-BSOdMnMn.js";import"./Text-BZYuARJv.js";import"./DOMUtils-DJPQYNDH.js";import"./ZIndexLayer-D7dGD0_V.js";import"./ActivePoints-9HVyXSwD.js";import"./Dot-BsIP-wxa.js";import"./RegisterGraphicalItemId-E3PAioKC.js";import"./GraphicalItemClipPath-Diu1h3xz.js";import"./SetGraphicalItem-Tg4ql8Pw.js";import"./useAnimationId-DK1cyyuV.js";import"./getRadiusAndStrokeWidthFromDot-CiQZJYhU.js";import"./graphicalItemSelectors-D5sFVyPf.js";import"./index-xA73MIG_.js";import"./ChartSizeDimensions-DagJBs5z.js";import"./OffsetShower-CbRTjXXF.js";import"./PlotAreaShower-Bz-8aerp.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
