import{R as t}from"./iframe-C2PRwgnl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CAHeoama.js";import{R as l}from"./zIndexSlice-weNxwEm8.js";import{C as x}from"./ComposedChart-BLjSf-Hf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BkX0fBVF.js";import{L as a}from"./Line-D8_px741.js";import{X as c}from"./XAxis-BncsxFZ4.js";import{T as g}from"./Tooltip-BI5i1InD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DdFUcTtW.js";import"./Text-D4lV4Imp.js";import"./resolveDefaultProps-aJLviuy-.js";import"./pageBackground-B4m54nd8.js";import"./ZIndexLayer-BWmWIjtz.js";import"./index-BtXSjXZr.js";import"./index-BqBIYX05.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DmG4l4yE.js";import"./throttle-CVlDdGyC.js";import"./axisSelectors-nSy-fV9M.js";import"./d3-scale-BIUnlP6Z.js";import"./CartesianAxis-DaiAwxt0.js";import"./Layer-botuDyHz.js";import"./types-CHq7dG9p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-FbCZKIWz.js";import"./index-BxVmRSNz.js";import"./index-CkiHrneS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BOct7ur6.js";import"./index-BeFazHyq.js";import"./CartesianChart-CtjN8ua0.js";import"./ZIndexPortal-CKd--WGA.js";import"./CategoricalChart-gCAaZAhY.js";import"./LabelList-Deq7UXnp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BnH84tO-.js";import"./useAnimationId-Dx5Gkjhg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BV6ZL_JX.js";import"./tooltipContext-DoS9_DwW.js";import"./dataEntryStyles-BHwXjzhI.js";import"./ErrorBarContext-C59RBxai.js";import"./activeStyles-a6dnVtfT.js";import"./SetGraphicalItem-DeBA8bqw.js";import"./getZIndexFromUnknown-C3Kmoc2F.js";import"./useEffectiveDataKey-lRQnp3q-.js";import"./omit-Cqn4cCIs.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CQnefVPR.js";import"./step-Dw_YruiA.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BH2xo60h.js";import"./Dot-2eC8WQef.js";import"./Symbols-CiyVK5wN.js";import"./symbol-VU_gnnhL.js";import"./getRadiusAndStrokeWidthFromDot-Dzgyitlt.js";import"./useElementOffset-Cm5L0n6p.js";import"./uniqBy-B3CDwPKv.js";import"./iteratee-BrcMUC4D.js";import"./Cross-BNFlSaHC.js";import"./Sector-CPqNaTT0.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
