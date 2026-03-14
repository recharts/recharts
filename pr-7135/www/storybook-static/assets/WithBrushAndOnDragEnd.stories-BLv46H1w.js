import{e as t}from"./iframe-CMkrvckg.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-C-j9cVnD.js";import{B as p}from"./BarChart-DoL4VgOw.js";import{X as l}from"./XAxis-CRTScQzT.js";import{Y as h}from"./YAxis-DuUTIFNy.js";import{B as c}from"./Brush-CSoltnVQ.js";import{B as x}from"./Bar-D5d5Qvab.js";import{R as u}from"./RechartsHookInspector-LPNgAumr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0hHUpMbb.js";import"./immer-CyD0Wx6o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_AEo7CP.js";import"./index-l2b25tqQ.js";import"./hooks-z2F_PL2D.js";import"./axisSelectors-DiKss4V_.js";import"./d3-scale-fpsdvWAN.js";import"./zIndexSlice-CRGV0CLv.js";import"./renderedTicksSlice-DRtBvqzi.js";import"./CartesianChart-mSJGg3IH.js";import"./chartDataContext-Dg6bbq-C.js";import"./CategoricalChart-Bl6nS1b9.js";import"./CartesianAxis-BQn2ecgs.js";import"./Layer-4Y2Bpro8.js";import"./Text-CfL4AkJ2.js";import"./DOMUtils-CY4V2W-_.js";import"./Label-CK8WpSeL.js";import"./ZIndexLayer--DEMgBxJ.js";import"./types-h_n1Y6CX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Cpt0PMSo.js";import"./ReactUtils-koRtCpPb.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-fAQzD1Cv.js";import"./isPlainObject-E65nxFXT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXlSVzkG.js";import"./useAnimationId-Dnz94C6_.js";import"./Trapezoid-B-eKIWgm.js";import"./Sector-BAVvYkxC.js";import"./Symbols-C3K856pn.js";import"./symbol-C1RL9RI_.js";import"./step-BgKCtsuA.js";import"./Curve-D0J3TcJs.js";import"./RegisterGraphicalItemId-B_jKurhL.js";import"./ErrorBarContext-DR1SZQJs.js";import"./GraphicalItemClipPath-CdBUcuRI.js";import"./SetGraphicalItem-D8O9NSBD.js";import"./getZIndexFromUnknown-DgsYQL7u.js";import"./graphicalItemSelectors-CC8-ccz9.js";import"./index-BpykTG3u.js";import"./ChartSizeDimensions-tEh5XVCc.js";import"./OffsetShower-CI6ZxkzS.js";import"./PlotAreaShower-CiPqTN59.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
