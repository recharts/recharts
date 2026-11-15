import{R as t}from"./iframe-Bah9cDPf.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D6NwopLq.js";import{B as p}from"./BarChart-h_CH_TL-.js";import{X as l}from"./XAxis-CUlouZeJ.js";import{Y as h}from"./YAxis-I4iqsmgp.js";import{B as x}from"./Brush-B-kYPSku.js";import{B as c}from"./Bar-CQ384sUE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-zC5o00WN.js";import"./throttle-BjlLZ4wO.js";import"./index-D6Fwvcda.js";import"./index-CvqzOiHn.js";import"./RechartsWrapper-CuqmEJPa.js";import"./axisSelectors-BJF83DO6.js";import"./polarAxisSelectors-CEDelL9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLITEdPK.js";import"./index-FRb1AgAe.js";import"./index-CadkBFdQ.js";import"./renderedTicksSlice-CiPoI8vI.js";import"./index-flr5alNa.js";import"./fillDefinitions-BbHKQE2Y.js";import"./CartesianChart-DT-YIr9t.js";import"./chartDataContext-9AmAFOH8.js";import"./CategoricalChart-DcONsU4c.js";import"./CartesianAxis-Bt_lCqiI.js";import"./Layer-CD06LZri.js";import"./Text-Ct-0y4jN.js";import"./ZIndexLayer-DdBSJIQM.js";import"./Label-BLtLxFh_.js";import"./types-C6A66RfZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BkXi-SmE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C-T60wMT.js";import"./useAnimationId-DEYdhNFn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHFZOTDo.js";import"./tooltipContext-NMmUXLpN.js";import"./ErrorBarContext-BtmuWUeb.js";import"./activeStyles-C-zEEDQQ.js";import"./SetGraphicalItem-DSHrOFY_.js";import"./getZIndexFromUnknown-CKMf31u1.js";import"./useEffectiveDataKey-cBqedM3V.js";import"./omit-C3tmWtq5.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
