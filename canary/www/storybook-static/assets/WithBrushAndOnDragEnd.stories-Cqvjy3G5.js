import{R as t}from"./iframe-XIWN-8LW.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CeTDvnmV.js";import{B as p}from"./BarChart-D_UD8bbH.js";import{X as l}from"./XAxis-xF4zDX5U.js";import{Y as h}from"./YAxis-DaPhatN5.js";import{B as x}from"./Brush-cml-rQ4l.js";import{B as c}from"./Bar-BoK5fl6t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B5b48pxf.js";import"./throttle-DRx8DeZx.js";import"./index-aVJjGtUe.js";import"./index-BkVjohbh.js";import"./RechartsWrapper-BeCgk11S.js";import"./axisSelectors-Ct9ZEPSa.js";import"./polarAxisSelectors-DQxdihyW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BvS2o_Zb.js";import"./index-CLmLkjoe.js";import"./index-DUogMgN_.js";import"./renderedTicksSlice-DpPQ5RFR.js";import"./index-pEcVg_GN.js";import"./fillDefinitions-BnpiLimK.js";import"./CartesianChart-Cb1xlur4.js";import"./ZIndexPortal-DjT5vY1_.js";import"./CategoricalChart-xnoIgStO.js";import"./CartesianAxis-BxPz-Jvl.js";import"./Layer-CxaTRkgO.js";import"./Text-DltUF9fa.js";import"./DOMUtils-CCpPdTbp.js";import"./ZIndexLayer-Bd21CySm.js";import"./Label-DO8sqqdZ.js";import"./types-CnZsW2lD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DPGWqLfL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-GJprns1h.js";import"./useAnimationId-BQkOAk0c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHUczxG_.js";import"./tooltipContext--w90yek2.js";import"./dataEntryStyles-GFsHahL2.js";import"./ErrorBarContext-BZ9_Mv4V.js";import"./activeStyles-C-BzGRm8.js";import"./SetGraphicalItem-DypkohdD.js";import"./getZIndexFromUnknown-Cp4HeYf6.js";import"./useEffectiveDataKey-qss65ryL.js";import"./omit-COE3kS8C.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
