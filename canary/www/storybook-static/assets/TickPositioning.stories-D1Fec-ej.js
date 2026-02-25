import{e as t}from"./iframe-DOwSMESw.js";import{R as n}from"./arrayEqualityCheck-CX9-bfYH.js";import{L as s}from"./LineChart-DJi7Lm07.js";import{L as c}from"./Line-BMz_1-bi.js";import{X as d}from"./XAxis-BPbWU4yR.js";import{R as l}from"./RechartsHookInspector-CcCJcHZ5.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChqUwM3U.js";import"./immer-ZyDpTiiy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ls6tVJyv.js";import"./index-BBfb_97C.js";import"./hooks-xQD_-akz.js";import"./axisSelectors-BKSMdbwV.js";import"./d3-scale-D4rgCaup.js";import"./zIndexSlice-DitFxlYL.js";import"./renderedTicksSlice-B9YC84oJ.js";import"./CartesianChart-DFwJmcFp.js";import"./chartDataContext-CzK82F7Z.js";import"./CategoricalChart-CxUtgmSG.js";import"./Layer-Dw0puBgf.js";import"./ReactUtils-D4p-v0tr.js";import"./Label-CGJJW7mt.js";import"./Text-DHnTXj9j.js";import"./DOMUtils-DbGofJNd.js";import"./ZIndexLayer-Dk3cu7q_.js";import"./ActivePoints-Bwmmy_Xm.js";import"./Dot-aBSUYWpk.js";import"./types-BVuvkN0T.js";import"./RegisterGraphicalItemId-BYUuyceh.js";import"./ErrorBarContext-CtE8_zM3.js";import"./GraphicalItemClipPath-CYCx10_G.js";import"./SetGraphicalItem-CB9uDBjU.js";import"./useAnimationId-B99eNrnj.js";import"./getRadiusAndStrokeWidthFromDot-BkGX9HE7.js";import"./ActiveShapeUtils-C94C_QYl.js";import"./isPlainObject-sPJsBjkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMknbwVL.js";import"./Trapezoid-AfdP-1uh.js";import"./Sector-BzLVEcjl.js";import"./Symbols-Vm2a1c-r.js";import"./symbol-5SXgtl89.js";import"./step-CPI5XPf7.js";import"./Curve-HyoTL5em.js";import"./CartesianAxis-BJnnwpTK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-aBvahWCN.js";import"./ChartSizeDimensions-BCHrYjTL.js";import"./OffsetShower-DAQHvvGL.js";import"./PlotAreaShower-CtS1URyh.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
