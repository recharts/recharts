import{e as t}from"./iframe-BziMfoUa.js";import{g as p}from"./arrayEqualityCheck-jGW3YXEm.js";import{C as m}from"./ComposedChart-DS1ZldOY.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-bQtBXA1m.js";import{R as l}from"./RechartsHookInspector-C7iBq9Tv.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BqM-Yvij.js";import"./immer-Bs1CBStC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Duw6h7Bm.js";import"./index-BIuRyLTB.js";import"./hooks-_tZAqQmm.js";import"./axisSelectors-CAcjMuVN.js";import"./d3-scale-GlbhO23R.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-lEo1dtRN.js";import"./renderedTicksSlice-v3j9k7Mr.js";import"./CartesianChart-Cq-jUzWL.js";import"./chartDataContext-Cp7Sw1KM.js";import"./CategoricalChart-BjhCCKH7.js";import"./Layer-CoMuIaZe.js";import"./AnimatedItems-BBuXONSK.js";import"./Label-Qwg870Bc.js";import"./Text-fxmSEe5L.js";import"./DOMUtils-c_Zm-hwi.js";import"./ZIndexLayer-CIYsspBg.js";import"./useAnimationId-kTU4vPRt.js";import"./ActivePoints-C6-CaXlM.js";import"./Dot-3fkMyAwB.js";import"./types-CX5BQ__A.js";import"./RegisterGraphicalItemId-BtgM2BJV.js";import"./GraphicalItemClipPath-CUoKAv3d.js";import"./SetGraphicalItem-DsxyvyCs.js";import"./getRadiusAndStrokeWidthFromDot-Co7Fg86a.js";import"./ActiveShapeUtils-BFwVaQU9.js";import"./isPlainObject-DmPDszQ3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cqckp2nr.js";import"./Trapezoid-m2Wlm-zm.js";import"./Sector-Gm8VToLD.js";import"./Symbols-DXSNT6Hm.js";import"./symbol-DOCk2oSo.js";import"./step-CeZV8hny.js";import"./Curve-CBntFit6.js";import"./graphicalItemSelectors-B06k7LJ4.js";import"./index-Cu69lm6g.js";import"./ChartSizeDimensions-DfprWSX6.js";import"./OffsetShower-Cr3DxjzZ.js";import"./PlotAreaShower-OmwxkN4u.js";const st={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const lt=["FillPattern"];export{e as FillPattern,lt as __namedExportsOrder,st as default};
