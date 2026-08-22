import{R as t}from"./iframe-oJEYIYVD.js";import{u as a}from"./CategoricalChart-DFXPtrpT.js";import{R as p}from"./zIndexSlice-8Xd9ui4v.js";import{C as s}from"./ComposedChart-BIeE5g7X.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BRdUYfK5.js";import{X as l}from"./XAxis-BGcEKdMP.js";import{Y as h}from"./YAxis-D5BvcVb4.js";import{L as c}from"./Legend-B2TBmvkO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ENwYgfgF.js";import"./index-DPJLoqId.js";import"./index-CoIOggcU.js";import"./index-1WCRhzzt.js";import"./index-9lHgIK0X.js";import"./throttle-DQw_TB4k.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CsLlIDAD.js";import"./resolveDefaultProps-DHMesOBd.js";import"./isWellBehavedNumber-BUWW9YlW.js";import"./d3-scale-DB3cJCiA.js";import"./renderedTicksSlice-DU_GMzWX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C-gtXtO6.js";import"./chartDataContext-BNgKqfWM.js";import"./Layer-BCc9Twjs.js";import"./Curve-Cdxa9GvD.js";import"./types-qn8KP6HN.js";import"./step-DIL1YdEp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-bvrA4fOd.js";import"./Label-BAH99IO9.js";import"./Text-CtBEPsPC.js";import"./DOMUtils-Cf8xbxEH.js";import"./useId-CMdQMiLi.js";import"./useBackwardsCompatibleTheme-DXWZN45A.js";import"./ZIndexLayer-Cvj5uv_m.js";import"./useAnimationId-Cuwuz8F4.js";import"./ActivePoints-BJ3vETVR.js";import"./Dot-9wHacS1O.js";import"./RegisterGraphicalItemId-BktobOXw.js";import"./ErrorBarContext-BeupN1xy.js";import"./GraphicalItemClipPath-DsG6iHd1.js";import"./SetGraphicalItem-C8Wpyevh.js";import"./getRadiusAndStrokeWidthFromDot-CCXj_Isv.js";import"./ActiveShapeUtils-YLbAgrLf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-C0z7V-tm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DAJOdbyV.js";import"./symbol-C0LB-xh7.js";import"./useElementOffset-0qwWTu7f.js";import"./uniqBy-2i4DD0Ye.js";import"./iteratee-D6e9wFia.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
