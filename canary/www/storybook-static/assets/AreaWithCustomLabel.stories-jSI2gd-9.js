import{e as t}from"./iframe-ZLLTs1L2.js";import{R as c}from"./arrayEqualityCheck-DulyWTfD.js";import{C as d}from"./ComposedChart-I5bjg5En.js";import{A as l}from"./Area-BYHBALC8.js";import{R as h}from"./RechartsHookInspector-BKmDjbuV.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-EUJ6_KoJ.js";import"./PolarUtils-B9p_wTge.js";import"./RechartsWrapper-Bhfb6Tks.js";import"./hooks-hqrrPiBI.js";import"./axisSelectors-Cv0R_3oc.js";import"./zIndexSlice-CBRMfbRc.js";import"./CartesianChart-Ck4WnZ-P.js";import"./chartDataContext-nQ2-yRIQ.js";import"./CategoricalChart-CbG3DQY1.js";import"./Curve-F2oZRqDm.js";import"./types-DBavnEN9.js";import"./Layer-Z1TeMr3K.js";import"./ReactUtils-WSqE_xht.js";import"./Label-B7ECka5v.js";import"./Text-BKG1mCXc.js";import"./DOMUtils-CjGF8Xv9.js";import"./ZIndexLayer-C8fNtv4Q.js";import"./ActivePoints-BwYfd7gv.js";import"./Dot-DSdrQqBD.js";import"./RegisterGraphicalItemId-l1uOO4MI.js";import"./GraphicalItemClipPath-BLImpVHN.js";import"./SetGraphicalItem-D8kwoYfk.js";import"./useAnimationId-BvHzHoR_.js";import"./getRadiusAndStrokeWidthFromDot-Vw-0YA6V.js";import"./graphicalItemSelectors-CVqmQioH.js";import"./index-CuDIHWly.js";import"./ChartSizeDimensions-P7hJmoJ7.js";import"./OffsetShower-DgUH6KPA.js";import"./PlotAreaShower-Caaac_r-.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
