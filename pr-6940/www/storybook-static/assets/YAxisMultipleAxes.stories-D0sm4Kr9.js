import{e as t}from"./iframe-DKKmvtM4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-opqB1HJ5.js";import{R as l}from"./arrayEqualityCheck-BH7M1_Mo.js";import{C as x}from"./ComposedChart-DEbE_DRg.js";import{B as o}from"./Bar-BOLbm5bF.js";import{L as a}from"./Line-CXcs_8eO.js";import{X as c}from"./XAxis-D0l8_bF1.js";import{T as A}from"./Tooltip-3sPZHlZ6.js";import{R as g}from"./RechartsHookInspector-_f5C5MnG.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKSvQ-CI.js";import"./CartesianAxis-BfEn85oF.js";import"./Layer-CRV4337m.js";import"./Text-sKIHJABx.js";import"./DOMUtils-CGnu9ifx.js";import"./Label-Da19cvil.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-ub3Xu4w-.js";import"./zIndexSlice-AjUFaEiP.js";import"./types-Bj4-1oYY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CAZEb-K2.js";import"./axisSelectors-BwBIfn7P.js";import"./RechartsWrapper-DSOfgqQ4.js";import"./CartesianChart-DhY9l1Jf.js";import"./chartDataContext-C3SlyDgH.js";import"./CategoricalChart-BpOJCian.js";import"./tooltipContext-OBwlOkwA.js";import"./ReactUtils-CYxP7B05.js";import"./ActiveShapeUtils-czniNIT7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B6ULbvfC.js";import"./useAnimationId-Hx06RWvS.js";import"./Trapezoid-RWF7Vajg.js";import"./Sector-Dn7O6oob.js";import"./Symbols-CMo2qdsV.js";import"./Curve-Cf01ES6k.js";import"./RegisterGraphicalItemId-D_mkL-K8.js";import"./ErrorBarContext-BUSUJFaK.js";import"./GraphicalItemClipPath-BPF3OyQO.js";import"./SetGraphicalItem-DxgYEhry.js";import"./getZIndexFromUnknown-C-8A48K9.js";import"./graphicalItemSelectors-rhw8Er39.js";import"./ActivePoints-C4GM9BP6.js";import"./Dot-Mxkn0j7-.js";import"./getRadiusAndStrokeWidthFromDot-D2gJ4jd4.js";import"./useElementOffset-RuoUI7ms.js";import"./iteratee-Bddy4rkb.js";import"./Cross-BTcVQdwj.js";import"./index-COzuImjz.js";import"./ChartSizeDimensions-C-W9gvmn.js";import"./OffsetShower-BXtHvm8O.js";import"./PlotAreaShower-CYWF0naR.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
