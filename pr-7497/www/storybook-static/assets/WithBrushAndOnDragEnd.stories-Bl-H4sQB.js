import{R as t}from"./iframe-B87NFlIP.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BXFzXSCA.js";import{B as p}from"./BarChart-BV_2y7Kz.js";import{X as l}from"./XAxis-B3Q4Ss-r.js";import{Y as h}from"./YAxis-DEe_988n.js";import{B as x}from"./Brush-C3IgoevK.js";import{B as c}from"./Bar-C6EqMTYB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-QFj5HQLb.js";import"./index-CKu5wzsE.js";import"./index-00O5dIdv.js";import"./get-D4uUMniQ.js";import"./resolveDefaultProps-BYA5JPhb.js";import"./isWellBehavedNumber-BoHGXF6T.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUNisers.js";import"./index-BOjePhwv.js";import"./index-CacHHN54.js";import"./renderedTicksSlice-Ca7Y29Mx.js";import"./axisSelectors-D4K8gA-k.js";import"./d3-scale-CHNXjue9.js";import"./CartesianChart-C-pJxpsO.js";import"./chartDataContext-CHvUY65z.js";import"./CategoricalChart-C9EAem8i.js";import"./CartesianAxis-fmozs-7p.js";import"./Layer-DtWSIRkx.js";import"./Text-ClNCBjV1.js";import"./DOMUtils-CIzchNYO.js";import"./Label-jdUwmN2T.js";import"./ZIndexLayer-D6XfIW9f.js";import"./types-D1UBNpSv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CH_fFDsc.js";import"./AnimatedItems-D7tPVB1r.js";import"./useAnimationId-a9uwME5U.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BoHjQjL7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba_G1J2p.js";import"./RegisterGraphicalItemId-B6YKmbmq.js";import"./ErrorBarContext-DZxTDSzq.js";import"./GraphicalItemClipPath-q-krKk84.js";import"./SetGraphicalItem-CKmZqTho.js";import"./getZIndexFromUnknown-D1FslVoV.js";import"./graphicalItemSelectors-DzE3iaTW.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
