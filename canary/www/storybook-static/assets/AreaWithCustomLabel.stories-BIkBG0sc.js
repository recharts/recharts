import{e as t}from"./iframe-C6Uu7pTN.js";import{R as c}from"./arrayEqualityCheck-CwnCehta.js";import{C as d}from"./ComposedChart-ChY5wym6.js";import{A as l}from"./Area-jNg7QApk.js";import{R as h}from"./RechartsHookInspector-DK8LEn3K.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BFs3c8XE.js";import"./immer-BQbVNYZa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGLJriAG.js";import"./index-86WMnZat.js";import"./hooks-CPOFWC30.js";import"./axisSelectors-CvaRXDpT.js";import"./d3-scale-jTFhmIQC.js";import"./zIndexSlice-TqQJPXuj.js";import"./renderedTicksSlice-BbR9AX3S.js";import"./CartesianChart-Df2fxLuG.js";import"./chartDataContext-78iSRkXw.js";import"./CategoricalChart-DiJF7AWc.js";import"./Curve-D9DtbUHf.js";import"./types-LVTyj2cP.js";import"./step-DybRLWtN.js";import"./Layer-lr_Myov5.js";import"./ReactUtils-De_gzh57.js";import"./Label-BWxvsGM2.js";import"./Text-D3aSBSTN.js";import"./DOMUtils-C3fhmnrv.js";import"./ZIndexLayer-BGg3LDJH.js";import"./ActivePoints-B8JphRK3.js";import"./Dot-Dz4sxWoj.js";import"./RegisterGraphicalItemId-DjVfXSwO.js";import"./GraphicalItemClipPath-enSk32wK.js";import"./SetGraphicalItem-BpIjVc9U.js";import"./useAnimationId-B1cyGcAu.js";import"./getRadiusAndStrokeWidthFromDot-fX_t_PhE.js";import"./graphicalItemSelectors-ehfL-4PQ.js";import"./index-Bw3U1Qlv.js";import"./ChartSizeDimensions-Bo_lxHZc.js";import"./OffsetShower-CHRjZmG4.js";import"./PlotAreaShower-BfZVYUAY.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
