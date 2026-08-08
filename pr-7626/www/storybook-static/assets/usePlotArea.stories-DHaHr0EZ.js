import{R as t}from"./iframe-Bh1U-oMl.js";import{u as a}from"./CategoricalChart-DcSXPqkv.js";import{R as p}from"./zIndexSlice-CbwDGfhV.js";import{C as s}from"./ComposedChart-_0dXWU4B.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-xv0WhQR5.js";import{X as l}from"./XAxis-BDDyTBp4.js";import{Y as h}from"./YAxis-DLWlNOvC.js";import{L as c}from"./Legend-B_aI-CWe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJiANDik.js";import"./index-BJEvKA6W.js";import"./index-Pl0BuMhm.js";import"./index-CIfG7xc6.js";import"./index-B7DuV58o.js";import"./throttle-DMII0ZAy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-KgYrPzsA.js";import"./resolveDefaultProps-Cs5bXre5.js";import"./isWellBehavedNumber-Dyeu8bHm.js";import"./d3-scale-DvNPjBaU.js";import"./renderedTicksSlice-6pXaWoy-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YxKbksJG.js";import"./chartDataContext-B8xHbf95.js";import"./Layer-C3H-dOT5.js";import"./Curve-D4WkqVii.js";import"./types-w_TylJof.js";import"./step-CbC2c93d.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BvF3WRYv.js";import"./Label-CoZlS51A.js";import"./Text-bdpnJJaC.js";import"./DOMUtils-TtYkNMfa.js";import"./ZIndexLayer-C51_GrjW.js";import"./useAnimationId-0BmLZ6mF.js";import"./ActivePoints-B8uy1Jk5.js";import"./Dot-ClTJQBAf.js";import"./RegisterGraphicalItemId-UrCBGtwU.js";import"./ErrorBarContext-CYylskZD.js";import"./GraphicalItemClipPath-CR-53Dh0.js";import"./SetGraphicalItem-oPzo6Gr-.js";import"./getRadiusAndStrokeWidthFromDot-BYREjPLW.js";import"./ActiveShapeUtils-0P_4fb1E.js";import"./RechartsThemeContext-Bbvr3NVw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DON_KZPp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DQ62W2JC.js";import"./symbol-B_QuibgC.js";import"./useElementOffset-CkLuT-ex.js";import"./uniqBy-DzWBXKbZ.js";import"./iteratee-CG3_OUhe.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
