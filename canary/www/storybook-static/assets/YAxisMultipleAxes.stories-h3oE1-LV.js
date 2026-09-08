import{R as t}from"./iframe-DtUqFz4i.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BMscqJB-.js";import{R as l}from"./zIndexSlice-D7wiyJvz.js";import{C as x}from"./ComposedChart-CzQBCEWP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-kSp6kUTA.js";import{L as a}from"./Line-C8UhNYz0.js";import{X as c}from"./XAxis-CDer3rOu.js";import{T as g}from"./Tooltip-DkZNsDtW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DSBhBvVo.js";import"./Text-Ci0TXZMh.js";import"./resolveDefaultProps-DhbLPpq6.js";import"./DOMUtils-CAVjRHi7.js";import"./isWellBehavedNumber-BD9jivhZ.js";import"./useId-B1tEHKrt.js";import"./useBackwardsCompatibleTheme-Dq0ydbtQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dl9c6NgM.js";import"./index-G8DVyxPR.js";import"./index-6pOrVVYJ.js";import"./RechartsWrapper-okeo-S0V.js";import"./axisSelectors-DKiSvbvB.js";import"./throttle-Xq_SZc3C.js";import"./d3-scale-qNEzaThY.js";import"./index-BUmCPeXH.js";import"./index-Dz7I98PR.js";import"./renderedTicksSlice-bHtuYqVk.js";import"./index-CBc8BsFv.js";import"./CartesianAxis-CvUiwg6W.js";import"./Layer-DaGE4xdO.js";import"./types-DIyWN1O2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BFiV2di3.js";import"./chartDataContext-D9qEIths.js";import"./CategoricalChart-P4h5BQO5.js";import"./AnimatedItems-Bqh_lJsV.js";import"./useAnimationId-yAmPQwMn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CBwoe9pk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dur4qT68.js";import"./tooltipContext-DOzIg8ml.js";import"./RegisterGraphicalItemId-DHE_UdIi.js";import"./ErrorBarContext-CnzHFxN7.js";import"./GraphicalItemClipPath-SRfs0G_i.js";import"./SetGraphicalItem-Cs09Djqk.js";import"./getZIndexFromUnknown-CScG8aTM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C6MoKrmF.js";import"./Curve-dyv5wxAX.js";import"./step-6HhaZYhK.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ConO_hsx.js";import"./Dot-CtYAIqQI.js";import"./getRadiusAndStrokeWidthFromDot-qVB91pCe.js";import"./useElementOffset-zKQGkCXa.js";import"./uniqBy-CF70an62.js";import"./iteratee-BsjABlDl.js";import"./Cross-CqbG7TyB.js";import"./Sector-DZgoHJpR.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
