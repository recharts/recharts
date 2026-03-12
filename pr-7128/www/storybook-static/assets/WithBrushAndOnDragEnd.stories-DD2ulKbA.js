import{e as t}from"./iframe-tnEFgkcx.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DqJ8srhf.js";import{B as p}from"./BarChart-BUvN52fi.js";import{X as l}from"./XAxis-DyD39sPk.js";import{Y as h}from"./YAxis-ExPMB155.js";import{B as c}from"./Brush-DmLfqY11.js";import{B as x}from"./Bar-DqsUuam3.js";import{R as u}from"./RechartsHookInspector-C8yNaUl0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BeZ1TWKo.js";import"./immer-ncBRdkeU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cR-RvqVo.js";import"./index-B4jDL_1j.js";import"./hooks-DptPG5bY.js";import"./axisSelectors-KZFlWzxW.js";import"./d3-scale-ByLEGZpF.js";import"./zIndexSlice-CXrfbzcc.js";import"./renderedTicksSlice-D0-SyI8-.js";import"./CartesianChart-TKSiJtpn.js";import"./chartDataContext-qO9BwWme.js";import"./CategoricalChart-a9SFhw6w.js";import"./CartesianAxis-BAHnc_tG.js";import"./Layer-DvhQWyN1.js";import"./Text-BKpNJ0c7.js";import"./DOMUtils-Bml29IBx.js";import"./Label-DekpC_Fs.js";import"./ZIndexLayer-BcZ51bY1.js";import"./types-1yHH6o1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C_CGt6pP.js";import"./ReactUtils-CCMVcigr.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CgS0gI7T.js";import"./isPlainObject-CCD3tKcT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bj9CslW_.js";import"./useAnimationId-CMZ4Qpmu.js";import"./Trapezoid-DLvbqVqP.js";import"./Sector-BeRUQC1b.js";import"./Symbols-DUWbDiG2.js";import"./symbol-Bc_lVtCg.js";import"./step-BN--2jEq.js";import"./Curve-DSeHhcSU.js";import"./RegisterGraphicalItemId-CBL_DLkS.js";import"./ErrorBarContext-BSDSa2Nb.js";import"./GraphicalItemClipPath-ByitOfMe.js";import"./SetGraphicalItem-B_lEpaDw.js";import"./getZIndexFromUnknown-AOSq841e.js";import"./graphicalItemSelectors-CrcIlVyu.js";import"./index-D_XUjRxy.js";import"./ChartSizeDimensions-CS0lJGsa.js";import"./OffsetShower-BTWXwS8x.js";import"./PlotAreaShower-CFtvb_hv.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
