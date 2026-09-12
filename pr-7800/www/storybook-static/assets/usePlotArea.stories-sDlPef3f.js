import{R as t}from"./iframe-BnZHUF9X.js";import{j as a}from"./RechartsWrapper-ztAk4E9P.js";import{R as p}from"./zIndexSlice-ONbH2CMm.js";import{C as n}from"./ComposedChart-B4o4gtm7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-cVcFSyJN.js";import{X as l}from"./XAxis-CRqJ7xsJ.js";import{Y as h}from"./YAxis-C5pkUNB3.js";import{L as c}from"./Legend-CnuG6WaE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CS-Gahor.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DSOG4fe3.js";import"./throttle-DYWyyBD4.js";import"./index-DwyAhWM9.js";import"./index-Ck__QTcD.js";import"./isWellBehavedNumber-Bn5kvLQQ.js";import"./d3-scale-hcynQqTx.js";import"./index-ksKJqe-L.js";import"./index-BrEYDHSM.js";import"./renderedTicksSlice-CKzVsDw2.js";import"./index-CVXi-tnN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-a0B_k2pR.js";import"./chartDataContext-CxsSdioC.js";import"./CategoricalChart-CSXyHKQE.js";import"./Layer-D4LkPBUk.js";import"./Curve-SQL-HHnd.js";import"./types-CA0d64vS.js";import"./step-BHb_S66N.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bxt2Mhs_.js";import"./Label-hOa9Xaax.js";import"./Text-CPiy7pnu.js";import"./DOMUtils-C0afjJmd.js";import"./useId-nraStDaz.js";import"./useBackwardsCompatibleTheme-CLSYsBSa.js";import"./ZIndexLayer-CIa5rzLp.js";import"./useAnimationId-CuFFFGhn.js";import"./ActivePoints-CIdvMm3W.js";import"./Dot-CjRUlFgj.js";import"./RegisterGraphicalItemId-eknPVKNp.js";import"./ErrorBarContext-DNaI9-CH.js";import"./GraphicalItemClipPath-DFiiV3dA.js";import"./SetGraphicalItem-BS2ba3Ul.js";import"./getRadiusAndStrokeWidthFromDot-6T9qPj9L.js";import"./ActiveShapeUtils-nVjPub3k.js";import"./useGraphicalItemIdentity-esDnMWhm.js";import"./CartesianAxis-CnqpkBi3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cqtcw8wG.js";import"./symbol-i8QsJMqg.js";import"./useElementOffset-TFsjHbYB.js";import"./uniqBy-BpF-KHKu.js";import"./iteratee-B0GexjSp.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
