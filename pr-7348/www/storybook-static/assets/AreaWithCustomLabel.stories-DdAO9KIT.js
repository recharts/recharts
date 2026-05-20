import{e as t}from"./iframe-Cpa_K2wH.js";import{g as c}from"./arrayEqualityCheck-B3CGbERi.js";import{C as d}from"./ComposedChart-Gg-TcJTy.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-DYfTdWxG.js";import{R as u}from"./RechartsHookInspector-Bqt-aS6w.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CjUJiL9-.js";import"./immer-DMfm46iJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0afUUed.js";import"./index-d0_kz5ki.js";import"./hooks-B0YV-Gb0.js";import"./axisSelectors-Cmllf_me.js";import"./d3-scale-Bfg_RKT9.js";import"./zIndexSlice-BHc5vdfp.js";import"./renderedTicksSlice-kARXbS5M.js";import"./CartesianChart-Oxo-XTmW.js";import"./chartDataContext-DWc0FZ1G.js";import"./CategoricalChart-U85gevCj.js";import"./Curve-rXHg5I_o.js";import"./types-BYysGBoP.js";import"./step-csQH98gw.js";import"./Layer-C28Vj2nU.js";import"./ReactUtils-BowWIwT6.js";import"./Label-9gVLBIOF.js";import"./Text-DwR88wHZ.js";import"./DOMUtils-BkGoz7XV.js";import"./ZIndexLayer-CVL2PXNl.js";import"./ActivePoints-gBLXy0JF.js";import"./Dot-BhWE0LKt.js";import"./RegisterGraphicalItemId-s90PoDx_.js";import"./GraphicalItemClipPath-CP_rA2Hw.js";import"./SetGraphicalItem-BFrPL6Zw.js";import"./useAnimationId-BXAU-yXd.js";import"./getRadiusAndStrokeWidthFromDot-DEe3jrRF.js";import"./graphicalItemSelectors-Dp6htw-9.js";import"./index-fBY_53TJ.js";import"./ChartSizeDimensions-_3CJ7Z39.js";import"./OffsetShower-BpeLegDD.js";import"./PlotAreaShower-LKM4gBGb.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
