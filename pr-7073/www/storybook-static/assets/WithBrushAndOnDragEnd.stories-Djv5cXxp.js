import{e as t}from"./iframe-DNAE1NhS.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-mXK7KdlW.js";import{B as p}from"./BarChart-CKcpHrxW.js";import{X as l}from"./XAxis-BXzG9_su.js";import{Y as h}from"./YAxis-Cl8JaIdm.js";import{B as c}from"./Brush-DqkbRySJ.js";import{B as x}from"./Bar-C7_VEExq.js";import{R as u}from"./RechartsHookInspector-CXdTs72e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CjxP23mN.js";import"./immer-CgyYfbuD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnyLV03c.js";import"./index-zEpWvrsz.js";import"./hooks-D9_8XsUT.js";import"./axisSelectors-CAHD1NoH.js";import"./d3-scale-9rqZbRzS.js";import"./zIndexSlice-Dz-Y6weB.js";import"./renderedTicksSlice-caOf_y68.js";import"./CartesianChart-hy_UmrJw.js";import"./chartDataContext-ugJXSBb3.js";import"./CategoricalChart-B3LDNru7.js";import"./CartesianAxis-ya5SmFCu.js";import"./Layer-D_bZVw-_.js";import"./Text-oeG0hSrI.js";import"./DOMUtils-MNEnNJaG.js";import"./Label-Czy9EWVi.js";import"./ZIndexLayer-NBg0M_kA.js";import"./types-BvNVkM_d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Cs2F9uWa.js";import"./ReactUtils-DmdO9I71.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DszuQs4M.js";import"./isPlainObject-YFgp9Ig4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cm__RLQd.js";import"./useAnimationId-BLg_egJR.js";import"./Trapezoid-D2GZv-Mv.js";import"./Sector-BPDHR2kf.js";import"./Symbols-DnMbrkmh.js";import"./symbol-CmAtNHVX.js";import"./step-DDruULJc.js";import"./Curve-DnknT2C5.js";import"./RegisterGraphicalItemId-Bn08OEO8.js";import"./ErrorBarContext-CfrG8dxY.js";import"./GraphicalItemClipPath-aQHsATLs.js";import"./SetGraphicalItem-1nnxs2qY.js";import"./getZIndexFromUnknown-No3Kp_YB.js";import"./graphicalItemSelectors-CnnCHwYo.js";import"./index-FFJywn3r.js";import"./ChartSizeDimensions-B5bHZnUB.js";import"./OffsetShower-Bw8a_rrw.js";import"./PlotAreaShower-BJMlxwGr.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
