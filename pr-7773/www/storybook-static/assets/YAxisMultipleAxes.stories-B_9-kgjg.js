import{R as t}from"./iframe-BkVFpUlY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-ydoiCG45.js";import{R as l}from"./zIndexSlice-DsJvGkf_.js";import{C as x}from"./ComposedChart-B-luCTs0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CS101LmD.js";import{L as a}from"./Line-Bb6pgpT5.js";import{X as c}from"./XAxis-DKVVz-sZ.js";import{T as g}from"./Tooltip-DccnUyf0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cg9XptP0.js";import"./Text-BIwedGTb.js";import"./resolveDefaultProps-BteSFwB2.js";import"./DOMUtils-BcDWMqtm.js";import"./isWellBehavedNumber-CfBMT12P.js";import"./useId-Cugd2wLY.js";import"./useBackwardsCompatibleTheme-bP9OoM6q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CfoAs0yr.js";import"./index-0hsVYWu6.js";import"./index-DymoF_97.js";import"./RechartsWrapper-odbOlBoE.js";import"./axisSelectors-B50PWx2F.js";import"./throttle-BmqzJcEu.js";import"./d3-scale-DYQ4LMXq.js";import"./index-Q5aHXVFQ.js";import"./index-YkbYvVvq.js";import"./renderedTicksSlice-CwTU9gZs.js";import"./index-DUxWWrkZ.js";import"./CartesianAxis-CKyL8NSQ.js";import"./Layer-DQ1QN6bj.js";import"./types-CKn4wQG_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CqMhYxBy.js";import"./chartDataContext-VrlvbsLo.js";import"./CategoricalChart-CzfSjKl0.js";import"./AnimatedItems-BpowKEth.js";import"./useAnimationId-Bk6mcJf6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cy_w7-0b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BSJyn28s.js";import"./tooltipContext-fcW-xcg3.js";import"./RegisterGraphicalItemId-C4Vmg6Ny.js";import"./ErrorBarContext-BYIQqhKW.js";import"./GraphicalItemClipPath-KjuHWuk-.js";import"./SetGraphicalItem-BGmRK6gI.js";import"./getZIndexFromUnknown-EDbwK6Tp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D9FBhzIW.js";import"./Curve-j6CNmiH0.js";import"./step-BxPdVPhz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-De3lIG5I.js";import"./Dot-D7W2BemX.js";import"./getRadiusAndStrokeWidthFromDot-QIQHTPvf.js";import"./useElementOffset-CXmZJxz2.js";import"./uniqBy-CqDyWSTv.js";import"./iteratee-CmG9r8ck.js";import"./Cross-sNUSYXkO.js";import"./Sector-ChGJ4nNP.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
