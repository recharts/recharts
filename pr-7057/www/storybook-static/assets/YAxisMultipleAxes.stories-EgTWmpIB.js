import{e as t}from"./iframe-D4_kWiik.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-DgOR7wnS.js";import{R as l}from"./arrayEqualityCheck-B3HrMvOJ.js";import{C as x}from"./ComposedChart-Ba8l5vfK.js";import{B as o}from"./Bar-C6aa1WXv.js";import{L as a}from"./Line-mudUiiQW.js";import{X as c}from"./XAxis-DYXsWNnz.js";import{T as A}from"./Tooltip-BeiQvTCq.js";import{R as g}from"./RechartsHookInspector-CKRvII-U.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Lz5XVqBq.js";import"./Layer-hulGBcYw.js";import"./resolveDefaultProps-DooOk0ZG.js";import"./Text-CoLcKwL4.js";import"./DOMUtils-Dzu75jG0.js";import"./Label-CWL13-o_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-sXRztW1g.js";import"./zIndexSlice-C4SzCaYD.js";import"./immer-0ruqGMtg.js";import"./types-BCRPpXrS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CIXKwc0U.js";import"./hooks-6jZB3yL2.js";import"./axisSelectors-BmHnRFxW.js";import"./d3-scale-n7QD4WrB.js";import"./RechartsWrapper-CPReM4TO.js";import"./index-DoPLCw_p.js";import"./CartesianChart-sfWAfsuQ.js";import"./chartDataContext-jjjOdAEg.js";import"./CategoricalChart-Csqo5QVJ.js";import"./tooltipContext-JicCWQGV.js";import"./ReactUtils-B0Tr3Kw3.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DVInz7Qi.js";import"./isPlainObject-Bzk1EvI7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGtDGrdk.js";import"./useAnimationId-Dur5dtsq.js";import"./Trapezoid-BH067hRN.js";import"./Sector-D-XRTfZm.js";import"./Symbols-CHUFq9Ay.js";import"./symbol-BoxvpimM.js";import"./step-9zWUSiR2.js";import"./Curve-DIMr1GZI.js";import"./RegisterGraphicalItemId-DxmtI7AP.js";import"./ErrorBarContext-KX3UjoPN.js";import"./GraphicalItemClipPath-VQWjMwSl.js";import"./SetGraphicalItem-B_khJyid.js";import"./getZIndexFromUnknown-D6kJ6UZM.js";import"./graphicalItemSelectors-B4ttmFru.js";import"./ActivePoints-CdDYwwSa.js";import"./Dot-BsouI4yi.js";import"./getRadiusAndStrokeWidthFromDot-DxXAf3lX.js";import"./useElementOffset-CbtwGd1l.js";import"./uniqBy-BOQHR2T6.js";import"./iteratee-kN7lKKky.js";import"./Cross-Bt2CsALe.js";import"./index-Dx5VrxvW.js";import"./ChartSizeDimensions-DSAP6Fpc.js";import"./OffsetShower-DTklH8sW.js";import"./PlotAreaShower-Cqlm22k_.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
