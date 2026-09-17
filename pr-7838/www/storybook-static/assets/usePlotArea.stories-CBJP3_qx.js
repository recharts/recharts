import{R as t}from"./iframe-Bo128pRc.js";import{j as a}from"./RechartsWrapper-DmrtgzWA.js";import{R as p}from"./zIndexSlice-WbjY_zmo.js";import{C as n}from"./ComposedChart-Cw7mlXQ9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bnr8u_lG.js";import{X as l}from"./XAxis-BBTi9Quq.js";import{Y as h}from"./YAxis-Bd_441pA.js";import{L as c}from"./Legend-dJCD3p5v.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CR_Daah7.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BYCa1KQi.js";import"./throttle-DKRp2Cpf.js";import"./index-BFq8L4Qf.js";import"./index-Cj2yGnH8.js";import"./isWellBehavedNumber-DSGzbKJq.js";import"./d3-scale-EUAW_uXn.js";import"./index-CTI4te1e.js";import"./index-9RfS0P5N.js";import"./renderedTicksSlice-BJhZejFa.js";import"./index-CNXfLYdJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Df4TbwdF.js";import"./chartDataContext-BfZakhMa.js";import"./CategoricalChart-D4todBvL.js";import"./Layer-DR8K2tDR.js";import"./Curve-BOVvH2tq.js";import"./types-CsIyy1S-.js";import"./step-C7Pxf4sj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BX9wZRAd.js";import"./Label-ghQ3JhC7.js";import"./Text-BFaLgVB9.js";import"./DOMUtils-DyhgREL4.js";import"./useId-DR5HNXG4.js";import"./useBackwardsCompatibleTheme-DyPyGrUA.js";import"./ZIndexLayer-DD1XEuiL.js";import"./useAnimationId-CQmNoSKE.js";import"./ActivePoints-Bl65ih3N.js";import"./Dot-eLqrzeMr.js";import"./RegisterGraphicalItemId-CwYw7hzr.js";import"./ErrorBarContext-QkPpzvTl.js";import"./GraphicalItemClipPath-RiFLM0LL.js";import"./SetGraphicalItem-qyOUVGvM.js";import"./getRadiusAndStrokeWidthFromDot-DoOeRTU4.js";import"./ActiveShapeUtils-wH4Ic5EK.js";import"./useGraphicalItemIdentity-B2TrnUL8.js";import"./CartesianAxis-CscJTeW3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-IDhPg5Sz.js";import"./symbol-B_l5LtYl.js";import"./useElementOffset-DBOsMn43.js";import"./uniqBy-RT7Uc_zP.js";import"./iteratee-Cyk4vjhM.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
