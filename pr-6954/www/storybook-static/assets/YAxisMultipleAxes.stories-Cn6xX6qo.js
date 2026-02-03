import{e as t}from"./iframe-Bsm65lpu.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-B-wKWhdg.js";import{R as l}from"./arrayEqualityCheck-pVpwfhw9.js";import{C as x}from"./ComposedChart-DLKCNB3k.js";import{B as o}from"./Bar-CQJxKN4K.js";import{L as a}from"./Line-CrEkPYWQ.js";import{X as c}from"./XAxis-TRGWr1gg.js";import{T as A}from"./Tooltip-DHYotQwp.js";import{R as g}from"./RechartsHookInspector-Clmx80vb.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-rxG_-3GU.js";import"./CartesianAxis-BtMXIbHW.js";import"./Layer-wMrNll4f.js";import"./Text-qBvU-JXf.js";import"./DOMUtils-D61cKDLm.js";import"./Label-BJg3D3z3.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-B9ntexjH.js";import"./zIndexSlice-CyooY4AF.js";import"./types-DNFwz7vs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-C8-QiYSZ.js";import"./axisSelectors-BL5_jCnI.js";import"./RechartsWrapper-De8mSPBF.js";import"./CartesianChart-COAh2GwA.js";import"./chartDataContext-BzZNyNeo.js";import"./CategoricalChart-CpYGwsdd.js";import"./tooltipContext-CW6cq-3Y.js";import"./ReactUtils-Dg23rHrH.js";import"./ActiveShapeUtils-D74FXmj1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CqOp_VNA.js";import"./useAnimationId-dI2bK3sU.js";import"./Trapezoid-DD-HamH_.js";import"./Sector-BjJSeVtU.js";import"./Symbols-lC3l514a.js";import"./Curve-Dwdi27bs.js";import"./RegisterGraphicalItemId-D7Q-Ng9s.js";import"./ErrorBarContext-ypCLG3pm.js";import"./GraphicalItemClipPath-DmxStlHE.js";import"./SetGraphicalItem-BK1cbA1C.js";import"./getZIndexFromUnknown-U6VIUAGj.js";import"./graphicalItemSelectors-DbjNkkTF.js";import"./ActivePoints-RliMcJhX.js";import"./Dot-Cn8YAJTC.js";import"./getRadiusAndStrokeWidthFromDot-DbjDS3xp.js";import"./useElementOffset-F4mKjVmk.js";import"./iteratee-D5J6UOkd.js";import"./Cross-BQpIxuJM.js";import"./index-CU5fePgk.js";import"./ChartSizeDimensions-CraFDmRl.js";import"./OffsetShower-Cb2JVvak.js";import"./PlotAreaShower-Bu5CsAfQ.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
