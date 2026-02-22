import{e as t}from"./iframe-C2QqRKe7.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-PWQDmerQ.js";import{B as p}from"./BarChart-C4mOlhgQ.js";import{X as l}from"./XAxis-DNcvFPfK.js";import{Y as h}from"./YAxis-21rUvSzF.js";import{B as c}from"./Brush-1BSYDDAt.js";import{B as x}from"./Bar-DcVz9nqI.js";import{R as u}from"./RechartsHookInspector-CgITLFRP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7LXz8kjz.js";import"./immer-CHIvT254.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-uOO6_n61.js";import"./index-rLwxE0hv.js";import"./hooks-mESitlr_.js";import"./axisSelectors-BKaUJCrd.js";import"./d3-scale-dRIxyhfO.js";import"./zIndexSlice-BpAhelXi.js";import"./renderedTicksSlice-psJG_LWq.js";import"./CartesianChart-_z898-at.js";import"./chartDataContext-Cua8pUoe.js";import"./CategoricalChart-DTUutzp0.js";import"./CartesianAxis-se2SzLtu.js";import"./Layer-DCLj2Osy.js";import"./Text-DIlIMQQ1.js";import"./DOMUtils-9UeuBFxq.js";import"./Label-s7jamoYW.js";import"./ZIndexLayer-DIR-sv8W.js";import"./types-DlfTkI4e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DGqI9VgG.js";import"./ReactUtils-D05HJqIj.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CkOZGg75.js";import"./isPlainObject-DLKiFJlX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOyb4uG2.js";import"./useAnimationId-Bi88RhdV.js";import"./Trapezoid-Dk1NLMTJ.js";import"./Sector-BVmDGxYU.js";import"./Symbols-B81oQNtv.js";import"./symbol-CnCwPTjr.js";import"./step--bjVkvqq.js";import"./Curve-CBR7IDRo.js";import"./RegisterGraphicalItemId-j0z2KBnl.js";import"./ErrorBarContext-C3fSByYS.js";import"./GraphicalItemClipPath-IOucdNEs.js";import"./SetGraphicalItem-C5oBx3dN.js";import"./getZIndexFromUnknown-iSBot9gv.js";import"./graphicalItemSelectors-CXVWP7v4.js";import"./index-BnZqoCYA.js";import"./ChartSizeDimensions-BWtVWwLO.js";import"./OffsetShower-BY6uYDHq.js";import"./PlotAreaShower-DlAzy3wu.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
