import{e as t}from"./iframe-B82q9u-Y.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-CKCQU2qV.js";import{B as p}from"./BarChart-DGe8x1Ef.js";import{X as l}from"./XAxis-BRaoe5W0.js";import{Y as h}from"./YAxis-CWyiNt5V.js";import{B as c}from"./Brush-LlQx4lrq.js";import{B as x}from"./Bar-C-qLvCZG.js";import{R as u}from"./RechartsHookInspector-z9cebFjB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-g5aDd7Yf.js";import"./immer-WiujJWUS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBADlju4.js";import"./index-DXyPKPXc.js";import"./hooks-Sri1sPLr.js";import"./axisSelectors-DXfv2Drb.js";import"./d3-scale-B8FZewzC.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-I2t58hxh.js";import"./renderedTicksSlice-CInncnPk.js";import"./CartesianChart-5ApupumH.js";import"./chartDataContext-D6HVVC2S.js";import"./CategoricalChart-DKDPW_6L.js";import"./CartesianAxis-U5xnp7fG.js";import"./Layer-C2GvyuKR.js";import"./Text-DlTF1_pF.js";import"./DOMUtils-CfA92o7z.js";import"./Label-yJEcHIim.js";import"./ZIndexLayer-DTDC0Rqe.js";import"./types-BjP-coDb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BAcgJM-p.js";import"./AnimatedItems-COwEU_uD.js";import"./useAnimationId-DLlegLLP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BGMFafl1.js";import"./ActiveShapeUtils-D-OS5cJ_.js";import"./RegisterGraphicalItemId-kL3h8ct-.js";import"./ErrorBarContext-BL5FMVHx.js";import"./GraphicalItemClipPath-BpOAg0aH.js";import"./SetGraphicalItem-BoZe1188.js";import"./getZIndexFromUnknown-BcWEO_oo.js";import"./graphicalItemSelectors-_7iDSOmF.js";import"./index-dYimQAlj.js";import"./ChartSizeDimensions-BGSkMu5K.js";import"./OffsetShower-DzS61Pg9.js";import"./PlotAreaShower-uXu1OgRK.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
