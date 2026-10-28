import{R as t}from"./iframe-D0WJBe8B.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BC6IeYNi.js";import{B as p}from"./BarChart-DNSYyW5v.js";import{X as l}from"./XAxis-BEoxl3pM.js";import{Y as h}from"./YAxis-Hb99A8N1.js";import{B as x}from"./Brush-_xaUvB3Z.js";import{B as c}from"./Bar-B9eOoC47.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ct4EK5_T.js";import"./throttle-TSOlYDju.js";import"./index-Dp8m-Do0.js";import"./index-BtpfRbVN.js";import"./RechartsWrapper-Y1sNfJdv.js";import"./axisSelectors-D5taf4lI.js";import"./polarAxisSelectors-2QOn0rl8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-50ivSU0v.js";import"./index-DWGmacRx.js";import"./index-B5HS6UVy.js";import"./renderedTicksSlice-DMh9haUn.js";import"./index-CMOK-p3U.js";import"./CartesianChart-Be7keNxh.js";import"./ZIndexPortal-BSZE-89G.js";import"./CategoricalChart-HCg9oVJT.js";import"./CartesianAxis-C6mWkihq.js";import"./Layer-aO3gvgqI.js";import"./Text-CgQ4MHqj.js";import"./pageBackground-Dio0HZ8z.js";import"./ZIndexLayer-DSGy4-C8.js";import"./Label-B4KodQcW.js";import"./types-CgDj6Pcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-fY2HN2fJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7LooK13L.js";import"./useAnimationId-C0s3vBtu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bceipj14.js";import"./tooltipContext-B-_BmjfO.js";import"./dataEntryStyles-BPWJkcwq.js";import"./ErrorBarContext-CAdmSJ6x.js";import"./activeStyles-DLjK0T5T.js";import"./SetGraphicalItem-B8qCLUCf.js";import"./getZIndexFromUnknown-C9hLLlRx.js";import"./useEffectiveDataKey-D37O0kkX.js";import"./omit-DuIyEhDA.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
