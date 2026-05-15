import{e as t}from"./iframe-BwSUf2T9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-kNUesU9n.js";import{B as p}from"./BarChart-BJtt103I.js";import{X as l}from"./XAxis-DMsA7lKM.js";import{Y as h}from"./YAxis-CuVkr_B5.js";import{B as c}from"./Brush-Dn1yx05f.js";import{B as x}from"./Bar-BRccvehd.js";import{R as u}from"./RechartsHookInspector-DKqzdAWN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CvrFLXNt.js";import"./immer-7Mb6ATLS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4BCl0_T5.js";import"./index-DweiLrJJ.js";import"./hooks-DWJz6m6D.js";import"./axisSelectors-BxFZbnk8.js";import"./d3-scale-4uUuwoJk.js";import"./zIndexSlice-CtGAVWci.js";import"./renderedTicksSlice-BDQYkSRg.js";import"./CartesianChart-Bob7JQC-.js";import"./chartDataContext-DGesBm7c.js";import"./CategoricalChart-DQIJaSSS.js";import"./CartesianAxis-D9SaV3-s.js";import"./Layer-CG8DX7G3.js";import"./Text-BIBt_YS0.js";import"./DOMUtils-DuReS6JS.js";import"./Label-cBW6O7Up.js";import"./ZIndexLayer-Bv5glbFY.js";import"./types-CNlhQ7_N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Cr6veTbJ.js";import"./ReactUtils-BlFNJVa6.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-N1muSzDi.js";import"./isPlainObject-BZM5eFQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CW7YI0Bu.js";import"./useAnimationId-DY4wSWRx.js";import"./Trapezoid-BeLgkWe2.js";import"./Sector-D_JRIQS4.js";import"./Symbols-CCCMBfqC.js";import"./symbol-Cn5r8HhL.js";import"./step-CwM1BVfC.js";import"./Curve-DXAcp3xR.js";import"./RegisterGraphicalItemId-fD1_o_b6.js";import"./ErrorBarContext-BaQDv8aw.js";import"./GraphicalItemClipPath-bwNzittR.js";import"./SetGraphicalItem-DlbF6pEY.js";import"./getZIndexFromUnknown-2gyxRT_K.js";import"./graphicalItemSelectors-Bo4D_Iel.js";import"./index-D71go6ze.js";import"./ChartSizeDimensions-DuDQVVyz.js";import"./OffsetShower-3pww61PI.js";import"./PlotAreaShower-CkcQ7s4a.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
