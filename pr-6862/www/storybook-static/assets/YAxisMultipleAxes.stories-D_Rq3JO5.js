import{e as t}from"./iframe-CjnSqbHY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-CfoOURqB.js";import{R as l}from"./arrayEqualityCheck-Cu3uzYRG.js";import{C as x}from"./ComposedChart-C1GJHbWV.js";import{B as o}from"./Bar-BUO9huEt.js";import{L as a}from"./Line-Cn7LoADd.js";import{X as c}from"./XAxis-BjLd7C2C.js";import{T as A}from"./Tooltip-CCoxC8s7.js";import{R as f}from"./RechartsHookInspector-Df5OjUd3.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-B-Bnboba.js";import"./CartesianAxis-D2VxaDmK.js";import"./Layer-BPLY51e7.js";import"./Text-CLMmVwol.js";import"./DOMUtils-Bui7kyZ-.js";import"./Label-DvPPISHS.js";import"./PolarUtils-Dtm6FADD.js";import"./ZIndexLayer-6i7cawcn.js";import"./zIndexSlice-B31h325U.js";import"./types-BYGLnYta.js";import"./hooks-z5iYR9uK.js";import"./axisSelectors-2WFqeeny.js";import"./RechartsWrapper-Bjy9O6Bl.js";import"./CartesianChart-QvBm8Fl6.js";import"./chartDataContext-OrqrGnHW.js";import"./CategoricalChart-CVHNAiHm.js";import"./tooltipContext-mSBfX6z_.js";import"./ReactUtils-Bdj2Y15E.js";import"./ActiveShapeUtils-B0wPh4Lu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DRbwIDD9.js";import"./useAnimationId-BIU6gnQ_.js";import"./Trapezoid-BpUw0ZK8.js";import"./Sector-CCKEyOJh.js";import"./Symbols-wzrVuNDj.js";import"./Curve-5ylBOp_W.js";import"./RegisterGraphicalItemId-B25edjY0.js";import"./ErrorBarContext-YKLWr-xE.js";import"./GraphicalItemClipPath-BH8EdR6E.js";import"./SetGraphicalItem-RCHMBw2A.js";import"./getZIndexFromUnknown-QYfq_gEj.js";import"./graphicalItemSelectors-CBa9ilJj.js";import"./ActivePoints-Djyh2ioT.js";import"./Dot-BiSTmROa.js";import"./getRadiusAndStrokeWidthFromDot-DJkck7K5.js";import"./useElementOffset-CJI6xldx.js";import"./iteratee-DiI7B68t.js";import"./Cross-BEO3jmNv.js";import"./index-BmN97iZD.js";import"./ChartSizeDimensions-BYQzTjU5.js";import"./OffsetShower-BP7aiJM0.js";import"./PlotAreaShower-CvhWYGuu.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
