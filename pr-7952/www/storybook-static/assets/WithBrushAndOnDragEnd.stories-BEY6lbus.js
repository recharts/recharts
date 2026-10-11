import{R as t}from"./iframe-BR4M1uiR.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-HrFSVAcv.js";import{B as p}from"./BarChart-Dl8sP87l.js";import{X as l}from"./XAxis-CcBq3_nh.js";import{Y as h}from"./YAxis-DWcZ5Lh0.js";import{B as x}from"./Brush-C9_avrq8.js";import{B as c}from"./Bar-4Fp57F5t.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-G6Y8pgni.js";import"./index-Ci_VIYcH.js";import"./index-BnaGZY2I.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BLjA4bYj.js";import"./isWellBehavedNumber-D_WQYNTo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0bWwFQm.js";import"./axisSelectors-BqweAZHb.js";import"./d3-scale-CeZrfwiY.js";import"./index-YkNArcGN.js";import"./index-D8NvIHNM.js";import"./renderedTicksSlice-BfPj2XQ-.js";import"./index-CncCwIwt.js";import"./CartesianChart-q49HIkvw.js";import"./chartDataContext-BuFcKplQ.js";import"./CategoricalChart-2FTjt8Lf.js";import"./CartesianAxis-CHydPwh7.js";import"./Layer-DlfW1ESK.js";import"./Text-VnSH714e.js";import"./pageBackground-DPb5heYZ.js";import"./useId-pURs8c9G.js";import"./useBackwardsCompatibleTheme-D05qWzDc.js";import"./Label-XYAyrwIP.js";import"./ZIndexLayer-CLaDw56X.js";import"./types-B-qT5SDC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-WDF83Cdx.js";import"./useAnimationId-AG0wMyfL.js";import"./dataEntryStyles-DLaplEnq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uO21666K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPXOp-Yk.js";import"./tooltipContext-CAZrkwKt.js";import"./ErrorBarContext-DuGO1Y_l.js";import"./GraphicalItemClipPath-yRc51fA7.js";import"./SetGraphicalItem-BfeYb81m.js";import"./getZIndexFromUnknown-891K1Cxo.js";import"./useEffectiveDataKey-B_fgXjH_.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
