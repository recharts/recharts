import{R as t}from"./iframe-CEcITxQg.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DG2GpHlE.js";import{B as p}from"./BarChart-DCHe4mwX.js";import{X as l}from"./XAxis-DpYz8_Dh.js";import{Y as h}from"./YAxis-WtIBmSn8.js";import{B as x}from"./Brush-BlaOEDh2.js";import{B as c}from"./Bar-BiOnqh7r.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B3Xibe3Y.js";import"./index-D2_zyIdl.js";import"./index-Bhk23PFU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CkmfyhqW.js";import"./isWellBehavedNumber-DjN2b99T.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BTJ2LZ14.js";import"./axisSelectors-BTQvXZat.js";import"./d3-scale-CwC0nBHM.js";import"./index-D0x1dbK7.js";import"./index-DeVAKBla.js";import"./renderedTicksSlice-Dgfw4xeW.js";import"./index-DeuCtru2.js";import"./CartesianChart-Bf9v-Tj6.js";import"./chartDataContext-BzZyvQEB.js";import"./CategoricalChart-B6S6Zh35.js";import"./CartesianAxis-CRhVdfos.js";import"./Layer-DxHA8fzs.js";import"./Text-BaR1ZvCW.js";import"./DOMUtils-CRevI1wr.js";import"./useId-BfWHYsCr.js";import"./useBackwardsCompatibleTheme-B-LDULxa.js";import"./Label-CAyVtv0N.js";import"./ZIndexLayer-Crp9kN4i.js";import"./types-CL5KqLm4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ys-2ZU7Q.js";import"./useAnimationId-Cz0tj6YQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-rvPl5WSU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dx9yEBbu.js";import"./tooltipContext-C719rlED.js";import"./RegisterGraphicalItemId-CodKeWvn.js";import"./ErrorBarContext-B5kiS63M.js";import"./GraphicalItemClipPath-BwGvKzSp.js";import"./SetGraphicalItem-ZqPAg0_A.js";import"./getZIndexFromUnknown-BEtTw01N.js";import"./useGraphicalItemIdentity-DDNep2_9.js";import"./dataEntryStyles-ChVGAtMZ.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
