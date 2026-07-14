import{R as t}from"./iframe-CoZYBKIX.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-2wRK4kMu.js";import{B as p}from"./BarChart-CIQ7bEXC.js";import{X as l}from"./XAxis-BYrKdn3j.js";import{Y as h}from"./YAxis-CF_GQk3H.js";import{B as x}from"./Brush-BMEviFsz.js";import{B as c}from"./Bar-DjvynevS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DTjNB_wn.js";import"./index-CxqEAs70.js";import"./index-DbtoquVJ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CXWmRWxD.js";import"./isWellBehavedNumber-DPie-IPs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Chafq55k.js";import"./index-8vVHWDox.js";import"./index-CB7yOKq2.js";import"./renderedTicksSlice-BJztigH5.js";import"./axisSelectors-Bk60vGia.js";import"./d3-scale-Bs_mySfl.js";import"./CartesianChart-DoniaHV0.js";import"./chartDataContext-Cx3CX6pd.js";import"./CategoricalChart-DEIC5a6b.js";import"./CartesianAxis-CSNiqDgA.js";import"./Layer-Do7uuXp2.js";import"./Text-Br2KMW9j.js";import"./DOMUtils-B_OLo7Kh.js";import"./Label-B5Sw4cWo.js";import"./ZIndexLayer-Cub30BGV.js";import"./types-DlqgPqNT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BZuhr6e1.js";import"./AnimatedItems-OdNYlxxq.js";import"./useAnimationId-C7atvuRl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B4AWbI_f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Is-vymDi.js";import"./RegisterGraphicalItemId-BhxVKnq7.js";import"./ErrorBarContext-D9rx9CvF.js";import"./GraphicalItemClipPath-BqDFfLzv.js";import"./SetGraphicalItem-Cm5RMzg0.js";import"./getZIndexFromUnknown-aMuYew3c.js";import"./graphicalItemSelectors-B5MdhFFy.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
