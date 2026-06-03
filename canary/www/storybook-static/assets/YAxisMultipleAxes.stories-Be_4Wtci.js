import{R as t}from"./iframe-Ca9zq6-c.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Di_pPAFf.js";import{R as l}from"./zIndexSlice-CR-xpxM6.js";import{C as x}from"./ComposedChart-DleCrOAK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BWbnIkDg.js";import{L as a}from"./Line-C7QEoVzF.js";import{X as c}from"./XAxis-BXUxDWml.js";import{T as g}from"./Tooltip-BNk2Rvy8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CVL7Gg7t.js";import"./CartesianAxis-Cdin4D0O.js";import"./Layer-D2dY01rr.js";import"./resolveDefaultProps-aQu_YsJN.js";import"./Text-BceZOupb.js";import"./DOMUtils-CWZfW9Q5.js";import"./isWellBehavedNumber-CqGPlgER.js";import"./Label-Dc6nn1YN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-N_1TQ7Pc.js";import"./index-BtFF0BK3.js";import"./index-D-6jHIBZ.js";import"./types-DL0DYnfp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-g-m8sL3N.js";import"./immer-BRLk8fdE.js";import"./RechartsWrapper-CaG48vMC.js";import"./index-oZCeDex2.js";import"./index-FbuB2ssV.js";import"./axisSelectors-CKheeyoe.js";import"./d3-scale-BmqB7fOq.js";import"./CartesianChart-CCrg56CU.js";import"./chartDataContext-Bliq4f83.js";import"./CategoricalChart-DP-UXbjk.js";import"./tooltipContext-B6laIlo7.js";import"./ReactUtils-CQ3qeCfU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cd2dU1AM.js";import"./useAnimationId-DX_MO7p4.js";import"./ActiveShapeUtils-zHL_kIK3.js";import"./RegisterGraphicalItemId-BlhUjcl6.js";import"./ErrorBarContext-BNMjRvsS.js";import"./GraphicalItemClipPath-CL4eJ5Gf.js";import"./SetGraphicalItem-DuOLtcMc.js";import"./getZIndexFromUnknown-c_WrGoh0.js";import"./graphicalItemSelectors-CQ9fLIUB.js";import"./Curve-G2tp0Yan.js";import"./step-D387uCSJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BmtaSDFt.js";import"./Dot-DVfqq-WH.js";import"./getRadiusAndStrokeWidthFromDot-D0JPsbB9.js";import"./useElementOffset-lMCe9HxU.js";import"./uniqBy-DQNXoyeH.js";import"./iteratee-BGMi6Zy8.js";import"./Cross-Y5-RDaB1.js";import"./Sector-Bo6M0KYh.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
