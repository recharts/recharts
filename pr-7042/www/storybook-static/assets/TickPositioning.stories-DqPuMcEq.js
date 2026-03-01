import{e as t}from"./iframe-Dic5b5u9.js";import{R as n}from"./arrayEqualityCheck-CfNiUq5T.js";import{L as s}from"./LineChart-DgdDmbp0.js";import{L as c}from"./Line-CpvvmXdp.js";import{X as d}from"./XAxis-DwuUVeKv.js";import{R as l}from"./RechartsHookInspector-BvAm56d5.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDhFhLoK.js";import"./immer-DO_1p9A2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwcAc9rH.js";import"./index-BBLbjH9O.js";import"./hooks-Bu1stH2v.js";import"./axisSelectors-CqWe9_C7.js";import"./d3-scale-CJF7DMMB.js";import"./zIndexSlice-c2vW1fTY.js";import"./renderedTicksSlice-CXC0QcBD.js";import"./CartesianChart-ouzhSpug.js";import"./chartDataContext-hawu8zXf.js";import"./CategoricalChart-CJvtpOjk.js";import"./Layer--MXbGqBf.js";import"./ReactUtils-C3t93VlX.js";import"./Label-XiLbdVhV.js";import"./Text-DgjxsA1i.js";import"./DOMUtils-Dx-Do2uf.js";import"./ZIndexLayer-Du88RvFA.js";import"./ActivePoints-g3Y4t8e6.js";import"./Dot-DgXeUH3M.js";import"./types-MaB3S0wV.js";import"./RegisterGraphicalItemId-Wdyfwocl.js";import"./ErrorBarContext-BCjIHby4.js";import"./GraphicalItemClipPath-Uq3L6gOZ.js";import"./SetGraphicalItem-DESbPWBV.js";import"./useAnimationId-BHBeabuo.js";import"./getRadiusAndStrokeWidthFromDot-CqB2yhwJ.js";import"./ActiveShapeUtils-Bfxy2ZjA.js";import"./isPlainObject-DFOBG5y0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-Toc0UH.js";import"./Trapezoid-BhSV_XOS.js";import"./Sector-Dn12wzOD.js";import"./Symbols-Dq5eEVdj.js";import"./symbol-DYOCtDcg.js";import"./step-CGWB_5kj.js";import"./Curve-C8vpU7Np.js";import"./CartesianAxis-rhfOp6jM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D-G3yyNK.js";import"./ChartSizeDimensions-BPhsCp9P.js";import"./OffsetShower-DiZAUQqT.js";import"./PlotAreaShower-BoaFsJKz.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
