import{R as t}from"./iframe-BMoFzqLG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D2eW6ynO.js";import{B as p}from"./BarChart-DWuv53yT.js";import{X as l}from"./XAxis-CPrZIqhG.js";import{Y as h}from"./YAxis-DTyCZ8Eb.js";import{B as x}from"./Brush-D-BuICsz.js";import{B as c}from"./Bar-BiRnOtXL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMa4JKLf.js";import"./index-DNJh02LB.js";import"./index-CSdHnYZf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-NXPPdTlK.js";import"./isWellBehavedNumber-Cv3QLhUl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMT8ka8g.js";import"./index-DW75A43Y.js";import"./index-CCv9Fz61.js";import"./axisSelectors-DYuvxT8H.js";import"./d3-scale-CdpdmGXg.js";import"./renderedTicksSlice-DvPuc11_.js";import"./CartesianChart-C7RJi03t.js";import"./chartDataContext-CDnovleA.js";import"./CategoricalChart-e4TDW-CP.js";import"./CartesianAxis-DOx4dBf7.js";import"./Layer-BF07rJeJ.js";import"./Text-CWW6I1yN.js";import"./DOMUtils-zP2FF411.js";import"./useId-Cuy8o_CS.js";import"./useBackwardsCompatibleTheme-CT0hL_b9.js";import"./Label-C2sliePj.js";import"./ZIndexLayer-Bb4jsnOQ.js";import"./types-DnNtWK32.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DtpOcSHY.js";import"./useAnimationId-DECqttvr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-0Efefj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Deesho2z.js";import"./tooltipContext-BU0RtyTL.js";import"./RegisterGraphicalItemId-BWT7SWLX.js";import"./ErrorBarContext-gECkpo90.js";import"./GraphicalItemClipPath-4HDTpBwl.js";import"./SetGraphicalItem-4-n_cNOG.js";import"./getZIndexFromUnknown-DOodkGGT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BoSXPO7u.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
