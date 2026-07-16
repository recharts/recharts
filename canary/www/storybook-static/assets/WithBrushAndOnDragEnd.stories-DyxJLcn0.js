import{R as t}from"./iframe-DUrcY2US.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D23NNcc-.js";import{B as p}from"./BarChart-KtXrPg9r.js";import{X as l}from"./XAxis-CVek6dQA.js";import{Y as h}from"./YAxis-BFaz6XgS.js";import{B as x}from"./Brush-CWNMbblD.js";import{B as c}from"./Bar-BMCbUDJ0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-u55YHgne.js";import"./index-CZQ13dE7.js";import"./index-DfVYeqBk.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bkhh-EU7.js";import"./isWellBehavedNumber-U-rEAUF7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-FovoggR2.js";import"./index-CeyJFFE6.js";import"./index-CE9cEvcF.js";import"./renderedTicksSlice-BAoXnBM4.js";import"./axisSelectors-BmIoikMn.js";import"./d3-scale-CjT_6rZL.js";import"./CartesianChart-UL0Qt6Ls.js";import"./chartDataContext-BTSN0B0I.js";import"./CategoricalChart-BS_7Qovh.js";import"./CartesianAxis-jsyQa0HM.js";import"./Layer-CYHvsOgc.js";import"./Text-DMamusUo.js";import"./DOMUtils-B_GdkGLj.js";import"./Label-Dq5ZDKy5.js";import"./ZIndexLayer-bKTnWuHr.js";import"./types-BMr8FEQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BLJE2Shd.js";import"./AnimatedItems-BfwNRs0j.js";import"./useAnimationId-DrcrHxjP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D3ZfsELa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSfcbHhF.js";import"./RegisterGraphicalItemId-BwmS1f__.js";import"./ErrorBarContext-Dl94M6VN.js";import"./GraphicalItemClipPath-BTF9cLBi.js";import"./SetGraphicalItem-CXjv9Cz3.js";import"./getZIndexFromUnknown-CZirEzLE.js";import"./graphicalItemSelectors-pAvrXMwD.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
