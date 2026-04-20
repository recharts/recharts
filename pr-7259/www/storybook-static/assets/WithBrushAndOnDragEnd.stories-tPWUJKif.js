import{e as t}from"./iframe-DV9Ev_ie.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DZA7w_Bp.js";import{B as p}from"./BarChart-BFcKrbdP.js";import{X as l}from"./XAxis-D2587yBO.js";import{Y as h}from"./YAxis-Bm2CKIBG.js";import{B as c}from"./Brush-Bw3iQhFH.js";import{B as x}from"./Bar-DOzlhSd1.js";import{R as u}from"./RechartsHookInspector-lqIBTgi7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Df82JNH7.js";import"./immer-BixWiXhD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhKJ-pN_.js";import"./index-Bky92Y6v.js";import"./hooks-DHdaviyJ.js";import"./axisSelectors-B_EYpjD9.js";import"./d3-scale-B-Q90L68.js";import"./zIndexSlice-BRPsmEL1.js";import"./renderedTicksSlice-DCke5O88.js";import"./CartesianChart-Cbu_0e1L.js";import"./chartDataContext-DSMYXZ4e.js";import"./CategoricalChart-DJtN3jt_.js";import"./CartesianAxis-DWCZU6Tq.js";import"./Layer-BqOaf8xV.js";import"./Text--RFKRppg.js";import"./DOMUtils-CiIcfYdd.js";import"./Label--ztUVZ3i.js";import"./ZIndexLayer-C8euaCum.js";import"./types-8qlrq-tq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Cy90M4Ya.js";import"./ReactUtils-DkzvKT6G.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Duc_m_vE.js";import"./isPlainObject-B3OPGy8K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-FILpJ6On.js";import"./useAnimationId-CtSlzYdH.js";import"./Trapezoid-sNlfsjwh.js";import"./Sector-C5qUq4cG.js";import"./Symbols-H35j_AL3.js";import"./symbol-BxNtN3Tt.js";import"./step-Ct5f--oN.js";import"./Curve-BVz3ddlm.js";import"./RegisterGraphicalItemId-fV7oEbJx.js";import"./ErrorBarContext-KDIj2oXC.js";import"./GraphicalItemClipPath-DvLqBiqP.js";import"./SetGraphicalItem-DIvDoWjl.js";import"./getZIndexFromUnknown-TAb8F4UE.js";import"./graphicalItemSelectors-BUYscEO3.js";import"./index-ECRT-WFn.js";import"./ChartSizeDimensions-CdNN_o6b.js";import"./OffsetShower-BssOKB-O.js";import"./PlotAreaShower-BZvFi-F4.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
