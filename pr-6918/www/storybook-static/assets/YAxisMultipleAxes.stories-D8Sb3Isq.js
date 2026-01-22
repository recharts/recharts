import{e as t}from"./iframe-DpxBiwXt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-Bi8itMA7.js";import{R as l}from"./arrayEqualityCheck-FXkJUuOg.js";import{C as x}from"./ComposedChart-BpoK1MIm.js";import{B as o}from"./Bar-BmOYq6zl.js";import{L as a}from"./Line-By9eZF6k.js";import{X as c}from"./XAxis-BwhWcYGH.js";import{T as A}from"./Tooltip-BplPpqBs.js";import{R as g}from"./RechartsHookInspector-A8kV9_z_.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEEOIjtC.js";import"./CartesianAxis-DPFPdJc8.js";import"./Layer-B_VW6NEu.js";import"./Text-DNJoB5At.js";import"./DOMUtils-DrvvQn8D.js";import"./Label-CEkR5yeX.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-D0mBkmdS.js";import"./zIndexSlice-BKKsRI17.js";import"./types-BBdfixzL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CjYZQI6e.js";import"./axisSelectors-DxY3Hm_g.js";import"./RechartsWrapper-BjnJrxH9.js";import"./CartesianChart-C8Msn2UK.js";import"./chartDataContext-WZeplglC.js";import"./CategoricalChart-DGoypZYk.js";import"./tooltipContext-CxkAlI2d.js";import"./ReactUtils-Dffr1epF.js";import"./ActiveShapeUtils-DjjH0_gx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BltJ-RBG.js";import"./useAnimationId-xmRGVEvR.js";import"./Trapezoid-DN2MYT0t.js";import"./Sector-CLle2JPF.js";import"./Symbols-DaC_yNBz.js";import"./Curve-D7R0OSkI.js";import"./RegisterGraphicalItemId-DvA6E3s-.js";import"./ErrorBarContext--hzc0ol9.js";import"./GraphicalItemClipPath-BxeldMcM.js";import"./SetGraphicalItem-B6m6aNjX.js";import"./getZIndexFromUnknown-Dso7cE4c.js";import"./graphicalItemSelectors-2wri_A3l.js";import"./ActivePoints-DmMdWDFy.js";import"./Dot-CHYi4_d9.js";import"./getRadiusAndStrokeWidthFromDot-C96kEFaR.js";import"./useElementOffset-K-XxmBs3.js";import"./iteratee-Bm9VQgEn.js";import"./Cross-BPD08xqW.js";import"./index-JWi15Uty.js";import"./ChartSizeDimensions-DaeB45KF.js";import"./OffsetShower-BJFCBDNO.js";import"./PlotAreaShower-eORzspIc.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
