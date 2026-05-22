import{e as t}from"./iframe-DgFUiQiK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B1_SZb1V.js";import{g as l}from"./arrayEqualityCheck-LPKQSaXm.js";import{C as x}from"./ComposedChart-Cv94qjDo.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-CZs7Jc4h.js";import{L as a}from"./Line-CMbw1Ih0.js";import{X as A}from"./XAxis-CWlzFfKK.js";import{T as g}from"./Tooltip-8_1fOMr1.js";import{R as f}from"./RechartsHookInspector-BQ9yzd9s.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-n56eB7xd.js";import"./Layer-CKwu47GO.js";import"./resolveDefaultProps-C_bUtyXy.js";import"./Text-BqcFD908.js";import"./DOMUtils-DG_6devH.js";import"./Label-BFkeduE8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DZ2vjGZc.js";import"./zIndexSlice-DXOhyCux.js";import"./immer-Ca0Cy3ce.js";import"./types-D_oNXqce.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CX5tvx9V.js";import"./hooks-CisH2h_f.js";import"./axisSelectors-Q9bQQnzw.js";import"./d3-scale-HhLt2ZCp.js";import"./string-yHBgcFlJ.js";import"./RechartsWrapper-Deqq_iXZ.js";import"./index-BBnacJAP.js";import"./CartesianChart-Br6s862c.js";import"./chartDataContext-BrtjpLFC.js";import"./CategoricalChart-vPZ8jvpO.js";import"./tooltipContext-JWKlDLNL.js";import"./AnimatedItems-BOr9vF6Q.js";import"./useAnimationId-CCpHVl00.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-A65MZM5i.js";import"./ActiveShapeUtils-BELkaCyh.js";import"./RegisterGraphicalItemId-fp2G-2V_.js";import"./ErrorBarContext-Ompx7WAJ.js";import"./GraphicalItemClipPath-Be4OXw7H.js";import"./SetGraphicalItem-CngLT_zh.js";import"./getZIndexFromUnknown-DNormy02.js";import"./graphicalItemSelectors-KNBgCa0N.js";import"./Curve-Ba62GFgD.js";import"./step-CFkmYg6i.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BorMl77e.js";import"./Dot-Dyh69QuB.js";import"./getRadiusAndStrokeWidthFromDot-D3y5duhQ.js";import"./useElementOffset-CgnfzBM5.js";import"./uniqBy-BY9_th2N.js";import"./iteratee-Cjhnbwdc.js";import"./Cross-ZFk5d86A.js";import"./Sector-C1uP_awt.js";import"./index-DgA4mNoJ.js";import"./ChartSizeDimensions-B1UuSRJB.js";import"./OffsetShower-BmC__2iI.js";import"./PlotAreaShower-CI2PfPEp.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Rt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
