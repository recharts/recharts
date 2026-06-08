import{R as t}from"./iframe-8lQPdWqg.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-HgvYxHxO.js";import{B as p}from"./BarChart-Clx1wQiM.js";import{X as l}from"./XAxis-DJEDKgVX.js";import{Y as h}from"./YAxis-B8-aAKdo.js";import{B as x}from"./Brush-Bb5BwE4w.js";import{B as c}from"./Bar-WfYPDZ05.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BzJ0g7On.js";import"./index-DDpCqwLC.js";import"./index-DuAs5Bye.js";import"./get-BByPkrE2.js";import"./resolveDefaultProps-D5naey2E.js";import"./isWellBehavedNumber-Bo5Fj-TS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1T0MVTTa.js";import"./index-4GPQXHZz.js";import"./index-DC8gB5sz.js";import"./renderedTicksSlice-BULVvGQu.js";import"./axisSelectors-6HnY6kw7.js";import"./d3-scale-CBB0hoc6.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BwVyT9hr.js";import"./chartDataContext-p8mU6nY6.js";import"./CategoricalChart-DXrGsRNK.js";import"./CartesianAxis-DwSWDszA.js";import"./Layer-CDc8atAP.js";import"./Text-B197qhYG.js";import"./DOMUtils-BTKUKMTR.js";import"./Label-Dm0B15Tp.js";import"./ZIndexLayer-CBi4-krB.js";import"./types-CT--YnpL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-nL6J0rER.js";import"./AnimatedItems-DC4nP9_V.js";import"./useAnimationId-Bv0dv7sa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOIggd48.js";import"./ActiveShapeUtils-BLPRWSBX.js";import"./RegisterGraphicalItemId-CXVUtMmc.js";import"./ErrorBarContext-B402Fsm3.js";import"./GraphicalItemClipPath-DqeRAZts.js";import"./SetGraphicalItem-BjZEdkKC.js";import"./getZIndexFromUnknown-CHrP0GS6.js";import"./graphicalItemSelectors-Boc2l_BC.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
