import{R as t}from"./iframe-F7LhK7Eo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CJvKQyTT.js";import{R as l}from"./zIndexSlice-B_tReVy-.js";import{C as x}from"./ComposedChart-mcVYsTsk.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CVGfn7Ez.js";import{L as a}from"./Line-DaaBT1lU.js";import{X as c}from"./XAxis-BKvY-R-H.js";import{T as g}from"./Tooltip-Cs0AYtnt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cunaqz8i.js";import"./Text-DW85mx3b.js";import"./resolveDefaultProps-BWBKDxpl.js";import"./DOMUtils-BT8dLI2y.js";import"./isWellBehavedNumber-DjIyZMF-.js";import"./useId-DyKnYw8e.js";import"./useBackwardsCompatibleTheme-IFXQGVV2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeZh5IO9.js";import"./index-BHnugEqK.js";import"./index-D2U0SDM0.js";import"./RechartsWrapper-ay4Rio5L.js";import"./axisSelectors-u93D5o3N.js";import"./throttle-C_DYoZtt.js";import"./d3-scale-Cx-l4XO1.js";import"./index-C3Rm0W8c.js";import"./index-DQvCajjI.js";import"./renderedTicksSlice-B1tuu0tD.js";import"./index-BWf5kuaX.js";import"./CartesianAxis-lENxpg_y.js";import"./Layer-DYdC0UVh.js";import"./types-Cc5FeE6i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B3D6zv8Y.js";import"./chartDataContext-DhRxggLS.js";import"./CategoricalChart-D6bN-RZ3.js";import"./AnimatedItems-9NyDgZfV.js";import"./useAnimationId-1tb1AqGd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CxCtZOg2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B1DBYTAd.js";import"./tooltipContext-1hNJk_yk.js";import"./RegisterGraphicalItemId-G1rEfZcP.js";import"./ErrorBarContext-Cwt6Jtd7.js";import"./GraphicalItemClipPath-DGCCZDh5.js";import"./SetGraphicalItem-DG_xI-Un.js";import"./getZIndexFromUnknown-DBM0JNqH.js";import"./useGraphicalItemIdentity-CZAMumnN.js";import"./Curve-DmoJ01pM.js";import"./step-BQbq2B-X.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DqbOcZnl.js";import"./Dot-0_Q3awJ6.js";import"./getRadiusAndStrokeWidthFromDot-CT63cvvB.js";import"./useElementOffset-NhBD0Cj6.js";import"./uniqBy-BWhaj76i.js";import"./iteratee-BIKbX6L7.js";import"./Cross-BXu3zmQ0.js";import"./Sector-qQPJUEpS.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
