import{e as t}from"./iframe-Cce3OzqZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-Dzu8TGr_.js";import{R as l}from"./arrayEqualityCheck-Db-Wlt3-.js";import{C as x}from"./ComposedChart-D9Jq7hVy.js";import{B as o}from"./Bar-DiVCktwA.js";import{L as a}from"./Line-BV_1wN7V.js";import{X as c}from"./XAxis-DnzcawyL.js";import{T as A}from"./Tooltip-V1dCfx-Q.js";import{R as g}from"./RechartsHookInspector-eGeMVAmo.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-clrD5nAI.js";import"./CartesianAxis-D93mj95O.js";import"./Layer-CFkQXCn1.js";import"./Text-CY2c_dSA.js";import"./DOMUtils-T3Cy7g6m.js";import"./Label-C4rMK4zH.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-BKOy02ft.js";import"./zIndexSlice-Cor1sHRq.js";import"./types-b_fBODQO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CvLdkisu.js";import"./axisSelectors-Bcvcu9k5.js";import"./RechartsWrapper-BB7xPYUQ.js";import"./CartesianChart-CWSN6Hlp.js";import"./chartDataContext-CgfT6HWr.js";import"./CategoricalChart-9DlpQFFM.js";import"./tooltipContext-Bb15o9BC.js";import"./ReactUtils-Nar3liya.js";import"./ActiveShapeUtils-BMdNKtxM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C3wzWw1S.js";import"./useAnimationId-CDstBXSk.js";import"./Trapezoid-kBqI72Ws.js";import"./Sector-CPI45FrX.js";import"./Symbols-BhodARnK.js";import"./Curve-Fkz9pikW.js";import"./RegisterGraphicalItemId-9_Paa6o8.js";import"./ErrorBarContext-DV0NqXL1.js";import"./GraphicalItemClipPath-BC3qMhyN.js";import"./SetGraphicalItem-DtwoVgdz.js";import"./getZIndexFromUnknown-BixKmGcV.js";import"./graphicalItemSelectors-CwDqIOjA.js";import"./ActivePoints-DeEio4lB.js";import"./Dot-BemQcXpQ.js";import"./getRadiusAndStrokeWidthFromDot-D2j_mTyW.js";import"./useElementOffset-DlgU6Nfl.js";import"./iteratee-Be38ZP-8.js";import"./Cross-h5tftxi5.js";import"./index-DVt7NuEo.js";import"./ChartSizeDimensions-g60a5Ajl.js";import"./OffsetShower-TfY9mri6.js";import"./PlotAreaShower-CZOh-CeP.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
