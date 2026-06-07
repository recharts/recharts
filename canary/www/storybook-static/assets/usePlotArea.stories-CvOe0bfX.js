import{R as t}from"./iframe-BppzjNnb.js";import{u as a}from"./CategoricalChart-CXNjM0Ue.js";import{R as p}from"./zIndexSlice-Bz25ueAP.js";import{C as s}from"./ComposedChart-DhR9pH6Q.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DXBTQPhH.js";import{X as l}from"./XAxis-C5D711PO.js";import{Y as h}from"./YAxis-DsoUE30k.js";import{L as c}from"./Legend-BJIzGJvS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BctTvK_s.js";import"./index-BbKylj6c.js";import"./index-e2oR9ZSK.js";import"./index-C65TBMtY.js";import"./index-G9uqktgG.js";import"./immer-BMUlrvOK.js";import"./get-BADN9FM0.js";import"./renderedTicksSlice-DTii-kcm.js";import"./axisSelectors-W078EOTn.js";import"./d3-scale-CWnXAf3z.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DWEEC0T7.js";import"./isWellBehavedNumber-C8JMlk1c.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DAZ3YXd0.js";import"./chartDataContext-C-pJrkOs.js";import"./Layer-InP7nrar.js";import"./Curve-WhS8CD1Y.js";import"./types-CY6jhn9K.js";import"./step-DI4lIq9s.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ClsYQppB.js";import"./Label-mqH-rpXP.js";import"./Text-YWAIgGvz.js";import"./DOMUtils-CKoiYbaH.js";import"./ZIndexLayer-vT85rwTx.js";import"./useAnimationId-CFK7zTSZ.js";import"./ActivePoints-Bg1sxNgn.js";import"./Dot-DL7hVzu-.js";import"./RegisterGraphicalItemId-B42PFFZO.js";import"./ErrorBarContext-DT0m-eV5.js";import"./GraphicalItemClipPath-C_3x93JD.js";import"./SetGraphicalItem-DoX9EqUs.js";import"./getRadiusAndStrokeWidthFromDot-BbbBTUy4.js";import"./ActiveShapeUtils-BLIRe5G7.js";import"./CartesianAxis-DwkD9703.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C60S9_I6.js";import"./symbol-CA-NhIsd.js";import"./useElementOffset-BHylbXnP.js";import"./uniqBy-BmI5nKZU.js";import"./iteratee-Cj4c1lFv.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
