import{R as t}from"./iframe-CeCOqiJm.js";import{j as a}from"./RechartsWrapper-DkI5rWg4.js";import{R as p}from"./zIndexSlice-DdaMb5XG.js";import{C as n}from"./ComposedChart-DgluM-g0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C5ZRb_5H.js";import{X as l}from"./XAxis-C64KB_q-.js";import{Y as h}from"./YAxis-A7bYD_ch.js";import{L as c}from"./Legend-NBKfN6k5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CkuoYXav.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DY_V65z5.js";import"./throttle-Bex5NkUv.js";import"./index-B9TMiPeS.js";import"./index-Dpi_zLnO.js";import"./isWellBehavedNumber-B7aD_M3c.js";import"./d3-scale-Cd6mqy1G.js";import"./index-D0EsppEB.js";import"./index-DrQMD2ku.js";import"./renderedTicksSlice-Bncz9dIB.js";import"./index-DRO0vfdx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsDUvZ6B.js";import"./chartDataContext-CJlR_4xR.js";import"./CategoricalChart-DiPqSwwe.js";import"./Layer-DpcMSheP.js";import"./Curve-ig6Db0bN.js";import"./types-m_9hz0N1.js";import"./step-D1fpC4Ci.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Di-68duO.js";import"./Label-Xd_rxrmK.js";import"./Text-DDswsbtv.js";import"./DOMUtils-BCUi_GUC.js";import"./useId-Bah-b0hR.js";import"./useBackwardsCompatibleTheme-C_9NEiLi.js";import"./ZIndexLayer-BQtw6wpF.js";import"./useAnimationId-CPtx5Z6n.js";import"./ActivePoints-BK3_tt-0.js";import"./Dot-DoByF9sv.js";import"./RegisterGraphicalItemId-BNFTgn8t.js";import"./ErrorBarContext-C_Gf5gdw.js";import"./GraphicalItemClipPath-CNDfJ_fQ.js";import"./SetGraphicalItem-DcgFqiOy.js";import"./getRadiusAndStrokeWidthFromDot-r7hnUPNX.js";import"./ActiveShapeUtils-FS6Mn2Zl.js";import"./useGraphicalItemIdentity-BZQpyUJc.js";import"./CartesianAxis-VCLAEQIg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DQqX5H-U.js";import"./symbol-DkOFKYHt.js";import"./useElementOffset-CZclPecY.js";import"./uniqBy-BFlog4hA.js";import"./iteratee-DngjopU3.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
