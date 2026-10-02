import{R as t}from"./iframe-B0sakJiE.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C2JoSOuc.js";import{B as p}from"./BarChart-XvPfyo6_.js";import{X as l}from"./XAxis-BMxSzB1I.js";import{Y as h}from"./YAxis-CZvdB1-4.js";import{B as x}from"./Brush-CBrjnwZb.js";import{B as c}from"./Bar-C77BTpPn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C7TX7owl.js";import"./index-DsNYe81z.js";import"./index-BXQEz9WW.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ssIH5a_N.js";import"./isWellBehavedNumber-DiVn1zM4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BpIUDAEt.js";import"./axisSelectors-DAvStXmd.js";import"./d3-scale-CBENh8dV.js";import"./index-CshZKuHv.js";import"./index-B_LLgB3d.js";import"./renderedTicksSlice-BPkvdwOw.js";import"./index-7d7qLSfx.js";import"./CartesianChart-BkOoMrfQ.js";import"./chartDataContext-Bl9ftmGr.js";import"./CategoricalChart-i5JvNUXt.js";import"./CartesianAxis-6gx2DY-1.js";import"./Layer-CcOy9dqf.js";import"./Text-YdcYRLnk.js";import"./DOMUtils-Cp8HsdRc.js";import"./useId-ByzngA9u.js";import"./useBackwardsCompatibleTheme-yTt122QS.js";import"./Label-CXhmz5va.js";import"./ZIndexLayer-C7T7VX-U.js";import"./types-BxUBO_Vd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DhCfcvtd.js";import"./useAnimationId-fISgZVPU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-RAovKYee.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DnkyzZr6.js";import"./tooltipContext-2RfoaFX7.js";import"./RegisterGraphicalItemId-BMnnO_Y6.js";import"./ErrorBarContext-lXq8p5sv.js";import"./GraphicalItemClipPath-DDSyttGC.js";import"./SetGraphicalItem-BtMMOS1d.js";import"./getZIndexFromUnknown-DgbGgnBi.js";import"./useGraphicalItemIdentity-CN480731.js";import"./dataEntryStyles-yonOgdkN.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
