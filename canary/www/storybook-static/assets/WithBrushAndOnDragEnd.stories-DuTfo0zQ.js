import{e as t}from"./iframe-DYXgwBIj.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CLSXPhEJ.js";import{B as p}from"./BarChart-Bl9V_7Dp.js";import{X as l}from"./XAxis-DxuZp48g.js";import{Y as h}from"./YAxis-DLCMUUgi.js";import{B as c}from"./Brush-D8GW6wBg.js";import{B as x}from"./Bar-4pjzG_Tm.js";import{R as u}from"./RechartsHookInspector-DNZQsUA4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-xhU6-TKE.js";import"./immer-DqnPv083.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ4twCb0.js";import"./index-DKQaQPo5.js";import"./hooks-B36GXF-L.js";import"./axisSelectors-D1Sw3rlY.js";import"./d3-scale-DvhayWTq.js";import"./zIndexSlice-grNRpkcv.js";import"./renderedTicksSlice-BsOdr-UA.js";import"./CartesianChart-BhbBZsjR.js";import"./chartDataContext-CQgEv-1D.js";import"./CategoricalChart-8xICKxcP.js";import"./CartesianAxis-C_t8uogb.js";import"./Layer-B2chWpFo.js";import"./Text-1DsuNyNG.js";import"./DOMUtils-YQarvmoJ.js";import"./Label-BotO9q2I.js";import"./ZIndexLayer-D-ilahJA.js";import"./types-D3wyGAu1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Dn4q9DGD.js";import"./ReactUtils-D9ZXF6dc.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Cw5R38HO.js";import"./isPlainObject-BJALdUT1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2yqkvEMt.js";import"./useAnimationId-DLi04jG5.js";import"./Trapezoid-D95G9lkc.js";import"./Sector-CVKx1V34.js";import"./Symbols-JaciBV2o.js";import"./symbol-BlyA1o_2.js";import"./step-5UvXITCF.js";import"./Curve-DqnNZDut.js";import"./RegisterGraphicalItemId-BBYoprYG.js";import"./ErrorBarContext-BIMALam9.js";import"./GraphicalItemClipPath-BivSF4rD.js";import"./SetGraphicalItem-C0jCUDKT.js";import"./getZIndexFromUnknown-DymLvzWw.js";import"./graphicalItemSelectors-C-WQzubA.js";import"./index-DIOmg34x.js";import"./ChartSizeDimensions-DgpSyLAE.js";import"./OffsetShower-hXudHQen.js";import"./PlotAreaShower-DjlUc4SO.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
