import{e as t}from"./iframe-BpuHkxzv.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-D3NbzucA.js";import{B as p}from"./BarChart-CJPzBxcI.js";import{X as l}from"./XAxis-DAM5aOqn.js";import{Y as h}from"./YAxis-Di_DA3y5.js";import{B as c}from"./Brush-Bf1Z8Hoq.js";import{B as x}from"./Bar-C-HLHhlT.js";import{R as u}from"./RechartsHookInspector-AaKfh7uA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_sB-kQg.js";import"./immer-OyT0OiEL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-PymVavj3.js";import"./index-B2w93Cnl.js";import"./hooks-B1cGBeOq.js";import"./axisSelectors-BJZ14qKk.js";import"./d3-scale-BeDrD5FO.js";import"./zIndexSlice-CmLQD4Hj.js";import"./renderedTicksSlice-BdwSoJ9a.js";import"./CartesianChart-zmg0JzJu.js";import"./chartDataContext-8upaOC_y.js";import"./CategoricalChart-BFAw-aMI.js";import"./CartesianAxis-C7ZsdIQA.js";import"./Layer-BqE9-RFh.js";import"./Text-CQDQNrmI.js";import"./DOMUtils-CJA5o4Wn.js";import"./Label-DXexZu28.js";import"./ZIndexLayer-DB_dF6Ce.js";import"./types-EV6wLq9J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DC3Kn2Ay.js";import"./ReactUtils-eZNJAb5x.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2x9Rcis.js";import"./useAnimationId-ObzFSifI.js";import"./ActiveShapeUtils-CT-qLZ85.js";import"./RegisterGraphicalItemId-DWnLfZVy.js";import"./ErrorBarContext-C3BTG3j_.js";import"./GraphicalItemClipPath-alzdk-Y9.js";import"./SetGraphicalItem-D6w_4jw8.js";import"./getZIndexFromUnknown-Ba28HUXU.js";import"./graphicalItemSelectors-DK3U3rqu.js";import"./index-DNW34nIA.js";import"./ChartSizeDimensions-BVyFPlkv.js";import"./OffsetShower-opK80ySX.js";import"./PlotAreaShower-CqZ4IRUd.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
