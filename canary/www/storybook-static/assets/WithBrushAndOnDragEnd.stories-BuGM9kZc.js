import{R as t}from"./iframe-B9f439XI.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C6Otyq85.js";import{B as p}from"./BarChart-BfersV9u.js";import{X as l}from"./XAxis-DOU84Hlo.js";import{Y as h}from"./YAxis-JNrwnee_.js";import{B as x}from"./Brush-Ch9DyRW5.js";import{B as c}from"./Bar-BEJi1GiS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cul9o8Fv.js";import"./index-BbETDB0j.js";import"./index-Ba5C8sSe.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-gOTjLOeS.js";import"./isWellBehavedNumber-CYewbHK2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhjKeyZf.js";import"./axisSelectors-CtkTbFLc.js";import"./d3-scale-D5l0Isqr.js";import"./index-C3T5ZoZg.js";import"./index--FioM-W6.js";import"./renderedTicksSlice-v2nQGwWu.js";import"./index-Dmy_GPO_.js";import"./CartesianChart-DaH8zaVP.js";import"./chartDataContext-1z3k21sD.js";import"./CategoricalChart-7BozNq5r.js";import"./CartesianAxis-DdFgmu19.js";import"./Layer-JExDg_3T.js";import"./Text-Bow6SjUp.js";import"./DOMUtils-DhGAIzWN.js";import"./useId-C9eyJZjo.js";import"./useBackwardsCompatibleTheme-CPO8fYQ4.js";import"./Label-DVN-Hwwb.js";import"./ZIndexLayer-C4eGne8u.js";import"./types-BsF4BT96.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-17rMBNfA.js";import"./useAnimationId-7tiok7vs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0vFWPEb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Djn55Wjw.js";import"./tooltipContext-Co4pi7hv.js";import"./RegisterGraphicalItemId-CMz-uJdk.js";import"./ErrorBarContext-ltkmTZdi.js";import"./GraphicalItemClipPath-CarNY15C.js";import"./SetGraphicalItem-6PuFIxdb.js";import"./getZIndexFromUnknown-CYbW3jbK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Rx4jvPS9.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
