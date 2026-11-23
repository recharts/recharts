import{R as t}from"./iframe-Cwhg5Alw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DmjTZE4U.js";import{R as l}from"./zIndexSlice-Fv3NhYWW.js";import{C as x}from"./ComposedChart-BUfd6mLX.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DzfHR5uW.js";import{L as a}from"./Line-BWipIdmr.js";import{X as c}from"./XAxis-DysdhPMn.js";import{T as g}from"./Tooltip-L14wBEQs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DOhfAK-3.js";import"./Text-Cv-7zpF9.js";import"./resolveDefaultProps-CkDxtqDz.js";import"./ZIndexLayer-Zh5FqFCx.js";import"./index-B9mn7cyH.js";import"./index-BEds7S3I.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dj6PmZ2B.js";import"./throttle-Du5pgiUX.js";import"./axisSelectors-BXhIMUYz.js";import"./d3-scale-buNRHlZ7.js";import"./CartesianAxis-lC9jf5Zn.js";import"./Layer-Cvk4I16t.js";import"./types-B4BwHuKZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DNRadS3G.js";import"./index-Ce6E5z2B.js";import"./index-Dq-nqpA7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BxNvZ3mc.js";import"./index-DS0QJhYL.js";import"./fillDefinitions-zsPlWl9g.js";import"./CartesianChart-dk4HvrTk.js";import"./chartDataContext-plFejdmf.js";import"./CategoricalChart-DmZKpDkp.js";import"./dataEntryStyles-Dl4kQBD7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJUu2CXA.js";import"./useAnimationId-B8-WGiI8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-NTKJrLNa.js";import"./tooltipContext-JpJPDcQ0.js";import"./ErrorBarContext-C5GJMenk.js";import"./activeStyles-C2N6Ab6e.js";import"./SetGraphicalItem-BZTwfoQJ.js";import"./getZIndexFromUnknown-BK-5SKkq.js";import"./useEffectiveDataKey-EnHAhUcJ.js";import"./omit-D4WZHPlr.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CzKUA028.js";import"./Curve-D9P_AzdW.js";import"./step-BizBXnVe.js";import"./path-BBMZd4YL.js";import"./ActivePoints-SiU-4rgE.js";import"./Dot-DINU8znu.js";import"./Symbols-C1fO_1Gx.js";import"./symbol-D2NP4cwA.js";import"./useElementOffset-CNLYFCV9.js";import"./uniqBy-k5K2zjYf.js";import"./iteratee-BXUvkud4.js";import"./Cross-D2yYvBMS.js";import"./Sector-CJdwVTmQ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
