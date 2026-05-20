import{e as t}from"./iframe-HCWlV7eT.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-Cf1iFAtr.js";import{B as p}from"./BarChart-BBQdi61E.js";import{X as l}from"./XAxis-Cvv7ki52.js";import{Y as h}from"./YAxis-D1dMwbfR.js";import{B as c}from"./Brush-BCVkU7hE.js";import{B as x}from"./Bar-CWbvk1iQ.js";import{R as u}from"./RechartsHookInspector-DiUR5-Rd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CKTz6CIA.js";import"./immer-CyT7MAhj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3_OF8yL.js";import"./index-CG6p6UQd.js";import"./hooks-Bu1aMOxG.js";import"./axisSelectors-kc4WL651.js";import"./d3-scale-DGA5oTTZ.js";import"./zIndexSlice-BUPMHSoM.js";import"./renderedTicksSlice-DNGVWtDy.js";import"./CartesianChart-CIcvcNyp.js";import"./chartDataContext-C29Qu4zj.js";import"./CategoricalChart-DsLokalm.js";import"./CartesianAxis-Br883KRe.js";import"./Layer-BieoRt7-.js";import"./Text-Sb1Xn8CY.js";import"./DOMUtils-Bqm3Lq_z.js";import"./Label-Cz3tNLpR.js";import"./ZIndexLayer-DYTZmJpE.js";import"./types-BVJNSeSn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DIK5pHUy.js";import"./ReactUtils-C2TKIy08.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DMoSdW99.js";import"./isPlainObject-DzHCCxCs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CsPKVDyM.js";import"./useAnimationId-BbyheOhI.js";import"./Trapezoid-CtygYOR4.js";import"./Sector-BWvy9RzL.js";import"./Symbols-Eaix-2lc.js";import"./symbol-DfBAaUU7.js";import"./step-BzEMV51B.js";import"./Curve-B-66MxCQ.js";import"./RegisterGraphicalItemId-S6JUBuqk.js";import"./ErrorBarContext-D9407eJA.js";import"./GraphicalItemClipPath-BdouDh12.js";import"./SetGraphicalItem-C9MUiNjo.js";import"./getZIndexFromUnknown-CWn5s7WI.js";import"./graphicalItemSelectors-BNNBGRzE.js";import"./index-BHZHrA64.js";import"./ChartSizeDimensions-DdWY1IL4.js";import"./OffsetShower-XZyi8iCL.js";import"./PlotAreaShower-KC6xEH0b.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
