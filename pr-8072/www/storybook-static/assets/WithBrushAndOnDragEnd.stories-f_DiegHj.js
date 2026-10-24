import{R as t}from"./iframe-z3NgSViZ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BX0CZtnZ.js";import{B as p}from"./BarChart-BkJl7lnM.js";import{X as l}from"./XAxis-6HQNOcHb.js";import{Y as h}from"./YAxis-Cq1FHamq.js";import{B as x}from"./Brush-D7vOC_iM.js";import{B as c}from"./Bar-ny9MIXZN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwdrNliT.js";import"./index-B3bVO830.js";import"./index-h-xMeUpP.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKxZJqnD.js";import"./isWellBehavedNumber-B9JEbcQX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_oQRH40.js";import"./axisSelectors-CgbkNJhz.js";import"./d3-scale-CwYOu9hN.js";import"./index-CZd_v0hL.js";import"./index-gkGbSS0A.js";import"./renderedTicksSlice-DYq8RKWJ.js";import"./index-bcahlE0Z.js";import"./CartesianChart-BZn7jg65.js";import"./chartDataContext-rha9Z1YY.js";import"./CategoricalChart-DXqdBwWs.js";import"./CartesianAxis-aatvopbC.js";import"./Layer-DIcps5If.js";import"./Text-Bf3Z0ESX.js";import"./pageBackground-SSHR1dqO.js";import"./useId-BBfhtQXH.js";import"./useBackwardsCompatibleTheme-DpJUriCO.js";import"./Label-Cv5DkZGS.js";import"./ZIndexLayer-B4GmRtpr.js";import"./dataEntryStyles-C3z4X2RS.js";import"./types-2rYpOkQj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CeGdwWio.js";import"./useAnimationId-Cz2G0J8W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BneWyhZX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CBpakVvV.js";import"./tooltipContext-ByiR1jPw.js";import"./RegisterGraphicalItemId-BSkjC-ao.js";import"./ErrorBarContext-Cu9qYyvb.js";import"./SetGraphicalItem-C6QUze-d.js";import"./getZIndexFromUnknown-Cmh0Tl84.js";import"./useEffectiveDataKey-CRDGSrQh.js";import"./omit-DX_AvoGg.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
