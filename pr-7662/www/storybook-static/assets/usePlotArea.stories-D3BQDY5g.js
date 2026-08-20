import{R as t}from"./iframe-cFlQwHEa.js";import{u as a}from"./CategoricalChart-BBemHSvC.js";import{R as p}from"./zIndexSlice-DDYeRltP.js";import{C as s}from"./ComposedChart-Cr_zCTxJ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DJAGFMBk.js";import{X as l}from"./XAxis-B2GHVOpr.js";import{Y as h}from"./YAxis-kKnqa52f.js";import{L as c}from"./Legend-BJF1jmuM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXBBXfmC.js";import"./index-CSK5_VVc.js";import"./index-Dtvx5j6b.js";import"./index-DglaFOn3.js";import"./index-C-TRi17m.js";import"./throttle-DAdIMx4T.js";import"./get-C2VjdU0L.js";import"./axisSelectors--mu7xJ5Y.js";import"./resolveDefaultProps-C2OiAFwa.js";import"./isWellBehavedNumber-BSAPeCSS.js";import"./d3-scale-CkWKTTx7.js";import"./renderedTicksSlice-D983KGZ4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-fiOEBM8R.js";import"./chartDataContext-BvjIPTZo.js";import"./Layer-BgSWIZl1.js";import"./Curve-CyS7BkRL.js";import"./types-ChcMjuwl.js";import"./step-DcRYwHfR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKR9bXgi.js";import"./Label-JW-KtVqW.js";import"./Text-BuwjYicu.js";import"./DOMUtils-BFAGFFMB.js";import"./useId-B6yN-zUw.js";import"./useBackwardsCompatibleTheme-BqDTENvH.js";import"./ZIndexLayer-p7Pk0-Yp.js";import"./useAnimationId-BEPJjOtf.js";import"./ActivePoints-CjX0WMZa.js";import"./Dot-BayKRhRn.js";import"./RegisterGraphicalItemId-BQvNsPKC.js";import"./ErrorBarContext-BnnhnyAe.js";import"./GraphicalItemClipPath-uMqpd6od.js";import"./SetGraphicalItem-B-flkej3.js";import"./getRadiusAndStrokeWidthFromDot-CPAqKToh.js";import"./ActiveShapeUtils-CR14wFnm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BIZkK73U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Q3AzLqoX.js";import"./symbol-BmR2DuwM.js";import"./useElementOffset-B0E-eh4h.js";import"./uniqBy-CNtWXDS-.js";import"./iteratee-DpEh8_N1.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
