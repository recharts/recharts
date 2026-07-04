import{R as t}from"./iframe-DD3MNlJs.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BU-eH5Uj.js";import{R as l}from"./zIndexSlice-DsPtdaG-.js";import{C as x}from"./ComposedChart-Ch5rhd-f.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-_ZQ5tKns.js";import{L as a}from"./Line-C4g4hOlz.js";import{X as c}from"./XAxis-C5LFfJlv.js";import{T as g}from"./Tooltip-Cbit545I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BeN5FwRC.js";import"./Layer-BSwpDfMb.js";import"./resolveDefaultProps-Bl223uSE.js";import"./Text-BWwrC4eC.js";import"./DOMUtils-CKULAiMw.js";import"./isWellBehavedNumber-CNMhuHyW.js";import"./Label-CTgAmEuq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIp4crEt.js";import"./index-Bck27UYR.js";import"./index-a_wokTdP.js";import"./types-3SXpu3DM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BfcmamU7.js";import"./throttle-BsgVdVzc.js";import"./RechartsWrapper-CCnqh_-x.js";import"./index-DseUKmqi.js";import"./index-D7phJECN.js";import"./axisSelectors-BHK7QjqO.js";import"./d3-scale-yWlQ4_Nx.js";import"./CartesianChart-aRdig7-B.js";import"./chartDataContext-B7qXvLbV.js";import"./CategoricalChart-Cq7n2KtT.js";import"./tooltipContext-zpYBwVet.js";import"./AnimatedItems--KiCkiyG.js";import"./useAnimationId-3wwsxOl9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BemF6WzX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNZIetEU.js";import"./RegisterGraphicalItemId-UFa7fX9c.js";import"./ErrorBarContext-C82oMdbu.js";import"./GraphicalItemClipPath-NC5NbT5H.js";import"./SetGraphicalItem-BanwGypR.js";import"./getZIndexFromUnknown-BZU7gNL9.js";import"./graphicalItemSelectors-wIYvHEz-.js";import"./Curve-Bmu0g7Ld.js";import"./step-C2Nk1uI6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DIeqY30s.js";import"./Dot-M9tiGPsp.js";import"./getRadiusAndStrokeWidthFromDot-bkIsgxom.js";import"./useElementOffset-DJdMJ0L5.js";import"./uniqBy-DHEUFyg1.js";import"./iteratee-D4ErcGbL.js";import"./Cross-QArI-PU7.js";import"./Sector-CPHcOnas.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
