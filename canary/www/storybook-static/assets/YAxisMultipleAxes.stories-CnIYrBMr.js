import{R as t}from"./iframe-CHJ8qNn-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BiD1d_mO.js";import{R as l}from"./zIndexSlice-DNIXTlyt.js";import{C as x}from"./ComposedChart-Gh2_Mw5N.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-N13jfkZ1.js";import{L as a}from"./Line-DI2at8cX.js";import{X as c}from"./XAxis-L9UrmdET.js";import{T as g}from"./Tooltip-DV20MK05.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B11lJlmF.js";import"./Text-CNSLXPSH.js";import"./resolveDefaultProps-DpVu8JOQ.js";import"./pageBackground-DmOvuMA2.js";import"./isWellBehavedNumber-BRib7OTz.js";import"./useId-DMQKzmZX.js";import"./useBackwardsCompatibleTheme-BpzyF9ZD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D300_86G.js";import"./index-D97GqZNj.js";import"./index-D2V1f5dZ.js";import"./dataEntryStyles-DVh89c5p.js";import"./axisSelectors-BBd7_xKf.js";import"./throttle-XqMRt2jJ.js";import"./d3-scale-Tozs6n73.js";import"./CartesianAxis-Durs5z8j.js";import"./Layer-D78kPmJv.js";import"./types-Dz3e-B0c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C8683P8v.js";import"./index-BKlKJCZc.js";import"./index-BzI6syEB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BJlTvsU4.js";import"./index-CoSZFYA7.js";import"./CartesianChart-BhRxeAbm.js";import"./chartDataContext-BkqAIBWa.js";import"./CategoricalChart-CQg4LCLR.js";import"./activeStyles-ujvHG1pk.js";import"./useAnimationId-CQYAMcX9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0Mkl8MZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5-Co5jK-.js";import"./tooltipContext-D_sHfR4N.js";import"./RegisterGraphicalItemId-BoIM166p.js";import"./ErrorBarContext-gVyy4V_e.js";import"./GraphicalItemClipPath-CRFACIVC.js";import"./SetGraphicalItem-CGS7hoc8.js";import"./getZIndexFromUnknown-DzS5M4dq.js";import"./useEffectiveDataKey-BD8sCJ8W.js";import"./omit-V5dJ_cDJ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dy3LXOkF.js";import"./step-BMByuFVF.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DnpLdJfX.js";import"./Dot-C7lzuZIa.js";import"./getRadiusAndStrokeWidthFromDot-Dlc5cKW5.js";import"./useElementOffset-BalShxiV.js";import"./uniqBy-CEOdNzvN.js";import"./iteratee-B1w-dxbF.js";import"./Cross-D2aMjNTl.js";import"./Sector-Ct6CV9fW.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
