import{R as t}from"./iframe-BmdtsHI1.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CLt9waUo.js";import{B as p}from"./BarChart-BRnlvSFp.js";import{X as l}from"./XAxis-SiUufnTD.js";import{Y as h}from"./YAxis-D_YhB_w8.js";import{B as x}from"./Brush-BOzcYiP4.js";import{B as c}from"./Bar-BLD4fDC5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D3fedd0f.js";import"./throttle-DIqkA_6B.js";import"./index-D1G26n6J.js";import"./index-BU9XUo1g.js";import"./RechartsWrapper-CW25TSBD.js";import"./axisSelectors-CWAMaE0j.js";import"./polarAxisSelectors-DqiScafe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4n2-g_Q.js";import"./index-dsp9FHu2.js";import"./index-B-lO_Vmy.js";import"./renderedTicksSlice-Cbbwd8m4.js";import"./index-JJYVBYhC.js";import"./CartesianChart-Q5wSSY7L.js";import"./ZIndexPortal-BR-Xx9Bs.js";import"./CategoricalChart-BetF0ARA.js";import"./CartesianAxis-6ZKwTVD2.js";import"./Layer-uwW889ah.js";import"./Text-DgdwosBP.js";import"./DOMUtils-BrHrYr07.js";import"./ZIndexLayer-BPViM-b3.js";import"./Label-efFOyHP_.js";import"./types-TcTpNVA6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BBJeoy6S.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-oyaeTZIU.js";import"./useAnimationId-C4l6OBef.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Du3AePOl.js";import"./tooltipContext-BNM5udMa.js";import"./dataEntryStyles-C-VVWe1s.js";import"./ErrorBarContext-C7bFffEo.js";import"./activeStyles-0PlrA4t0.js";import"./SetGraphicalItem-wZmxt-s3.js";import"./getZIndexFromUnknown-DYeOV0S6.js";import"./useEffectiveDataKey-Bt6hIrJm.js";import"./fillDefinitions-C7_rhOBH.js";import"./omit-Es-d5Yne.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
