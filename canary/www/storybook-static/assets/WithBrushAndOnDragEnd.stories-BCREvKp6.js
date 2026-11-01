import{R as t}from"./iframe-LXaU_yGQ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BSsrgEaY.js";import{B as p}from"./BarChart-BSweTlK2.js";import{X as l}from"./XAxis-p7HCxuCB.js";import{Y as h}from"./YAxis-CSeoCJK5.js";import{B as x}from"./Brush-C3AhHGNI.js";import{B as c}from"./Bar-vF4XoZWk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DbWwNOSn.js";import"./throttle-ByKIQNrZ.js";import"./index-DZIymj_T.js";import"./index-C00bVPiJ.js";import"./RechartsWrapper-D3XMumfr.js";import"./axisSelectors-COTFFsL0.js";import"./polarAxisSelectors-Bwd8WsKu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-xVZA29h1.js";import"./index-Cj2wRU1Y.js";import"./index-DCFuZ4eP.js";import"./renderedTicksSlice-bFWdrA3f.js";import"./index-D3Vd1Yho.js";import"./fillDefinitions-GJQeghKS.js";import"./CartesianChart-BiL3U0u_.js";import"./ZIndexPortal-B1CrZPtb.js";import"./CategoricalChart-DH4yc53T.js";import"./CartesianAxis-DZ_FsRV8.js";import"./Layer-CHoN3bhu.js";import"./Text-B2wTTXhn.js";import"./DOMUtils-wasDQX09.js";import"./ZIndexLayer-D76BtQdI.js";import"./Label-DYJ5zyBE.js";import"./types-WPs3xsFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-edsO3Rk5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CE9_TMcs.js";import"./useAnimationId-BI8ofMSC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-57-jWYU2.js";import"./tooltipContext-DgNaqLpi.js";import"./dataEntryStyles-CwUtW2sJ.js";import"./ErrorBarContext-DEyq_U4L.js";import"./activeStyles-PwSBVgUE.js";import"./SetGraphicalItem-GbWatXWt.js";import"./getZIndexFromUnknown-CDDdElLq.js";import"./useEffectiveDataKey-zCOJ1kMm.js";import"./omit-VLbbGC-r.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
