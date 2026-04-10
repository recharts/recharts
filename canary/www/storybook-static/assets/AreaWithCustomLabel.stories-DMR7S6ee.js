import{e as t}from"./iframe-eZ9JX-07.js";import{R as c}from"./arrayEqualityCheck-Cj2Is5Mm.js";import{C as d}from"./ComposedChart-BHW-hoiz.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DDnpDnuY.js";import{R as u}from"./RechartsHookInspector-BeG4gaTk.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CliKq00o.js";import"./immer-Dr1bFi29.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUoHei1k.js";import"./index-CNMtCejR.js";import"./hooks-DpV54l8p.js";import"./axisSelectors-AGz0-S2g.js";import"./d3-scale-BKcomRju.js";import"./zIndexSlice-BusLYGIS.js";import"./renderedTicksSlice-CqnrbROG.js";import"./CartesianChart-BK9rkCv_.js";import"./chartDataContext-CvCw_h_X.js";import"./CategoricalChart-YrnJ6OFy.js";import"./Curve-rjvi0w8u.js";import"./types-CmytQtTQ.js";import"./step-CSEuamYk.js";import"./Layer-B6nAt8jX.js";import"./ReactUtils-DWnSk2Q-.js";import"./Label-mBy1-y0R.js";import"./Text-CRkMMQ59.js";import"./DOMUtils-D0fPz5DE.js";import"./ZIndexLayer-DbJ2I37n.js";import"./ActivePoints-RdCeodjM.js";import"./Dot-BOZkbRZB.js";import"./RegisterGraphicalItemId-BAw53RVk.js";import"./GraphicalItemClipPath-vABmGIfK.js";import"./SetGraphicalItem-By9FetZz.js";import"./useAnimationId-CSNZHJ-3.js";import"./getRadiusAndStrokeWidthFromDot-DN82KodC.js";import"./graphicalItemSelectors-B692bAr5.js";import"./index-0o7fnxnF.js";import"./ChartSizeDimensions-jqrtviWa.js";import"./OffsetShower-CGC6-4Ry.js";import"./PlotAreaShower-BaV83-c3.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
