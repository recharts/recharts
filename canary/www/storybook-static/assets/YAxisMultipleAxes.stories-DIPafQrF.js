import{R as t}from"./iframe-BzcDVKKs.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BWHP_SYF.js";import{R as l}from"./zIndexSlice-BTTYVccT.js";import{C as x}from"./ComposedChart-DGju_FYc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B4ygsPp5.js";import{L as a}from"./Line-C1gWHpuW.js";import{X as c}from"./XAxis-DmxgzYYf.js";import{T as g}from"./Tooltip-B1Brq9iS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CtBQk67s.js";import"./Text-24J6FH-o.js";import"./resolveDefaultProps-BtypfTmg.js";import"./DOMUtils-Bp1Ea9M_.js";import"./isWellBehavedNumber-kEkRMq_8.js";import"./useId-BlYRNzJn.js";import"./useBackwardsCompatibleTheme-ncr2oU_w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DXdU7RWt.js";import"./index-Km9DigXp.js";import"./index-DjfWl8QV.js";import"./RechartsWrapper-CGczEQWO.js";import"./axisSelectors-IdMVp5Ng.js";import"./throttle-DDPbgHA_.js";import"./d3-scale-C4pPFzlU.js";import"./index-BATPxOFC.js";import"./index-9IUtScc_.js";import"./renderedTicksSlice-Cv0ctYuN.js";import"./index-DrsmB6aN.js";import"./CartesianAxis-HfL3rF1Y.js";import"./Layer-B4cUMoCn.js";import"./types-Cgo5Tovd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BPCp3bVQ.js";import"./chartDataContext-DN2d-1N9.js";import"./CategoricalChart-BpKMrWac.js";import"./AnimatedItems-tb47PotV.js";import"./useAnimationId-B_k41OIp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DA-7Dq-R.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ck9I3ldI.js";import"./tooltipContext-CB8didm_.js";import"./RegisterGraphicalItemId-D5DmGuV-.js";import"./ErrorBarContext-C3FB8ozV.js";import"./GraphicalItemClipPath-Cfm3NAku.js";import"./SetGraphicalItem-CNRXuHZw.js";import"./getZIndexFromUnknown-DS03evKO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-tWVYkbkT.js";import"./Curve-D-bcAvVw.js";import"./step-DnJg-qaF.js";import"./path-DyVhHtw_.js";import"./ActivePoints-hCgPRLnM.js";import"./Dot-aHiofzDa.js";import"./getRadiusAndStrokeWidthFromDot-DgBFRHKH.js";import"./useElementOffset-VjV8E2aW.js";import"./uniqBy-eOMq6B75.js";import"./iteratee-DrjruNpI.js";import"./Cross-B6ejWItR.js";import"./Sector-DmQmgrZA.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
