import{R as t}from"./iframe-BaPbaLaJ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Ct9oD4yM.js";import{B as p}from"./BarChart-3mbuCpjN.js";import{X as l}from"./XAxis-DyE7q0u7.js";import{Y as h}from"./YAxis-DYYvtRQh.js";import{B as x}from"./Brush-Bme9rnMp.js";import{B as c}from"./Bar-BX6LyV64.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DiDZ85-K.js";import"./index-8NR0Yac6.js";import"./index-uHodW5ti.js";import"./get-D2ZTbC0U.js";import"./resolveDefaultProps-B9a4hmwF.js";import"./isWellBehavedNumber-Cw93K2XK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-j68O-sFh.js";import"./index-DbNPAuc7.js";import"./index-C-SXM_61.js";import"./renderedTicksSlice-C6EU1Gxc.js";import"./axisSelectors-Csn4G978.js";import"./d3-scale-njnUDxXP.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FGH_s-P1.js";import"./chartDataContext-BKJVmU0E.js";import"./CategoricalChart-D9BrBGmX.js";import"./CartesianAxis-C9WUsr8e.js";import"./Layer-DnTHWC2s.js";import"./Text-gi3hDHLU.js";import"./DOMUtils-N0jxLcJa.js";import"./Label-nvXx3zPl.js";import"./ZIndexLayer-Cmf1UnqU.js";import"./types-Bxe0zMe1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Dxao8-sY.js";import"./AnimatedItems-BRL6-mrZ.js";import"./useAnimationId-BlKkbeMI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ClzNIlMR.js";import"./ActiveShapeUtils-BKxrj1Kx.js";import"./RegisterGraphicalItemId-C1UHdJ8R.js";import"./ErrorBarContext-D5Gab5oy.js";import"./GraphicalItemClipPath-DrUrL8JH.js";import"./SetGraphicalItem-D7ChpxF2.js";import"./getZIndexFromUnknown-DjS664wq.js";import"./graphicalItemSelectors-CIniFY1e.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
