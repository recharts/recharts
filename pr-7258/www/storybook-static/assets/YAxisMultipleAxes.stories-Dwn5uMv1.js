import{e as t}from"./iframe-dL2OVy5F.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BsWm2FVM.js";import{R as l}from"./arrayEqualityCheck-CaMvItyo.js";import{C as x}from"./ComposedChart-Y8SckKJS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CCvlybON.js";import{L as a}from"./Line-Dq6GxaVC.js";import{X as A}from"./XAxis-B86_r9Ch.js";import{T as g}from"./Tooltip-BGNMLgA6.js";import{R as f}from"./RechartsHookInspector-BZsexvc_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BKf97Rvg.js";import"./Layer-BrlL2tOs.js";import"./resolveDefaultProps-7Zncxn1v.js";import"./Text-Bwe6nLXh.js";import"./DOMUtils-Ci6QTQ3e.js";import"./Label-C6izcScL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BvENavnS.js";import"./zIndexSlice-DAYnIbZH.js";import"./immer-DHklT898.js";import"./types-LCDeNazI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D7ViyujS.js";import"./hooks-CtDQVu0u.js";import"./axisSelectors-Do7BkVsn.js";import"./d3-scale-3VqrHCN7.js";import"./RechartsWrapper-2xnsmZbF.js";import"./index-C8r_0QEC.js";import"./CartesianChart-CQEHzqI9.js";import"./chartDataContext-BXPlG8LR.js";import"./CategoricalChart-BZHJ_HjV.js";import"./tooltipContext-BqlMCNVL.js";import"./ReactUtils-A9WQzOkM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-6me4R15I.js";import"./isPlainObject-O_SkrgJ1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-XiX3CaBX.js";import"./useAnimationId-C4Vc8PxM.js";import"./Trapezoid-Jy6pnob6.js";import"./Sector-4mD4Ykg7.js";import"./Symbols-3zNmirWo.js";import"./symbol-BGt6k0O8.js";import"./step-CSrZegzj.js";import"./Curve-DLwP9u8w.js";import"./RegisterGraphicalItemId-BLl1AU5h.js";import"./ErrorBarContext-Ba1R8w21.js";import"./GraphicalItemClipPath-B9R00R0l.js";import"./SetGraphicalItem-CczBCiBC.js";import"./getZIndexFromUnknown-C5xpaFTw.js";import"./graphicalItemSelectors-3qVwPsXu.js";import"./ActivePoints-BcsZ0pU5.js";import"./Dot-DNIsMwyQ.js";import"./getRadiusAndStrokeWidthFromDot-Dsgl31AO.js";import"./useElementOffset-DKr_-hTa.js";import"./uniqBy--BozFN4q.js";import"./iteratee-BlkE-BhU.js";import"./Cross-Bx37bdEN.js";import"./index-D_cVMinZ.js";import"./ChartSizeDimensions-CL0i_3ns.js";import"./OffsetShower-CTFYQb52.js";import"./PlotAreaShower-CS9RsVg8.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
