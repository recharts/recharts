import{e as t}from"./iframe-DvuZWOTb.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BBARzIRr.js";import{B as p}from"./BarChart-DDD35a_P.js";import{X as l}from"./XAxis-DowQdhQL.js";import{Y as h}from"./YAxis-DIT5pVYc.js";import{B as c}from"./Brush-BpgWiLum.js";import{B as x}from"./Bar-6ePu4v_6.js";import{R as u}from"./RechartsHookInspector-Cl4EGw9D.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BNfHMc3-.js";import"./immer-BHFkM9Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8dH0HHg.js";import"./index-eU4Ehn4B.js";import"./hooks-43hsLZ0P.js";import"./axisSelectors-BnR_Cfp_.js";import"./d3-scale-BdRaduXu.js";import"./zIndexSlice-BABNjTcN.js";import"./renderedTicksSlice-BAodcevd.js";import"./CartesianChart-CnMFmEeq.js";import"./chartDataContext-BXYQ6GMf.js";import"./CategoricalChart-CPAqYbsf.js";import"./CartesianAxis-Dm47pK4a.js";import"./Layer-D0S2CDqI.js";import"./Text-CU_3ER1b.js";import"./DOMUtils-BxxJ-Wkd.js";import"./Label-CD05nnQG.js";import"./ZIndexLayer-DRMyD2Rp.js";import"./types-BkPBAcGb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-QkxCPnN-.js";import"./ReactUtils-jSjmTH71.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-0RU40zhg.js";import"./isPlainObject-BJJzFz0o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpIWh0L4.js";import"./useAnimationId-oxTUA15o.js";import"./Trapezoid-BCrvbeh4.js";import"./Sector-Uwlbv7Cd.js";import"./Symbols-4yD0ZZ3H.js";import"./symbol-tCdMof47.js";import"./step-Cug99buo.js";import"./Curve-CApkeTVu.js";import"./RegisterGraphicalItemId-BH6ssqoP.js";import"./ErrorBarContext-Dt0Jqr2E.js";import"./GraphicalItemClipPath-DmmSLEF_.js";import"./SetGraphicalItem-Dkbl2A_A.js";import"./getZIndexFromUnknown-CpwuDiai.js";import"./graphicalItemSelectors-BaRyU1F_.js";import"./index-CGCMEZS5.js";import"./ChartSizeDimensions-E7tryntV.js";import"./OffsetShower-BUvvOC4J.js";import"./PlotAreaShower-iq9hWQZ1.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
