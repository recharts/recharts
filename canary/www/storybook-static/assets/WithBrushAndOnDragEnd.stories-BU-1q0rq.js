import{R as t}from"./iframe-BUclCYGi.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cw_uenFh.js";import{B as p}from"./BarChart-pHe38-If.js";import{X as l}from"./XAxis-BHZhhSq5.js";import{Y as h}from"./YAxis-DpN8u2C4.js";import{B as x}from"./Brush-DHn32yGW.js";import{B as c}from"./Bar-CD2uITWu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-SXE1z9w6.js";import"./index-Bn5su_0t.js";import"./index-BQEsNi1X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CDaHLq6V.js";import"./isWellBehavedNumber-DhRe89GX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwnYFdtG.js";import"./axisSelectors-D1NJ4aqF.js";import"./d3-scale-BmoaGtPl.js";import"./index-ChGyrwHq.js";import"./index-gTT2X1bJ.js";import"./renderedTicksSlice-BS7nbOgQ.js";import"./index-BsSpSNv1.js";import"./CartesianChart-C6YloXmX.js";import"./chartDataContext-RCVSOfKr.js";import"./CategoricalChart-mNhIGUHY.js";import"./CartesianAxis-NWR4v8N2.js";import"./Layer-DDGYJVwv.js";import"./Text-CMwjB0Gb.js";import"./DOMUtils-CDNaNL9M.js";import"./useId-Cf0k-OMu.js";import"./useBackwardsCompatibleTheme-D2gq_Aw8.js";import"./Label-BB58AW_H.js";import"./ZIndexLayer-tXuqEnu1.js";import"./types-aN_pljKn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BNylu8US.js";import"./useAnimationId-CydbYcnQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBHVBl_F.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CW3_54sQ.js";import"./tooltipContext-D_shW-0I.js";import"./RegisterGraphicalItemId-BqK8bbcf.js";import"./ErrorBarContext-CpA0sHX8.js";import"./GraphicalItemClipPath-DAWuVc0K.js";import"./SetGraphicalItem-DrDTFijX.js";import"./getZIndexFromUnknown-DvOtujGo.js";import"./useGraphicalItemIdentity-DY8lhZ2G.js";import"./dataEntryStyles-CKBAXe65.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
