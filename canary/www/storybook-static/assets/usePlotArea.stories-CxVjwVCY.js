import{R as t}from"./iframe-D9OaE0-D.js";import{e as a}from"./RechartsWrapper-2JOV4OxH.js";import{R as p}from"./zIndexSlice-C6kYgFGy.js";import{C as n}from"./ComposedChart-7wLgVQR2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-6OD2KhpA.js";import{X as l}from"./XAxis-jEEi2ah-.js";import{Y as h}from"./YAxis-B27MwDT8.js";import{L as c}from"./Legend-DkqrCmau.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BdEIFooo.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D_Wp4SpS.js";import"./throttle-C2SndTCZ.js";import"./index-CPbI-VNQ.js";import"./index-Dk0thkU_.js";import"./isWellBehavedNumber-BGqhKh1u.js";import"./d3-scale-C7A9n28f.js";import"./index-BY4SHn_n.js";import"./index-Bvh82Xr6.js";import"./renderedTicksSlice-PaBI4ux9.js";import"./index-Dd8asFuH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FZa6BBKS.js";import"./chartDataContext-Cp5Fg0uV.js";import"./CategoricalChart-CEVp6apd.js";import"./Layer-D4toxw-K.js";import"./Curve-BeWRx8o8.js";import"./types-CXdLVzsF.js";import"./step-BNV5-s-4.js";import"./path-DyVhHtw_.js";import"./activeStyles-8VQiBHQs.js";import"./Label-DM3WzLWy.js";import"./Text-BzPsoW0G.js";import"./pageBackground-Cv-86bVo.js";import"./useId-DeYBD4I8.js";import"./useBackwardsCompatibleTheme-ClikVWmk.js";import"./ZIndexLayer-D_H7NPBA.js";import"./useAnimationId-D-wfB7qE.js";import"./dataEntryStyles-Bho6MXC7.js";import"./ActivePoints-BxgbZhZA.js";import"./Dot-B6z8g14w.js";import"./ErrorBarContext-CIfQ1Dv4.js";import"./GraphicalItemClipPath-DMgrRmW6.js";import"./SetGraphicalItem-jAe7eVS9.js";import"./getRadiusAndStrokeWidthFromDot-CakziVew.js";import"./ActiveShapeUtils-Dsfqnr6i.js";import"./useEffectiveDataKey-B44sET-2.js";import"./CartesianAxis-piiyQKSw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CbfWA2CL.js";import"./symbol-Cw1fMt1F.js";import"./useElementOffset-ZfP2Owcx.js";import"./uniqBy-yYv24bjR.js";import"./iteratee-4GlLraWT.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
