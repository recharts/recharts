import{e as t}from"./iframe-B_h1eZxb.js";import{R as s}from"./arrayEqualityCheck-BQ7vn4Fs.js";import{L as m}from"./LineChart-Bt3dXEkv.js";import{L as c}from"./Line-DqbVJ-Iu.js";import{X as d}from"./XAxis-Mxp9ktjo.js";import{R as l}from"./RechartsHookInspector-CaskrBRm.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B1vNlzd5.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-GoD8D7jd.js";import"./hooks-tOZxoK0e.js";import"./axisSelectors-BH0L-ggM.js";import"./zIndexSlice-DBtbpS_b.js";import"./CartesianChart-BDgEI9ov.js";import"./chartDataContext-BQaQDl0i.js";import"./CategoricalChart-Ba1gSjPg.js";import"./Layer-YFSiP5O_.js";import"./ReactUtils-DsQBac2C.js";import"./Label-B4qm1C3r.js";import"./Text-3ZnKfMzL.js";import"./DOMUtils-CPt0eNTU.js";import"./ZIndexLayer-O03ayMNB.js";import"./ActivePoints-BWqrE6Pi.js";import"./Dot-5EH031rg.js";import"./types-DbDrWtQW.js";import"./RegisterGraphicalItemId-DWqCI4mY.js";import"./ErrorBarContext-hJIAPStP.js";import"./GraphicalItemClipPath-CYkgNVtV.js";import"./SetGraphicalItem-BXR0TSlG.js";import"./useAnimationId-BJhibfpC.js";import"./getRadiusAndStrokeWidthFromDot-B64kjpoC.js";import"./ActiveShapeUtils-CedxEX3v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EuLtLzS8.js";import"./Trapezoid-CJEFZDfs.js";import"./Sector-CFscv7k5.js";import"./Symbols-3gLai2FA.js";import"./Curve-BIskmgLq.js";import"./CartesianAxis-DOEAGTwm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-iiBRXnxx.js";import"./ChartSizeDimensions-KhnO1Uhi.js";import"./OffsetShower-DZ8KqkSb.js";import"./PlotAreaShower-CXGDRKi2.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
