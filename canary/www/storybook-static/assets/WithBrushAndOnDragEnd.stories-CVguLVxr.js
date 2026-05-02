import{e as t}from"./iframe-DbVDg_ca.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BSVOQ7T-.js";import{B as p}from"./BarChart-DQa2lGWG.js";import{X as l}from"./XAxis-nk-GltPq.js";import{Y as h}from"./YAxis-C-wbbJhP.js";import{B as c}from"./Brush-CX_XQqPW.js";import{B as x}from"./Bar-D2gqqMwU.js";import{R as u}from"./RechartsHookInspector-WP52i-1p.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DgDD8GmR.js";import"./immer-0ZZjS5Nj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sJojUHlC.js";import"./index-CUo349tj.js";import"./hooks-8LGpZrMc.js";import"./axisSelectors-DuQQA8AF.js";import"./d3-scale-Ca2GXXvQ.js";import"./zIndexSlice-CDzSIoPc.js";import"./renderedTicksSlice-BYUGSQCb.js";import"./CartesianChart-BIeZSTsS.js";import"./chartDataContext-DkZqMAvH.js";import"./CategoricalChart-DW6_TUNV.js";import"./CartesianAxis-wfs3tk0I.js";import"./Layer-C9NfejAk.js";import"./Text-BjaMrcvh.js";import"./DOMUtils-DXLQ8uU1.js";import"./Label-CT2eYMKi.js";import"./ZIndexLayer-D5PjewgR.js";import"./types-9bS4DgjT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-By3RIlXL.js";import"./ReactUtils-ruqV-srf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-a-btUYcY.js";import"./isPlainObject-qXbjbrRe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C71dLN6n.js";import"./useAnimationId-BGASjBYn.js";import"./Trapezoid-DCNj78K7.js";import"./Sector-DIpZMX41.js";import"./Symbols-h61-aZIG.js";import"./symbol-suQNbvDu.js";import"./step-DVp28hgV.js";import"./Curve-7li-NOkq.js";import"./RegisterGraphicalItemId-BdjwpoFI.js";import"./ErrorBarContext-BvEmMKSO.js";import"./GraphicalItemClipPath-CLSG_HT0.js";import"./SetGraphicalItem-BwNPbTjt.js";import"./getZIndexFromUnknown-D-b5Gqbj.js";import"./graphicalItemSelectors-DRaebRWv.js";import"./index-SfPrSKbK.js";import"./ChartSizeDimensions-DQlshRXH.js";import"./OffsetShower-DH3pRQIv.js";import"./PlotAreaShower-D9cE9N3J.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
