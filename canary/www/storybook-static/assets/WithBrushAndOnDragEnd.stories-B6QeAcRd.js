import{e as t}from"./iframe-tCDnQpzm.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-BqXouEks.js";import{B as p}from"./BarChart-BB3TOWJ6.js";import{X as l}from"./XAxis-DlOxqtL0.js";import{Y as h}from"./YAxis-0OaZrEQM.js";import{B as c}from"./Brush-DVL-LQd3.js";import{B as x}from"./Bar-BBUyAmyG.js";import{R as u}from"./RechartsHookInspector-BX_0sbG1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6_84qa3.js";import"./immer-BCZknwAa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYnmCVjv.js";import"./index-CHnjtEz6.js";import"./hooks-WR0dNOnI.js";import"./axisSelectors-Bvp9z5f_.js";import"./d3-scale-QLPPlH86.js";import"./zIndexSlice-1EM6QKoG.js";import"./renderedTicksSlice-CYtMAut8.js";import"./CartesianChart-DTQQkyNB.js";import"./chartDataContext-D8A6GgIn.js";import"./CategoricalChart-9BDeQmwn.js";import"./CartesianAxis-DhIcmypy.js";import"./Layer-DztRGY_N.js";import"./Text-BLCv1zgM.js";import"./DOMUtils-Dbb4XIEW.js";import"./Label--ydmIzGM.js";import"./ZIndexLayer-DKwmZsVD.js";import"./types-vkQzCy74.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Do9d3_Hn.js";import"./ReactUtils-C9ZM0Mib.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BJE-jfve.js";import"./useAnimationId-DsF55F49.js";import"./ActiveShapeUtils-fioPLRDw.js";import"./isPlainObject-DxYEqwrD.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-D4uIuwhl.js";import"./ErrorBarContext-NilxMudN.js";import"./GraphicalItemClipPath-BzZEJgMk.js";import"./SetGraphicalItem-DtCToAmA.js";import"./getZIndexFromUnknown-KyVhBI0-.js";import"./graphicalItemSelectors-DN6xgKz8.js";import"./index-CXC3XglB.js";import"./ChartSizeDimensions-CSUyRejl.js";import"./OffsetShower-J7wedS7V.js";import"./PlotAreaShower-DWpQD4iq.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ct=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,ht as default};
