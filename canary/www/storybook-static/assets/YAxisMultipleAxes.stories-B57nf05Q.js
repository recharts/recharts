import{e as t}from"./iframe-B9fQ2oqm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-DLGPf3is.js";import{R as l}from"./arrayEqualityCheck-BL4DC-lX.js";import{C as x}from"./ComposedChart-D_5yxs5_.js";import{B as o}from"./Bar-BtQmjB1O.js";import{L as a}from"./Line-Cd_NmmRF.js";import{X as c}from"./XAxis-C_-a0rcx.js";import{T as A}from"./Tooltip-_TnTRD_0.js";import{R as g}from"./RechartsHookInspector-Bgd-A5WA.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-I2gIUEIG.js";import"./CartesianAxis-IX04Fc3e.js";import"./Layer-Be_YD9cf.js";import"./Text-CtxM0wos.js";import"./DOMUtils-fTKYrial.js";import"./Label-CAIiijl8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-sFj17QWh.js";import"./zIndexSlice-Dtm-TxeQ.js";import"./types-CGGhjhj7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BpKCGg5r.js";import"./hooks-CgvDvD0u.js";import"./axisSelectors-WDcSlsrb.js";import"./RechartsWrapper-Cj27l0cc.js";import"./CartesianChart-BNj2fWwb.js";import"./chartDataContext-C4zbKrr2.js";import"./CategoricalChart-vuUHc2U_.js";import"./tooltipContext-hkxIgnnF.js";import"./ReactUtils-C4s4yAkw.js";import"./ActiveShapeUtils-B57xr0Gy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H10qCiiT.js";import"./useAnimationId-ixpsepmW.js";import"./Trapezoid-DsuehI9k.js";import"./Sector-C5PqXP9J.js";import"./Symbols-B8Ovocri.js";import"./Curve-BO7IcGeE.js";import"./RegisterGraphicalItemId-DqMQRK17.js";import"./ErrorBarContext-B0P8b6XD.js";import"./GraphicalItemClipPath-C2gRI9rX.js";import"./SetGraphicalItem-MN_yffMw.js";import"./getZIndexFromUnknown-dVY_wCu2.js";import"./graphicalItemSelectors-CSLu04-r.js";import"./ActivePoints-vM53PnMo.js";import"./Dot-D-_UDvP8.js";import"./getRadiusAndStrokeWidthFromDot-BzQWgG8S.js";import"./useElementOffset-CUVDQDXt.js";import"./iteratee-B0qfO2Tm.js";import"./Cross-BD6iZ5GE.js";import"./index-DpQlVcWs.js";import"./ChartSizeDimensions-DoVF9EA8.js";import"./OffsetShower-BUflKiRR.js";import"./PlotAreaShower-DNG_eO1L.js";const It={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Et=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Et as __namedExportsOrder,It as default};
