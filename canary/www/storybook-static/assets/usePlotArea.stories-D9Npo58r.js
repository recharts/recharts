import{R as t}from"./iframe-JCMHkfpO.js";import{u as a}from"./CategoricalChart-Do9lblK2.js";import{R as p}from"./zIndexSlice-Cbic3BON.js";import{C as s}from"./ComposedChart-BVs57za7.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-WjI1QEi3.js";import{X as l}from"./XAxis-CBMMNbSw.js";import{Y as h}from"./YAxis-OgBkmni0.js";import{L as c}from"./Legend-BPW7Jl2x.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-nbVSXC9z.js";import"./index-Bt8eCKRM.js";import"./index-QEaCAJHN.js";import"./index-D8yPwBIb.js";import"./index-Ds8zJsBP.js";import"./throttle-DlFFEpQV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BpNs_jFY.js";import"./resolveDefaultProps-CNbvqjMv.js";import"./isWellBehavedNumber-K1PO631O.js";import"./d3-scale-BsjeCU8L.js";import"./renderedTicksSlice-BRnimtTJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Be_k-GK6.js";import"./chartDataContext-DRtbDYDE.js";import"./Layer-DW0R6u6Q.js";import"./Curve-YTzEjIYa.js";import"./types-CrNZa3RP.js";import"./step-CcEA6ZtU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-dkTJaSWs.js";import"./Label-DgnjH2BN.js";import"./Text-H5O9sMOg.js";import"./DOMUtils-lO18r89G.js";import"./useId-5LAcqd5g.js";import"./useBackwardsCompatibleTheme-BlAxrm86.js";import"./ZIndexLayer-DZJzCe6C.js";import"./useAnimationId-CtDYtQmo.js";import"./ActivePoints-B2ZGk6hG.js";import"./Dot-CefwgMiR.js";import"./RegisterGraphicalItemId-DyknErxM.js";import"./ErrorBarContext-IV7IvqZh.js";import"./GraphicalItemClipPath-BifFhr-e.js";import"./SetGraphicalItem-BPezHgiz.js";import"./getRadiusAndStrokeWidthFromDot-Bo70O2Eq.js";import"./ActiveShapeUtils-2F7jkNpt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B0p8oTh4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DKIDWMPJ.js";import"./symbol-CW7sNOrJ.js";import"./useElementOffset-BrBzv7lz.js";import"./uniqBy-DRqYT5l3.js";import"./iteratee-T-3V0feC.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
