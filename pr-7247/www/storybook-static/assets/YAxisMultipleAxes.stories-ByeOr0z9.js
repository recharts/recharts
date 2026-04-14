import{e as t}from"./iframe-CgD2l6ll.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B1mR4R6T.js";import{R as l}from"./arrayEqualityCheck-Ce8ToQce.js";import{C as x}from"./ComposedChart-BtEXXQiL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-jxpDRb0r.js";import{L as a}from"./Line-CWagXAtR.js";import{X as A}from"./XAxis-Dwv3lvMC.js";import{T as g}from"./Tooltip-BsInjJ3y.js";import{R as f}from"./RechartsHookInspector-wCO4fGuE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CFnaMpqS.js";import"./Layer-xPACpCXS.js";import"./resolveDefaultProps-BcwZVjgI.js";import"./Text-B-yzB-LI.js";import"./DOMUtils-CLb0DfXc.js";import"./Label-D_DKdnsr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8FhZChLk.js";import"./zIndexSlice-CWeG0hvl.js";import"./immer-CSa9Hlzz.js";import"./types-CO3nSITq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BTs2Zr2I.js";import"./hooks-Bpy6m5AM.js";import"./axisSelectors-odqRCvmi.js";import"./d3-scale-BuJMnYaW.js";import"./RechartsWrapper-Csl_cz9v.js";import"./index-CiRw8P2v.js";import"./CartesianChart-Dnb9hNXP.js";import"./chartDataContext-CpiPBezf.js";import"./CategoricalChart-CrkBWVhR.js";import"./tooltipContext-DhqVhBTl.js";import"./ReactUtils-DT-vzjkJ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BuoidUZn.js";import"./isPlainObject-BR2GQDLn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdyxrGVo.js";import"./useAnimationId-DgqiEA4Q.js";import"./Trapezoid-G-FN5Gcg.js";import"./Sector-DgCnGScK.js";import"./Symbols-KXE8aVcl.js";import"./symbol-CDbbQw2g.js";import"./step-DpdY8Awj.js";import"./Curve-CvT7tHbE.js";import"./RegisterGraphicalItemId-DQH7cQCp.js";import"./ErrorBarContext-eq28NwTt.js";import"./GraphicalItemClipPath-oqYXxjvR.js";import"./SetGraphicalItem-Be8y5kPC.js";import"./getZIndexFromUnknown-4CTHU5cd.js";import"./graphicalItemSelectors-CCpx5LVw.js";import"./ActivePoints-CfIeRm58.js";import"./Dot-CmUBOjxz.js";import"./getRadiusAndStrokeWidthFromDot-BIOm4JA6.js";import"./useElementOffset-DNzlmXmU.js";import"./uniqBy-CqSCdlOS.js";import"./iteratee-Cf9bYLPC.js";import"./Cross-B7xfFQa-.js";import"./index-Dt6lrkA2.js";import"./ChartSizeDimensions-D4uuPom-.js";import"./OffsetShower-Cc0zOxiQ.js";import"./PlotAreaShower-DDf_tE0M.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
