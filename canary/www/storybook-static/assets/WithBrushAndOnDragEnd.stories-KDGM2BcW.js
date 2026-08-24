import{R as t}from"./iframe-B5plfFOD.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DbNmOY3-.js";import{B as p}from"./BarChart-BVOXiC13.js";import{X as l}from"./XAxis-BSTDbcVl.js";import{Y as h}from"./YAxis-GTebhYCm.js";import{B as x}from"./Brush-C7csqwZa.js";import{B as c}from"./Bar-C3ZGL78-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B-azr0kq.js";import"./index-PX_n5hQs.js";import"./index-CNQoj7bz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlDjsfrB.js";import"./isWellBehavedNumber-Da64mp0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGezTKFK.js";import"./index-CL4khl8X.js";import"./index-Wbnw9Fvi.js";import"./axisSelectors-BLYlno2y.js";import"./d3-scale-DCKop38A.js";import"./renderedTicksSlice-BhrWC83q.js";import"./CartesianChart-DwKWqDkX.js";import"./chartDataContext-kMO755bg.js";import"./CategoricalChart-C1LQoQak.js";import"./CartesianAxis-DCr9g_ht.js";import"./Layer-ByEseNp7.js";import"./Text-CpDGg_G2.js";import"./DOMUtils-D6jyt4Vs.js";import"./useId-Bp2MS-0a.js";import"./useBackwardsCompatibleTheme-DbWiZjcQ.js";import"./Label-D1J3ucoA.js";import"./ZIndexLayer-IfT3mYts.js";import"./types-BGPhMwrg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B1lzxzMI.js";import"./useAnimationId-B-SkX0Hu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DpWbdB20.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUhOL-u8.js";import"./tooltipContext-DnP-rmZG.js";import"./RegisterGraphicalItemId-CWna7QKU.js";import"./ErrorBarContext-CLev7xWU.js";import"./GraphicalItemClipPath-Qthp7O67.js";import"./SetGraphicalItem-CTmoE1ld.js";import"./getZIndexFromUnknown-aCBQPkRG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-8MsBpaW-.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
