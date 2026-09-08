import{R as t}from"./iframe-DwQ960mE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BMPG6Jn9.js";import{R as l}from"./zIndexSlice-CRshAYou.js";import{C as x}from"./ComposedChart-njiJAHmg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-o8rL7bWh.js";import{L as a}from"./Line-BsyPe3kF.js";import{X as c}from"./XAxis-C3ApfTuq.js";import{T as g}from"./Tooltip-CFsSnKzW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BnvMog58.js";import"./Text-D31azkqa.js";import"./resolveDefaultProps-yLRPEvQ6.js";import"./DOMUtils-jWrmId9V.js";import"./isWellBehavedNumber-C8IRNLp2.js";import"./useId-Do6UThpj.js";import"./useBackwardsCompatibleTheme-1nd_EnAF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNwoXSbx.js";import"./index-934SWzTj.js";import"./index-BoR0gZ14.js";import"./RechartsWrapper-CV7KCZiE.js";import"./axisSelectors-BuM-hXsR.js";import"./throttle-CBpng8v-.js";import"./d3-scale-CB-MSXXc.js";import"./index-D_T8BRhY.js";import"./index-Dhp6LnMJ.js";import"./renderedTicksSlice-ByN1eXqa.js";import"./index-Cfk5_Nje.js";import"./CartesianAxis-B1j0Zzpr.js";import"./Layer-nbNG3urG.js";import"./types-BF5horUV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D1gjFL-f.js";import"./chartDataContext-XXv1Y0Lr.js";import"./CategoricalChart-puUF4rGm.js";import"./AnimatedItems--DCjDL7v.js";import"./useAnimationId-CgdCBqIf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-oko1PZRH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQGjc9Is.js";import"./tooltipContext-wowC4QJZ.js";import"./RegisterGraphicalItemId-zN7Xc-Dd.js";import"./ErrorBarContext-C6-51rId.js";import"./GraphicalItemClipPath-BwWJK4tk.js";import"./SetGraphicalItem-DQfhPOxL.js";import"./getZIndexFromUnknown-DlytlEN4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DUZ2mI-D.js";import"./Curve-DlR_mCFH.js";import"./step-fQiYLSQ2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dl85NR7O.js";import"./Dot-B_Wd5Y7s.js";import"./getRadiusAndStrokeWidthFromDot-Bgbvlm_y.js";import"./useElementOffset-Btc2x5AZ.js";import"./uniqBy-B5k5jdGw.js";import"./iteratee-C7BmF6bi.js";import"./Cross-Wbmju0Dn.js";import"./Sector-COcPp2JC.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
