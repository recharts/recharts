import{e as t}from"./iframe-DtsdDKdZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-Ca_gtZCr.js";import{R as l}from"./arrayEqualityCheck-Droc7dSW.js";import{C as x}from"./ComposedChart-DJd-FMM5.js";import{B as o}from"./Bar-Btp23MlU.js";import{L as a}from"./Line-B8-iHccE.js";import{X as c}from"./XAxis-BoqN_M_f.js";import{T as A}from"./Tooltip-BGursgnW.js";import{R as g}from"./RechartsHookInspector-BlgcmNAN.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-XgYIScCi.js";import"./Layer-SH7Pqpr5.js";import"./resolveDefaultProps-CYphw90L.js";import"./Text-DywitbW7.js";import"./DOMUtils-_7Ng8zPY.js";import"./Label-DA1oiymG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBoKoGoH.js";import"./zIndexSlice-C9mn4FBr.js";import"./immer-Cl4pjRPT.js";import"./types-8PVRu1dQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DiHGExst.js";import"./hooks-BeulUkkW.js";import"./axisSelectors-DFbwRFUO.js";import"./d3-scale-C3JQrokV.js";import"./RechartsWrapper-BHAf4vKZ.js";import"./index-C-dV99_B.js";import"./CartesianChart-dUJOPO3Y.js";import"./chartDataContext-BYoNMw3_.js";import"./CategoricalChart-G5xMZxW2.js";import"./tooltipContext-DsgXlwBL.js";import"./ReactUtils-D2snZVWC.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DTqZq5h0.js";import"./isPlainObject-PKiGLw7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bs14o4jp.js";import"./useAnimationId-BeYERtYV.js";import"./Trapezoid-CfylSPEx.js";import"./Sector-BvQTjcKL.js";import"./Symbols-Ct3soTwA.js";import"./symbol-Biu6vDdW.js";import"./step-BAMUjg0M.js";import"./Curve-DR4nUNk7.js";import"./RegisterGraphicalItemId-CUTcSbcF.js";import"./ErrorBarContext-BXVMNut-.js";import"./GraphicalItemClipPath-BnsyXWl3.js";import"./SetGraphicalItem-B8wIveBb.js";import"./getZIndexFromUnknown-TfBFkrNM.js";import"./graphicalItemSelectors-DjSkvU14.js";import"./ActivePoints-BpXmKIch.js";import"./Dot-W3eXNr9t.js";import"./getRadiusAndStrokeWidthFromDot-Fg5nPjko.js";import"./useElementOffset-Cb5MxjJe.js";import"./uniqBy-jMwGgNZk.js";import"./iteratee-Bs43YSd1.js";import"./Cross-qdeQRJDU.js";import"./index-txaMAxKK.js";import"./ChartSizeDimensions-RUaYI8h3.js";import"./OffsetShower-Cc_Brw8F.js";import"./PlotAreaShower-Ch2pfbhA.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
