import{e as t}from"./iframe-CBadok3R.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-CkBODHFa.js";import{R as l}from"./arrayEqualityCheck-D8DZf4E7.js";import{C as x}from"./ComposedChart-Dc_UJsoP.js";import{B as o}from"./Bar-BDfQf20X.js";import{L as a}from"./Line-vL2LKnJQ.js";import{X as c}from"./XAxis-CuDJTYDf.js";import{T as A}from"./Tooltip-VKl52Hto.js";import{R as g}from"./RechartsHookInspector-Ccr9vg9I.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DOVzV-iD.js";import"./CartesianAxis-BWCbP_kU.js";import"./Layer-CZpxdYtD.js";import"./Text-CvdY0hNo.js";import"./DOMUtils-DOxIp63n.js";import"./Label-B9arnFZu.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-gNsJWqo_.js";import"./zIndexSlice-Cb0fYcD4.js";import"./types-D0Nc3U-x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CvcnYJr5.js";import"./axisSelectors-7aa3p4xy.js";import"./RechartsWrapper-BOMW4Wfi.js";import"./CartesianChart-DhdNdBtI.js";import"./chartDataContext-PjfwFb0T.js";import"./CategoricalChart-DgHJ04hm.js";import"./tooltipContext-C9jcULYY.js";import"./ReactUtils-BQuPA_dW.js";import"./ActiveShapeUtils-ZvkivxeS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyKJpDnd.js";import"./useAnimationId-DFBNL1tZ.js";import"./Trapezoid-BHZLmvdE.js";import"./Sector-hPIyOnR6.js";import"./Symbols-mEW1LXrD.js";import"./Curve-D-ytcwuR.js";import"./RegisterGraphicalItemId-BOD2PtEe.js";import"./ErrorBarContext-DNzUHuOB.js";import"./GraphicalItemClipPath-BGNJr3YU.js";import"./SetGraphicalItem-tnjDANmy.js";import"./getZIndexFromUnknown-DSB9f1S0.js";import"./graphicalItemSelectors-Cunchwc9.js";import"./ActivePoints-C4zMx6Rr.js";import"./Dot-D8cjCII1.js";import"./getRadiusAndStrokeWidthFromDot-B43QJ_Z5.js";import"./useElementOffset-CRBaCWHR.js";import"./iteratee-9Y6z12tH.js";import"./Cross-C0Q6IQ13.js";import"./index-AunjJ6Z9.js";import"./ChartSizeDimensions-rprNa-Kn.js";import"./OffsetShower-Dh3F56nH.js";import"./PlotAreaShower-CfQIUSEt.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
