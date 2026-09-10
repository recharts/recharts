import{R as t}from"./iframe-DozjnQY4.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BgkLcB6R.js";import{B as p}from"./BarChart-s-79Qboj.js";import{X as l}from"./XAxis-CMLACdRu.js";import{Y as h}from"./YAxis-DKlfhRHH.js";import{B as x}from"./Brush-BcUo5Uby.js";import{B as c}from"./Bar-DPmmAEKN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ja6YfGso.js";import"./index-C_fPCGUJ.js";import"./index-DvODWZUZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CVm2MzcI.js";import"./isWellBehavedNumber-pk6AjLe8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsvSe4fO.js";import"./axisSelectors-DgS41G-2.js";import"./d3-scale-DiLIb41e.js";import"./index-B-gAWTo9.js";import"./index-55Hv9cWy.js";import"./renderedTicksSlice-eosOC0PP.js";import"./index-CQZmeOSf.js";import"./CartesianChart-C23oYJhj.js";import"./chartDataContext-BMMD7dGr.js";import"./CategoricalChart-cz-sFoBH.js";import"./CartesianAxis-VBiFHU3A.js";import"./Layer-DqTc2vWN.js";import"./Text-CYg0PxB3.js";import"./DOMUtils-12JScs07.js";import"./useId-CoUbJimw.js";import"./useBackwardsCompatibleTheme-ZiWSCSRQ.js";import"./Label-zwFJYypc.js";import"./ZIndexLayer-BfyW3t5T.js";import"./types-BbIJv7s_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DN24URVz.js";import"./useAnimationId-Dn8df37H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lcraYYmO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQCdFpwN.js";import"./tooltipContext-_rqHbuWr.js";import"./RegisterGraphicalItemId-DbLQfc-G.js";import"./ErrorBarContext-Ure7iGoK.js";import"./GraphicalItemClipPath-CB6u2457.js";import"./SetGraphicalItem-Ba3q6rOQ.js";import"./getZIndexFromUnknown-DK4Jtld4.js";import"./useGraphicalItemIdentity-BMnjEDTs.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
