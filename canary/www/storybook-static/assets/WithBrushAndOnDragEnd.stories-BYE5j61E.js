import{R as t}from"./iframe-BkOwE2GN.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Chy-hne0.js";import{B as p}from"./BarChart-BBWxrSqx.js";import{X as l}from"./XAxis-0fckSjiA.js";import{Y as h}from"./YAxis-hX7zZE17.js";import{B as x}from"./Brush-B63f6k1P.js";import{B as c}from"./Bar-CwOgKBHC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-NLCauKH2.js";import"./get-CjriyByo.js";import"./throttle-DAc5l_dD.js";import"./index-CH1j1Fpi.js";import"./index-ByxKcjsQ.js";import"./RechartsWrapper-CXzR8xrS.js";import"./axisSelectors-DGKEku6n.js";import"./polarAxisSelectors-BvSTSSsq.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-CTw2DMEK.js";import"./index-DLZbiRz5.js";import"./index-B_P6uzST.js";import"./renderedTicksSlice-Dl3anyA4.js";import"./index-nwTT5isQ.js";import"./fillDefinitions-l_67yLXZ.js";import"./CartesianChart-CPFxyOEU.js";import"./chartDataContext-DkGjRnrU.js";import"./CategoricalChart-6jzkaSCX.js";import"./CartesianAxis-DEhg_nUI.js";import"./Layer-CnUstnfJ.js";import"./Text-DYjefSTk.js";import"./ZIndexLayer-dRwAMNuu.js";import"./Label-y4X5dBPS.js";import"./types-CoO4ONhi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-R9P1sHzA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-jQhwNsi0.js";import"./useAnimationId-DWRfsMZ5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BE3bg2lY.js";import"./tooltipContext-DlfBTk9y.js";import"./ErrorBarContext-BuIxRivK.js";import"./activeStyles-fROkMw-p.js";import"./SetGraphicalItem-BSi-Voc1.js";import"./getZIndexFromUnknown-BGzvUspL.js";import"./useEffectiveDataKey-BySMHkBi.js";import"./omit-3dRxX8ce.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
