import{e as t}from"./iframe-D5au-B4R.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DjoT1CkP.js";import{B as p}from"./BarChart-DTjYdKhd.js";import{X as l}from"./XAxis-Djz3Z4bE.js";import{Y as h}from"./YAxis-Bi10WgdJ.js";import{B as c}from"./Brush-Dz4XWOmZ.js";import{B as x}from"./Bar-Cx0m0UGs.js";import{R as u}from"./RechartsHookInspector-DFTuWkwy.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DoxDJzak.js";import"./immer-Uxla1AdH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B2p68SqA.js";import"./index-CqclXjSb.js";import"./hooks-CjYYqk-o.js";import"./axisSelectors-CPPpM5-p.js";import"./d3-scale-DAtNW_dV.js";import"./zIndexSlice-Dfjz8HwK.js";import"./renderedTicksSlice-NNQLBsMs.js";import"./CartesianChart-B5W05POX.js";import"./chartDataContext-CVbY0bI2.js";import"./CategoricalChart-CjFfaA5A.js";import"./CartesianAxis-fQqkoIc6.js";import"./Layer-N2rtvF3c.js";import"./Text-CodnAT-D.js";import"./DOMUtils-CCC5iRCA.js";import"./Label-CgqPFnns.js";import"./ZIndexLayer-D3P9nzyJ.js";import"./types-C71ySwku.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-B4qwvaID.js";import"./ReactUtils-BP9EaRxl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-XCFf1hjH.js";import"./isPlainObject-c9Qdn0OS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dfyov816.js";import"./useAnimationId-B8Se4RD-.js";import"./Trapezoid-CE1-MrL0.js";import"./Sector-JrfJaAcz.js";import"./Symbols-DA9it_1u.js";import"./symbol-DYMTv-17.js";import"./step-BXVfDqRU.js";import"./Curve-Cud4Oq3s.js";import"./RegisterGraphicalItemId-wh7gYtX8.js";import"./ErrorBarContext-BKfr8U3o.js";import"./GraphicalItemClipPath-BSyS1Brn.js";import"./SetGraphicalItem-BsfuYCoV.js";import"./getZIndexFromUnknown-ZzeM6knN.js";import"./graphicalItemSelectors-BGhOooFi.js";import"./index-47pdZWe1.js";import"./ChartSizeDimensions-ITlssz9c.js";import"./OffsetShower-r5ZHHhNG.js";import"./PlotAreaShower-Ck8CTF06.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
