import{R as t}from"./iframe-B-JmM6UU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-y-7tLGKF.js";import{R as l}from"./zIndexSlice-C8zA9EPG.js";import{C as x}from"./ComposedChart-CCFLDqwG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-TsLuLBq1.js";import{L as a}from"./Line-APLpaCe9.js";import{X as c}from"./XAxis-C4JtUciF.js";import{T as g}from"./Tooltip-BQC-S9Hn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cf51nyga.js";import"./Text-DlcURdmF.js";import"./resolveDefaultProps-DLWiqyxh.js";import"./pageBackground-ox3rMkA1.js";import"./isWellBehavedNumber-DQDu_bHq.js";import"./useId-D9iNydjp.js";import"./useBackwardsCompatibleTheme-VmJV6TRL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DqLhyd5r.js";import"./index-BnGOySnb.js";import"./index-BOPh7oG5.js";import"./dataEntryStyles-BZpY2uoY.js";import"./axisSelectors-BOzuD9HL.js";import"./throttle-8T2wZGvQ.js";import"./d3-scale-YxBV3HYG.js";import"./CartesianAxis-CM5ea8KA.js";import"./Layer-05QvI-9e.js";import"./types-cRgwCxfH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BZnDG7lD.js";import"./index-BvO0zfg2.js";import"./index-B935EuoS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DfO4pEP4.js";import"./index-D52JV6b6.js";import"./CartesianChart-B7NRlPSh.js";import"./chartDataContext-G_QhrL7C.js";import"./CategoricalChart-B_Dp9jOQ.js";import"./activeStyles-DovphoLv.js";import"./useAnimationId-Bhe9ODDX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cjis6rUG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Lf70CQL3.js";import"./tooltipContext-C8j9rL3F.js";import"./RegisterGraphicalItemId-DykgIfL1.js";import"./ErrorBarContext-CpFTBBZZ.js";import"./GraphicalItemClipPath-BVkYhuPi.js";import"./SetGraphicalItem-CDXb3rWS.js";import"./getZIndexFromUnknown-B2Am4UM2.js";import"./useEffectiveDataKey-BDAANayS.js";import"./omit-4hEvhs7_.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D2NNcFkX.js";import"./step-DnNP7AgI.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DJ1-E8SN.js";import"./Dot-9xtzkZIA.js";import"./getRadiusAndStrokeWidthFromDot-DF_TJdmj.js";import"./useElementOffset-7NR9MJAY.js";import"./uniqBy-BsjnheNl.js";import"./iteratee-B6OwKtMw.js";import"./Cross-CtOLlKPV.js";import"./Sector-BhGy3Knc.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
