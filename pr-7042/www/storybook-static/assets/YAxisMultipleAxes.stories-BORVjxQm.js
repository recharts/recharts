import{e as t}from"./iframe-Cg8afp3P.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-Bp6BdEbp.js";import{Y as r}from"./YAxis-B5L1n3Hm.js";import{R as l}from"./arrayEqualityCheck-CdnxX3zW.js";import{C as x}from"./ComposedChart-Dw1ue8mx.js";import{B as o}from"./Bar-QbcGwr9h.js";import{L as a}from"./Line-ix8re_Gh.js";import{X as c}from"./XAxis-CcHOaWFK.js";import{T as A}from"./Tooltip-CU2EVBvY.js";import{R as g}from"./RechartsHookInspector-DBmCwbx2.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BH2_JJNm.js";import"./Layer-YebNzFxt.js";import"./resolveDefaultProps-3HltEOEu.js";import"./Text-CShVWkSN.js";import"./DOMUtils-DjmgTp4l.js";import"./Label-DvKY9pNQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8TBIBWl0.js";import"./zIndexSlice-BhrWtTkt.js";import"./immer-496O7mbU.js";import"./types-CMLysTZx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DkvAPKlQ.js";import"./hooks-CbbXi_l7.js";import"./axisSelectors-C693hjfU.js";import"./d3-scale-Cj67Rjiy.js";import"./RechartsWrapper-Jn537Djk.js";import"./index-BTReDVD1.js";import"./CartesianChart-DjSIFQx_.js";import"./chartDataContext-GXm2JMjL.js";import"./CategoricalChart-Cr-8QZnp.js";import"./tooltipContext-BYXsX5Eu.js";import"./ReactUtils-Bs6wbtV4.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C8ehvzet.js";import"./isPlainObject-exJkdHtC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-m1zl6eyw.js";import"./useAnimationId-KzNTUIqt.js";import"./Trapezoid-CNmEBD2U.js";import"./Sector-DyLH-ktt.js";import"./Symbols-BOLBqJCz.js";import"./symbol-BNzksSxl.js";import"./step-CqAkm0lp.js";import"./Curve-kDork6Kh.js";import"./RegisterGraphicalItemId-mvTxW8NP.js";import"./ErrorBarContext-CYmUoBhN.js";import"./GraphicalItemClipPath-CcY9VH0G.js";import"./SetGraphicalItem-mVKFfj-o.js";import"./getZIndexFromUnknown-DNdKCVA7.js";import"./graphicalItemSelectors-Dk-ZfK_L.js";import"./ActivePoints--aP-WW0G.js";import"./Dot-BEaF242C.js";import"./getRadiusAndStrokeWidthFromDot-TA9Ey7Di.js";import"./useElementOffset-RqGPhtWN.js";import"./uniqBy-CzLOAIrK.js";import"./iteratee-C64KKsoF.js";import"./Cross-CHprlulN.js";import"./index-DRXexYxK.js";import"./ChartSizeDimensions-DccCBOyY.js";import"./OffsetShower-7vNsmCvs.js";import"./PlotAreaShower-C7II51Mo.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
