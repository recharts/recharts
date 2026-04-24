import{e as t}from"./iframe-iXVZ0OWw.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Bs7awETv.js";import{B as p}from"./BarChart-DutAGXtk.js";import{X as l}from"./XAxis-Y2bxQYNa.js";import{Y as h}from"./YAxis-BONLIFGC.js";import{B as c}from"./Brush-s-9xaQ2g.js";import{B as x}from"./Bar-DpPX3MhS.js";import{R as u}from"./RechartsHookInspector-QPfA1UiQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DZrbJThI.js";import"./immer-D9XbeXAx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Al7ZScv5.js";import"./index-P8miOr9q.js";import"./hooks-hExiU42m.js";import"./axisSelectors-C0i3ctr0.js";import"./d3-scale-CKEOWdk4.js";import"./zIndexSlice-D699PQjh.js";import"./renderedTicksSlice-CFlbd-Pg.js";import"./CartesianChart-CmpgeL8p.js";import"./chartDataContext-BSmZPOfG.js";import"./CategoricalChart-C87NLSKj.js";import"./CartesianAxis-8r9ztVGp.js";import"./Layer-CGbljtJR.js";import"./Text-BTO53QFq.js";import"./DOMUtils-BF1xhoe1.js";import"./Label-DFdLWFZO.js";import"./ZIndexLayer-Bsv83kPu.js";import"./types-BHwUrVE7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BuOnD9f8.js";import"./ReactUtils-DHe6gE8g.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DLIttevF.js";import"./isPlainObject-C5HoPG-J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSd4AbXR.js";import"./useAnimationId-B_Uu5T7V.js";import"./Trapezoid-CQSpJBVW.js";import"./Sector-BBLCd5Jd.js";import"./Symbols-vgP9iBxE.js";import"./symbol-C3fUoARJ.js";import"./step-C3QbnIY1.js";import"./Curve-8m_6XEtl.js";import"./RegisterGraphicalItemId-BvNsmO5D.js";import"./ErrorBarContext-Bl38LcUT.js";import"./GraphicalItemClipPath-CbkDaRj8.js";import"./SetGraphicalItem-BA2l-KDv.js";import"./getZIndexFromUnknown-B_TEGjvf.js";import"./graphicalItemSelectors-Sfmz7aRe.js";import"./index-czQzbvEN.js";import"./ChartSizeDimensions-iHbrzIWQ.js";import"./OffsetShower-dcduOxOC.js";import"./PlotAreaShower-BzP3r89Q.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
