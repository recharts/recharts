import{R as t}from"./iframe-BZg1zG5B.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CkkPSViG.js";import{B as p}from"./BarChart-DoaJmkhR.js";import{X as l}from"./XAxis-BFO1dJFq.js";import{Y as h}from"./YAxis-CworNICM.js";import{B as x}from"./Brush-B9TLziYg.js";import{B as c}from"./Bar-C0RiEweN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DFHrPmFV.js";import"./index-BzAnTBpk.js";import"./index-Cmvzg-0C.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CI_HL12t.js";import"./isWellBehavedNumber-Bk-91M8w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DyRofC5m.js";import"./index-DuAyB1ct.js";import"./index-BSOub4mJ.js";import"./renderedTicksSlice-DxnsaDc8.js";import"./axisSelectors-CZQj26DE.js";import"./d3-scale-CHbHYnH2.js";import"./CartesianChart-NJt7vXp9.js";import"./chartDataContext-gkePnQjL.js";import"./CategoricalChart-CacFZjBO.js";import"./CartesianAxis-CqYm8UKw.js";import"./Layer-AM2ZERM9.js";import"./Text-K_EkIkuP.js";import"./DOMUtils-Bs3ZzMQS.js";import"./Label-D1KCxb60.js";import"./ZIndexLayer-oU6a0KMz.js";import"./types-CP45QuEc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Cpa5bPP9.js";import"./AnimatedItems-C9XnYXoB.js";import"./useAnimationId-D8zRqkvh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-p2Bv9KHw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9Jnofarx.js";import"./RegisterGraphicalItemId-CnFfEqxk.js";import"./ErrorBarContext-HRURTUgd.js";import"./GraphicalItemClipPath-DCZKfxi9.js";import"./SetGraphicalItem-DRJD094C.js";import"./getZIndexFromUnknown-Dy9uoi9q.js";import"./graphicalItemSelectors-DZoCF1F0.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
