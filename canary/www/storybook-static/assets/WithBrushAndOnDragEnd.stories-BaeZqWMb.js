import{R as t}from"./iframe-D_khPHZ1.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-KFlckT-7.js";import{B as p}from"./BarChart-DelPi0H6.js";import{X as l}from"./XAxis-CG7KNKev.js";import{Y as h}from"./YAxis-CYrms82_.js";import{B as x}from"./Brush-CjaZWoTG.js";import{B as c}from"./Bar-SEmD42Jg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BBn7lrSC.js";import"./index-CB03tEHO.js";import"./index-BuxDgG-t.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BBG9DHK8.js";import"./isWellBehavedNumber-DGsU9FBh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Do2gsgG0.js";import"./axisSelectors-CBjKjY28.js";import"./d3-scale-BLOap0UK.js";import"./index-syOpg8yK.js";import"./index-BI2dlpsL.js";import"./renderedTicksSlice-Jho7gpOC.js";import"./index-CHrlhwwU.js";import"./CartesianChart-Ci9HbE6G.js";import"./chartDataContext-DTR5p3jS.js";import"./CategoricalChart-Bfua2ObC.js";import"./CartesianAxis-DtPap_2c.js";import"./Layer-D1docXzT.js";import"./Text-CRLTQjiS.js";import"./pageBackground-Cdf9H4fo.js";import"./useId-DisFqhsr.js";import"./useBackwardsCompatibleTheme-BLiMjfFD.js";import"./Label-DNajAghq.js";import"./ZIndexLayer-BGvEmvHh.js";import"./dataEntryStyles-2My5Q2VA.js";import"./types-DL7z7syQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-DVSsJDko.js";import"./useAnimationId-BOA4oZA_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BifmVm-G.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8SJzoVE.js";import"./tooltipContext-DVHndJ9j.js";import"./RegisterGraphicalItemId-CFGUNGbT.js";import"./ErrorBarContext-DWMtIAoI.js";import"./SetGraphicalItem-CGqBV4nA.js";import"./getZIndexFromUnknown-BcdX0_Uj.js";import"./useEffectiveDataKey-B2F1WAcU.js";import"./omit-BMLwajrp.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
