import{e as t}from"./iframe-xqabyeMj.js";import{R as c}from"./arrayEqualityCheck-8L6pkBib.js";import{C as d}from"./ComposedChart-0LqFksIP.js";import{A as l}from"./Area-C6UB4u6L.js";import{R as h}from"./RechartsHookInspector-CFJUwZ9y.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4CpinzP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BiqM6SLb.js";import"./hooks-DUKF9BS0.js";import"./axisSelectors-Dsv016Jw.js";import"./zIndexSlice-D0PgK1Qq.js";import"./CartesianChart-YoieVqbI.js";import"./chartDataContext-99M3a9R_.js";import"./CategoricalChart-5qGPlSyR.js";import"./Curve-DXgolxSe.js";import"./types-B39fGcYg.js";import"./Layer-Bh77GRoo.js";import"./ReactUtils-bWGvhqKE.js";import"./Label-BONDDJIo.js";import"./Text-CGJ1V4Sp.js";import"./DOMUtils-C4dT54L9.js";import"./ZIndexLayer-DT_FpcHY.js";import"./ActivePoints-BaMeOVMK.js";import"./Dot-C1tAaa2s.js";import"./RegisterGraphicalItemId-BRijqKHc.js";import"./GraphicalItemClipPath-BDFMpOfU.js";import"./SetGraphicalItem-B2tkDh1g.js";import"./useAnimationId-Cs8mC2Bw.js";import"./getRadiusAndStrokeWidthFromDot-ZV4TJns9.js";import"./graphicalItemSelectors-D41rnoki.js";import"./index-DIiQC_pi.js";import"./ChartSizeDimensions-gwsg2o-R.js";import"./OffsetShower-BIYWKZux.js";import"./PlotAreaShower-BBgrf_OL.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
