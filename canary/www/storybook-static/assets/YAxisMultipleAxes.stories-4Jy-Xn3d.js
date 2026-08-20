import{R as t}from"./iframe-1ThqpvbR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B1czIw6R.js";import{R as l}from"./zIndexSlice-D1UhtHk3.js";import{C as x}from"./ComposedChart-C-kp7sV2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-bFLAAD1S.js";import{L as a}from"./Line-CQ64EOYy.js";import{X as c}from"./XAxis-P8CW3MKP.js";import{T as g}from"./Tooltip-qvvWeQJ8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dga6ObK8.js";import"./Text-MDWEE3g_.js";import"./resolveDefaultProps-DArzca5M.js";import"./DOMUtils-BsT2H8yg.js";import"./isWellBehavedNumber-B7CQu1xd.js";import"./useId-Cq2DHNjh.js";import"./useBackwardsCompatibleTheme-CdEwSBID.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6xphlKa.js";import"./index-DoTHKFlr.js";import"./index-QzMa9_Xi.js";import"./RechartsWrapper-DcjLdZwM.js";import"./index-CfQ7Fwii.js";import"./index-CktiEatn.js";import"./throttle-C73VAA69.js";import"./axisSelectors-1futPsBe.js";import"./d3-scale-nVhhBbRx.js";import"./renderedTicksSlice-0CGdVobN.js";import"./CartesianAxis-LO87TYgw.js";import"./Layer-CO3sdEK1.js";import"./types-BACZxUTO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-dewq0r_z.js";import"./chartDataContext-DvyAzMjZ.js";import"./CategoricalChart-XR-igInW.js";import"./AnimatedItems-CScMa6hv.js";import"./useAnimationId-xKJzFs5I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DlLkmtYk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BlimohsT.js";import"./tooltipContext-CxbY5XPu.js";import"./RegisterGraphicalItemId-DZFAuRVF.js";import"./ErrorBarContext-DBffz6et.js";import"./GraphicalItemClipPath-Tv0C2Wnw.js";import"./SetGraphicalItem-DGTvGn78.js";import"./getZIndexFromUnknown-Bxz2s-Sx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-GcNb_05X.js";import"./Curve-BFr4LVo1.js";import"./step-K_9BfkCY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DT7ZsPv5.js";import"./Dot-fVKNfdE9.js";import"./getRadiusAndStrokeWidthFromDot-Zg2QbZcY.js";import"./useElementOffset-D_JS3Ekf.js";import"./uniqBy-BWHb0M0I.js";import"./iteratee-DkQJTWAO.js";import"./Cross-ClqssIZ3.js";import"./Sector-DQNnGbD_.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
