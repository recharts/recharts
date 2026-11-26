import{R as t}from"./iframe-Dc30QV19.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CpA2ZBZb.js";import{B as p}from"./BarChart-DijniHZX.js";import{X as l}from"./XAxis-BcaW8pnZ.js";import{Y as h}from"./YAxis-4iRuFsIi.js";import{B as x}from"./Brush-7qMy8zuz.js";import{B as c}from"./Bar-DAcc16z4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBlVWROq.js";import"./get-CjriyByo.js";import"./throttle-WMkM63z_.js";import"./index-BBeDNEC1.js";import"./index-BhEbM2Je.js";import"./RechartsWrapper-BRR6oB9d.js";import"./axisSelectors-BahrCffV.js";import"./polarAxisSelectors-DgLFgBab.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BSORqksa.js";import"./index-C7W3-csu.js";import"./index-LKWh_pde.js";import"./renderedTicksSlice-ComULkWM.js";import"./index-BZTDCkN5.js";import"./fillDefinitions-k1q4zEei.js";import"./CartesianChart-DJeDin18.js";import"./chartDataContext-P9nX9sOh.js";import"./CategoricalChart-f6DbLMMc.js";import"./CartesianAxis-CybNaUvq.js";import"./Layer-Ckk2aNrm.js";import"./Text-B2SIM4yQ.js";import"./ZIndexLayer-FU_VBeuI.js";import"./Label-pzKHNVcm.js";import"./types-Df_aU1u_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-m1FbV_av.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-iIoXGW1W.js";import"./useAnimationId-dTayRcrW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DX-4aapg.js";import"./tooltipContext-CKfMhL_F.js";import"./ErrorBarContext-CnjMgqWz.js";import"./activeStyles-CSTRknfO.js";import"./SetGraphicalItem-Bi2jD4aD.js";import"./getZIndexFromUnknown-BUaMzbe5.js";import"./useEffectiveDataKey-CqfC1MRQ.js";import"./omit-D5h9y2uM.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
