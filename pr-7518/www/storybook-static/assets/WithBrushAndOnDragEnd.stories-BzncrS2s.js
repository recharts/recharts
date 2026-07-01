import{R as t}from"./iframe-EI0Ls4hC.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-yKXgbZM9.js";import{B as p}from"./BarChart-Df1eb69Z.js";import{X as l}from"./XAxis-isMopIja.js";import{Y as h}from"./YAxis-BDDTXkrb.js";import{B as x}from"./Brush-BtsFjdjl.js";import{B as c}from"./Bar-Cmq4uzGB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cdlad3bH.js";import"./index-nHjkW3_e.js";import"./index-D-rMjtE6.js";import"./get-BON1YutH.js";import"./resolveDefaultProps-NPYXHAaZ.js";import"./isWellBehavedNumber-DWxIjg9k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVfLxVvb.js";import"./index-CzoIO75z.js";import"./index-BIz2bYpH.js";import"./renderedTicksSlice-CoFXcUVC.js";import"./axisSelectors-Cok1HNra.js";import"./d3-scale-DBYKxB4y.js";import"./CartesianChart-DxsNLdfg.js";import"./chartDataContext-AgenIsJt.js";import"./CategoricalChart-DnbprEZ3.js";import"./CartesianAxis-C7eaHI9Q.js";import"./Layer-D2PSeBO4.js";import"./Text-BwBPbfGl.js";import"./DOMUtils-DrXieiLo.js";import"./Label-V9mTYK6m.js";import"./ZIndexLayer-C3S5Zj6R.js";import"./types-C8rhvdfR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Bc4JHtO1.js";import"./AnimatedItems-CvuB6fQ_.js";import"./useAnimationId-B72UM_RE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dj6dtcwd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CplwhB-J.js";import"./RegisterGraphicalItemId-CXkeXAps.js";import"./ErrorBarContext-BeDV4HJb.js";import"./GraphicalItemClipPath-5KTFkQ5K.js";import"./SetGraphicalItem-BhScXCrX.js";import"./getZIndexFromUnknown-BkgdKLAJ.js";import"./graphicalItemSelectors-D30ePsgQ.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
