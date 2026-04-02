import{e as t}from"./iframe-eSAJEZht.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DIP4cf6Y.js";import{B as p}from"./BarChart-9pEIEcAI.js";import{X as l}from"./XAxis-DBtpKE2p.js";import{Y as h}from"./YAxis-BH4pX6Iz.js";import{B as c}from"./Brush-B6pMlvyn.js";import{B as x}from"./Bar-DiPSM-V2.js";import{R as u}from"./RechartsHookInspector-CNBbry69.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhREbLw9.js";import"./immer-TNEPjPCB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CiRDGflb.js";import"./index-zRxxYhEY.js";import"./hooks-Q2uSt6yB.js";import"./axisSelectors-DyoITJEq.js";import"./d3-scale-CjiJ_ZTy.js";import"./zIndexSlice-BGPHYbVg.js";import"./renderedTicksSlice-B8h_p9LR.js";import"./CartesianChart-C2iAnTHm.js";import"./chartDataContext-eyhsy6xY.js";import"./CategoricalChart-B1JvHwji.js";import"./CartesianAxis-CGGz-Ws1.js";import"./Layer-Cp_zb8Y2.js";import"./Text-BIJyaKeQ.js";import"./DOMUtils-tcwXxObr.js";import"./Label-C16feiqK.js";import"./ZIndexLayer-D46bbrBq.js";import"./types-BwWrJ-BL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CBEOTzBv.js";import"./ReactUtils-H-FoJgDc.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Dy2Nr1AF.js";import"./isPlainObject-YNZwY72g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvSVsybX.js";import"./useAnimationId-Cu-vgNv6.js";import"./Trapezoid-CdRLetkI.js";import"./Sector-DkuyB5qD.js";import"./Symbols-DdU7u5vI.js";import"./symbol-56g7D4zb.js";import"./step-n_okOr0Q.js";import"./Curve-dniblYNk.js";import"./RegisterGraphicalItemId-BbmjudUD.js";import"./ErrorBarContext-BMrhnYpV.js";import"./GraphicalItemClipPath-8GCAR-eN.js";import"./SetGraphicalItem-x3BMDizg.js";import"./getZIndexFromUnknown-DvFuFSqO.js";import"./graphicalItemSelectors-CtTHxHbt.js";import"./index-BGg-RllE.js";import"./ChartSizeDimensions-DwToSRXW.js";import"./OffsetShower-UG9ad5J7.js";import"./PlotAreaShower-ltT9O7XE.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
