import{R as t}from"./iframe-BehVlOkm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Ds0Z47iT.js";import{R as l}from"./zIndexSlice-CdmzvBWn.js";import{C as x}from"./ComposedChart-CYwBQNg8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DWpO7HuP.js";import{L as a}from"./Line-xZ_IkCzK.js";import{X as c}from"./XAxis-CQVzim4L.js";import{T as g}from"./Tooltip-BCrTZQqf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-3Vi5DR-p.js";import"./Text-DdbsBRSW.js";import"./resolveDefaultProps-9hqPoiPG.js";import"./DOMUtils-DRfi6Z_9.js";import"./isWellBehavedNumber-BwNlQ7J1.js";import"./useId-TSoobfid.js";import"./useBackwardsCompatibleTheme-DC96YUQX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C8fMsiAz.js";import"./index-nl04o6LQ.js";import"./index-lttadt3D.js";import"./RechartsWrapper-0yqzaTB4.js";import"./axisSelectors-DyVT26JG.js";import"./throttle-3ebqMYzS.js";import"./d3-scale-DlStqn9j.js";import"./index-CaKklxJL.js";import"./index-BrZJdMim.js";import"./renderedTicksSlice-dw4JvkQu.js";import"./index-BxFZJssh.js";import"./CartesianAxis-Dh9d1hc7.js";import"./Layer-Drrwe-kT.js";import"./types-CAE_u7CX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DZXsAfAP.js";import"./chartDataContext-COawrzjC.js";import"./CategoricalChart-Bb7rG0O4.js";import"./AnimatedItems-DX3Aqvyi.js";import"./useAnimationId-PYM0HN7I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BUmqWu2s.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DgsGKv18.js";import"./tooltipContext-CNfojh2N.js";import"./RegisterGraphicalItemId-B_HypSlK.js";import"./ErrorBarContext-BsuukL4-.js";import"./GraphicalItemClipPath-DHrIaKZQ.js";import"./SetGraphicalItem-ke9OEdFg.js";import"./getZIndexFromUnknown-BBZUKcgv.js";import"./useGraphicalItemIdentity-CpoXyJzx.js";import"./Curve-DIgGrV17.js";import"./step-DaHJvpwY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CSlqy7_R.js";import"./Dot-BJdMpeRo.js";import"./getRadiusAndStrokeWidthFromDot-Dn20e6Na.js";import"./useElementOffset-Dm1K4Zpo.js";import"./uniqBy-CS225_ZI.js";import"./iteratee-VXBxxD8z.js";import"./Cross-CemypyqM.js";import"./Sector-To5kSVm7.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
