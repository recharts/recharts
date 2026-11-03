import{R as t}from"./iframe-XIWN-8LW.js";import{z as a}from"./RechartsWrapper-BeCgk11S.js";import{R as p}from"./zIndexSlice-CeTDvnmV.js";import{C as n}from"./ComposedChart-FUL524Wp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B6hIzkaB.js";import{X as l}from"./XAxis-xF4zDX5U.js";import{Y as h}from"./YAxis-DaPhatN5.js";import{L as c}from"./Legend-uzuxOhM0.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B5b48pxf.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ct9ZEPSa.js";import"./throttle-DRx8DeZx.js";import"./index-aVJjGtUe.js";import"./index-BkVjohbh.js";import"./polarAxisSelectors-DQxdihyW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BvS2o_Zb.js";import"./index-CLmLkjoe.js";import"./index-DUogMgN_.js";import"./renderedTicksSlice-DpPQ5RFR.js";import"./index-pEcVg_GN.js";import"./fillDefinitions-BnpiLimK.js";import"./CartesianChart-Cb1xlur4.js";import"./ZIndexPortal-DjT5vY1_.js";import"./CategoricalChart-xnoIgStO.js";import"./Layer-CxaTRkgO.js";import"./Curve-BDW_2Enz.js";import"./types-CnZsW2lD.js";import"./step-D7Gnf8qO.js";import"./path-DyVhHtw_.js";import"./LabelList-DPGWqLfL.js";import"./Label-DO8sqqdZ.js";import"./Text-DltUF9fa.js";import"./DOMUtils-CCpPdTbp.js";import"./ZIndexLayer-Bd21CySm.js";import"./ActivePoints-CytZfQ5l.js";import"./Dot-8IXYnCyr.js";import"./activeStyles-C-BzGRm8.js";import"./useAnimationId-BQkOAk0c.js";import"./dataEntryStyles-GFsHahL2.js";import"./Symbols-Cwdzyt52.js";import"./symbol-DWZ08l1L.js";import"./ErrorBarContext-BZ9_Mv4V.js";import"./SetGraphicalItem-DypkohdD.js";import"./getRadiusAndStrokeWidthFromDot-DRDDou6B.js";import"./ActiveShapeUtils-DHUczxG_.js";import"./useEffectiveDataKey-qss65ryL.js";import"./CartesianAxis-BxPz-Jvl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BeOaSn6a.js";import"./uniqBy-DWstni_N.js";import"./iteratee-D75QKWW0.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
