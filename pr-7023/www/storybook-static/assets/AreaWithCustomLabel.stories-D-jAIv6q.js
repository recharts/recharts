import{e as t}from"./iframe-C8rrCX6B.js";import{R as c}from"./arrayEqualityCheck-B6s-2qWd.js";import{C as d}from"./ComposedChart-C-53OFl9.js";import{A as l}from"./Area-BCALnCC3.js";import{R as h}from"./RechartsHookInspector-CRTByZl4.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-g0jZ7vdX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zx0A2i-h.js";import"./hooks-CpCGF1sd.js";import"./axisSelectors-B7ZWRmd4.js";import"./zIndexSlice-Df3dbiIE.js";import"./renderedTicksSlice-Chx9DuQU.js";import"./CartesianChart-ZPTdsj2m.js";import"./chartDataContext-CpPK2chg.js";import"./CategoricalChart-D5ZpTP8T.js";import"./Curve-ckN9X3mA.js";import"./types-DDBoPPlm.js";import"./Layer-D1v-1P4s.js";import"./ReactUtils-B6XfFwTE.js";import"./Label-pD9QpgDQ.js";import"./Text-CymC-fJp.js";import"./DOMUtils-D6vD6WjU.js";import"./ZIndexLayer-DFkgVZys.js";import"./ActivePoints-CU11Dyyf.js";import"./Dot-DdOaoll5.js";import"./RegisterGraphicalItemId-vQCUHIAP.js";import"./GraphicalItemClipPath-BqvBTWAt.js";import"./SetGraphicalItem-CAPB5Ckj.js";import"./useAnimationId-CljxjOmY.js";import"./getRadiusAndStrokeWidthFromDot-DaHGSsSR.js";import"./graphicalItemSelectors-DGsomgl0.js";import"./index-CVthgwiF.js";import"./ChartSizeDimensions-CE_McqMG.js";import"./OffsetShower-DFFOsGB0.js";import"./PlotAreaShower-BNzfzgkR.js";const tt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const et=["CustomizedLabel"];export{e as CustomizedLabel,et as __namedExportsOrder,tt as default};
