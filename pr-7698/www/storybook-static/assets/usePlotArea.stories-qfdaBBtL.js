import{R as t}from"./iframe-zaa1iZav.js";import{u as a}from"./CategoricalChart-DzU0tABe.js";import{R as p}from"./zIndexSlice-BWWEcbGp.js";import{C as s}from"./ComposedChart-SWtXcCgK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dy42oF7S.js";import{X as l}from"./XAxis-BVnwJxOu.js";import{Y as h}from"./YAxis-DJCm-s1B.js";import{L as c}from"./Legend-rKi-Jd1L.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bf_8sWMW.js";import"./index-BZPWANmU.js";import"./index-CM-qLXxp.js";import"./index-BrIYS7Za.js";import"./index-B2mdcnwD.js";import"./throttle-CPqxLIQd.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ucT8kUEv.js";import"./resolveDefaultProps-CJqzH_DM.js";import"./isWellBehavedNumber-DAhZ9La7.js";import"./d3-scale-DKZbRsMk.js";import"./renderedTicksSlice-jJ4uAB34.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BUEIFsCx.js";import"./chartDataContext-CPRHK_4k.js";import"./Layer-Diqr5-jO.js";import"./Curve-PUx2QnOd.js";import"./types-DFArERnY.js";import"./step-Bfrhe9AG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-O1YgZXLs.js";import"./Label-dEEe5X5F.js";import"./Text-CNT20nWc.js";import"./DOMUtils-CDT7WRtk.js";import"./useId-B4zmx8V0.js";import"./useBackwardsCompatibleTheme-XO0ISL55.js";import"./ZIndexLayer-Dn1PwF1U.js";import"./useAnimationId-B8kms9uE.js";import"./ActivePoints-DVBi-AIt.js";import"./Dot-oGoSOzAY.js";import"./RegisterGraphicalItemId-dsCSOxKS.js";import"./ErrorBarContext-ZTRuZpEO.js";import"./GraphicalItemClipPath-Dhs9LVS9.js";import"./SetGraphicalItem-Dk_WNLiG.js";import"./getRadiusAndStrokeWidthFromDot-DJ1u3-OH.js";import"./ActiveShapeUtils-lGuUrwlM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BEMiFdQK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-qor2sXTI.js";import"./symbol-Bekqv1-x.js";import"./useElementOffset-BkrFnIvv.js";import"./uniqBy-BVIzKSm2.js";import"./iteratee-CL50YqF6.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
