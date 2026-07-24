import{R as t}from"./iframe-DkECMRhY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DYBfxLcG.js";import{R as l}from"./zIndexSlice-DrphCOe8.js";import{C as x}from"./ComposedChart-DAUnDtCN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C_yg52s2.js";import{L as a}from"./Line-1UeX_xo7.js";import{X as c}from"./XAxis-CnIY0uCY.js";import{T as g}from"./Tooltip-BHwenyfJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bbd2gVOF.js";import"./Layer-BR_lx081.js";import"./resolveDefaultProps-9kFOeAbx.js";import"./Text-D0YGp1Dc.js";import"./DOMUtils-m9hSMA-C.js";import"./isWellBehavedNumber-C5D-spqh.js";import"./Label-D0EmKjrf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CJnfUCXF.js";import"./index-Bs5MO9B0.js";import"./index-B2EkAXQG.js";import"./types-BhAPDMfv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dz89v3et.js";import"./throttle-OeP2NIwG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DT2t4UUR.js";import"./index-CubO9nle.js";import"./index-48_ZTq2u.js";import"./axisSelectors-O1utMkLJ.js";import"./d3-scale-DCyD-m6k.js";import"./CartesianChart-DlZ9N_1W.js";import"./chartDataContext-Buh6poim.js";import"./CategoricalChart-Ctl-0XVF.js";import"./tooltipContext-CvlaqRHM.js";import"./AnimatedItems-D_PfprH1.js";import"./useAnimationId-BLnnlAbr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DN85SES_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BkWJCflD.js";import"./RegisterGraphicalItemId-DM_TAUFh.js";import"./ErrorBarContext-Do1YuZSV.js";import"./GraphicalItemClipPath-B9n7ZYaN.js";import"./SetGraphicalItem-AXvs4ZTf.js";import"./getZIndexFromUnknown-eIjSqIJi.js";import"./graphicalItemSelectors-BSInLqmO.js";import"./Curve-55NMYWP1.js";import"./step-BU5cS4PN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CRIWlOJ4.js";import"./Dot-DRTvDWT7.js";import"./getRadiusAndStrokeWidthFromDot-BOG-LMh5.js";import"./useElementOffset-DrvFMWs-.js";import"./uniqBy-C0Xto3XN.js";import"./iteratee-CfKSMI6F.js";import"./Cross-DfR8EU22.js";import"./Sector-B5vkZ1Z7.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
