import{R as t}from"./iframe-DuKrJ0zn.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CLjLalaX.js";import{B as p}from"./BarChart-CqraV8C6.js";import{X as l}from"./XAxis-DcN8Db4p.js";import{Y as h}from"./YAxis-DQojOnyt.js";import{B as x}from"./Brush-D739M6fd.js";import{B as c}from"./Bar-DpGj5URD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DtzmWgqu.js";import"./index-UXVF2SDl.js";import"./index--f_yOVNJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-teTym_le.js";import"./isWellBehavedNumber-C1SokatK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEffPtCf.js";import"./axisSelectors-C-iDc9ZD.js";import"./d3-scale-DZyfBumm.js";import"./index-Bw0d1gq_.js";import"./index-CQPSgdXH.js";import"./renderedTicksSlice-DC-eZxTj.js";import"./index-BP-prfso.js";import"./CartesianChart-Dmo_0Xna.js";import"./chartDataContext-UIg6E7lh.js";import"./CategoricalChart-C3GMMeRH.js";import"./CartesianAxis-KhOJh8Ny.js";import"./Layer-DzPACqXk.js";import"./Text-BsbcFYx2.js";import"./DOMUtils-Bn1l__ER.js";import"./useId-DlXJwOUw.js";import"./useBackwardsCompatibleTheme-BxDCx_m8.js";import"./Label-T3-RQcya.js";import"./ZIndexLayer-F_xMErBH.js";import"./types-C0puMKP8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-UVqcjqe1.js";import"./useAnimationId-BEtuyajc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cfu-PHUN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ng0jEWa8.js";import"./tooltipContext-DygAeoe5.js";import"./dataEntryStyles-CQWLZIwm.js";import"./ErrorBarContext-DC_DRovh.js";import"./GraphicalItemClipPath-BH1_5J3a.js";import"./SetGraphicalItem-DHruVb1s.js";import"./getZIndexFromUnknown-iHXoYCaM.js";import"./useGraphicalItemIdentity-zknNX3FR.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
