import{R as t}from"./iframe-DtzldFfh.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-PhkkSvay.js";import{B as p}from"./BarChart-CIc09VXs.js";import{X as l}from"./XAxis-BY5CXCjh.js";import{Y as h}from"./YAxis-CQZ6A0GW.js";import{B as x}from"./Brush-Cs1w5czD.js";import{B as c}from"./Bar-CscaL18R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-u2nTClVy.js";import"./throttle-Drk_UoQx.js";import"./index-CCZfAL_G.js";import"./index-CuN-tN9X.js";import"./RechartsWrapper-RpB-MHrg.js";import"./axisSelectors-C2izPxUf.js";import"./polarAxisSelectors-IPVOZM3m.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmMEJmfI.js";import"./index-xLc8fata.js";import"./index-6_OYP7D7.js";import"./renderedTicksSlice-DbXdst8y.js";import"./index-OfVoCx4o.js";import"./fillDefinitions-4fWzE3Hc.js";import"./CartesianChart-D8rXmJzw.js";import"./chartDataContext-BNrACUYr.js";import"./CategoricalChart-Bkw2UtyY.js";import"./CartesianAxis-DxmrFkoo.js";import"./Layer-BcJtH6wk.js";import"./Text-BCSLlBnR.js";import"./ZIndexLayer-BWdFNyrE.js";import"./Label-DAuHelmL.js";import"./types-aakKZZv0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-kT4_La43.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sBf3lxLL.js";import"./useAnimationId-Dzlg4g7S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lUUDRG4C.js";import"./tooltipContext-uJRo-_HY.js";import"./ErrorBarContext-CFgTAQbG.js";import"./activeStyles-BesdgLFE.js";import"./SetGraphicalItem-31k7kJYq.js";import"./getZIndexFromUnknown-CIvTotf4.js";import"./useEffectiveDataKey-BP-D5MQu.js";import"./omit-B1g3ijZ2.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
