import{e as t}from"./iframe-D5au-B4R.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-Bi10WgdJ.js";import{R as l}from"./arrayEqualityCheck-DjoT1CkP.js";import{C as x}from"./ComposedChart-5CZYMUEf.js";import{B as o}from"./Bar-Cx0m0UGs.js";import{L as a}from"./Line-GBkSu3V2.js";import{X as c}from"./XAxis-Djz3Z4bE.js";import{T as A}from"./Tooltip-CwOLT_hR.js";import{R as g}from"./RechartsHookInspector-DFTuWkwy.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-fQqkoIc6.js";import"./Layer-N2rtvF3c.js";import"./resolveDefaultProps-DoxDJzak.js";import"./Text-CodnAT-D.js";import"./DOMUtils-CCC5iRCA.js";import"./Label-CgqPFnns.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D3P9nzyJ.js";import"./zIndexSlice-Dfjz8HwK.js";import"./immer-Uxla1AdH.js";import"./types-C71ySwku.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-NNQLBsMs.js";import"./hooks-CjYYqk-o.js";import"./axisSelectors-CPPpM5-p.js";import"./d3-scale-DAtNW_dV.js";import"./RechartsWrapper-B2p68SqA.js";import"./index-CqclXjSb.js";import"./CartesianChart-B5W05POX.js";import"./chartDataContext-CVbY0bI2.js";import"./CategoricalChart-CjFfaA5A.js";import"./tooltipContext-B4qwvaID.js";import"./ReactUtils-BP9EaRxl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-XCFf1hjH.js";import"./isPlainObject-c9Qdn0OS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dfyov816.js";import"./useAnimationId-B8Se4RD-.js";import"./Trapezoid-CE1-MrL0.js";import"./Sector-JrfJaAcz.js";import"./Symbols-DA9it_1u.js";import"./symbol-DYMTv-17.js";import"./step-BXVfDqRU.js";import"./Curve-Cud4Oq3s.js";import"./RegisterGraphicalItemId-wh7gYtX8.js";import"./ErrorBarContext-BKfr8U3o.js";import"./GraphicalItemClipPath-BSyS1Brn.js";import"./SetGraphicalItem-BsfuYCoV.js";import"./getZIndexFromUnknown-ZzeM6knN.js";import"./graphicalItemSelectors-BGhOooFi.js";import"./ActivePoints-BozXtQ62.js";import"./Dot-DOxQIUAd.js";import"./getRadiusAndStrokeWidthFromDot-sXJnO0M5.js";import"./useElementOffset-ONaxsyYW.js";import"./uniqBy-Dx3xi0zM.js";import"./iteratee-BP3T-uwN.js";import"./Cross-BXaG_z2s.js";import"./index-47pdZWe1.js";import"./ChartSizeDimensions-ITlssz9c.js";import"./OffsetShower-r5ZHHhNG.js";import"./PlotAreaShower-Ck8CTF06.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
