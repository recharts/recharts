import{e as t}from"./iframe-Dv2EI0Ju.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D1mGNef5.js";import{B as p}from"./BarChart-BkBEGVRR.js";import{X as l}from"./XAxis-BxPBpU10.js";import{Y as h}from"./YAxis-Dl3Sd1eT.js";import{B as c}from"./Brush-DLk76xy7.js";import{B as x}from"./Bar-pm4t2-Hh.js";import{R as u}from"./RechartsHookInspector-CyibsFS2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BAehELTf.js";import"./immer-C8dYrQHT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-bNtyFajX.js";import"./index-Bc1bjXU3.js";import"./hooks-CFaXLGcT.js";import"./axisSelectors-DnSj8kaj.js";import"./d3-scale-Bcv8ayB1.js";import"./zIndexSlice-bRjNTWyo.js";import"./renderedTicksSlice-C1FuEPzK.js";import"./CartesianChart-BH7dqpan.js";import"./chartDataContext-BhR7gaS3.js";import"./CategoricalChart-rOoRnQL6.js";import"./CartesianAxis-Ci9kjPzN.js";import"./Layer-DEwUBVRy.js";import"./Text-C-pvoFVV.js";import"./DOMUtils-CeCikA4p.js";import"./Label-CoVOGhvs.js";import"./ZIndexLayer-yLy7ki0K.js";import"./types-BOTa8dCr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-WuIpWmu1.js";import"./ReactUtils-CPqsARhu.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BasgF1mW.js";import"./isPlainObject-INKspUfV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYsgtCMq.js";import"./useAnimationId-CFJ1HB8y.js";import"./Trapezoid-D6Z4JPgp.js";import"./Sector-D8FF4WXP.js";import"./Symbols-Ol_rIUwX.js";import"./symbol-CAp9PJmI.js";import"./step-CXEpNkoj.js";import"./Curve-BYfhifTo.js";import"./RegisterGraphicalItemId-Dt1T6Nvh.js";import"./ErrorBarContext-TBQU4_4Y.js";import"./GraphicalItemClipPath-QbozzGmj.js";import"./SetGraphicalItem-CO0LpAHO.js";import"./getZIndexFromUnknown-BT0xWnFT.js";import"./graphicalItemSelectors-C90ZStZx.js";import"./index-BQUBjWw-.js";import"./ChartSizeDimensions-BOSou-B6.js";import"./OffsetShower-Df0dFfne.js";import"./PlotAreaShower-CPcJGB3D.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
