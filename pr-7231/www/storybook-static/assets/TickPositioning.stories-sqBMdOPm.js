import{e as t}from"./iframe-ClXyKNgm.js";import{R as n}from"./arrayEqualityCheck-CyG4bWUs.js";import{L as s}from"./LineChart-D1qNn84l.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DczUaO1B.js";import{X as l}from"./XAxis-BLwhd0IJ.js";import{R as v}from"./RechartsHookInspector-CDiaVfBA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-5xg8HJ.js";import"./immer-CtYLZrTd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UQqzQ8rP.js";import"./index-CwEdYiZd.js";import"./hooks-BkOTtN17.js";import"./axisSelectors-DQofLmtB.js";import"./d3-scale-PvLZ5v4V.js";import"./zIndexSlice-Dm0UpM_Z.js";import"./renderedTicksSlice-BNvm7omS.js";import"./CartesianChart-DPC4KDkL.js";import"./chartDataContext-Bjc2K54y.js";import"./CategoricalChart-BKNmBDhd.js";import"./Layer-BeDFs85c.js";import"./ReactUtils-Dlva77EJ.js";import"./Label-YkL7q8Nt.js";import"./Text-o1n-qtV3.js";import"./DOMUtils-CHkqX7Ip.js";import"./ZIndexLayer-cavkLRXR.js";import"./ActivePoints-BtoLWo_Y.js";import"./Dot-CTW0FmYa.js";import"./types-C9EK63kj.js";import"./RegisterGraphicalItemId-BL_NupUm.js";import"./ErrorBarContext-PkrPZ9Kd.js";import"./GraphicalItemClipPath-DtnEohhM.js";import"./SetGraphicalItem-taT8ii8S.js";import"./useAnimationId-C8K-aL18.js";import"./getRadiusAndStrokeWidthFromDot-DuLFzzBx.js";import"./ActiveShapeUtils-BifvGgSB.js";import"./isPlainObject-B5RD0MRm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BAftZiAJ.js";import"./Trapezoid-BOXkO72-.js";import"./Sector-BWSYDmpz.js";import"./Symbols-BGqZ-C7G.js";import"./symbol-DPWTbt42.js";import"./step-hxAHDxbx.js";import"./Curve-gxNk9RQQ.js";import"./CartesianAxis-XpuqdPkr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CMB9sNFg.js";import"./ChartSizeDimensions-DpOcPLnw.js";import"./OffsetShower-C3ti5__k.js";import"./PlotAreaShower-Ji8AleEw.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
