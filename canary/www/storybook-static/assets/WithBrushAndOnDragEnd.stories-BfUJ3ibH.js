import{R as t}from"./iframe-BU3iqhog.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cpd3Oi8q.js";import{B as p}from"./BarChart-DdfqgfMt.js";import{X as l}from"./XAxis-DVT5C2oc.js";import{Y as h}from"./YAxis-C4ehmAHw.js";import{B as x}from"./Brush-DocpsU-m.js";import{B as c}from"./Bar-DXWVXWP6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dtv6RWTH.js";import"./index-JOJ-brJb.js";import"./index-CKIb-o38.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-4q4hBHNx.js";import"./isWellBehavedNumber-DTANvM1I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-zJDpEykE.js";import"./axisSelectors-C9pjjfER.js";import"./d3-scale-BBqyl05y.js";import"./index--oAu63xI.js";import"./index-BAJoWACv.js";import"./renderedTicksSlice-DJZNDnvY.js";import"./index-Crwgfq_Z.js";import"./CartesianChart-C9c1nVF1.js";import"./chartDataContext-DjOyYX_x.js";import"./CategoricalChart-B34ld9nC.js";import"./CartesianAxis-DRURazzH.js";import"./Layer-BUBmv9mO.js";import"./Text-BrjMZ7T0.js";import"./DOMUtils-CiCEa87M.js";import"./useId-C4wpt1HA.js";import"./useBackwardsCompatibleTheme-BMMiVQGL.js";import"./Label-BEIJZAIQ.js";import"./ZIndexLayer-D4v3Xv2l.js";import"./types-Cp0AAwbW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CSVnwEYt.js";import"./useAnimationId-BUaPZS0B.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-OOh_5Fv6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DFQKKGa8.js";import"./tooltipContext-d08g8X00.js";import"./RegisterGraphicalItemId-DfUeUgid.js";import"./ErrorBarContext-qidGP01Z.js";import"./GraphicalItemClipPath-DoWFsAsl.js";import"./SetGraphicalItem-Da1y71gX.js";import"./getZIndexFromUnknown-r6eeLjIP.js";import"./useGraphicalItemIdentity-CTbnTQeV.js";import"./dataEntryStyles-CU22C1tk.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
