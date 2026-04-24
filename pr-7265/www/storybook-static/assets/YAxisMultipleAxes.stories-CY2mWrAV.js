import{e as t}from"./iframe-LMZEDrr2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-ClmaHC8-.js";import{R as l}from"./arrayEqualityCheck-Isy6zPZP.js";import{C as x}from"./ComposedChart-CJ4Tf8S0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CqpR0Umd.js";import{L as a}from"./Line-5-HvnnXd.js";import{X as A}from"./XAxis-CDuwPcZ0.js";import{T as g}from"./Tooltip-B_90clCK.js";import{R as f}from"./RechartsHookInspector-BQiO1I7n.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CmrHLfhr.js";import"./Layer-Dm4unAaj.js";import"./resolveDefaultProps-BZX4Pe9p.js";import"./Text-D-rTyPnI.js";import"./DOMUtils-nLe0COZN.js";import"./Label-C1cFmZLh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-xLHvpxY5.js";import"./zIndexSlice-C5mrfXZA.js";import"./immer-BxzI6gFZ.js";import"./types-C96dbGEy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-P-8ydmtT.js";import"./hooks-D05996su.js";import"./axisSelectors-BJbnODt1.js";import"./d3-scale-HoZeCUQ0.js";import"./RechartsWrapper-CGclI6Yd.js";import"./index-9UiZJf_6.js";import"./CartesianChart-D8UfDOFa.js";import"./chartDataContext-CmqegXUH.js";import"./CategoricalChart-CdP22T7j.js";import"./tooltipContext-BIedK4pg.js";import"./ReactUtils-D-S282mX.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DlCg2xOm.js";import"./isPlainObject-tSKo75hS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bTQTBoQ8.js";import"./useAnimationId-BVzXz2Ut.js";import"./Trapezoid-BaFBv2Ob.js";import"./Sector-DM3Dpfvi.js";import"./Symbols-q47rYWMx.js";import"./symbol-BUCm0Fuj.js";import"./step-DHepAl4j.js";import"./Curve-D3f_JNhO.js";import"./RegisterGraphicalItemId-D4ZA5iGR.js";import"./ErrorBarContext-ByVn-xgW.js";import"./GraphicalItemClipPath-BG8ja_no.js";import"./SetGraphicalItem-BbPBNAhF.js";import"./getZIndexFromUnknown-COwqp3ea.js";import"./graphicalItemSelectors-BSoHbelv.js";import"./ActivePoints-iQlXbE54.js";import"./Dot-D2FHp4ML.js";import"./getRadiusAndStrokeWidthFromDot-uSj8EeRI.js";import"./useElementOffset-BsnK6ysB.js";import"./uniqBy-DoryuFu9.js";import"./iteratee-B7wf2MQl.js";import"./Cross-Codaptvi.js";import"./index-B4Bhf0VI.js";import"./ChartSizeDimensions-Dkn4GtcA.js";import"./OffsetShower-BXlYCay7.js";import"./PlotAreaShower-3thsUpgf.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
