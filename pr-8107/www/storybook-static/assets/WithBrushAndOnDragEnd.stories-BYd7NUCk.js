import{R as t}from"./iframe-CFREJgKh.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BlChPiJc.js";import{B as p}from"./BarChart-CZoUmaiM.js";import{X as l}from"./XAxis-C8rslJeD.js";import{Y as h}from"./YAxis-BpqGKlEV.js";import{B as x}from"./Brush-Cnjf7Fje.js";import{B as c}from"./Bar-BODMRhRi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D2NJN12P.js";import"./throttle-D0fuDWYv.js";import"./index-BnRinVhV.js";import"./index-9ppQqeZ5.js";import"./RechartsWrapper-i5dbrXIz.js";import"./axisSelectors-BWBf8JbO.js";import"./polarAxisSelectors-U9vqJLN4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CSfabLms.js";import"./index-DNbnfthz.js";import"./index-CXWxUzol.js";import"./renderedTicksSlice-BlPhjOzM.js";import"./index-BMrIm2ob.js";import"./CartesianChart-DKqxdz5e.js";import"./ZIndexPortal-CxkIiCll.js";import"./CategoricalChart-wyRiJqKi.js";import"./CartesianAxis-DYae0Cq3.js";import"./Layer-C0qOZ959.js";import"./Text-CdYm4waL.js";import"./pageBackground-BhcEVreL.js";import"./ZIndexLayer-C1WGeCae.js";import"./Label-CqB5IeGz.js";import"./types-DVbjgkU5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D_a5qFT1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcQT3jTk.js";import"./useAnimationId-D_reCqg_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D0KAMjVA.js";import"./tooltipContext-BjGhA_2X.js";import"./dataEntryStyles-D-tUw7To.js";import"./ErrorBarContext-Ckc5teto.js";import"./activeStyles-DZOohqxv.js";import"./SetGraphicalItem-DdrEYt3d.js";import"./getZIndexFromUnknown-C1i7VIOW.js";import"./useEffectiveDataKey-D5PSAWPt.js";import"./omit-BbKQzHDx.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
