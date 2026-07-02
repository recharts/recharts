import{R as t}from"./iframe-BNNSts13.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BE5H5SGl.js";import{R as l}from"./zIndexSlice-B_0Vu2Ew.js";import{C as x}from"./ComposedChart-DHvLsOhm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DomrdapL.js";import{L as a}from"./Line-DHXYmqa3.js";import{X as c}from"./XAxis-CQLk361J.js";import{T as g}from"./Tooltip-DHW7ZYPz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C9gxS0ZW.js";import"./CartesianAxis-Bo6M1fU4.js";import"./Layer-BUN3jU8m.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./isWellBehavedNumber-Cd8BT25E.js";import"./Label-B9RstaAA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./types-CMjaNGyL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./throttle-CBpSFV7b.js";import"./RechartsWrapper-CxhgYL0g.js";import"./index-D3L22MUx.js";import"./index-DZAGR4_4.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./tooltipContext-20KYJakf.js";import"./AnimatedItems-u006QBg6.js";import"./useAnimationId-CPqzTwnW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-L3OxoeXe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CnkeP5Du.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";import"./getZIndexFromUnknown-uWVFz-kT.js";import"./graphicalItemSelectors-BTrh16_N.js";import"./Curve-ByI9xGCG.js";import"./step-Brv0yDTW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-z37_g_gd.js";import"./Dot-GJcUxxVA.js";import"./getRadiusAndStrokeWidthFromDot-WWzyayAr.js";import"./useElementOffset-CXz0UZGA.js";import"./uniqBy-BiCSeEHe.js";import"./iteratee-CLp7QRBG.js";import"./Cross-BHUS_DrE.js";import"./Sector-DQ8c-GNj.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
