import{R as t}from"./iframe-BrVE5RSW.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CHsJbjJD.js";import{B as p}from"./BarChart-CapErLZW.js";import{X as l}from"./XAxis-B0eJFub6.js";import{Y as h}from"./YAxis-BAuMZklG.js";import{B as x}from"./Brush-DJQkpa3-.js";import{B as c}from"./Bar-Pe-TgSdc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BQaLLzka.js";import"./index-LfrCHYrZ.js";import"./index-Sva1rZOH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BD9NC1fi.js";import"./isWellBehavedNumber-BVgmnW9g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQVN278-.js";import"./axisSelectors-BDU1QiXu.js";import"./d3-scale-BmnvRTpm.js";import"./index-C5upL2ad.js";import"./index-SZqQo-6K.js";import"./renderedTicksSlice-DXuyBJO_.js";import"./index-BmC-zE0O.js";import"./CartesianChart-D0yCkzIu.js";import"./chartDataContext-3sx737Gw.js";import"./CategoricalChart-B2Hi-_kM.js";import"./CartesianAxis-Cn4O1F7T.js";import"./Layer-BvSPpSNQ.js";import"./Text-B4ZIZNbZ.js";import"./DOMUtils-IYFeeRl2.js";import"./useId-DbY0de1j.js";import"./useBackwardsCompatibleTheme-CF13ge8-.js";import"./Label-DySzAUNx.js";import"./ZIndexLayer-BERp6HrO.js";import"./types-CE2qBNHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Bzkg4GxV.js";import"./useAnimationId-CaCeoqu2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCi554Vz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DIhJJb_m.js";import"./tooltipContext-BTPPPf7b.js";import"./RegisterGraphicalItemId-Cg9vlh9g.js";import"./ErrorBarContext-CRbR2c4o.js";import"./GraphicalItemClipPath-C1RnAz3w.js";import"./SetGraphicalItem-BFu8ftGQ.js";import"./getZIndexFromUnknown-CBATyizs.js";import"./useGraphicalItemIdentity-BCiQfNgb.js";import"./dataEntryStyles-CFPmkDJC.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
