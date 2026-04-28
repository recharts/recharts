import{e as t}from"./iframe-DU2QcQF_.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BBRUJMgE.js";import{B as p}from"./BarChart-DTL0in7k.js";import{X as l}from"./XAxis-BTwSQmla.js";import{Y as h}from"./YAxis-Cz7bs7UA.js";import{B as c}from"./Brush-C7Z3ZIzi.js";import{B as x}from"./Bar-Cc30iIuN.js";import{R as u}from"./RechartsHookInspector-D0TcJcB2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRw4v6sg.js";import"./immer-D_hC97QS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dkm_90y8.js";import"./index-LW5E5x2X.js";import"./hooks-CLgIfPXm.js";import"./axisSelectors-DCuZe5xZ.js";import"./d3-scale-Cl2Mf9ve.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-DH5OVU_d.js";import"./renderedTicksSlice-DKMiT0hM.js";import"./CartesianChart-DdZk3nRt.js";import"./chartDataContext-BWCdO7Tf.js";import"./CategoricalChart-DI28mp2q.js";import"./CartesianAxis-CfZS-xOz.js";import"./Layer-CsymvJcW.js";import"./Text-C9SLmSKD.js";import"./DOMUtils-BQcJZQLN.js";import"./Label-Xfq-LPcv.js";import"./ZIndexLayer-BezITi0w.js";import"./types-CW6teSnw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-j-dZBCf6.js";import"./AnimatedItems-dOeoQkDw.js";import"./useAnimationId-u-3taHzi.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DoCRNyCQ.js";import"./isPlainObject-zOhZ7DbK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MTy_JW56.js";import"./Trapezoid-DGJrygRD.js";import"./Sector-foysTS17.js";import"./Symbols-BJFlDYmu.js";import"./symbol-B0GgNpuh.js";import"./step-Bh598Jf-.js";import"./Curve-C80_Q5kF.js";import"./RegisterGraphicalItemId-Cw3F3qyO.js";import"./ErrorBarContext-MDyyOlAz.js";import"./GraphicalItemClipPath-DML64_av.js";import"./SetGraphicalItem-BXFmGWYP.js";import"./getZIndexFromUnknown-B_AKOk7I.js";import"./graphicalItemSelectors-BxcGKM2X.js";import"./index-DyrGUy1I.js";import"./ChartSizeDimensions-B-rd_hON.js";import"./OffsetShower-BsYgMVad.js";import"./PlotAreaShower-D9gSylqx.js";const vt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Bt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,Bt as __namedExportsOrder,vt as default};
