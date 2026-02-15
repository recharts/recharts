import{e as t}from"./iframe-NOjYqVDf.js";import{R as c}from"./arrayEqualityCheck-CKPvr2Sv.js";import{C as d}from"./ComposedChart-DP1DcGpI.js";import{A as l}from"./Area-k4V-TotW.js";import{R as h}from"./RechartsHookInspector-CZuAKH0J.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B4jksYlp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CYtF97y_.js";import"./hooks-DkToD0vA.js";import"./axisSelectors-_b35tTPj.js";import"./zIndexSlice-Doe50Ljr.js";import"./renderedTicksSlice-CNdDn6G4.js";import"./CartesianChart-DlSo8JUa.js";import"./chartDataContext-BCOGOXd9.js";import"./CategoricalChart-BxTZW61W.js";import"./Curve-DR3tx7PX.js";import"./types-Cdrp97aK.js";import"./Layer-C5eEc_aO.js";import"./ReactUtils-B9O68L3J.js";import"./Label-DSmhxnyp.js";import"./Text-C7FUzYMA.js";import"./DOMUtils-BMDxU690.js";import"./ZIndexLayer-CmnykYAa.js";import"./ActivePoints-CQfp67or.js";import"./Dot-B8-r0lP5.js";import"./RegisterGraphicalItemId-YVRRFCp2.js";import"./GraphicalItemClipPath-C6swNonr.js";import"./SetGraphicalItem-BeKk8_xu.js";import"./useAnimationId-DyWolGb_.js";import"./getRadiusAndStrokeWidthFromDot-Cr1dXyad.js";import"./graphicalItemSelectors-BdU_bpR-.js";import"./index-Ioy1DO1u.js";import"./ChartSizeDimensions-CVj6kL6N.js";import"./OffsetShower-BtzaIgV3.js";import"./PlotAreaShower-BDFeD2A4.js";const tt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
