import{R as t}from"./iframe-Czgh02fE.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Do8f9YWK.js";import{B as p}from"./BarChart-Br7wNOHc.js";import{X as l}from"./XAxis-C2Mn3Na8.js";import{Y as h}from"./YAxis-B9WbRmEP.js";import{B as x}from"./Brush-9-uDTxsq.js";import{B as c}from"./Bar-CRFjqQWs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D1C4cigO.js";import"./index-BzAJTpLC.js";import"./index-BnAmj1WN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D61FhKsp.js";import"./isWellBehavedNumber-BenVrlkW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIxKKW90.js";import"./index-BjeOf0Dt.js";import"./index-B1amEOit.js";import"./axisSelectors-H5jwzs9R.js";import"./d3-scale-DjzQ61DY.js";import"./renderedTicksSlice-DljNETqX.js";import"./CartesianChart-BAydra3V.js";import"./chartDataContext-9fwvPw2D.js";import"./CategoricalChart-BgAf9cWH.js";import"./CartesianAxis-B4k6OJQ9.js";import"./Layer-zCmZcP2I.js";import"./Text-CR_8UZPv.js";import"./DOMUtils-CFgNHwO1.js";import"./useBackwardsCompatibleTheme-CqikxVTG.js";import"./Label-4BEQg_vH.js";import"./ZIndexLayer-s-28Q74q.js";import"./types-BOqsceM0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-C0yzXkCH.js";import"./AnimatedItems-DQ5WKLo7.js";import"./useAnimationId-CBLxCaT-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BuJcrudB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DxWOnmm2.js";import"./RegisterGraphicalItemId-_1lxrS6Z.js";import"./ErrorBarContext-Cjm5t7eM.js";import"./GraphicalItemClipPath-BFEL_l8x.js";import"./SetGraphicalItem-BSCJBMvO.js";import"./getZIndexFromUnknown-DfquZxHs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-v_kQR1u7.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
