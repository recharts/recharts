import{R as t}from"./iframe-zw95Jg5I.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BhhR1tic.js";import{B as p}from"./BarChart-DjYer_ac.js";import{X as l}from"./XAxis-FSNVlg8z.js";import{Y as h}from"./YAxis-DxhDNNfO.js";import{B as x}from"./Brush-WWY33l4C.js";import{B as c}from"./Bar-CrGl-kvA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-oavmg9-5.js";import"./throttle-Cgnp6_V2.js";import"./index-CWbrX-i7.js";import"./index-CWy5ARPc.js";import"./RechartsWrapper-DNF4noKd.js";import"./axisSelectors-DAhbEMcv.js";import"./polarAxisSelectors-DUH0PWke.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXUDNojI.js";import"./index-BPsqxPXN.js";import"./index-BEzQf4L4.js";import"./renderedTicksSlice-BhGNFZVD.js";import"./index-bXT-B2Zu.js";import"./CartesianChart-CAbKVIox.js";import"./chartDataContext-DsEiNuFy.js";import"./CategoricalChart-DSpSOmf_.js";import"./CartesianAxis-Ps3DKwB1.js";import"./Layer-KXbvniH8.js";import"./Text-d1Lwh7G9.js";import"./pageBackground-04zbeTMB.js";import"./useId-CtBeXuXP.js";import"./ZIndexLayer-DT4lNh0N.js";import"./Label-B1gN_1pg.js";import"./dataEntryStyles-B6Pg3he4.js";import"./types-BkYRfFSe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Dzq6_wuP.js";import"./useAnimationId-DHyavBGa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B120DpgE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KL7GHwh1.js";import"./tooltipContext-BlO69eeP.js";import"./RegisterGraphicalItemId-Ci1zbwmF.js";import"./ErrorBarContext-D3KXG5mH.js";import"./SetGraphicalItem-D5SILBm3.js";import"./getZIndexFromUnknown-CtV9dAbo.js";import"./useEffectiveDataKey-ak6DNGcC.js";import"./omit-CK7M7hQH.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
