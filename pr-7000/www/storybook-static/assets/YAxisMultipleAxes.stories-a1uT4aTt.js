import{e as t}from"./iframe-ByhUx3i5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis-D42CMzIK.js";import{R as l}from"./arrayEqualityCheck-Dc2-6IGJ.js";import{C as x}from"./ComposedChart-BqdUV1Sk.js";import{B as o}from"./Bar-zWPLBl_Q.js";import{L as a}from"./Line-DQI5jB5X.js";import{X as c}from"./XAxis-BI5mxokc.js";import{T as A}from"./Tooltip-DmR6kuQ8.js";import{R as g}from"./RechartsHookInspector-7ObrtXBg.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXU9cl7Q.js";import"./CartesianAxis-Dz61qQ6A.js";import"./Layer-C6tXeN-I.js";import"./Text-D9qGFk_y.js";import"./DOMUtils-CN3Smf_c.js";import"./Label-CEJ3y0id.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ktHWf7_5.js";import"./zIndexSlice-D3kDw7sn.js";import"./types-CJt6eGgj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-3yl5iFEg.js";import"./axisSelectors-NQs8EjRk.js";import"./RechartsWrapper-CIwNTWTh.js";import"./CartesianChart-R5e0LOwa.js";import"./chartDataContext-BYf5RbAV.js";import"./CategoricalChart-5ePC_oFI.js";import"./tooltipContext-7NlN6gcD.js";import"./ReactUtils-BmZRR5An.js";import"./ActiveShapeUtils-CvF1aWoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxW-1m5M.js";import"./useAnimationId-aMq0pZgy.js";import"./Trapezoid-BUngsVtC.js";import"./Sector-BymBl_Im.js";import"./Symbols-C3LGHQVt.js";import"./Curve-CS0P1hcX.js";import"./RegisterGraphicalItemId-CUDjPLNo.js";import"./ErrorBarContext-Coaa-8b_.js";import"./GraphicalItemClipPath-CCO6Hfg0.js";import"./SetGraphicalItem-d5ssc5Bz.js";import"./getZIndexFromUnknown-rrrHiWL0.js";import"./graphicalItemSelectors-CD7_eHaQ.js";import"./ActivePoints-D515SR-u.js";import"./Dot-COBzijtS.js";import"./getRadiusAndStrokeWidthFromDot-ph1c7d2p.js";import"./useElementOffset-CNw39Ncf.js";import"./iteratee-k1Sg484z.js";import"./Cross-Bba_iUMz.js";import"./index-Bitkd77q.js";import"./ChartSizeDimensions-DxQjWf1j.js";import"./OffsetShower-DxCTP-c8.js";import"./PlotAreaShower-DB1zgg4x.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
