import{e as t}from"./iframe-Dnf4AlLR.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-UrcKYzS0.js";import{B as p}from"./BarChart-B2gv36yR.js";import{X as l}from"./XAxis-DLWfACul.js";import{Y as h}from"./YAxis-BV2CBSac.js";import{B as c}from"./Brush-BBN0HqAF.js";import{B as x}from"./Bar-D3isWsHt.js";import{R as u}from"./RechartsHookInspector-OLBh2oCI.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BqkLROOU.js";import"./immer-DA9BPlnc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAmqBWgG.js";import"./index-D1BDiruz.js";import"./hooks-ByMCROpL.js";import"./axisSelectors-VRydpu3s.js";import"./d3-scale-Cb8N1VfB.js";import"./zIndexSlice-BgXAgJL3.js";import"./renderedTicksSlice-CTDdadeF.js";import"./CartesianChart-CTkTDluY.js";import"./chartDataContext-D6OzkCBP.js";import"./CategoricalChart-DESZNtyF.js";import"./CartesianAxis-DIOPUoh9.js";import"./Layer-V8ImnEZB.js";import"./Text-BH203wB1.js";import"./DOMUtils-DeOIiqB-.js";import"./Label-B_crGnD8.js";import"./ZIndexLayer-DOX2ldNu.js";import"./types-DHYQQjs9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CGp7KsnH.js";import"./ReactUtils-C1SR2qhB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-cwzKaFgR.js";import"./useAnimationId-Bo3VYg8c.js";import"./ActiveShapeUtils-D2qQQTmk.js";import"./RegisterGraphicalItemId-26wIU3J0.js";import"./ErrorBarContext-DnPqunZ7.js";import"./GraphicalItemClipPath-u2mX7OG7.js";import"./SetGraphicalItem-B1dso5Ln.js";import"./getZIndexFromUnknown-DAAkLme1.js";import"./graphicalItemSelectors-Cl1gj4-x.js";import"./index-DhYdY39W.js";import"./ChartSizeDimensions-xg99Q5LG.js";import"./OffsetShower-CsmBnO90.js";import"./PlotAreaShower-CowJNvBY.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
