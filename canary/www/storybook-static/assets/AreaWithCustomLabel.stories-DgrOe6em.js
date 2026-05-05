import{e as t}from"./iframe-BBcCu4tW.js";import{R as c}from"./arrayEqualityCheck-CIoNRuby.js";import{C as d}from"./ComposedChart-D5dvwxje.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DlhupkEC.js";import{R as u}from"./RechartsHookInspector-BC_P3cZY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnZaYM7o.js";import"./immer-B-ffdvVM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_0gdr0q.js";import"./index-B4OVM0gu.js";import"./hooks-BezqoFaW.js";import"./axisSelectors-DiO1RUhK.js";import"./d3-scale-wrbXHqm2.js";import"./zIndexSlice-CQ5dV6Tf.js";import"./renderedTicksSlice-qHXvxWkJ.js";import"./CartesianChart-CyTvOQNc.js";import"./chartDataContext-D3FIgu0K.js";import"./CategoricalChart-BMbsuZm1.js";import"./Curve-kTZvT6-S.js";import"./types-BYSx98h-.js";import"./step-CTgfjT4Z.js";import"./Layer-BqjItK9e.js";import"./ReactUtils-CK6hPv_Y.js";import"./Label-CVOeCU9m.js";import"./Text-x4pxLanI.js";import"./DOMUtils-BzbpMFLz.js";import"./ZIndexLayer-C7yDhLaY.js";import"./ActivePoints-DtB9X2U8.js";import"./Dot-DIIdBfpA.js";import"./RegisterGraphicalItemId-zcKV7aTa.js";import"./GraphicalItemClipPath-C4HnTmHF.js";import"./SetGraphicalItem-nt8-T9NJ.js";import"./useAnimationId-Cz7XNO3G.js";import"./getRadiusAndStrokeWidthFromDot-RM0GOVzs.js";import"./graphicalItemSelectors-DbyLxQBB.js";import"./index-DwDsLBsF.js";import"./ChartSizeDimensions-B3sIk0p_.js";import"./OffsetShower-CyfsTZlA.js";import"./PlotAreaShower-NtxTDk3F.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
