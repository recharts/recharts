import{R as t}from"./iframe-BMDGt33G.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bb9GrcYH.js";import{R as l}from"./zIndexSlice-DCVNKZSi.js";import{C as x}from"./ComposedChart-B_FiSDXS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-PyZpazy6.js";import{L as a}from"./Line-DesYXgxV.js";import{X as c}from"./XAxis-BLwPYlxb.js";import{T as g}from"./Tooltip-CxdSCIpl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-l14yVQ5q.js";import"./Text-DYkDw-5j.js";import"./resolveDefaultProps-DOWWXdZM.js";import"./DOMUtils-DBrlboks.js";import"./isWellBehavedNumber-D73nv25y.js";import"./useId-D70LGxdi.js";import"./useBackwardsCompatibleTheme-DUdO4_jh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CaEles3w.js";import"./index-CQIY09nP.js";import"./index-KK-TIT-h.js";import"./RechartsWrapper-CU85gN_Z.js";import"./axisSelectors-DoXQrKNQ.js";import"./throttle-DHXzdyrx.js";import"./d3-scale-BLx8xy0x.js";import"./index-ubnZgXyZ.js";import"./index-B-bSR3iB.js";import"./renderedTicksSlice-D2nTsm-u.js";import"./index-BALx0JUZ.js";import"./CartesianAxis-D9IiMPGB.js";import"./Layer-CjUZiXYs.js";import"./types-BuxhmSle.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CefyJEjd.js";import"./chartDataContext-BXP4dIO1.js";import"./CategoricalChart-UAMcsDW6.js";import"./AnimatedItems-DPSFxYpd.js";import"./useAnimationId-B5h3AUKS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DB4jjQ5C.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EQw7SaSK.js";import"./tooltipContext-7QDK0p6D.js";import"./RegisterGraphicalItemId-iJ7X__4u.js";import"./ErrorBarContext-CTZMo0d8.js";import"./GraphicalItemClipPath-BpuwakLC.js";import"./SetGraphicalItem-V8CFRMGm.js";import"./getZIndexFromUnknown-CfZph43J.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D2gdtNgN.js";import"./Curve-CIJakMM0.js";import"./step-B_y4L6H0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CHdXi4sp.js";import"./Dot-CYm9TxQB.js";import"./getRadiusAndStrokeWidthFromDot-CYss6dEa.js";import"./useElementOffset-BAEYehLF.js";import"./uniqBy-BujAWGSb.js";import"./iteratee-Bncw5-E9.js";import"./Cross-CHNDSXAv.js";import"./Sector-dMXSO2iG.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
