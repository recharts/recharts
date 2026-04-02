import{e as t}from"./iframe-GfPTcwVI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CAzK1_Cz.js";import{R as l}from"./arrayEqualityCheck-zByCBXfp.js";import{C as x}from"./ComposedChart-g_3yl1AM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CUrXIHso.js";import{L as a}from"./Line-CQvFBi_4.js";import{X as A}from"./XAxis-D09jYQEI.js";import{T as g}from"./Tooltip-Ca4d2JTr.js";import{R as f}from"./RechartsHookInspector-BbE71-mZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BgLkReml.js";import"./Layer-D5BHTSBb.js";import"./resolveDefaultProps-DyMlioZM.js";import"./Text-Cz6Ir0Bd.js";import"./DOMUtils-CBAOKK6G.js";import"./Label-Dcg-6Pxd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ci0MSbfQ.js";import"./zIndexSlice-BiywrOzN.js";import"./immer-C_ivLHTT.js";import"./types-D3MLb6DN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DubTevQM.js";import"./hooks-CkLAhtAF.js";import"./axisSelectors-C1I30lvY.js";import"./d3-scale-CZ7HbC41.js";import"./RechartsWrapper-xCEfQ3e6.js";import"./index-BPTb04yT.js";import"./CartesianChart-C7artJXa.js";import"./chartDataContext-Dnq1iHBW.js";import"./CategoricalChart-DT84xA7C.js";import"./tooltipContext-DZiQrflG.js";import"./ReactUtils-D6XtI53O.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DMmYEdu0.js";import"./isPlainObject-2G-hgaEW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBxJEym.js";import"./useAnimationId-CJpqr1GQ.js";import"./Trapezoid-CUiisPn6.js";import"./Sector-F_1AI-V0.js";import"./Symbols-BG3HhGrw.js";import"./symbol-Dj4Qey2P.js";import"./step-BJ9jGGmt.js";import"./Curve-sYWT_Cke.js";import"./RegisterGraphicalItemId-BQasV6-Q.js";import"./ErrorBarContext-C9NklHyW.js";import"./GraphicalItemClipPath-DGk_Ausf.js";import"./SetGraphicalItem-v2qQdmnb.js";import"./getZIndexFromUnknown-DWVYwqmN.js";import"./graphicalItemSelectors-gGFkZTvU.js";import"./ActivePoints-DiX9hpdl.js";import"./Dot-B-wtPhzZ.js";import"./getRadiusAndStrokeWidthFromDot-C8_IZqg1.js";import"./useElementOffset-Cj2S4Ntr.js";import"./uniqBy-B45iBOfE.js";import"./iteratee-Jsq1qhFx.js";import"./Cross-D9HTS-Qa.js";import"./index-CtTj3QoQ.js";import"./ChartSizeDimensions-BaFn1hfG.js";import"./OffsetShower-C19M18-p.js";import"./PlotAreaShower-Bq5P1fMQ.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
