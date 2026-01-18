import{e as t}from"./iframe--x23rdHV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-DrKE9qmp.js";import{R as l}from"./arrayEqualityCheck-BD1qZPxT.js";import{C as x}from"./ComposedChart-Cx255MWZ.js";import{B as o}from"./Bar-DWfUa_z5.js";import{L as a}from"./Line-BcEdIH6b.js";import{X as c}from"./XAxis-C6zLiMLH.js";import{T as A}from"./Tooltip-BpR2HqJx.js";import{R as g}from"./RechartsHookInspector-CS_N4Y-F.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Q3fBKAvl.js";import"./CartesianAxis-kvi8Pcym.js";import"./Layer-W9JL67lG.js";import"./Text-C7KTYcc4.js";import"./DOMUtils-a1QzPdPR.js";import"./Label-CHtfbXlI.js";import"./PolarUtils-DJ6pmdE6.js";import"./ZIndexLayer-ezCnztm4.js";import"./zIndexSlice-BZ8J8CWC.js";import"./types-DIiwzDHn.js";import"./hooks-B9glux5h.js";import"./axisSelectors-DmpeXiUd.js";import"./RechartsWrapper-CaVQgtIT.js";import"./CartesianChart-7YsubAAE.js";import"./chartDataContext-CDQnRCpO.js";import"./CategoricalChart-NDapYkGp.js";import"./tooltipContext-DeJUwuti.js";import"./ReactUtils-Bbi28O4z.js";import"./ActiveShapeUtils-Xs79DTHH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZSQAb92H.js";import"./useAnimationId-DUCYZNMW.js";import"./Trapezoid-B1cr3UmX.js";import"./Sector-En_dyy3k.js";import"./Symbols-DVanmgvf.js";import"./Curve-BsoHhr4Y.js";import"./RegisterGraphicalItemId-DjY_2vEh.js";import"./ErrorBarContext-z3_2koBv.js";import"./GraphicalItemClipPath-B3HNdztG.js";import"./SetGraphicalItem-Ccb8m39o.js";import"./getZIndexFromUnknown-ByZvTzdf.js";import"./graphicalItemSelectors-CO_EFJn4.js";import"./ActivePoints-BGDarTer.js";import"./Dot-DVriPTsk.js";import"./getRadiusAndStrokeWidthFromDot-pzOWmeWo.js";import"./useElementOffset-B8qSdA4X.js";import"./iteratee-Bd8EGcRe.js";import"./Cross-BC82NsLR.js";import"./index-DL_1z0BC.js";import"./ChartSizeDimensions-wrT4dmYN.js";import"./OffsetShower-CJxOrGxz.js";import"./PlotAreaShower-AHA62Bp0.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ut=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,ut as __namedExportsOrder,yt as default};
