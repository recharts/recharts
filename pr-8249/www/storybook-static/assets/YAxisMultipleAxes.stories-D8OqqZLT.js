import{R as t}from"./iframe-66xGksI9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BiYwIvVw.js";import{R as l}from"./zIndexSlice-CYY5i5GC.js";import{C as x}from"./ComposedChart-BcXiD_oS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DqIGdAPS.js";import{L as a}from"./Line-4nEaU4yM.js";import{X as c}from"./XAxis-CXNDEo4D.js";import{T as g}from"./Tooltip-CfnEyiLa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CZY2Xnwr.js";import"./Text-DBDWQ-k-.js";import"./resolveDefaultProps-CNf-20ax.js";import"./ZIndexLayer-CW7ymMrJ.js";import"./index-BdwqiePa.js";import"./index-BY9aQbpp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CBhhjzdU.js";import"./throttle-pB5GcO80.js";import"./axisSelectors-c7Es3nNM.js";import"./d3-scale-Ni_fDMoN.js";import"./CartesianAxis-DQXtF-Wj.js";import"./Layer-C1IdSUB2.js";import"./types-D-bLaOPe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3z0elvI.js";import"./index-DfrMyUP0.js";import"./index-BRQLVN4e.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CBtKgDqJ.js";import"./index-BykASSPU.js";import"./fillDefinitions-bQfE-RQi.js";import"./CartesianChart-Cqx4FTn2.js";import"./chartDataContext-Bw9Xn6sV.js";import"./CategoricalChart-cIWfYphX.js";import"./dataEntryStyles-D5RB-ObJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_Uv0gGo.js";import"./useAnimationId-CE-ISBvq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCTJSoY2.js";import"./tooltipContext-B-UZ8kkJ.js";import"./ErrorBarContext-Cekx66Ji.js";import"./activeStyles-ueUYGAtI.js";import"./SetGraphicalItem-BwgsUtDt.js";import"./getZIndexFromUnknown-B1X1P9Vg.js";import"./useEffectiveDataKey-Dw6tI5XK.js";import"./omit-DAnAWpso.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BHMa596t.js";import"./Curve-C90n3hpg.js";import"./step-BPw2RLV2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B6OlZ3cX.js";import"./Dot-D3LIPFdP.js";import"./Symbols-BAjlrbb5.js";import"./symbol-DTY0uCjS.js";import"./useElementOffset-DJCmtGIc.js";import"./uniqBy-9AjO9xab.js";import"./iteratee-C80Q0yRq.js";import"./Cross-BOiCaUxD.js";import"./Sector-QJb9TZ4t.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
