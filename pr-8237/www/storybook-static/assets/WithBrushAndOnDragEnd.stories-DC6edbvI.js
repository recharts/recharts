import{R as t}from"./iframe-C75BlFXB.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-4GxCw66H.js";import{B as p}from"./BarChart-CCV3oq8A.js";import{X as l}from"./XAxis-bu4t9p5Z.js";import{Y as h}from"./YAxis-CM0RKDPz.js";import{B as x}from"./Brush-CH1K4Zyq.js";import{B as c}from"./Bar-HPLqlKYV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CF3TLSY4.js";import"./throttle-BrgJpY2A.js";import"./index-Ce13AGyB.js";import"./index-CWJaW9bb.js";import"./RechartsWrapper-Di9_KxKG.js";import"./axisSelectors-DvLkyA4P.js";import"./polarAxisSelectors-Dz-eHC-D.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-PhqlfAou.js";import"./index-BoIFErVW.js";import"./index-EzgMka2g.js";import"./renderedTicksSlice-Culw3tiU.js";import"./index-aBb4My7l.js";import"./fillDefinitions-Bn6BAHMd.js";import"./CartesianChart-DnnmNz3w.js";import"./chartDataContext-BTXdmqoO.js";import"./CategoricalChart-FqiOzffn.js";import"./CartesianAxis-Cq0K36Zo.js";import"./Layer-9txovic7.js";import"./Text-CFNdT-9W.js";import"./ZIndexLayer-SbUjc4VB.js";import"./Label-D2Ecv790.js";import"./types-B1z8Z6Cy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-D_1EIJ1_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-LhN5JgeO.js";import"./useAnimationId-BsyXEGTp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5rtEYr00.js";import"./tooltipContext-3pVC19GE.js";import"./ErrorBarContext-C2oPAhQ2.js";import"./activeStyles-DZYHYdm_.js";import"./SetGraphicalItem-CZU_HqN4.js";import"./getZIndexFromUnknown-BO0gfpbs.js";import"./useEffectiveDataKey-8cfDXulc.js";import"./omit-C9DhcYFD.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
