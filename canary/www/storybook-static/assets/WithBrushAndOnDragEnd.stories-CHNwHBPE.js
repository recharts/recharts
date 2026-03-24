import{e as t}from"./iframe-7k9yEKZX.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DyKOzX9B.js";import{B as p}from"./BarChart-BhpXRQXg.js";import{X as l}from"./XAxis-BTCs_Vgw.js";import{Y as h}from"./YAxis-fzIEKsic.js";import{B as c}from"./Brush-Dqvz7X99.js";import{B as x}from"./Bar-sAwZJklH.js";import{R as u}from"./RechartsHookInspector-DG9apDpf.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CcSp36mS.js";import"./immer-CHH-Iajc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BvLvkhZj.js";import"./index-DvINa2Wr.js";import"./hooks-D25WTasM.js";import"./axisSelectors-aGv317tx.js";import"./d3-scale-BRwFQSv2.js";import"./zIndexSlice-CzkFlcL3.js";import"./renderedTicksSlice-B6_Lm1vJ.js";import"./CartesianChart-CbJvKkCN.js";import"./chartDataContext-B5LGZgkJ.js";import"./CategoricalChart-2PgGLAlf.js";import"./CartesianAxis-CWYl_TTU.js";import"./Layer--w1IvBzA.js";import"./Text-BUDAKONF.js";import"./DOMUtils-DJqsII1h.js";import"./Label-CVjnPCaB.js";import"./ZIndexLayer-BBlmEaho.js";import"./types-DqFJB-g8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-tIh0Fo_G.js";import"./ReactUtils-lnChZv_I.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BIc0h3uD.js";import"./isPlainObject-C5PcijRi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSQfZW4V.js";import"./useAnimationId-B6Q9Zk2l.js";import"./Trapezoid-DiILFpL9.js";import"./Sector-DIls0L6H.js";import"./Symbols-BCtTTPL2.js";import"./symbol-DLFZyuT9.js";import"./step-D_5WqJsr.js";import"./Curve-CJBWJgGH.js";import"./RegisterGraphicalItemId-B6g2rW0Q.js";import"./ErrorBarContext-YgH0UMwB.js";import"./GraphicalItemClipPath-wqgrdPJj.js";import"./SetGraphicalItem-DursPdMk.js";import"./getZIndexFromUnknown-Dcy4S22Y.js";import"./graphicalItemSelectors-gKgcr4o0.js";import"./index-BKACCO4D.js";import"./ChartSizeDimensions-D1SSOw56.js";import"./OffsetShower-D7759kd2.js";import"./PlotAreaShower-qx9-nPqs.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
