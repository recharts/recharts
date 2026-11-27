import{R as t}from"./iframe-D4kLWznI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DTOW1dZ3.js";import{R as l}from"./zIndexSlice-B28gm5Zj.js";import{C as x}from"./ComposedChart-D5eWF65_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-L9sZCWod.js";import{L as a}from"./Line-MmZxVnyG.js";import{X as c}from"./XAxis-CIt9BLfr.js";import{T as g}from"./Tooltip-DTjQB8kY.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CJYKgT8A.js";import"./get-CjriyByo.js";import"./Label-CC2QlraV.js";import"./Text-NG93JaM3.js";import"./ZIndexLayer-DTTyUNkX.js";import"./index-K9fqWjcX.js";import"./index-BZ6MCrYJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Jvx5Hvrj.js";import"./throttle-q19G1wYU.js";import"./axisSelectors-ByHGSv-T.js";import"./diverging-COuExidI.js";import"./CartesianAxis-BbZQB26a.js";import"./Layer-BiQ6tIpf.js";import"./types-C0VOENzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BRzk6Zuy.js";import"./index-BukBKnfG.js";import"./index-BSDf5RkV.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Brhd5wtn.js";import"./index-Cxoy9Bx4.js";import"./fillDefinitions-uAqib7o2.js";import"./CartesianChart-CYGJ7Vi6.js";import"./chartDataContext-ExwO8N-9.js";import"./CategoricalChart-lvaD8ywk.js";import"./dataEntryStyles-CQy-JarL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BzREhQg7.js";import"./useAnimationId-Cda-LmXY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CmC5_l1r.js";import"./tooltipContext-BfGQtnp7.js";import"./ErrorBarContext-D-e_coEF.js";import"./activeStyles-B6xOxwnr.js";import"./SetGraphicalItem-BpVaXpzF.js";import"./getZIndexFromUnknown-AewYoVT7.js";import"./useEffectiveDataKey-KQzX-PyK.js";import"./omit-DVO_AIbf.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CZtOf2sh.js";import"./Curve-BIpyAZSM.js";import"./step-BWfRSULP.js";import"./path-BBMZd4YL.js";import"./ActivePoints-CZBrkmRZ.js";import"./Dot-We9lW2eK.js";import"./Symbols-C71JHuMc.js";import"./symbol-q_YI2BlA.js";import"./useElementOffset-CuWdjgeb.js";import"./uniqBy-B6TwiwOy.js";import"./iteratee-DSdbCzg-.js";import"./Cross-C0ROwwiQ.js";import"./Sector-CScXPvLM.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
