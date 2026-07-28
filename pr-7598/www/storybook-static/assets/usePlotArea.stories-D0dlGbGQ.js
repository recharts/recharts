import{R as t}from"./iframe-DuK0Qil1.js";import{u as a}from"./CategoricalChart-D9Svi6qf.js";import{R as p}from"./zIndexSlice-CDnfQqmd.js";import{C as s}from"./ComposedChart-CoDAatDa.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DNdMLtbX.js";import{X as l}from"./XAxis-5-F4R60_.js";import{Y as h}from"./YAxis-DUlzRBIx.js";import{L as c}from"./Legend-CFgZ7u0m.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DniM3uOm.js";import"./index-DwA8b1Ou.js";import"./index-DhoW-uSW.js";import"./index-tfefZ_nO.js";import"./index-CKpzsMgh.js";import"./throttle-DSTeDcIR.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CSJ2A-w6.js";import"./axisSelectors-_6NgKNdR.js";import"./resolveDefaultProps-oCmlrVLK.js";import"./isWellBehavedNumber-DX_vizwS.js";import"./d3-scale-DuTdgHoH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BQw3D51-.js";import"./chartDataContext-CfvZMLTP.js";import"./Layer-DkfKlAwf.js";import"./Curve-CAqM1U-K.js";import"./types-Ch2-4RAi.js";import"./step-BW4Xq2ef.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CBhdDdvc.js";import"./Label-BVUrQ6r5.js";import"./Text-D4DIOP-8.js";import"./DOMUtils-n5aJojsY.js";import"./ZIndexLayer-BaKptJ0d.js";import"./useAnimationId-nnglBd7S.js";import"./ActivePoints-Dq5H8yZY.js";import"./Dot-C7D6mqds.js";import"./RegisterGraphicalItemId-BqmtVyAz.js";import"./ErrorBarContext-84EKHKmH.js";import"./GraphicalItemClipPath-BN5jaNNE.js";import"./SetGraphicalItem-D4hSZyvD.js";import"./getRadiusAndStrokeWidthFromDot-DcB-LW-j.js";import"./ActiveShapeUtils-B7fe-RtC.js";import"./RechartsThemeContext-CZE5IotG.js";import"./CartesianAxis-D2hc_RJR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-Br9ylzN1.js";import"./symbol-Bg-Ontnx.js";import"./useElementOffset-B2PIp49y.js";import"./uniqBy-eNjjwLbW.js";import"./iteratee-BKzRmdu1.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UsePlotArea"];export{e as UsePlotArea,gt as __namedExportsOrder,ct as default};
