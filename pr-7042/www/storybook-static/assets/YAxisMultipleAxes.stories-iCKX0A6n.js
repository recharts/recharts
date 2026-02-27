import{e as t}from"./iframe-Dr9hlnt0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-oVvY9CD_.js";import{R as l}from"./arrayEqualityCheck-dGE5_Gdx.js";import{C as x}from"./ComposedChart-C3ymMAIf.js";import{B as o}from"./Bar-BNSfF1GC.js";import{L as a}from"./Line-DLj2NM4I.js";import{X as c}from"./XAxis-DVCekQJU.js";import{T as A}from"./Tooltip-BphQq36y.js";import{R as g}from"./RechartsHookInspector-DqXSZ2_4.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-zfjDIuu9.js";import"./Layer-Dau6qZl4.js";import"./resolveDefaultProps-BcfXVXAk.js";import"./Text-5hzj-3E2.js";import"./DOMUtils-CHMlhwBF.js";import"./Label-Cwqjf1nY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bo4FLnP8.js";import"./zIndexSlice-DGOFW2aZ.js";import"./immer-B0cgghQh.js";import"./types-BT9nDPZN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CKBM6rCx.js";import"./hooks-CB3Bi2qN.js";import"./axisSelectors-BElW-4uO.js";import"./d3-scale-Kw50_LDj.js";import"./RechartsWrapper-DInH99Th.js";import"./index-IE9LPIX3.js";import"./CartesianChart-DxJdttbu.js";import"./chartDataContext-no4gboHT.js";import"./CategoricalChart-BlqKECmV.js";import"./tooltipContext-Bl5xznvE.js";import"./ReactUtils-DLDWRsmH.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Zy3mhGJ3.js";import"./isPlainObject-CA9cA3dI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0CBW5qs.js";import"./useAnimationId-DF7fT-LB.js";import"./Trapezoid-B4y_3kG1.js";import"./Sector-B2l0FABS.js";import"./Symbols-DjCtNUtk.js";import"./symbol-DBg6OtuT.js";import"./step-0gc20F8a.js";import"./Curve-B9wE7HPg.js";import"./RegisterGraphicalItemId-DaJnSa8q.js";import"./ErrorBarContext-DFPKgud5.js";import"./GraphicalItemClipPath-C96TQI3r.js";import"./SetGraphicalItem-13vPI63j.js";import"./getZIndexFromUnknown-B16QGgWL.js";import"./graphicalItemSelectors-BM7f-Iu2.js";import"./ActivePoints-BWlIiscJ.js";import"./Dot-G9S3vDXU.js";import"./getRadiusAndStrokeWidthFromDot-IhVKPv-0.js";import"./useElementOffset-C8Y7cVjc.js";import"./uniqBy-CKd_6bHf.js";import"./iteratee-BGMuKn8v.js";import"./Cross-DviCIwsu.js";import"./index-Dj7LSIr-.js";import"./ChartSizeDimensions-DlMrTXA2.js";import"./OffsetShower-DfvMVNLi.js";import"./PlotAreaShower-DpM8yPVC.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
