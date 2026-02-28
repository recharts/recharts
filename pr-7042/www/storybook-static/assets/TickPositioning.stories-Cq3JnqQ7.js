import{e as t}from"./iframe-DRzfceQj.js";import{R as n}from"./arrayEqualityCheck-rosVEDiH.js";import{L as s}from"./LineChart-CzWBWYeJ.js";import{L as c}from"./Line-CrboDBA_.js";import{X as d}from"./XAxis-sc_rEheo.js";import{R as l}from"./RechartsHookInspector-iKfkRHZC.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Yo3rtldJ.js";import"./immer-CpErEFQU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cr19GrQC.js";import"./index-DhdVzYen.js";import"./hooks-BGhayb2I.js";import"./axisSelectors-KcSamBS9.js";import"./d3-scale-DMFBv7ef.js";import"./zIndexSlice-DFfzt0na.js";import"./renderedTicksSlice-WbT8TKLW.js";import"./CartesianChart-BpAHu02o.js";import"./chartDataContext-uibfkBE8.js";import"./CategoricalChart-BFsoF5NC.js";import"./Layer-sUtHTMZe.js";import"./ReactUtils-BLIIVErJ.js";import"./Label-CCBnxLca.js";import"./Text-5VoS0hOZ.js";import"./DOMUtils-D7MRyEG_.js";import"./ZIndexLayer-rLB6bkwI.js";import"./ActivePoints-CuDefpBg.js";import"./Dot-Dx5TMf-G.js";import"./types-BIqkUGja.js";import"./RegisterGraphicalItemId-CA-NkALt.js";import"./ErrorBarContext-CVJ7HQM6.js";import"./GraphicalItemClipPath-C-4x0c47.js";import"./SetGraphicalItem-DmvCdKvK.js";import"./useAnimationId-B4oBcBYL.js";import"./getRadiusAndStrokeWidthFromDot-geV46oeC.js";import"./ActiveShapeUtils-sMNt0TF2.js";import"./isPlainObject-8xjKwYHh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbvKmtU7.js";import"./Trapezoid-DfLXoIUq.js";import"./Sector-BA0kpTkH.js";import"./Symbols-DyXfCvIa.js";import"./symbol-CU4mK3u6.js";import"./step-vYfigx3D.js";import"./Curve-BAw1ZqwZ.js";import"./CartesianAxis-BV4F2Vv5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DKayDJ64.js";import"./ChartSizeDimensions-BcANsdLL.js";import"./OffsetShower-MalEY5Hj.js";import"./PlotAreaShower-BKiBhzbZ.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
