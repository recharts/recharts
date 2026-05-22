import{e as t}from"./iframe-BhUxTtiL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CqkUk7nh.js";import{g as l}from"./arrayEqualityCheck-DppgWusB.js";import{C as x}from"./ComposedChart-BMn_6oDC.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-C-MbfcbG.js";import{L as a}from"./Line-p3VovnKi.js";import{X as A}from"./XAxis-C73en9jh.js";import{T as g}from"./Tooltip-5YUiJS6V.js";import{R as f}from"./RechartsHookInspector-JMIq0pQS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Dg6rum68.js";import"./Layer-BGQI9FGV.js";import"./resolveDefaultProps-BwRhqspK.js";import"./Text-_q4HIlMq.js";import"./DOMUtils-BPHETHho.js";import"./Label-B-L_WnHM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPpIaF6c.js";import"./zIndexSlice-nXWOo65n.js";import"./immer-CHCHxlI3.js";import"./types-Lg-gn8wA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CYNpjUFM.js";import"./hooks-DR2LEq6I.js";import"./axisSelectors-CJkBbfZc.js";import"./d3-scale-XHTmrGeR.js";import"./RechartsWrapper-BR1uoXx0.js";import"./index-XjGx_uyE.js";import"./CartesianChart-Bbu5UDic.js";import"./chartDataContext-l2E_xhbE.js";import"./CategoricalChart-BpuJQUho.js";import"./tooltipContext-BHMUpMxT.js";import"./ReactUtils-BLhQELGN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CXSstgx1.js";import"./useAnimationId-B-QfnVAI.js";import"./ActiveShapeUtils-BtaI_SKC.js";import"./RegisterGraphicalItemId-05uKE1t1.js";import"./ErrorBarContext-xJxnsNXv.js";import"./GraphicalItemClipPath-CLhlaT2j.js";import"./SetGraphicalItem-C4bg6-5U.js";import"./getZIndexFromUnknown-BD16dj8A.js";import"./graphicalItemSelectors-DstPRYkG.js";import"./Curve-BICrVSEu.js";import"./step-DotG6x7P.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B8FRaVHI.js";import"./Dot-Bn8XUR1d.js";import"./getRadiusAndStrokeWidthFromDot-CjnN3OM9.js";import"./useElementOffset-JSdm64jE.js";import"./uniqBy-BCcn4akX.js";import"./iteratee-BIvWeTYe.js";import"./Cross-4Dq1pJa5.js";import"./Sector-C6l3Kc-d.js";import"./index-6wyw6I_N.js";import"./ChartSizeDimensions-Bic6l-OJ.js";import"./OffsetShower-CD4roSzf.js";import"./PlotAreaShower-CXgcskuB.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
