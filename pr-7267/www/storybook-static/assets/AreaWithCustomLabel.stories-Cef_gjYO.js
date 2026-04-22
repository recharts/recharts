import{e as t}from"./iframe-CIRDBmnY.js";import{R as c}from"./arrayEqualityCheck-Ccl-pv9u.js";import{C as d}from"./ComposedChart-D2raJxM1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-HGKcluAT.js";import{R as u}from"./RechartsHookInspector-CW5oWR2W.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-WvlII-Nx.js";import"./immer-CEyiSkJ_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-G6A0M6aO.js";import"./index-BtQYyCmS.js";import"./hooks-CXRZ7L0i.js";import"./axisSelectors-BG6ANmCy.js";import"./d3-scale-DeHMkDWI.js";import"./zIndexSlice-Dncpv5eL.js";import"./renderedTicksSlice-D7QGUU6q.js";import"./CartesianChart-DU23w57v.js";import"./chartDataContext-CjureaJk.js";import"./CategoricalChart-0dU2cdKG.js";import"./Curve-D42dBTuL.js";import"./types-Tac8hqr1.js";import"./step-Db3ooEEu.js";import"./Layer-Ba8IePkn.js";import"./ReactUtils-B6lO7UVh.js";import"./Label-DBOJ1SQQ.js";import"./Text-DFNv1G75.js";import"./DOMUtils-U3UN3Upo.js";import"./ZIndexLayer-BEbEcElf.js";import"./ActivePoints-ASRgwgve.js";import"./Dot-qDjeeFl4.js";import"./RegisterGraphicalItemId-CcpQzZXr.js";import"./GraphicalItemClipPath-DsfyRwV1.js";import"./SetGraphicalItem-KCmHDaFB.js";import"./useAnimationId-8KJrDx3h.js";import"./getRadiusAndStrokeWidthFromDot-C6XbVpCy.js";import"./graphicalItemSelectors-BtmGdkTu.js";import"./index-CZZFGVCv.js";import"./ChartSizeDimensions-DXL_JkvM.js";import"./OffsetShower-BD7Cp3wL.js";import"./PlotAreaShower-lKDhtFbm.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
