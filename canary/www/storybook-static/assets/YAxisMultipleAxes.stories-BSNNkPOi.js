import{R as t}from"./iframe-DQsNmxmG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-D-cWoYYZ.js";import{R as l}from"./zIndexSlice-fYCbSPba.js";import{C as x}from"./ComposedChart-CViFtKa3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BH_ML8yC.js";import{L as a}from"./Line-C3FLWaiJ.js";import{X as c}from"./XAxis-BeNbg6hp.js";import{T as g}from"./Tooltip-CGSlMXp0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BGoCqB35.js";import"./Text-Qtf5nEek.js";import"./resolveDefaultProps-C9L4dsEq.js";import"./ZIndexLayer-DJNsuc82.js";import"./index-6jBLt3fF.js";import"./index-DieS8gnr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B-0rkllN.js";import"./throttle-zQAbuFwu.js";import"./axisSelectors-BsRkt3Xk.js";import"./d3-scale-BIy4_L5R.js";import"./CartesianAxis-Crywq0Oq.js";import"./Layer-JjdEQyi5.js";import"./types-wkisKABV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-vSa4eBxF.js";import"./index-CbIjVRAX.js";import"./index-CCZsgeAv.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MEg26Y_7.js";import"./index-Cq0Y-kP9.js";import"./fillDefinitions-CxoYZDG2.js";import"./CartesianChart-B32Zddgy.js";import"./chartDataContext-S0JtTO97.js";import"./CategoricalChart-CKZnphjR.js";import"./dataEntryStyles-CArKPFy6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-rFuZYgZx.js";import"./useAnimationId-CfQHWCsS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-t6nFfTlu.js";import"./tooltipContext-l1grKCFD.js";import"./ErrorBarContext-WH4H2KKq.js";import"./activeStyles-BgO2Wbsx.js";import"./SetGraphicalItem-BG-GEzcM.js";import"./getZIndexFromUnknown-CelNEHss.js";import"./useEffectiveDataKey-CR-coZ9_.js";import"./omit-CO-53XuN.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C5fpylM9.js";import"./step-pQrH6ncJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BlJUvkga.js";import"./Dot-CyU-jpb1.js";import"./Symbols-CXxuzOPp.js";import"./symbol-0bvODblh.js";import"./getRadiusAndStrokeWidthFromDot-B1d6CA7m.js";import"./useElementOffset-Cpkvj5mB.js";import"./uniqBy-sQmteKOL.js";import"./iteratee-v4pwgsAc.js";import"./Cross-C38HGCS0.js";import"./Sector-DiUTWqUB.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
