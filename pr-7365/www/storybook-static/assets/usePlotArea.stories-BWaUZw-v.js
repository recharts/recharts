import{e as t}from"./iframe-CivULM0O.js";import{P as a}from"./PlotAreaShower-BV6yuT_Y.js";import{Y as p}from"./hooks-O1Pz3D70.js";import{g as s}from"./arrayEqualityCheck-PbQt1vd_.js";import{C as n}from"./ComposedChart-DfjP2WwB.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-BcwWxmgV.js";import{X as h}from"./XAxis-CYAQkN2U.js";import{Y as c}from"./YAxis-ESVpGmgX.js";import{L as g}from"./Legend-C9TbRXGM.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-B7zlPcNh.js";import"./immer-C3JSSs7p.js";import"./axisSelectors-C5EVC_K9.js";import"./d3-scale-D4k2z_td.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bzl3TnEc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwxV8M50.js";import"./index-D77mCZEn.js";import"./zIndexSlice-DI8beG-i.js";import"./renderedTicksSlice-DkvK2F6A.js";import"./CartesianChart-DF7vNr1N.js";import"./chartDataContext-BWPeiq2n.js";import"./CategoricalChart-CaQLfBcJ.js";import"./Curve-CR9QitUx.js";import"./types-CYA8PCW2.js";import"./step-DozMZOeE.js";import"./path-DyVhHtw_.js";import"./Layer-BOVDUSvA.js";import"./ReactUtils-B75F0iOa.js";import"./Label-BAI4tr_y.js";import"./Text-aFIbFVfW.js";import"./DOMUtils-D-P4J5bL.js";import"./ZIndexLayer-CgUDZ3al.js";import"./ActivePoints-De-ksHDq.js";import"./Dot-13A9yk-i.js";import"./RegisterGraphicalItemId-C8jduj3R.js";import"./ErrorBarContext-rnb_GXzV.js";import"./GraphicalItemClipPath-UzEv0mvn.js";import"./SetGraphicalItem-DhyPdJoF.js";import"./useAnimationId-DJJiEnXV.js";import"./getRadiusAndStrokeWidthFromDot-CdnZqcwv.js";import"./ActiveShapeUtils-DzUFHSun.js";import"./CartesianAxis-G3eNrHbq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-cGyzM8dQ.js";import"./symbol-DB8A-7yY.js";import"./useElementOffset-CC9xhXxh.js";import"./uniqBy-Cwhcwtk-.js";import"./iteratee-UPOw9UnH.js";const ht={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
