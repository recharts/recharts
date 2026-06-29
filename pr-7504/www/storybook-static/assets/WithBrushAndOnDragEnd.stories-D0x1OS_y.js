import{R as t}from"./iframe-C8BOwi09.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BhlUeiz9.js";import{B as p}from"./BarChart-BIOyj4O2.js";import{X as l}from"./XAxis-Dm5Odjs3.js";import{Y as h}from"./YAxis-5qfCryrA.js";import{B as x}from"./Brush-tlYnf5aU.js";import{B as c}from"./Bar-C2U3c-NG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKEMBEBf.js";import"./index-C1vV4PmY.js";import"./index-B-s74sFu.js";import"./get-Cxci_11r.js";import"./resolveDefaultProps-SXD4-6tw.js";import"./isWellBehavedNumber-lzhpgNRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-A-Jl6gDU.js";import"./index-CXTehsJH.js";import"./index-TdmA2U4u.js";import"./renderedTicksSlice-LkhfGRkv.js";import"./axisSelectors--BiFDCId.js";import"./d3-scale-Aru4SClR.js";import"./CartesianChart-CPjCvOHT.js";import"./chartDataContext-C3Wv6QtC.js";import"./CategoricalChart-qjM85PCb.js";import"./CartesianAxis-CWGT70cF.js";import"./Layer--iJ-Hj_L.js";import"./Text-DAXgjhqJ.js";import"./DOMUtils-Bk8mghFc.js";import"./Label-D4SfTv0v.js";import"./ZIndexLayer-CKEhnbZx.js";import"./types-BPAGzNH6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Dtceov_d.js";import"./AnimatedItems-DJI9G60d.js";import"./useAnimationId-C1RCoeBd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B5iv9bX_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DN8fg87N.js";import"./RegisterGraphicalItemId-D2rzI2r-.js";import"./ErrorBarContext-DLDAFGHH.js";import"./GraphicalItemClipPath-DQUZZg6C.js";import"./SetGraphicalItem-544HumqF.js";import"./getZIndexFromUnknown-QOlWSk1A.js";import"./graphicalItemSelectors-Bizb05lq.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
