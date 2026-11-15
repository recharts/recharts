import{R as t}from"./iframe-pamQLAuY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BYc7pX1a.js";import{R as l}from"./zIndexSlice-BlDUGc8d.js";import{C as x}from"./ComposedChart-D29eHQa-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dyf9STcO.js";import{L as a}from"./Line-CX1OnHXo.js";import{X as c}from"./XAxis-D-SXbwy8.js";import{T as g}from"./Tooltip-Oq2N_gGp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-53Y237WA.js";import"./Text-CgAHMzD3.js";import"./resolveDefaultProps-kiiYJYN_.js";import"./ZIndexLayer-DY36flUP.js";import"./index-Cr46aqlt.js";import"./index-WeK6OXUT.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DoSBNlO9.js";import"./throttle-C_B1UjR8.js";import"./axisSelectors-DKhGUp-k.js";import"./d3-scale-eIG0jwTX.js";import"./CartesianAxis-CWD0k2VK.js";import"./Layer-Cm9mi55v.js";import"./types-DIKPUmB7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaFBICsx.js";import"./index-m8mQ2_y4.js";import"./index-QF6L8m8x.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ub_WEUz3.js";import"./index-Dkcp91gd.js";import"./fillDefinitions-BDZZPSU3.js";import"./CartesianChart-CH5OILiC.js";import"./chartDataContext-B156a3vg.js";import"./CategoricalChart-C57OyuNX.js";import"./dataEntryStyles-Cjt_fwSW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2noBFFP.js";import"./useAnimationId-BGgwVpYD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLFAkUa0.js";import"./tooltipContext-DB05krQV.js";import"./ErrorBarContext-mAfMrTZ7.js";import"./activeStyles-BKbfAIaZ.js";import"./SetGraphicalItem-CAx5rLIN.js";import"./getZIndexFromUnknown-Bku_Z_HA.js";import"./useEffectiveDataKey-DQOO5VHk.js";import"./omit-DiNE4MF3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CBzOhU6V.js";import"./step-BpEAsRCc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D3TY6zpk.js";import"./Dot-Ocwx86Cy.js";import"./Symbols-BHovV0ds.js";import"./symbol-OE1C7JWw.js";import"./getRadiusAndStrokeWidthFromDot-C-R45OAI.js";import"./useElementOffset-D-S9fbae.js";import"./uniqBy-7m0iRReY.js";import"./iteratee-so155A_3.js";import"./Cross-CYiCwTq0.js";import"./Sector-CeM_rKaz.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
