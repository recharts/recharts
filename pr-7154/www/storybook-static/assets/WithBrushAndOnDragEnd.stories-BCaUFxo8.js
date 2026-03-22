import{e as t}from"./iframe-DsUMSIoB.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CZsQnfge.js";import{B as p}from"./BarChart-Duxwzqbf.js";import{X as l}from"./XAxis-BzmMsMrb.js";import{Y as h}from"./YAxis-CTnSzHcV.js";import{B as c}from"./Brush-BSJ8bxoc.js";import{B as x}from"./Bar-BcfvrqhD.js";import{R as u}from"./RechartsHookInspector-DFkKDQjz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxu6XJ62.js";import"./immer-D_NmV9ya.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mUXPQGkR.js";import"./index-BFxM37Jd.js";import"./hooks-VVLooFbP.js";import"./axisSelectors-BtEB30-b.js";import"./d3-scale-B0RJDOHU.js";import"./zIndexSlice-BDZOwce-.js";import"./renderedTicksSlice-TGaTZgu3.js";import"./CartesianChart-Duzb9tyy.js";import"./chartDataContext-DJEsKFHL.js";import"./CategoricalChart-LslF1x-i.js";import"./CartesianAxis-CoMq3-ST.js";import"./Layer-CW99gOx_.js";import"./Text-DgusKYHb.js";import"./DOMUtils-ByvJp_q1.js";import"./Label-DJgqAx1l.js";import"./ZIndexLayer-tLtAagmx.js";import"./types-DN9VSCi_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-anNrNI_B.js";import"./ReactUtils-BqswSBIq.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Dj4smYQ8.js";import"./isPlainObject-DFvEMqvd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIwirMVx.js";import"./useAnimationId-DmBkD_4u.js";import"./Trapezoid-tpniWtB4.js";import"./Sector-pL7nB78h.js";import"./Symbols-BAzW_gm6.js";import"./symbol-DKO9W9xf.js";import"./step-eBA07Zoi.js";import"./Curve-BkdTmnon.js";import"./RegisterGraphicalItemId-BclML1JJ.js";import"./ErrorBarContext-DPQTg4jn.js";import"./GraphicalItemClipPath-CgRDa1Kp.js";import"./SetGraphicalItem-k0XQScGi.js";import"./getZIndexFromUnknown-BNhmGvmH.js";import"./graphicalItemSelectors-BzQEGCwl.js";import"./index-CfUCN5Mt.js";import"./ChartSizeDimensions-CcoGZBL4.js";import"./OffsetShower-BdILJQRM.js";import"./PlotAreaShower-DssL7f_B.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
