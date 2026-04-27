import{e as t}from"./iframe-Db5WrE36.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DlOThTCh.js";import{R as l}from"./arrayEqualityCheck-C3JobR2_.js";import{C as x}from"./ComposedChart-CmGmKOjn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BDVf7wiC.js";import{L as a}from"./Line-CBPn8kOS.js";import{X as A}from"./XAxis-BTNXWmYe.js";import{T as g}from"./Tooltip-DVnP5z8y.js";import{R as f}from"./RechartsHookInspector-CFI1frAU.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D6uDjXla.js";import"./Layer-BG3cqZBo.js";import"./resolveDefaultProps-DvMxgvCh.js";import"./Text-B5PL99FR.js";import"./DOMUtils-C6TuwyJI.js";import"./Label-CpNI3apL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-xgBtkb6c.js";import"./zIndexSlice-DHcQINX8.js";import"./immer-CAzEWOIE.js";import"./types-CFSpK2OQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CypQTB_Z.js";import"./hooks-lxXboCZm.js";import"./axisSelectors-CDotANNU.js";import"./d3-scale-FiYYf1nP.js";import"./RechartsWrapper-DDDerXEh.js";import"./index-BJzZql5p.js";import"./CartesianChart-5yWhuVSR.js";import"./chartDataContext-DCp_Y5EI.js";import"./CategoricalChart-K1l3oikN.js";import"./tooltipContext-DKqePmHa.js";import"./ReactUtils-AT3k4juV.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CVJU97c4.js";import"./isPlainObject-C5kCzJV1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGyhLsa6.js";import"./useAnimationId-DKHJcbO_.js";import"./Trapezoid-Dafb8niv.js";import"./Sector-Dgz1-C8v.js";import"./Symbols-dNkD4NkT.js";import"./symbol-B2ykHL9B.js";import"./step-D8uPwds-.js";import"./Curve-CpGZD15H.js";import"./RegisterGraphicalItemId-D7MaJQJ5.js";import"./ErrorBarContext-D1SBSnUl.js";import"./GraphicalItemClipPath-DsXTVivH.js";import"./SetGraphicalItem-C-hqhW2S.js";import"./getZIndexFromUnknown-_zHvzrmt.js";import"./graphicalItemSelectors-PXX4gJok.js";import"./ActivePoints-SBAA7IQq.js";import"./Dot-C721K0mv.js";import"./getRadiusAndStrokeWidthFromDot-D8DWZlAx.js";import"./useElementOffset-DWnxgCCJ.js";import"./uniqBy-7PsptUMo.js";import"./iteratee-Dug52b17.js";import"./Cross-DW2Lq9rY.js";import"./index-B08ilTo6.js";import"./ChartSizeDimensions-CXOsnzEA.js";import"./OffsetShower-DEnIV-uj.js";import"./PlotAreaShower-CqTq0MkW.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
