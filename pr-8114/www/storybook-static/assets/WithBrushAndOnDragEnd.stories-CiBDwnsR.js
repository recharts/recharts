import{R as t}from"./iframe-CCedNpIL.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-FaVG8kHH.js";import{B as p}from"./BarChart-Cb1r3ZjZ.js";import{X as l}from"./XAxis-BXe8rtVd.js";import{Y as h}from"./YAxis-C1dIb0Dq.js";import{B as x}from"./Brush-BHqWIbOU.js";import{B as c}from"./Bar-BQVGw10E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BU47eI4H.js";import"./throttle-Br1C3UWP.js";import"./index-a9wrUunR.js";import"./index-B1OaBK8_.js";import"./RechartsWrapper-B3okQ-B8.js";import"./axisSelectors-BoL5XRtd.js";import"./polarAxisSelectors-Bk6LJwmt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-EyFZEVUo.js";import"./index-DKQhzlop.js";import"./index-CL5Xa_TG.js";import"./renderedTicksSlice-BWK-8Wbg.js";import"./index-D4SSZ3m3.js";import"./CartesianChart-CaGoIdwh.js";import"./ZIndexPortal-Bmj6fCDQ.js";import"./CategoricalChart-C8fCaDAg.js";import"./CartesianAxis-CVTWbWdI.js";import"./Layer-Cr1LK46x.js";import"./Text-B0ZPk73p.js";import"./pageBackground-pCtx7B-s.js";import"./ZIndexLayer-BPlzci0x.js";import"./Label-CBEI3-wb.js";import"./types-D0KlXew0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-cRyR8A9p.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BX_KITs0.js";import"./useAnimationId-CcrjU78K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DzHDFOYU.js";import"./tooltipContext-BNwhBjw1.js";import"./dataEntryStyles-B3jzja7w.js";import"./ErrorBarContext-BMxzBjzC.js";import"./activeStyles-DICcYqor.js";import"./SetGraphicalItem-CeKorW8q.js";import"./getZIndexFromUnknown-ThCjO9zp.js";import"./useEffectiveDataKey-Lst-3VK9.js";import"./omit-DuwuPrBG.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
