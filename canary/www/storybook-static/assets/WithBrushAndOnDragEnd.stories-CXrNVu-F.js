import{e as t}from"./iframe-D0NgTmOF.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-CwgUv_ht.js";import{B as p}from"./BarChart-hbaZ9lC8.js";import{X as l}from"./XAxis-CncyYZDx.js";import{Y as h}from"./YAxis-CwDQurre.js";import{B as c}from"./Brush-PD1ziOSq.js";import{B as x}from"./Bar-_Ug1k7q3.js";import{R as u}from"./RechartsHookInspector-5yLt0C9L.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C2iJSQuR.js";import"./immer-DnKwXwYM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5gUoFOn.js";import"./index-DvYw8x0Z.js";import"./hooks-BjdflWes.js";import"./axisSelectors-D-soVtjN.js";import"./d3-scale-CuJiQ300.js";import"./zIndexSlice-B6knb3no.js";import"./renderedTicksSlice-B6w59eqG.js";import"./CartesianChart-vOQQa6wo.js";import"./chartDataContext-B3eSYf3f.js";import"./CategoricalChart-Cw-_htEg.js";import"./CartesianAxis-Ci5CupD_.js";import"./Layer-CdU29MCm.js";import"./Text-CYJBI_N5.js";import"./DOMUtils-B93EOx77.js";import"./Label-CwJJPXCN.js";import"./ZIndexLayer-CgbYN4dr.js";import"./types-BAabENvn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BV2fx3KY.js";import"./ReactUtils-CP67hvAP.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Ck9x9SAt.js";import"./isPlainObject-Cp-FcUrF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7KfHMDv.js";import"./useAnimationId-BMh-hzSk.js";import"./Trapezoid-Bw4_2Ajp.js";import"./Sector-D7Ir7kN1.js";import"./Symbols-BQ_Pkm6Y.js";import"./symbol-DTnIuW2s.js";import"./step-Dotb7kAI.js";import"./Curve-CmeNNcZa.js";import"./RegisterGraphicalItemId-CIKun5N4.js";import"./ErrorBarContext-DWShVRAe.js";import"./GraphicalItemClipPath-DIWpokpF.js";import"./SetGraphicalItem-7Ry64uPY.js";import"./getZIndexFromUnknown-CljXbuAW.js";import"./graphicalItemSelectors-CrhQHOrv.js";import"./index-CUywKB4R.js";import"./ChartSizeDimensions-KQoM2E8Q.js";import"./OffsetShower-18-bLdR4.js";import"./PlotAreaShower-C4z2y4fi.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
