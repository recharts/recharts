import{e as t}from"./iframe-B1pz1HPh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CEBdEAk1.js";import{g as l}from"./arrayEqualityCheck-CGszzuoD.js";import{C as x}from"./ComposedChart-DL9Bpu5J.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-B4GwVHsp.js";import{L as a}from"./Line-CPHgJ6LO.js";import{X as A}from"./XAxis-BVzuhrCO.js";import{T as g}from"./Tooltip-Ck0ufXZT.js";import{R as f}from"./RechartsHookInspector-Ba9PVlAC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C3QEFHfw.js";import"./Layer-hEcP7t1Y.js";import"./resolveDefaultProps-BMF326Ad.js";import"./Text-ZPZaoHNl.js";import"./DOMUtils-CC-NDZXa.js";import"./Label-C7IOirY6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B25MTFPC.js";import"./zIndexSlice-D685U5bi.js";import"./immer-D5ZK6-zj.js";import"./types-pm80QyIf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CvGe_rQ2.js";import"./hooks-_Fqb7rcn.js";import"./axisSelectors-rNwEbhlr.js";import"./d3-scale-COb-tvd6.js";import"./RechartsWrapper-B_DMEy6X.js";import"./index-CONuoc65.js";import"./CartesianChart-DW92cNBQ.js";import"./chartDataContext-CaM10qH-.js";import"./CategoricalChart-Bv4j4Ty_.js";import"./tooltipContext-CKgVsI0a.js";import"./ReactUtils-D8aneK3l.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-H0q-eroK.js";import"./useAnimationId-DfZh1iG1.js";import"./ActiveShapeUtils-vc7pcnW8.js";import"./RegisterGraphicalItemId-xTBgBnJK.js";import"./ErrorBarContext-uQPI7qhW.js";import"./GraphicalItemClipPath-uUb78tLM.js";import"./SetGraphicalItem-CRAPBDcO.js";import"./getZIndexFromUnknown-DKD710Z7.js";import"./graphicalItemSelectors-Cg7GtJUv.js";import"./Curve-B-sQG2bq.js";import"./step-C-YdGbob.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B2GiDi4o.js";import"./Dot-ISDNc-Qe.js";import"./getRadiusAndStrokeWidthFromDot--ZrL2R-3.js";import"./useElementOffset-Dj-I9x6j.js";import"./uniqBy-Bz1DY9a7.js";import"./iteratee-ClpoV93B.js";import"./Cross-xY40VCyk.js";import"./Sector-BxI8FLBr.js";import"./index-rYM0k6kK.js";import"./ChartSizeDimensions-DucsnCfP.js";import"./OffsetShower-C5l1TQVl.js";import"./PlotAreaShower-D97eaCHy.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
