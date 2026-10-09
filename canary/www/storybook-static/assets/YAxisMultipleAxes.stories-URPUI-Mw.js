import{R as t}from"./iframe-C7tNsTpK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-aXsdWW2g.js";import{R as l}from"./zIndexSlice-T7oa9RdZ.js";import{C as x}from"./ComposedChart-CgHuYAC3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Coi7-76v.js";import{L as a}from"./Line-CHcJJgNV.js";import{X as c}from"./XAxis-C2gvQZpV.js";import{T as g}from"./Tooltip-Bkt3Zwmg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CEwaTgR3.js";import"./Text-UOL45mL4.js";import"./resolveDefaultProps-DbdXlzmI.js";import"./pageBackground-B-TVGQhf.js";import"./isWellBehavedNumber-w95Ql-ta.js";import"./useId-6XeKOM79.js";import"./useBackwardsCompatibleTheme-BtQBwdq6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-jLHUg-ly.js";import"./index-BESlF8Z2.js";import"./index-swZv8iIV.js";import"./RechartsWrapper-BucpRp_7.js";import"./axisSelectors-CxImXzGX.js";import"./throttle-DNLiVZh5.js";import"./d3-scale-CAID8NmZ.js";import"./index-BolqH0tk.js";import"./index-CS0OILw8.js";import"./renderedTicksSlice-j7Pa5BYg.js";import"./index-DDzOQsUA.js";import"./CartesianAxis-BaDX4wf1.js";import"./Layer-DP-YoZN_.js";import"./types-OUsJcmF8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B_1K3lTu.js";import"./chartDataContext-B0xxoqnf.js";import"./CategoricalChart-Lk1sxOY3.js";import"./AnimatedItems-gSeOcFSg.js";import"./useAnimationId-Bb7S2zXD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B75oFVmx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5hficCmD.js";import"./tooltipContext-Czplw5CS.js";import"./RegisterGraphicalItemId-CplM38Xw.js";import"./ErrorBarContext-Z3h8hxY9.js";import"./GraphicalItemClipPath-nv6N7UDG.js";import"./SetGraphicalItem-CiL25rkH.js";import"./getZIndexFromUnknown-DbGzk3bP.js";import"./useGraphicalItemIdentity-wn6P8Qk2.js";import"./dataEntryStyles-nGReLrVP.js";import"./Curve-BN4KP-pW.js";import"./step-wm288KJA.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BhhwgACW.js";import"./Dot-BqSzvkx_.js";import"./getRadiusAndStrokeWidthFromDot-BJ6oq1Q3.js";import"./useElementOffset-zMNgU5oi.js";import"./uniqBy-Bwz-78ds.js";import"./iteratee-CFobVmxc.js";import"./Cross-CIuGt2Ca.js";import"./Sector-C-ovoHDi.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
