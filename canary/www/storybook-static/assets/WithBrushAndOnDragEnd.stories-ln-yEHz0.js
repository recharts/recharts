import{R as t}from"./iframe-DHvlXZZp.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D7_5YQCx.js";import{B as p}from"./BarChart-Bsg2f4uW.js";import{X as l}from"./XAxis-C0xAN7Vm.js";import{Y as h}from"./YAxis-DYTJhxlv.js";import{B as x}from"./Brush-B4hVvJr0.js";import{B as c}from"./Bar-Bp-uNdjR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bg-VcpoN.js";import"./index-rrh18h4R.js";import"./index-DGFoeBTW.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DAXfWdSl.js";import"./isWellBehavedNumber-D3uQHhq6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CaVHAbWI.js";import"./index-CDvSCu-7.js";import"./index-B_pekVWz.js";import"./renderedTicksSlice-C2TzwS0g.js";import"./axisSelectors-lbKqd9aP.js";import"./d3-scale-Cey7ctPf.js";import"./CartesianChart-DFvBiy9D.js";import"./chartDataContext-kJZSLmpd.js";import"./CategoricalChart-sk98qpS9.js";import"./CartesianAxis-DdKNIbtf.js";import"./Layer-BW5xomOj.js";import"./Text-D-2er-qS.js";import"./DOMUtils-CXaSfF0Q.js";import"./Label-TKCFRexK.js";import"./ZIndexLayer-D7_As1-8.js";import"./types-CRJA0nge.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BqfUunGe.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-DuieK5f0.js";import"./AnimatedItems-BVZCnb1h.js";import"./useAnimationId-uiW7aOrL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPmaYH73.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUQXZ3i4.js";import"./RegisterGraphicalItemId-DWC6_slS.js";import"./ErrorBarContext-BK2fwAvo.js";import"./GraphicalItemClipPath-b_iqRJZZ.js";import"./SetGraphicalItem-D2M9GsyT.js";import"./getZIndexFromUnknown-DWWc97aG.js";import"./graphicalItemSelectors-DXwSa3U9.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
