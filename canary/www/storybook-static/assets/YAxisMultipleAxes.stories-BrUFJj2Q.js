import{R as t}from"./iframe-DzGmKl0f.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-0b4E4ljK.js";import{R as l}from"./zIndexSlice-C_hCocyn.js";import{C as x}from"./ComposedChart-BMgh39RK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CPWBwh6t.js";import{L as a}from"./Line-Bstpyosc.js";import{X as c}from"./XAxis-jTQGWzOI.js";import{T as g}from"./Tooltip-DBSvm2sG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D7SDC5pA.js";import"./Text-4Yqe8NiQ.js";import"./resolveDefaultProps-DQfzh6Jd.js";import"./ZIndexLayer-DCgoY3ny.js";import"./index-CLtTm24E.js";import"./index-BW8cRvO1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BjROy2nM.js";import"./throttle-CTpO1d0G.js";import"./axisSelectors-CXmW2Cx2.js";import"./d3-scale-BqUwTZLN.js";import"./CartesianAxis-CdlgwruK.js";import"./Layer-FlA1vg8A.js";import"./types-DhQXJZ5L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cj7UXIdm.js";import"./index-Dfq7BfPO.js";import"./index-CbanqfDi.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DyktFVWv.js";import"./index-By0aYyvM.js";import"./fillDefinitions-D8TUKuUW.js";import"./CartesianChart-BHEtFY6v.js";import"./chartDataContext-CBkj6nC7.js";import"./CategoricalChart-8iPxehsc.js";import"./dataEntryStyles-Dj48sKZ8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C67JpI60.js";import"./useAnimationId-CGyZ0qQs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DvbjLMLM.js";import"./tooltipContext-BNPOIc1F.js";import"./ErrorBarContext-DXEk3_Nm.js";import"./activeStyles-wSVq9YzU.js";import"./SetGraphicalItem-BOgZ-5S7.js";import"./getZIndexFromUnknown-H2fTT77H.js";import"./useEffectiveDataKey-DtLTSAvq.js";import"./omit-D9Uvq-cR.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-x4kMFRNy.js";import"./Curve-CY0LgJEY.js";import"./step-DtdKv3o3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dk-ASqYF.js";import"./Dot-C7ry2cU8.js";import"./Symbols-f4V1uJfI.js";import"./symbol-C_p4EZd-.js";import"./useElementOffset-C8NhgWYR.js";import"./uniqBy-DbBQ0HwH.js";import"./iteratee-BoZ32etu.js";import"./Cross-Dy4jVGVU.js";import"./Sector-C_dYEOQx.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
