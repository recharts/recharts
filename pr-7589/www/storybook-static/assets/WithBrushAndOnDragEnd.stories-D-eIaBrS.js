import{R as t}from"./iframe-BYXa1Tn_.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CoJck3d_.js";import{B as p}from"./BarChart-C7IWHKc0.js";import{X as l}from"./XAxis-B5zWifv0.js";import{Y as h}from"./YAxis-DizXoRZi.js";import{B as x}from"./Brush-BYWkogP0.js";import{B as c}from"./Bar-C8rq5Pe8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CoxoiN6t.js";import"./index-B0FnoVJH.js";import"./index-DuqGTInP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BEKG2AD6.js";import"./isWellBehavedNumber-TGnGu01x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OaYp5Da5.js";import"./index-D68cxjh6.js";import"./index-BI8zhQ65.js";import"./renderedTicksSlice-CNHtcDgN.js";import"./axisSelectors-CdQyM0Ik.js";import"./d3-scale-BtOkOC4O.js";import"./CartesianChart-Cs0h_EiO.js";import"./chartDataContext-DfKLz63T.js";import"./CategoricalChart-DdtEtndX.js";import"./CartesianAxis-C3icPOpT.js";import"./Layer-C8ZXIHkO.js";import"./Text-ClavD2Bt.js";import"./DOMUtils-BRP-TV91.js";import"./Label-CW6jLePn.js";import"./ZIndexLayer-BQRYe1sp.js";import"./types-BeIXyo3E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Dj7m8Gm_.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-C3Ht68ot.js";import"./AnimatedItems-DMwIY_YG.js";import"./useAnimationId-8c28klLP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8TpkBjX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DejqAcqQ.js";import"./RegisterGraphicalItemId-D6qWKqiK.js";import"./ErrorBarContext-Cf7wWmw3.js";import"./GraphicalItemClipPath-Dujotke_.js";import"./SetGraphicalItem-C_1bFSrg.js";import"./getZIndexFromUnknown-VfSsiHlo.js";import"./graphicalItemSelectors-PgtwmP-D.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
