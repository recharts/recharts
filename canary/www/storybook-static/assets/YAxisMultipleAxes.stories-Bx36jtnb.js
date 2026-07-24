import{R as t}from"./iframe-HFtXtWDU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DsjAAI5S.js";import{R as l}from"./zIndexSlice-Cqq8ngM8.js";import{C as x}from"./ComposedChart-CDdAMZJx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-YSzhDfJh.js";import{L as a}from"./Line-DZMze_xC.js";import{X as c}from"./XAxis-BpsaCJf7.js";import{T as g}from"./Tooltip-DJhs5iYq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BnlRkakD.js";import"./Layer-DWG7b0hl.js";import"./resolveDefaultProps-CtgsYIUG.js";import"./Text-CDRZZb9B.js";import"./DOMUtils-Cr-MkK7_.js";import"./isWellBehavedNumber-DknTQDme.js";import"./Label-BrbXEreR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-0igMx-O2.js";import"./index-CfzmDy1X.js";import"./index-qsTytkhm.js";import"./types-CqGtNHfB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CnA3aPIs.js";import"./throttle-BOHTa9OG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-3eKbtU-n.js";import"./index-CX6-2c79.js";import"./index-DpFOPUyx.js";import"./axisSelectors-DgDHkI2g.js";import"./d3-scale-BFpMyz7A.js";import"./CartesianChart-Chec9F6S.js";import"./chartDataContext-v3QpNePy.js";import"./CategoricalChart-wF3j6ivZ.js";import"./tooltipContext-C34k9vkX.js";import"./AnimatedItems-uy3iUhMQ.js";import"./useAnimationId-CzZVkbxz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1hle0OgU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DYmG8TYR.js";import"./RegisterGraphicalItemId-CYdn0cBX.js";import"./ErrorBarContext-uHz1jF0z.js";import"./GraphicalItemClipPath-njx9wXrL.js";import"./SetGraphicalItem-7uBPAKUB.js";import"./getZIndexFromUnknown-BeIvHtB6.js";import"./graphicalItemSelectors-B_8Rkk91.js";import"./Curve-BR3zS18n.js";import"./step-CxNVACTf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cr6rlWwV.js";import"./Dot-bRuvlybH.js";import"./getRadiusAndStrokeWidthFromDot-Cm-vUEgX.js";import"./useElementOffset-DddFNO6b.js";import"./uniqBy-DB3_HqTc.js";import"./iteratee-D-KV-lOb.js";import"./Cross-CDfE27Wk.js";import"./Sector-ByxPjfz7.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
