import{R as t}from"./iframe-CiEll_hl.js";import{j as a}from"./RechartsWrapper-8qI1d7ig.js";import{R as p}from"./zIndexSlice-BWUZw0HV.js";import{C as n}from"./ComposedChart-BclLBL5K.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dp0tH0hq.js";import{X as l}from"./XAxis-BecTjeSU.js";import{Y as h}from"./YAxis-veNA_t3h.js";import{L as c}from"./Legend-Uo7plN5O.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-duavw9Kl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Czhrsmz1.js";import"./throttle-D31XxRNM.js";import"./index-C6gwqJSk.js";import"./index-CWa27twE.js";import"./isWellBehavedNumber-ry_onT8i.js";import"./d3-scale-CoahAzwi.js";import"./index-DPEbYR3l.js";import"./index-d_0OIgID.js";import"./renderedTicksSlice-CDeLucdV.js";import"./index-RfC6TSb7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YzLYuA0Z.js";import"./chartDataContext-A6K28S5n.js";import"./CategoricalChart-yzrwRYbH.js";import"./Layer-Bl66F1TU.js";import"./Curve-bnxtETge.js";import"./types-MiZov7mG.js";import"./step-CMCW6W2-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ABeUxSrb.js";import"./Label-2sILoPl9.js";import"./Text-C5G8lazz.js";import"./DOMUtils-HtrcCiap.js";import"./useId-BF2rDIp_.js";import"./useBackwardsCompatibleTheme-B38ON0Kc.js";import"./ZIndexLayer-DOTS06hC.js";import"./useAnimationId-DB2VCJ-C.js";import"./ActivePoints-Dc8U7ztD.js";import"./Dot-D6RGfzzu.js";import"./RegisterGraphicalItemId-V_3RkT2Z.js";import"./ErrorBarContext-DFolGKyI.js";import"./GraphicalItemClipPath-CNKUlu4p.js";import"./SetGraphicalItem-BGxIGAFZ.js";import"./getRadiusAndStrokeWidthFromDot-IdnOPtwR.js";import"./ActiveShapeUtils-CIEveTom.js";import"./useGraphicalItemIdentity-DPacc47z.js";import"./CartesianAxis-Cv1crkEc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-WUygGVJ4.js";import"./symbol-BVUZRMIr.js";import"./useElementOffset-CAsd9Skh.js";import"./uniqBy-CYyDJIfO.js";import"./iteratee-hWILKxtV.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
