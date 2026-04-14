import{e as t}from"./iframe-CLmjlzb1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cnd-b2Jz.js";import{R as l}from"./arrayEqualityCheck-B4wm4mzq.js";import{C as x}from"./ComposedChart-NZAgTk7u.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CSaHk9-a.js";import{L as a}from"./Line-DGTUW3Zm.js";import{X as A}from"./XAxis-BfN6o_IU.js";import{T as g}from"./Tooltip-Bzwo1YGM.js";import{R as f}from"./RechartsHookInspector-BixZoynz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-4_WgxG81.js";import"./Layer-B8Y-IGwU.js";import"./resolveDefaultProps-DfSSEgX9.js";import"./Text-yZ4aTas7.js";import"./DOMUtils-BTzSUo1_.js";import"./Label-5j72dgYu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_c6eilm.js";import"./zIndexSlice-ENrbLBpP.js";import"./immer-BRhk69FB.js";import"./types-CPZMLz1x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-7exySQiY.js";import"./hooks-d-SQKimb.js";import"./axisSelectors-BSjiqA5G.js";import"./d3-scale-Cfbd6Yba.js";import"./RechartsWrapper-Cuidzjs6.js";import"./index-Du-W5DOH.js";import"./CartesianChart-BmEkTPS6.js";import"./chartDataContext-8FmNdAi4.js";import"./CategoricalChart-Cd_MTwuC.js";import"./tooltipContext-CwsRDlFL.js";import"./ReactUtils-D_M8UzUW.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D95D5Icg.js";import"./isPlainObject-VurimMcN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CG_TffJC.js";import"./useAnimationId-DS-J4iW4.js";import"./Trapezoid-Cu-zNPNg.js";import"./Sector-kWP0DhnI.js";import"./Symbols-CXcyzyAh.js";import"./symbol-CD9uivpb.js";import"./step-B08msyNS.js";import"./Curve-C2JnH5yk.js";import"./RegisterGraphicalItemId-C1ifoo0F.js";import"./ErrorBarContext-CwN8tpsm.js";import"./GraphicalItemClipPath-DB5whV9z.js";import"./SetGraphicalItem-BreTABoz.js";import"./getZIndexFromUnknown-rDAt-tUk.js";import"./graphicalItemSelectors-CysGfJKR.js";import"./ActivePoints-CJhScI-d.js";import"./Dot-CmmvI3p6.js";import"./getRadiusAndStrokeWidthFromDot-Dkw_fQYH.js";import"./useElementOffset-DdZfO3gs.js";import"./uniqBy-C8pbwaZO.js";import"./iteratee-MARHZxta.js";import"./Cross-BuY4bUHr.js";import"./index-D8lwKlWX.js";import"./ChartSizeDimensions-DPxIvg36.js";import"./OffsetShower-J2qKkSVX.js";import"./PlotAreaShower-BflxX8Fl.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
