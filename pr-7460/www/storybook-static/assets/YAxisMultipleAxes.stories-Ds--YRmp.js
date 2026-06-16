import{R as t}from"./iframe-DmhIhH2M.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Bd-9gvNF.js";import{R as l}from"./zIndexSlice-DeBpIagA.js";import{C as x}from"./ComposedChart-ChlzmAy5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DAKefZGO.js";import{L as a}from"./Line-D1lDVI0J.js";import{X as c}from"./XAxis-CY-yJKaB.js";import{T as g}from"./Tooltip-CScVRDo5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BMOKRRSC.js";import"./CartesianAxis-C8QhC4vv.js";import"./Layer-BQ4TD7AW.js";import"./resolveDefaultProps-Bb5qdflA.js";import"./Text-DpOGyDW1.js";import"./DOMUtils-qv8kyUnk.js";import"./isWellBehavedNumber-yi49kod_.js";import"./Label-C1lSOaos.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qAObD_uq.js";import"./index-jeKHcbLZ.js";import"./index-DoUdCFad.js";import"./types-ChCyCTKP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ChRjHL_p.js";import"./immer-lqUHKS7P.js";import"./RechartsWrapper-Bp3OJDnk.js";import"./index-DVATRPgd.js";import"./index-DTLQy6FQ.js";import"./axisSelectors-BcE8uUaD.js";import"./d3-scale-BlfVJ3Lp.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BNQnxap5.js";import"./chartDataContext-Bz86G8Ko.js";import"./CategoricalChart-Be8j81vN.js";import"./tooltipContext-r-gHsS5Z.js";import"./AnimatedItems-D_A-W6sA.js";import"./useAnimationId-CIds5Px0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BUGLdKb8.js";import"./ActiveShapeUtils-D7yUxD2X.js";import"./RegisterGraphicalItemId-qPPfux8b.js";import"./ErrorBarContext-3q49-f4F.js";import"./GraphicalItemClipPath-CjnHXIjf.js";import"./SetGraphicalItem-BDK57120.js";import"./getZIndexFromUnknown-DgPuOini.js";import"./graphicalItemSelectors-CW756Y0s.js";import"./Curve-CUt78Byo.js";import"./step-Cfvx5huc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bn_C34jU.js";import"./Dot-D4RDD7gw.js";import"./getRadiusAndStrokeWidthFromDot-C1-mcmXd.js";import"./useElementOffset-CH7D-mqI.js";import"./uniqBy-CFMs929K.js";import"./iteratee-GpL_6Bp3.js";import"./Cross-6N8YKHWm.js";import"./Sector-D-2Yrtfy.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
