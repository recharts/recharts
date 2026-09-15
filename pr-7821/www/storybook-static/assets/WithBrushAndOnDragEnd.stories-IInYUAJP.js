import{R as t}from"./iframe-BWKtkC3a.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CJYktc5S.js";import{B as p}from"./BarChart-DfbGeOES.js";import{X as l}from"./XAxis-Beuqpq4u.js";import{Y as h}from"./YAxis-Bjai06eq.js";import{B as x}from"./Brush-Xxy6zd86.js";import{B as c}from"./Bar-BBD83vn3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSPVuwv0.js";import"./index-dmgaO9Ns.js";import"./index-DnD7Y3-0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSdxfhaa.js";import"./isWellBehavedNumber-Bx1-jT0B.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXQ1II60.js";import"./axisSelectors-4rRhJnZy.js";import"./d3-scale-BK7khyLD.js";import"./index-2yxEF-zg.js";import"./index-BJ1rhnQo.js";import"./renderedTicksSlice-CkjOXsqY.js";import"./index-BdvYswuq.js";import"./CartesianChart-Ck046iEl.js";import"./chartDataContext-CHsw8eio.js";import"./CategoricalChart-CTjKdKoB.js";import"./CartesianAxis-CjxgM0pW.js";import"./Layer-BW2neL7L.js";import"./Text-D6blVt8R.js";import"./DOMUtils-BR5iDZmA.js";import"./useId-Dtk37enT.js";import"./useBackwardsCompatibleTheme-ChHa43Fb.js";import"./Label-3HnLAq9q.js";import"./ZIndexLayer-CAOggInk.js";import"./types-DVYgZ5G0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DrPbLth3.js";import"./useAnimationId-DDNvTaoZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Mj13KGuq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BQlodlaC.js";import"./tooltipContext-Q37ejvqM.js";import"./RegisterGraphicalItemId-DgdLcRFp.js";import"./ErrorBarContext-CPaf1b78.js";import"./GraphicalItemClipPath-DnbnKIJy.js";import"./SetGraphicalItem-CkEmM5fN.js";import"./getZIndexFromUnknown-B1_FcIAz.js";import"./useGraphicalItemIdentity-hpl57a82.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
