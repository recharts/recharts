import{e as t}from"./iframe-DKyU_iXE.js";import{R as n}from"./arrayEqualityCheck-CBuQt-LQ.js";import{L as s}from"./LineChart-CVm8qDNA.js";import{L as c}from"./Line-Cn5FvcMW.js";import{X as d}from"./XAxis-4nisg1uZ.js";import{R as l}from"./RechartsHookInspector-Dv9I4YHQ.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cUmGB5BP.js";import"./immer-CaNK2Wnd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1k7PNNo.js";import"./index-Bc9uivsf.js";import"./hooks-CcwQQS4K.js";import"./axisSelectors-CdP5XGoN.js";import"./d3-scale-frJU2Btm.js";import"./zIndexSlice-w00ysM4m.js";import"./renderedTicksSlice-CWpXf5qL.js";import"./CartesianChart-DR1aPl1R.js";import"./chartDataContext-B1YWbHj7.js";import"./CategoricalChart-BzovAk5i.js";import"./Layer--fTJnsnP.js";import"./ReactUtils-CiNFkB-2.js";import"./Label-kMa1V762.js";import"./Text-D31e4mTY.js";import"./DOMUtils-BSHfgs8I.js";import"./ZIndexLayer-6WeTgCgn.js";import"./ActivePoints-sa10AzyA.js";import"./Dot-CKbtf96r.js";import"./types-DZPKaEAC.js";import"./RegisterGraphicalItemId-BtuRgDxJ.js";import"./ErrorBarContext-BwvMd7Q8.js";import"./GraphicalItemClipPath-f-LT7H0l.js";import"./SetGraphicalItem-geCsQwmc.js";import"./useAnimationId-De9-pIXx.js";import"./getRadiusAndStrokeWidthFromDot-DnCZvFUa.js";import"./ActiveShapeUtils-BhHFALxr.js";import"./isPlainObject-ClBz4bnQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CFv_pW3l.js";import"./Trapezoid-CI4993jy.js";import"./Sector-dJduajY3.js";import"./Symbols-0HhL3rnr.js";import"./symbol-CXDVJGuj.js";import"./step-DMWIYdYk.js";import"./Curve-CExLt2Iv.js";import"./CartesianAxis-D-Yy--uR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CAiBL-v8.js";import"./ChartSizeDimensions-BOJu1RXr.js";import"./OffsetShower-CJI2DXcR.js";import"./PlotAreaShower-Bq5ePm5q.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
