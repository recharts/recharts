import{e as t}from"./iframe-DDWKRrqv.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BdM975Hp.js";import{R as l}from"./arrayEqualityCheck-B69_8zAh.js";import{C as x}from"./ComposedChart-79X4aNc0.js";import{B as o}from"./Bar-Bv3ldI8a.js";import{L as a}from"./Line-CxdYfIxL.js";import{X as c}from"./XAxis-D_2M1x8X.js";import{T as A}from"./Tooltip-CQK83aXS.js";import{R as g}from"./RechartsHookInspector-DceXjH5Q.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-6QkrUt7M.js";import"./Layer-h3-3YPyh.js";import"./resolveDefaultProps-D_DYv1p0.js";import"./Text-BHc0cwIs.js";import"./DOMUtils-slrfpt58.js";import"./Label-NRlvBr1w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BwiDnk8J.js";import"./zIndexSlice-BN5Gbmzf.js";import"./immer-BOVNGK3k.js";import"./types-DOdoKNLX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C67zSA8W.js";import"./hooks-DMdViquZ.js";import"./axisSelectors-IRdkb48b.js";import"./d3-scale-Bur08Y-w.js";import"./RechartsWrapper-DzmWRH09.js";import"./index-Bsn1GeuN.js";import"./CartesianChart-CkzL1Tm4.js";import"./chartDataContext-DtPiS87l.js";import"./CategoricalChart-g8bKJafN.js";import"./tooltipContext-CfFTqT1f.js";import"./ReactUtils-cVwoq5mQ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-EGVfTGvU.js";import"./isPlainObject-u-9GKdyb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DQpz_Kxu.js";import"./useAnimationId-BITKm10d.js";import"./Trapezoid-D8tIh_kI.js";import"./Sector-OY9ONPbP.js";import"./Symbols-BqNcdAfC.js";import"./symbol-dPepbRJM.js";import"./step-lfEQ-oxP.js";import"./Curve-DHOaOh81.js";import"./RegisterGraphicalItemId-CcVRSfeO.js";import"./ErrorBarContext-Bbishcw-.js";import"./GraphicalItemClipPath-D--Twx0M.js";import"./SetGraphicalItem-Cmo6HR7d.js";import"./getZIndexFromUnknown-C7Fl8QCW.js";import"./graphicalItemSelectors-DE1spaha.js";import"./ActivePoints-CQ605IlR.js";import"./Dot-CkKJMsGk.js";import"./getRadiusAndStrokeWidthFromDot-B8EpjCyF.js";import"./useElementOffset-B8i3o1pJ.js";import"./uniqBy-BmXuc6cE.js";import"./iteratee-CEk-dA8r.js";import"./Cross-DMkheZJO.js";import"./index-BsIrbSk0.js";import"./ChartSizeDimensions-FoS83u8h.js";import"./OffsetShower-CMRNvtsS.js";import"./PlotAreaShower-C4MeqViy.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
