import{e as t}from"./iframe-CIxNp6W3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-ZcVH4_uJ.js";import{B as p}from"./BarChart-B6UEpFph.js";import{X as l}from"./XAxis-DSbNXcpO.js";import{Y as h}from"./YAxis-Dt9ZpeSD.js";import{B as c}from"./Brush-C1R-3K1p.js";import{B as x}from"./Bar-BcfvpKem.js";import{R as u}from"./RechartsHookInspector-B8l4NQFC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cf5_CJke.js";import"./immer-CkfrG0rl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CnQHtrMt.js";import"./index-Cib5zjST.js";import"./hooks-BNI7_4lT.js";import"./axisSelectors-BeBP2I3U.js";import"./d3-scale-BQ18Pqvj.js";import"./zIndexSlice-BEW6pf_v.js";import"./renderedTicksSlice-CbtbEbDH.js";import"./CartesianChart-CaQ1UeLW.js";import"./chartDataContext-DEZM9FrZ.js";import"./CategoricalChart-FVnBP1Tu.js";import"./CartesianAxis-vyecr7Hl.js";import"./Layer-Bp29xhoh.js";import"./Text-B-dRdN-u.js";import"./DOMUtils-SOpGz0EB.js";import"./Label-DM_zt9zM.js";import"./ZIndexLayer-DPYjXPVc.js";import"./types-D88TaevE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BltSJ5jf.js";import"./ReactUtils-CD81hbcy.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DJ7hB8mH.js";import"./isPlainObject-B_udAERF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDKHqCIu.js";import"./useAnimationId-BJAtAhRd.js";import"./Trapezoid-BynO58oQ.js";import"./Sector-NGTsm_Cr.js";import"./Symbols-CH9tQV3q.js";import"./symbol-R0iacGzj.js";import"./step-CuAsm7Fe.js";import"./Curve-CcclPR5V.js";import"./RegisterGraphicalItemId-B3XRN-uf.js";import"./ErrorBarContext-Dko46g4M.js";import"./GraphicalItemClipPath-DxCJ5NSr.js";import"./SetGraphicalItem-CExaHKdU.js";import"./getZIndexFromUnknown-C4OsV5_f.js";import"./graphicalItemSelectors-AVx7kv9h.js";import"./index-CEgQsKlh.js";import"./ChartSizeDimensions-CNahkAGh.js";import"./OffsetShower-CBcMXDRG.js";import"./PlotAreaShower-BJdN30iA.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
