import{R as t}from"./iframe-Dw3JnrOz.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DzgPoe88.js";import{B as p}from"./BarChart-BCz_4B4C.js";import{X as l}from"./XAxis-CeCu2pnu.js";import{Y as h}from"./YAxis-D8Dw7kMb.js";import{B as x}from"./Brush-DU2_IQWZ.js";import{B as c}from"./Bar-CY3ONHkO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-KuOt2oEs.js";import"./index-AkdZgKxJ.js";import"./index-Df7xC6ih.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK31nY-V.js";import"./isWellBehavedNumber-OYIp1mp-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgRfQaZT.js";import"./axisSelectors-BViTer26.js";import"./d3-scale-DtTNlvys.js";import"./index-NzzUdmM6.js";import"./index-eNZ0M5_3.js";import"./renderedTicksSlice-CkYrDZg9.js";import"./index-6yBVDhmv.js";import"./CartesianChart-jDDHmd1k.js";import"./chartDataContext-DUv1rr29.js";import"./CategoricalChart-CiCkCm9Q.js";import"./CartesianAxis-ChIBsRH5.js";import"./Layer-L7RVOPKy.js";import"./Text-DV8khfZM.js";import"./pageBackground-tLsrP4n_.js";import"./useId-BKsEmLHH.js";import"./useBackwardsCompatibleTheme-C2fZnq5O.js";import"./Label-Cbir5i7I.js";import"./ZIndexLayer-BbE4uISJ.js";import"./types-B5MEMPd3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-D2NfbCgD.js";import"./useAnimationId-w1IecijC.js";import"./dataEntryStyles-BN9XKvZb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdI5JjXa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJ0fejl7.js";import"./tooltipContext-Bpw82xyU.js";import"./ErrorBarContext-BDhr-5sg.js";import"./GraphicalItemClipPath-CB4KxVAO.js";import"./SetGraphicalItem-DfUVqQ_3.js";import"./getZIndexFromUnknown-BpbcoR1O.js";import"./useEffectiveDataKey-CnfRoJ-A.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
