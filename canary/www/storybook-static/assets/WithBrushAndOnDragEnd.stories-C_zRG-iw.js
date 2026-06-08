import{R as t}from"./iframe-GBGc-iKq.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DP0tLqWW.js";import{B as p}from"./BarChart-DfISgIUO.js";import{X as l}from"./XAxis-BBjH0uDR.js";import{Y as h}from"./YAxis-mSAPjc-3.js";import{B as x}from"./Brush-DL8vURMU.js";import{B as c}from"./Bar-QHhZHYJ9.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-9IN4E6VX.js";import"./index-WIkdQGR_.js";import"./index-Bj7NMbSa.js";import"./get-DICUyaHN.js";import"./resolveDefaultProps-DIrI2E0T.js";import"./isWellBehavedNumber-Lbc_fCaY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CY1_ev_Z.js";import"./index-DDYWU-5r.js";import"./index-DEGNeWRW.js";import"./renderedTicksSlice-CwhUMpGJ.js";import"./axisSelectors-DUsVRTIw.js";import"./d3-scale-Dym64WYU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ci5TMZqv.js";import"./chartDataContext-Di_sY_cY.js";import"./CategoricalChart-L_ONP4HK.js";import"./CartesianAxis-DQP4bonx.js";import"./Layer-CDGRbd8f.js";import"./Text-B4CLUneY.js";import"./DOMUtils-BP3f5q3h.js";import"./Label-DSpdGeyH.js";import"./ZIndexLayer-BMlwN-1Q.js";import"./types-BTPiehg7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DRZw4DN2.js";import"./AnimatedItems-C29R-vhg.js";import"./useAnimationId-BXgA3n2L.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C36d9lkh.js";import"./ActiveShapeUtils-DlvuUpon.js";import"./RegisterGraphicalItemId-C9tnUoji.js";import"./ErrorBarContext-BIvto65z.js";import"./GraphicalItemClipPath-CocmCyqp.js";import"./SetGraphicalItem-5bSLaCIx.js";import"./getZIndexFromUnknown-D4tcK45P.js";import"./graphicalItemSelectors-CSv0afn4.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
