import{R as t}from"./iframe-BFObQXXM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DaKTxPc7.js";import{R as l}from"./zIndexSlice-BvSBG_sk.js";import{C as x}from"./ComposedChart-DfJYfYyB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-PsQrhJgr.js";import{L as a}from"./Line-fvr9nFjR.js";import{X as c}from"./XAxis-qu1te6gL.js";import{T as g}from"./Tooltip-qCP9WKi1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DDOQ4R0s.js";import"./Text-CJhUB4hq.js";import"./resolveDefaultProps-BRFxqhI5.js";import"./pageBackground-C-W7t-2X.js";import"./isWellBehavedNumber-Di8XhGY_.js";import"./useId-C4vD49YQ.js";import"./useBackwardsCompatibleTheme-SoWlTCM6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dx_I1S2M.js";import"./index-BDLQEm-M.js";import"./index-DuyOw6al.js";import"./axisSelectors-CVf0-qpU.js";import"./throttle-DjO6J8yc.js";import"./d3-scale-Da5OAhLE.js";import"./CartesianAxis-LKjUZ976.js";import"./Layer-B5sm7Diz.js";import"./types-D0QZpxYL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ElbwHqBe.js";import"./index-D88_648m.js";import"./index-DgBcae_n.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D0l9eNV0.js";import"./index-D3gbqmrd.js";import"./CartesianChart-D-DmleFH.js";import"./chartDataContext-DLE8D3iQ.js";import"./CategoricalChart-CTQAivkk.js";import"./activeStyles-CWTGeeaa.js";import"./useAnimationId-5IpIdjB8.js";import"./dataEntryStyles-BYgKVvun.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-X-8XVq24.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-3kPY9Bl6.js";import"./tooltipContext-CdkIG2hT.js";import"./ErrorBarContext-A6KbAgUZ.js";import"./GraphicalItemClipPath-Veko-L0U.js";import"./SetGraphicalItem-UiOjxlQM.js";import"./getZIndexFromUnknown-1u_AnGGE.js";import"./useEffectiveDataKey-DoMzN8uO.js";import"./omit-N4rjywGu.js";import"./isArguments-yB-y1yaH.js";import"./Curve-vRM4WLtL.js";import"./step-DZUEZKzr.js";import"./path-DyVhHtw_.js";import"./ActivePoints-u30qQxp9.js";import"./Dot-D0UZAudw.js";import"./getRadiusAndStrokeWidthFromDot-l8Ertzo7.js";import"./useElementOffset-CATtOAUw.js";import"./uniqBy-Cqj_Zr9d.js";import"./iteratee-CKc5G6nr.js";import"./Cross-CGAu3OVA.js";import"./Sector-rRUrdzKs.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
