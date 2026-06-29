import{R as t}from"./iframe-4vtyrily.js";import{R as m}from"./zIndexSlice-DsxXMu10.js";import{L as s}from"./LineChart-BpuSHe94.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Dj9X0Qtq.js";import{X as l}from"./XAxis-D8jscbum.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BJLHAoQW.js";import"./index-058gmbYq.js";import"./index-WdI8WwRZ.js";import"./get-CmTlD__X.js";import"./resolveDefaultProps-CluH8H00.js";import"./isWellBehavedNumber-BgzphtrB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BkIEJRAG.js";import"./index-DmmOL2VS.js";import"./index-lWQepKyy.js";import"./renderedTicksSlice-DadNz-JQ.js";import"./axisSelectors-b6USA22d.js";import"./d3-scale-BRChu2o4.js";import"./CartesianChart-COMuthXy.js";import"./chartDataContext-Cvy_uDzX.js";import"./CategoricalChart-Cbi53qJN.js";import"./Layer-BeOWFmV4.js";import"./Curve-lJlCi-Lp.js";import"./types-CBN3GvJG.js";import"./step-BvrGRSpq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DdVQ6WRa.js";import"./Label-BGwY3uMh.js";import"./Text-BI23BLmu.js";import"./DOMUtils-BhADA_J0.js";import"./ZIndexLayer-BSkjb5Ga.js";import"./useAnimationId-CorgOjgO.js";import"./ActivePoints-B8FHMCJl.js";import"./Dot-CRumXoSO.js";import"./RegisterGraphicalItemId-3aiZPuQN.js";import"./ErrorBarContext-DZAGOXyd.js";import"./GraphicalItemClipPath-Cc5Lg0-u.js";import"./SetGraphicalItem-Brisep9j.js";import"./getRadiusAndStrokeWidthFromDot-C0aT6Dgm.js";import"./ActiveShapeUtils-DwhByUak.js";import"./CartesianAxis-CiqNB0Kv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
