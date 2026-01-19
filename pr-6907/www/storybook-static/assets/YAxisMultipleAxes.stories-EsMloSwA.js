import{e as t}from"./iframe-D10KqzUD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-DR2gGzMh.js";import{R as l}from"./arrayEqualityCheck-BiFmrFlI.js";import{C as x}from"./ComposedChart-IceyRJ92.js";import{B as o}from"./Bar-CF_g4AMk.js";import{L as a}from"./Line-DoQ21THX.js";import{X as c}from"./XAxis-BQt1-o4i.js";import{T as A}from"./Tooltip-qTD6wmE4.js";import{R as g}from"./RechartsHookInspector-D11PdPOv.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-9OrE3puy.js";import"./CartesianAxis-UUDtKWGi.js";import"./Layer-ht9SJGho.js";import"./Text-CCvRlOZV.js";import"./DOMUtils-6pjMFL45.js";import"./Label-NWVYeZEG.js";import"./PolarUtils--rK1_r3m.js";import"./ZIndexLayer-CJv48mZa.js";import"./zIndexSlice-C09Fe5zh.js";import"./types-DH2QYYrT.js";import"./hooks-CD0TfSak.js";import"./axisSelectors-C2rRwI0J.js";import"./RechartsWrapper-DmZaXDX9.js";import"./CartesianChart-BphZ3X7F.js";import"./chartDataContext-Dv1VUms-.js";import"./CategoricalChart-Cot6VJVX.js";import"./tooltipContext-BnAKNcVt.js";import"./ReactUtils-Bjqgxmj3.js";import"./ActiveShapeUtils-DYlzmj4y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpWw-GEi.js";import"./useAnimationId-CbuLj6s5.js";import"./Trapezoid-DuyF-aaV.js";import"./Sector-C5ufK4tl.js";import"./Symbols-DUUGs6sP.js";import"./Curve-BHXU1eAM.js";import"./RegisterGraphicalItemId-Da0N4p7t.js";import"./ErrorBarContext-D0gYYf11.js";import"./GraphicalItemClipPath-BK-RhyE8.js";import"./SetGraphicalItem-BG3i3hAQ.js";import"./getZIndexFromUnknown-CgNZCy58.js";import"./graphicalItemSelectors-Bu-Fe5ip.js";import"./ActivePoints-Cl0N8-Qa.js";import"./Dot-WZLVysVK.js";import"./getRadiusAndStrokeWidthFromDot-B2lKpKPj.js";import"./useElementOffset-BpotpCoB.js";import"./iteratee-B19FyeeB.js";import"./Cross-DC2jpo78.js";import"./index-CvJ6Av4F.js";import"./ChartSizeDimensions-CrUVJUaS.js";import"./OffsetShower-CpYxr2Ft.js";import"./PlotAreaShower-B_BAjCHP.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ut=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,ut as __namedExportsOrder,yt as default};
