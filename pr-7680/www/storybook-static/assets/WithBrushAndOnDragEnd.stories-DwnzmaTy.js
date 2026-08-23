import{R as t}from"./iframe-CJ35PD5A.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CXvAqe1u.js";import{B as p}from"./BarChart-BC0bpI1p.js";import{X as l}from"./XAxis-CQkckETF.js";import{Y as h}from"./YAxis-C-pxpMoP.js";import{B as x}from"./Brush-DPe9tHuw.js";import{B as c}from"./Bar-kT5j6kre.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvFenjAj.js";import"./index-DCTwsO2l.js";import"./index-BTcur_ii.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B4ysfGm0.js";import"./isWellBehavedNumber-DCFZS65F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxyVG0mr.js";import"./index-D5VY6D4m.js";import"./index-DuaQKKCa.js";import"./axisSelectors-BMiLu3pU.js";import"./d3-scale-BMNy9LMQ.js";import"./renderedTicksSlice-BOsENmMF.js";import"./CartesianChart-M-BqrDCQ.js";import"./chartDataContext-3LBg74Yj.js";import"./CategoricalChart-CE-ZSJzH.js";import"./CartesianAxis-A2w9N0VH.js";import"./Layer-DSIl_tFJ.js";import"./Text-C5ltUD8c.js";import"./DOMUtils-DuAj34SJ.js";import"./useId-BZocWyjW.js";import"./useBackwardsCompatibleTheme-BQ1enFxD.js";import"./Label-cSvk2bVk.js";import"./ZIndexLayer-BbmNpztl.js";import"./types-C2sHPoqW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DkvJpJ1L.js";import"./useAnimationId-BrX_XnAR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CMWnDzZf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B17w6t33.js";import"./tooltipContext-Cm0GuNxv.js";import"./RegisterGraphicalItemId-B595cwUV.js";import"./ErrorBarContext-BXwuVsqs.js";import"./GraphicalItemClipPath-DCmI04ho.js";import"./SetGraphicalItem-y646d7k1.js";import"./getZIndexFromUnknown-CsrL5HVW.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BlAHB7pR.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
