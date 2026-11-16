import{R as t}from"./iframe-DBZHgkHz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-qEVvtCkb.js";import{R as l}from"./zIndexSlice-CCEect8Y.js";import{C as x}from"./ComposedChart-69aI63gR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Ds0iGuqx.js";import{L as a}from"./Line-R8h2aTlS.js";import{X as c}from"./XAxis-Bnvf5Lo_.js";import{T as g}from"./Tooltip-D6OO7ro2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-rCJ8JAiM.js";import"./Text-DbdJ2rHF.js";import"./resolveDefaultProps-Bvsyp51I.js";import"./ZIndexLayer-BEGts5gU.js";import"./index-DGbD_6uH.js";import"./index-EJLKzrUV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BLShzrWN.js";import"./throttle-VBcNMDCY.js";import"./axisSelectors-CuFbzFkp.js";import"./d3-scale-CCNti6RY.js";import"./CartesianAxis-BUQjH22T.js";import"./Layer-D9n5kKSs.js";import"./types-CiZDyVvS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsR53_S1.js";import"./index-CyqgVO8h.js";import"./index-BWY5Ai4-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CdEOi8nf.js";import"./index-D7sJrNgb.js";import"./fillDefinitions-CJlHmTcA.js";import"./CartesianChart-B8ylmrv_.js";import"./chartDataContext-l1L_LONz.js";import"./CategoricalChart-Bed811or.js";import"./dataEntryStyles-C2eRsswd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkLsbkp1.js";import"./useAnimationId-DSFmvkxj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHVoZWQX.js";import"./tooltipContext-DS1SAGX9.js";import"./ErrorBarContext-D4CjkMQU.js";import"./activeStyles-Ccn_YinS.js";import"./SetGraphicalItem-CyD7jeIx.js";import"./getZIndexFromUnknown-BC02AnFj.js";import"./useEffectiveDataKey-jt0Z3g1O.js";import"./omit-DQkWH6xG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BXZ-CwEQ.js";import"./step-Dfu77DD6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DL3AO8Rf.js";import"./Dot-BMzut5pd.js";import"./Symbols-Dffl-I8q.js";import"./symbol-BsRW9Z6s.js";import"./getRadiusAndStrokeWidthFromDot-B9CvVbbz.js";import"./useElementOffset-lqrBTYbX.js";import"./uniqBy-4s5Lfnt3.js";import"./iteratee-DHow2gXt.js";import"./Cross-C3CL5bTC.js";import"./Sector-KqGDdt6j.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
