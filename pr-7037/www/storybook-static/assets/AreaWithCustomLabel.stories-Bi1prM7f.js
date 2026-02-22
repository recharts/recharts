import{e as t}from"./iframe-DwKnaYxn.js";import{R as c}from"./arrayEqualityCheck-LpIzrfco.js";import{C as d}from"./ComposedChart-DVQptumT.js";import{A as l}from"./Area-DwXs2NOp.js";import{R as h}from"./RechartsHookInspector-BulN8Qtf.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C4ASXxnl.js";import"./immer-DQq_9s85.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cx1zvPpd.js";import"./index-CdfNcBdj.js";import"./hooks-hd7QZ5DW.js";import"./axisSelectors-CHTcuo-V.js";import"./d3-scale-DF79GY39.js";import"./zIndexSlice-BYI3CC3N.js";import"./renderedTicksSlice-CSkX6jPi.js";import"./CartesianChart-CzQwlEOC.js";import"./chartDataContext-BLheDghz.js";import"./CategoricalChart-E4I9FfSw.js";import"./Curve-BGSMtIpM.js";import"./types-CuZ_PvfO.js";import"./step-Cbn8vCGE.js";import"./Layer-DSEoyjCD.js";import"./ReactUtils-BWd9nqnf.js";import"./Label-V1o-IcdK.js";import"./Text-Cmd1_Toj.js";import"./DOMUtils-Poqmn9Kz.js";import"./ZIndexLayer-BN-fjZdO.js";import"./ActivePoints-O0bbVxi4.js";import"./Dot-Bm4ifZBZ.js";import"./RegisterGraphicalItemId-DJ-_fktQ.js";import"./GraphicalItemClipPath-BWTY-wx8.js";import"./SetGraphicalItem-BvmoZ9RU.js";import"./useAnimationId-DAuxgXsL.js";import"./getRadiusAndStrokeWidthFromDot-CGIH-rbC.js";import"./graphicalItemSelectors-DCxC451_.js";import"./index-DfrlB0-M.js";import"./ChartSizeDimensions-Bj69MEnT.js";import"./OffsetShower-BpsLBEIx.js";import"./PlotAreaShower-5WwlvIXR.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
