import{R as t}from"./iframe-130qk4m_.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DRUK-Dg-.js";import{B as p}from"./BarChart-DtyY_3VN.js";import{X as l}from"./XAxis-CZ9F9O5a.js";import{Y as h}from"./YAxis-COXka6w4.js";import{B as x}from"./Brush-DGN8587w.js";import{B as c}from"./Bar-Dk_lnDjq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-kCNuVuJ-.js";import"./index-CsWcnfda.js";import"./index-BcLoK3PR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CYRr0Ie5.js";import"./isWellBehavedNumber-DjBeGij7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bo40Do7U.js";import"./axisSelectors-X5KptGXH.js";import"./d3-scale-Dk5HPyUF.js";import"./index-CrvbTTow.js";import"./index-Bjllb2VH.js";import"./renderedTicksSlice-Cmod0XxC.js";import"./index-DEOEohuH.js";import"./CartesianChart-BIfw6B_y.js";import"./chartDataContext-DcIZimMl.js";import"./CategoricalChart-BUcyv7Rs.js";import"./CartesianAxis-C5WMjY4c.js";import"./Layer-Cyv1dWj2.js";import"./Text-BSQyPF-I.js";import"./DOMUtils-nn98Njua.js";import"./useId-DN63oQqC.js";import"./useBackwardsCompatibleTheme-BFLDUGtw.js";import"./Label-BTScYLJC.js";import"./ZIndexLayer-BCmai4o5.js";import"./types-Da5i9wCB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CnmA861Y.js";import"./useAnimationId-NcjSJtDX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2EXdHxS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CM6xxOZA.js";import"./tooltipContext-CXrQPimu.js";import"./RegisterGraphicalItemId-Cj8G_tD9.js";import"./ErrorBarContext-Cce-eGB1.js";import"./GraphicalItemClipPath-CEUDXBSP.js";import"./SetGraphicalItem-fFkzzaD8.js";import"./getZIndexFromUnknown-D9Lpnrxk.js";import"./useGraphicalItemIdentity-UHVfOAjT.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
