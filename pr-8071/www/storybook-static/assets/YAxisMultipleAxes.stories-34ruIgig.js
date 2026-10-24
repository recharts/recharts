import{R as t}from"./iframe-B1_QfljJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BOlbfRR9.js";import{R as l}from"./zIndexSlice-Cb-_WhSJ.js";import{C as x}from"./ComposedChart-CmygcsGV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CTsBmcsP.js";import{L as a}from"./Line-CSU9tv9c.js";import{X as c}from"./XAxis-C5w_o036.js";import{T as g}from"./Tooltip-wOLs8XdN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dq-PRmXE.js";import"./Text-l_2w-j-6.js";import"./resolveDefaultProps-BKBpJeVO.js";import"./pageBackground-C2L5RPBY.js";import"./isWellBehavedNumber-CjzDakCh.js";import"./useId-5cvDRGiM.js";import"./useBackwardsCompatibleTheme-Cn0U0gME.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DCJHrufs.js";import"./index-C0R_VbD9.js";import"./index-C4Bv3TLI.js";import"./dataEntryStyles-DFEzHfWh.js";import"./axisSelectors-7XQKMXbV.js";import"./throttle-D7IvOyg1.js";import"./d3-scale-Ch4lSu5M.js";import"./CartesianAxis-Bufnbb1Y.js";import"./Layer-B_0rxCBF.js";import"./types-DbTvfnZ9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-QhE759w-.js";import"./index-DrIBMx-a.js";import"./index-PfBmA6Mj.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-eNWWZf5L.js";import"./index-D_5ex_s0.js";import"./CartesianChart-0PUgz-fD.js";import"./chartDataContext-W36SsBCK.js";import"./CategoricalChart-Bnl3KIy2.js";import"./activeStyles-Cj23hm4O.js";import"./useAnimationId-g_gs6Adq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLSVVjg0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhsBwk0C.js";import"./tooltipContext-Bae-_IL0.js";import"./RegisterGraphicalItemId-nMZsofRB.js";import"./ErrorBarContext-teR4Ylft.js";import"./SetGraphicalItem-BVP4iL4X.js";import"./getZIndexFromUnknown-DoRjXW1P.js";import"./useEffectiveDataKey-FDkhhmBo.js";import"./omit-6Ev2RNPr.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BRi-m77E.js";import"./step-CRnCkLM-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DeQ4AICV.js";import"./Dot-Dys0AMJj.js";import"./getRadiusAndStrokeWidthFromDot-DrVK3vcj.js";import"./useElementOffset-Bo0SdiMk.js";import"./uniqBy-LQrir7c7.js";import"./iteratee-B9ldopPv.js";import"./Cross-Zt2D04Zu.js";import"./Sector-Bm0U5Ptd.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
