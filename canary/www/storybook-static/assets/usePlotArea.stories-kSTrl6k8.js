import{R as t}from"./iframe-C20wDroG.js";import{u as a}from"./CategoricalChart-BPRT5cE8.js";import{R as p}from"./zIndexSlice-Dn977bIM.js";import{C as s}from"./ComposedChart-fc9zkA9M.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BK0Z6C9x.js";import{X as l}from"./XAxis-bncj55mF.js";import{Y as h}from"./YAxis-Dregax_Z.js";import{L as c}from"./Legend-D6Pxhrbc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ajeFxaVY.js";import"./index-B_Gj3SOI.js";import"./index-CwuSxHdI.js";import"./index-Drz6B1BJ.js";import"./index-D0HNPWdm.js";import"./throttle-D_pKwmSO.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D2d7y5tB.js";import"./resolveDefaultProps-DUXs9b9S.js";import"./isWellBehavedNumber-CiTmvWUm.js";import"./d3-scale-CMJeOIiZ.js";import"./renderedTicksSlice-CDLV8c3e.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D0DqF69B.js";import"./chartDataContext-BN_dA9lB.js";import"./Layer-DDCJtugd.js";import"./Curve-CmAw5S9J.js";import"./types-BDuMvVkF.js";import"./step-cmv5QLzJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BeGp4Wik.js";import"./Label-DkS9BWG5.js";import"./Text-DGWMJ0hU.js";import"./DOMUtils-CaGG5Hmm.js";import"./useId-HPBRJy0D.js";import"./useBackwardsCompatibleTheme-CdR6FU4E.js";import"./ZIndexLayer-DPgbR3ka.js";import"./useAnimationId-Bc7mxzMe.js";import"./ActivePoints-Bxc8A2aK.js";import"./Dot-tDq1zpNX.js";import"./RegisterGraphicalItemId-CBXEWS4T.js";import"./ErrorBarContext-B7iknVLS.js";import"./GraphicalItemClipPath-DnJzFjkV.js";import"./SetGraphicalItem-DfmFtgCH.js";import"./getRadiusAndStrokeWidthFromDot-BXHe0lbi.js";import"./ActiveShapeUtils-BjalrG5Q.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BCVPeUYs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CkjYU1xm.js";import"./symbol-BOBSpd1m.js";import"./useElementOffset-Dnes-XqG.js";import"./uniqBy-2EVv77Lm.js";import"./iteratee-CfZ0Y8VA.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
