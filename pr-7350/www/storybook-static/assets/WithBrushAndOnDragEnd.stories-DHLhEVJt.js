import{e as t}from"./iframe-B524E5yX.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-DWzVcokC.js";import{B as p}from"./BarChart-C0b7lf1e.js";import{X as l}from"./XAxis-DoED6gJL.js";import{Y as h}from"./YAxis-Doi3vP5C.js";import{B as c}from"./Brush-BlMrumcp.js";import{B as x}from"./Bar-BeEgQmum.js";import{R as u}from"./RechartsHookInspector-BHkEwc51.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-erGoKRoU.js";import"./immer-DblGCQ6f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kVOVOGBx.js";import"./index-Cxa1JxZ8.js";import"./hooks-C4xKpp4Q.js";import"./axisSelectors-DIkxL-UY.js";import"./d3-scale-1dd7ZUuT.js";import"./zIndexSlice-6cosYb1s.js";import"./renderedTicksSlice-BCQv1ELk.js";import"./CartesianChart-DygjFtzj.js";import"./chartDataContext-BHiuOcfW.js";import"./CategoricalChart-DT5wuxyP.js";import"./CartesianAxis-C4FbkudN.js";import"./Layer-a-5--1A5.js";import"./Text-DAjJQcIE.js";import"./DOMUtils-Cs0OrDMQ.js";import"./Label-LjLfzFR2.js";import"./ZIndexLayer-kw2kBg7s.js";import"./types-D278CuUF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-B8eJmi2-.js";import"./ReactUtils-rdzq-Cpq.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Be6-XL7t.js";import"./isPlainObject-Q96JMfqI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnF6718M.js";import"./useAnimationId-B8WApGhr.js";import"./Trapezoid-JGHb5kPs.js";import"./Sector-DHhMbTkM.js";import"./Symbols-DVHiTs4H.js";import"./symbol-FWxgSMGi.js";import"./step-e5eeyF96.js";import"./Curve-CP7expTy.js";import"./RegisterGraphicalItemId-D0FVAtQu.js";import"./ErrorBarContext-LOKpn0lF.js";import"./GraphicalItemClipPath-Day9CREm.js";import"./SetGraphicalItem-Cuswj8oR.js";import"./getZIndexFromUnknown-IehX3q3e.js";import"./graphicalItemSelectors-CV9AMpYP.js";import"./index-BXZ80ZzE.js";import"./ChartSizeDimensions-B4ZLNDb6.js";import"./OffsetShower-CeXcOY0B.js";import"./PlotAreaShower-CsAAvQPX.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
