import{e as t}from"./iframe-DDxjm-WU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BDTW-iCp.js";import{B as p}from"./BarChart-CeuFiB9E.js";import{X as l}from"./XAxis-Bk56gde7.js";import{Y as h}from"./YAxis-CFpFu4li.js";import{B as c}from"./Brush-Bcjk4xoI.js";import{B as x}from"./Bar-WqS5OTOT.js";import{R as u}from"./RechartsHookInspector-Bsn_fuN0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_ucOoTo.js";import"./immer-Dkl5Am7g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bpo229F5.js";import"./index-c9CLkn1R.js";import"./hooks-YOhxCck_.js";import"./axisSelectors-z--bPkJA.js";import"./d3-scale-5ginP8HL.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-CyBi_8s9.js";import"./renderedTicksSlice-Bbo75at4.js";import"./CartesianChart-ChctIvnC.js";import"./chartDataContext-kNPZezMX.js";import"./CategoricalChart-CBIMgpMR.js";import"./CartesianAxis-ClZZ2QTc.js";import"./Layer-DLlz0gUf.js";import"./Text-Dhvbhtov.js";import"./DOMUtils-BA-rpJ1d.js";import"./Label-yPRdE_cG.js";import"./ZIndexLayer-BMzzahCv.js";import"./types-BJgxgmcc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Md3OOTSl.js";import"./AnimatedItems-CSkyjlHH.js";import"./useAnimationId-BR6TF1aX.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DLASNkc5.js";import"./isPlainObject-BBpCzhfD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IbIg2bFH.js";import"./Trapezoid--noiZBKT.js";import"./Sector-DsN_tQHR.js";import"./Symbols-KpMFDNBi.js";import"./symbol-rnYDxF4k.js";import"./step-SAK8fO-u.js";import"./Curve-Dkov4-pW.js";import"./RegisterGraphicalItemId-ClGGvm6o.js";import"./ErrorBarContext-DW-8h9VL.js";import"./GraphicalItemClipPath-DqVRZ_0S.js";import"./SetGraphicalItem-CuKG-JqA.js";import"./getZIndexFromUnknown-D6KNUSwG.js";import"./graphicalItemSelectors-B-9STNlh.js";import"./index-PKdkWvoA.js";import"./ChartSizeDimensions-DNtnVTHS.js";import"./OffsetShower-kAoxPyWs.js";import"./PlotAreaShower-CCGJY3Cl.js";const vt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
