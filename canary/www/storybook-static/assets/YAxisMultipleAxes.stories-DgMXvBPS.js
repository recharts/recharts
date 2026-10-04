import{R as t}from"./iframe-BWaBJMJm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BbW4o0g7.js";import{R as l}from"./zIndexSlice-CtmWcXao.js";import{C as x}from"./ComposedChart-DVxlQhI3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DOGzCGT3.js";import{L as a}from"./Line-CU6Xn_4t.js";import{X as c}from"./XAxis-Du0WrONz.js";import{T as g}from"./Tooltip-fbXWHZ4Z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DaAaSDK3.js";import"./Text-CaLxBG_J.js";import"./resolveDefaultProps-BoTf8eWq.js";import"./DOMUtils-ZU1bRPvN.js";import"./isWellBehavedNumber-hjVXvh9H.js";import"./useId-DH400x7B.js";import"./useBackwardsCompatibleTheme-C9V53e4Q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbdMqToM.js";import"./index-DUifKCeq.js";import"./index-D2GUCawm.js";import"./RechartsWrapper-C_LHq0Dp.js";import"./axisSelectors-WjeILgtA.js";import"./throttle-Dt5qCkk5.js";import"./d3-scale-DYdeDEBW.js";import"./index-I7xfvYkR.js";import"./index-B1abja9I.js";import"./renderedTicksSlice-B4vPTGd7.js";import"./index-BakoavmS.js";import"./CartesianAxis-ihxfexzN.js";import"./Layer-WH1GH-3R.js";import"./types-CeFzDtUp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DTHkZiLZ.js";import"./chartDataContext-D5Ez6fbj.js";import"./CategoricalChart-DZaCTL-I.js";import"./AnimatedItems-CqoL6PKs.js";import"./useAnimationId-CrzFE7bT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkogAKI_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlN6eMVb.js";import"./tooltipContext-B7JCteW0.js";import"./RegisterGraphicalItemId-B7vtKiJL.js";import"./ErrorBarContext-BU0PpEiW.js";import"./GraphicalItemClipPath-DPY_uU75.js";import"./SetGraphicalItem-DSLLIs8g.js";import"./getZIndexFromUnknown-CTXFDQEN.js";import"./useGraphicalItemIdentity-B-PLK1-q.js";import"./dataEntryStyles-DHMdVsJm.js";import"./Curve-BVKe4kAy.js";import"./step-DX3wHcPe.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DYqGU2MV.js";import"./Dot-bDcTuFpT.js";import"./getRadiusAndStrokeWidthFromDot-DUWDkXPH.js";import"./useElementOffset-B3gaIHtz.js";import"./uniqBy-y_0rvX4w.js";import"./iteratee-CZlOM5B3.js";import"./Cross-Dfkldm_5.js";import"./Sector-BAB4JHWP.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
