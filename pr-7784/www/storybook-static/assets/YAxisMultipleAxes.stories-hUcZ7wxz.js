import{R as t}from"./iframe-CUWBn4q2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DznKUGT9.js";import{R as l}from"./zIndexSlice-CXDrS8ji.js";import{C as x}from"./ComposedChart-CsAUZMi5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DrwgWZnE.js";import{L as a}from"./Line-QQwDXclT.js";import{X as c}from"./XAxis-BLeODyW3.js";import{T as g}from"./Tooltip-XZWI66bv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-kwBf54iY.js";import"./Text-DyTjweFw.js";import"./resolveDefaultProps-D0umfLoR.js";import"./DOMUtils-DIgt7RHT.js";import"./isWellBehavedNumber-C7RzZnbq.js";import"./useId-D5YR5LZL.js";import"./useBackwardsCompatibleTheme-D6xiuF9M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D2yQ2Oeh.js";import"./index-CLYmkFIA.js";import"./index-9Wsbece1.js";import"./RechartsWrapper-D0kr3yQ2.js";import"./axisSelectors-BtjPkbxT.js";import"./throttle-D674SENT.js";import"./d3-scale-CSrhJk_u.js";import"./index-C3m0kF0l.js";import"./index-BRlPI1a6.js";import"./renderedTicksSlice-x_-J1N5G.js";import"./index-B1_r5ctg.js";import"./CartesianAxis-B28nXVtL.js";import"./Layer-B2jZ5e2I.js";import"./types-Cm8He0RL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DasXIysH.js";import"./chartDataContext-CWpZ_4LY.js";import"./CategoricalChart-C2VzdUWy.js";import"./AnimatedItems-DFCeZ6-M.js";import"./useAnimationId-75oMmLO2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CkXPWe3J.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BbASsAoV.js";import"./tooltipContext-Dqre0BOE.js";import"./RegisterGraphicalItemId-xVBFXNgo.js";import"./ErrorBarContext-BKxRmBr1.js";import"./GraphicalItemClipPath-g7UOCVV4.js";import"./SetGraphicalItem-DiC6WCa5.js";import"./getZIndexFromUnknown-y4PX2ahG.js";import"./useGraphicalItemIdentity-B8tF-TLM.js";import"./Curve-C937f4F6.js";import"./step-DEVBfr_J.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BpXzUdPZ.js";import"./Dot-BGhESmiF.js";import"./getRadiusAndStrokeWidthFromDot-18D5zGZY.js";import"./useElementOffset-ChKOjUVs.js";import"./uniqBy-BV5A9cpt.js";import"./iteratee-CH0i-qx9.js";import"./Cross-8SbsJebq.js";import"./Sector-VnYGXO-a.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
