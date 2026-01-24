import{e as t}from"./iframe-A-0tKSWD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-DGY1JRVK.js";import{R as l}from"./arrayEqualityCheck-Bi53fE_W.js";import{C as x}from"./ComposedChart-DpDrbSCn.js";import{B as o}from"./Bar-BgUEygAa.js";import{L as a}from"./Line-JkOAy3vk.js";import{X as c}from"./XAxis-BXhGyvV2.js";import{T as A}from"./Tooltip-C_UMyDHa.js";import{R as g}from"./RechartsHookInspector-BiAUdU7M.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DGQ-_Q5N.js";import"./CartesianAxis-DX3J6okb.js";import"./Layer-CxQ6kbYz.js";import"./Text-DMK2KaGs.js";import"./DOMUtils-gTBfrWdN.js";import"./Label-C7autWsa.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-BJZUY29j.js";import"./zIndexSlice-BnuFP1kN.js";import"./types-BYDpjVEr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BIt-PEDd.js";import"./axisSelectors-BPBM-BQI.js";import"./RechartsWrapper-SmBFshtg.js";import"./CartesianChart-2alRd1pz.js";import"./chartDataContext-BdRC9Sc-.js";import"./CategoricalChart-El9GFkBl.js";import"./tooltipContext-DyV9aXyZ.js";import"./ReactUtils-ptTox43v.js";import"./ActiveShapeUtils-CxepjeQB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9GYhQ17.js";import"./useAnimationId-CvIqeW01.js";import"./Trapezoid-B9ii8EyS.js";import"./Sector-BedQrfAt.js";import"./Symbols-C_xPmfi9.js";import"./Curve-BQURRmu9.js";import"./RegisterGraphicalItemId-DjlQV6Vi.js";import"./ErrorBarContext-9JUs1gmp.js";import"./GraphicalItemClipPath-Sdkq8hlz.js";import"./SetGraphicalItem-C1AKRyjE.js";import"./getZIndexFromUnknown-OnA6nzzc.js";import"./graphicalItemSelectors-BB_FCGuO.js";import"./ActivePoints-Jfec1qwc.js";import"./Dot-1LqtVP9Q.js";import"./getRadiusAndStrokeWidthFromDot-D6jqQXc0.js";import"./useElementOffset-pOCC4UDR.js";import"./iteratee-CS8o6XLt.js";import"./Cross-B0Jg01iP.js";import"./index-B-Mvr0XH.js";import"./ChartSizeDimensions-22sFfi6P.js";import"./OffsetShower-C5qrbqGT.js";import"./PlotAreaShower-DXZIEGcd.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
