import{R as t}from"./iframe-B9f439XI.js";import{j as a}from"./RechartsWrapper-DhjKeyZf.js";import{R as p}from"./zIndexSlice-C6Otyq85.js";import{C as n}from"./ComposedChart-C-QIoD4C.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B7UaIz2p.js";import{X as l}from"./XAxis-DOU84Hlo.js";import{Y as h}from"./YAxis-JNrwnee_.js";import{L as c}from"./Legend-DX-GvFUk.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-gOTjLOeS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CtkTbFLc.js";import"./throttle-Cul9o8Fv.js";import"./index-BbETDB0j.js";import"./index-Ba5C8sSe.js";import"./isWellBehavedNumber-CYewbHK2.js";import"./d3-scale-D5l0Isqr.js";import"./index-C3T5ZoZg.js";import"./index--FioM-W6.js";import"./renderedTicksSlice-v2nQGwWu.js";import"./index-Dmy_GPO_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DaH8zaVP.js";import"./chartDataContext-1z3k21sD.js";import"./CategoricalChart-7BozNq5r.js";import"./Layer-JExDg_3T.js";import"./Curve-BNGAgwsP.js";import"./types-BsF4BT96.js";import"./step-Cd0cogV_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-17rMBNfA.js";import"./Label-DVN-Hwwb.js";import"./Text-Bow6SjUp.js";import"./DOMUtils-DhGAIzWN.js";import"./useId-C9eyJZjo.js";import"./useBackwardsCompatibleTheme-CPO8fYQ4.js";import"./ZIndexLayer-C4eGne8u.js";import"./useAnimationId-7tiok7vs.js";import"./ActivePoints-Uofgco9H.js";import"./Dot-T9Kvs1vN.js";import"./RegisterGraphicalItemId-CMz-uJdk.js";import"./ErrorBarContext-ltkmTZdi.js";import"./GraphicalItemClipPath-CarNY15C.js";import"./SetGraphicalItem-6PuFIxdb.js";import"./getRadiusAndStrokeWidthFromDot-C7sSECjk.js";import"./ActiveShapeUtils-Djn55Wjw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DdFgmu19.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CAnsshcC.js";import"./symbol-CisfiURK.js";import"./useElementOffset-CX1bHy_W.js";import"./uniqBy-DENRboCh.js";import"./iteratee-CJfDgSnT.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
