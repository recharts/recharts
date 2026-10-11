import{R as t}from"./iframe-Z4zOoLz7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DcaBIqq9.js";import{R as l}from"./zIndexSlice-07-9uDTC.js";import{C as x}from"./ComposedChart-Ci-r_zyP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DZqD-arU.js";import{L as a}from"./Line-D2Sd7QBy.js";import{X as c}from"./XAxis-vC51wnfX.js";import{T as g}from"./Tooltip-BQCBXkHh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CznRo0qq.js";import"./Text-D1NXAhAr.js";import"./resolveDefaultProps-DOQLwwUl.js";import"./pageBackground-cgE2GIfC.js";import"./isWellBehavedNumber-Ds32fXh1.js";import"./useId-d3zx3clY.js";import"./useBackwardsCompatibleTheme-DoS7t3mQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CzgpVDV6.js";import"./index-DyaBjL-T.js";import"./index-xqTHFQSV.js";import"./RechartsWrapper-B6jGY5P2.js";import"./axisSelectors-D5RAwviA.js";import"./throttle-9WzIUwC-.js";import"./d3-scale-By1WrWdl.js";import"./index-DNpJ-y1s.js";import"./index-DU7fosbq.js";import"./renderedTicksSlice-XpkPmQP6.js";import"./index-YATDX38S.js";import"./CartesianAxis-D0qgtLuE.js";import"./Layer-DROZCM5S.js";import"./types-BIzeqQN_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-r7CDK1kg.js";import"./chartDataContext-B0vVK4FP.js";import"./CategoricalChart-D5-WelqS.js";import"./activeStyles-Clj_q_02.js";import"./useAnimationId-CclGmA5U.js";import"./dataEntryStyles-jPYjF1-F.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BRzNxGc4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DptdzhMF.js";import"./tooltipContext-LCXgX3C4.js";import"./ErrorBarContext-DyrSqIsA.js";import"./GraphicalItemClipPath-Dh8t0UHl.js";import"./SetGraphicalItem-D_Y4scs-.js";import"./getZIndexFromUnknown-CAtKMRWb.js";import"./useGraphicalItemIdentity-Bz_dea2_.js";import"./Curve-B2kFPXHR.js";import"./step-Bz8uLEg2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cf8I1OR_.js";import"./Dot-BYY6Lyl-.js";import"./getRadiusAndStrokeWidthFromDot-oWL_gOl_.js";import"./useElementOffset-S6uYAEYX.js";import"./uniqBy-D7Oablgk.js";import"./iteratee-BmQxJUF4.js";import"./Cross-Cs-2djo7.js";import"./Sector-CO7Pa82d.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
