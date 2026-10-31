import{R as t}from"./iframe-SkF1Z4RX.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Di849QVt.js";import{B as p}from"./BarChart-Cbf2UBkY.js";import{X as l}from"./XAxis-D03_TvJt.js";import{Y as h}from"./YAxis-BRrjXnEX.js";import{B as x}from"./Brush-jQAs2iBR.js";import{B as c}from"./Bar-BVJG8KM3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Doom015c.js";import"./throttle-DtLWJI8N.js";import"./index-B2PIGALe.js";import"./index-DtvbWEv2.js";import"./RechartsWrapper-D7eCqZJw.js";import"./axisSelectors-BsfIJIuR.js";import"./polarAxisSelectors-BotG4f4O.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkXd-iRe.js";import"./index-BfWLl3V2.js";import"./index-DXUCR1Dc.js";import"./renderedTicksSlice-dhqIaxco.js";import"./index-CqjGOWVd.js";import"./fillDefinitions-DFub8wZ3.js";import"./CartesianChart-DrHmlDEh.js";import"./ZIndexPortal-Ccz9Ppdz.js";import"./CategoricalChart-CFpoaktB.js";import"./CartesianAxis-C8zLGICr.js";import"./Layer-CVy-0b4t.js";import"./Text-BJaHuQQc.js";import"./DOMUtils-CJyIN8K_.js";import"./ZIndexLayer-BVWEeopG.js";import"./Label-Cq-EymG9.js";import"./types-j8xWAYxX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-iUgi9C9_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DeUeWV1w.js";import"./useAnimationId-_Q1GlxqN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pmXZ3dMD.js";import"./tooltipContext-DPtGy-7-.js";import"./dataEntryStyles-BsghJbw2.js";import"./ErrorBarContext-DFT45or-.js";import"./activeStyles-f736jV_-.js";import"./SetGraphicalItem-BQZxwmYP.js";import"./getZIndexFromUnknown-BZWBqZNJ.js";import"./useEffectiveDataKey-DnqAh09W.js";import"./omit-CbZkK91b.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
