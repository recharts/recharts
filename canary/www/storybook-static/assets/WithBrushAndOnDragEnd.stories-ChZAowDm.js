import{e as t}from"./iframe-DLKusaH2.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-OSXbFffx.js";import{B as p}from"./BarChart-O9KMWln2.js";import{X as l}from"./XAxis-BUV3YVxT.js";import{Y as h}from"./YAxis-BL7gWkiR.js";import{B as c}from"./Brush-8rwgGYwL.js";import{B as x}from"./Bar-DzaugutY.js";import{R as u}from"./RechartsHookInspector-twmg_15g.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CDQxtKgJ.js";import"./immer-DopQgQur.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJ9yMdSa.js";import"./index-DY64JRGf.js";import"./hooks-BDR2OTLs.js";import"./axisSelectors-DmwBGoOF.js";import"./d3-scale-D-d_ip1o.js";import"./zIndexSlice-DwCBvGVu.js";import"./renderedTicksSlice-CLJGAcv7.js";import"./CartesianChart-BJXvgRi8.js";import"./chartDataContext-DetDLZ8r.js";import"./CategoricalChart-CYNzwdSP.js";import"./CartesianAxis-CLffz-s6.js";import"./Layer-CRYoZDBs.js";import"./Text-BOg1Bx7_.js";import"./DOMUtils-BHhU0voP.js";import"./Label-BolsaftX.js";import"./ZIndexLayer-BNchc-lc.js";import"./types-9gVu3p3S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CV96zHQs.js";import"./ReactUtils-Bgb6ualA.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CwYLB_hF.js";import"./isPlainObject-DqS4h4Cl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZVl3FJ9j.js";import"./useAnimationId-BcRo8icb.js";import"./Trapezoid-IVY3pKxT.js";import"./Sector-BwEeuI-t.js";import"./Symbols-D_ER3HkZ.js";import"./symbol-CW5_VIgV.js";import"./step-jIStQ4yh.js";import"./Curve-DxlUhp1s.js";import"./RegisterGraphicalItemId-Co2yDXiB.js";import"./ErrorBarContext-DZOjNR9y.js";import"./GraphicalItemClipPath-Ac_55wTe.js";import"./SetGraphicalItem-f0Wubofs.js";import"./getZIndexFromUnknown-B19CTpS2.js";import"./graphicalItemSelectors-BzHGhbvs.js";import"./index-D68W2HqG.js";import"./ChartSizeDimensions-t4E4BRLz.js";import"./OffsetShower-KjsHbNXS.js";import"./PlotAreaShower-D_C1tqvZ.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
