import{e as t}from"./iframe-CYxrfzzg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-BTS_JFed.js";import{R as l}from"./arrayEqualityCheck-DP0kYLs9.js";import{C as x}from"./ComposedChart-DMI7pDE-.js";import{B as o}from"./Bar-C9RrmFY_.js";import{L as a}from"./Line-CGTeHK9k.js";import{X as c}from"./XAxis-Dmnl9BhD.js";import{T as A}from"./Tooltip-C2acYElP.js";import{R as g}from"./RechartsHookInspector-CKj7z6NA.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKLgGEJu.js";import"./CartesianAxis-nwRWnCEW.js";import"./Layer-2CuCTQZP.js";import"./Text-DTTsbVV0.js";import"./DOMUtils-DHZkznbd.js";import"./Label-CODmrKP6.js";import"./PolarUtils-DvrgzDo3.js";import"./ZIndexLayer-C2lFhuDH.js";import"./zIndexSlice-BSioTKNu.js";import"./types-VzENM0tL.js";import"./hooks-D7sBhVDC.js";import"./axisSelectors-tnzCSBUQ.js";import"./RechartsWrapper-BZIHJFZl.js";import"./CartesianChart-IXi_xLkG.js";import"./chartDataContext-CfwPSU5Z.js";import"./CategoricalChart-SSUATRMB.js";import"./tooltipContext-Ir0EVXeq.js";import"./ReactUtils-BBB3MvZm.js";import"./ActiveShapeUtils-DyLP3gGN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_ysU7C8.js";import"./useAnimationId-CUiISCsF.js";import"./Trapezoid-B1yeBwPe.js";import"./Sector-BlYN7QdB.js";import"./Symbols-BD1jJmy1.js";import"./Curve-BNAJs-1X.js";import"./RegisterGraphicalItemId-C3n7rMAE.js";import"./ErrorBarContext-fxacjPOS.js";import"./GraphicalItemClipPath-CBtigOwz.js";import"./SetGraphicalItem-DBWDI1yN.js";import"./getZIndexFromUnknown-BPWz5uXR.js";import"./graphicalItemSelectors-CMyoVC1C.js";import"./ActivePoints-Vnpu3fVI.js";import"./Dot-DIDXVAE8.js";import"./getRadiusAndStrokeWidthFromDot-jvncozPt.js";import"./useElementOffset-BB0azcU5.js";import"./iteratee-DysRkLxA.js";import"./Cross-DCdUQxVy.js";import"./index-DoBieDfB.js";import"./ChartSizeDimensions-HwMCl-rE.js";import"./OffsetShower-B_S1QpU_.js";import"./PlotAreaShower-CbgSdBZD.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
