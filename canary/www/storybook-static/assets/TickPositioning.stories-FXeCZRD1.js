import{e as t}from"./iframe-tCDnQpzm.js";import{g as m}from"./arrayEqualityCheck-BqXouEks.js";import{L as s}from"./LineChart-kqxaeNZH.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-WG_QdsGX.js";import{X as l}from"./XAxis-DlOxqtL0.js";import{R as v}from"./RechartsHookInspector-BX_0sbG1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6_84qa3.js";import"./immer-BCZknwAa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYnmCVjv.js";import"./index-CHnjtEz6.js";import"./hooks-WR0dNOnI.js";import"./axisSelectors-Bvp9z5f_.js";import"./d3-scale-QLPPlH86.js";import"./zIndexSlice-1EM6QKoG.js";import"./renderedTicksSlice-CYtMAut8.js";import"./CartesianChart-DTQQkyNB.js";import"./chartDataContext-D8A6GgIn.js";import"./CategoricalChart-9BDeQmwn.js";import"./Curve-CVwA5fsZ.js";import"./types-vkQzCy74.js";import"./step-D_7jw6OV.js";import"./path-DyVhHtw_.js";import"./Layer-DztRGY_N.js";import"./ReactUtils-C9ZM0Mib.js";import"./Label--ydmIzGM.js";import"./Text-BLCv1zgM.js";import"./DOMUtils-Dbb4XIEW.js";import"./ZIndexLayer-DKwmZsVD.js";import"./ActivePoints-CleYGUIG.js";import"./Dot-ebcJneEk.js";import"./RegisterGraphicalItemId-D4uIuwhl.js";import"./ErrorBarContext-NilxMudN.js";import"./GraphicalItemClipPath-BzZEJgMk.js";import"./SetGraphicalItem-DtCToAmA.js";import"./useAnimationId-DsF55F49.js";import"./getRadiusAndStrokeWidthFromDot-CYyWgj3n.js";import"./ActiveShapeUtils-fioPLRDw.js";import"./isPlainObject-DxYEqwrD.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianAxis-DhIcmypy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-CXC3XglB.js";import"./ChartSizeDimensions-CSUyRejl.js";import"./OffsetShower-J7wedS7V.js";import"./PlotAreaShower-DWpQD4iq.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,n)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:n,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ct=["TickPositioning"];export{r as TickPositioning,ct as __namedExportsOrder,st as default};
