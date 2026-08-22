import{R as t}from"./iframe-B2LONqI2.js";import{u as a}from"./CategoricalChart-BjK9U0fb.js";import{R as p}from"./zIndexSlice-D9n4dMgM.js";import{C as s}from"./ComposedChart-BOAgkMxe.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DZxFVfIi.js";import{X as l}from"./XAxis-CrFRKpzA.js";import{Y as h}from"./YAxis-DmtbPyQK.js";import{L as c}from"./Legend-BWi7hVYh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Iajo6lbi.js";import"./index-DfifFuyy.js";import"./index-DjdDa-5Q.js";import"./index-BFHlNwTp.js";import"./index-BJx3ZruJ.js";import"./throttle-CdlfIoiX.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DBW39Q04.js";import"./resolveDefaultProps-ByqX23gf.js";import"./isWellBehavedNumber-BTg56jQA.js";import"./d3-scale-BIs2XHGH.js";import"./renderedTicksSlice-BQg4gqwf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CDZJhjlJ.js";import"./chartDataContext-n7-aPmS3.js";import"./Layer-Db6cgHvt.js";import"./Curve-B_IAc-Uw.js";import"./types-B61LwKJ2.js";import"./step-BlTk4FPh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DwGSOvtC.js";import"./Label-DIFUcr_M.js";import"./Text-DImCa3tX.js";import"./DOMUtils-D3RPrc8V.js";import"./useId-BEHZ_Vtx.js";import"./useBackwardsCompatibleTheme-Bt3YMXHU.js";import"./ZIndexLayer-CjywmeuP.js";import"./useAnimationId-Cxf11lMm.js";import"./ActivePoints-qJroTt_-.js";import"./Dot-CF9Y01Yu.js";import"./RegisterGraphicalItemId-C9PI0JLV.js";import"./ErrorBarContext-DheDy1BL.js";import"./GraphicalItemClipPath-bhsI-95T.js";import"./SetGraphicalItem-9JpLqI-V.js";import"./getRadiusAndStrokeWidthFromDot-KnVcOglV.js";import"./ActiveShapeUtils-CWFSVymI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CzeVRmKa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BOVFOZD2.js";import"./symbol-DY0s62qR.js";import"./useElementOffset-BGXGgodm.js";import"./uniqBy-C1sXPOkG.js";import"./iteratee-DobLqLd3.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
