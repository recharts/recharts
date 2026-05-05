import{e as t}from"./iframe-BR42SwHx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-vI32OOi5.js";import{R as l}from"./arrayEqualityCheck-BTlu6_X5.js";import{C as x}from"./ComposedChart-dNCERGfx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BQjc5yZp.js";import{L as a}from"./Line-CDs3wcp9.js";import{X as A}from"./XAxis-Tjb-FFWw.js";import{T as g}from"./Tooltip-BTvrqCSy.js";import{R as f}from"./RechartsHookInspector-BoeADalq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bu_sq35Y.js";import"./Layer-DvQoXU13.js";import"./resolveDefaultProps-C3ZG36Xp.js";import"./Text-D4m4zxqs.js";import"./DOMUtils-sfbIoaFE.js";import"./Label-DVExpSeB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8Duyh3JO.js";import"./zIndexSlice-DLL8OYNe.js";import"./immer-CBsUjXpI.js";import"./types-CNxj5JXu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C8E2aIah.js";import"./hooks-D8cR8gUo.js";import"./axisSelectors-CoHyz1fh.js";import"./d3-scale-UZASi0oQ.js";import"./RechartsWrapper-C0DQb4gv.js";import"./index-D16v1uX6.js";import"./CartesianChart-CEhCqBUJ.js";import"./chartDataContext-DeHpxm8Y.js";import"./CategoricalChart-6WrjOunx.js";import"./tooltipContext-BieSqIg2.js";import"./ReactUtils-CgBYlHJF.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bs6a3E44.js";import"./isPlainObject-CgqdHIW2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Di_iOTI6.js";import"./useAnimationId-B6YKrKnq.js";import"./Trapezoid-BEZ2jh2g.js";import"./Sector-CuH6E9-r.js";import"./Symbols-BwMDCpyM.js";import"./symbol-DV-iQcJU.js";import"./step-CO8PYd_W.js";import"./Curve-MgYQVsjt.js";import"./RegisterGraphicalItemId-BuXbHokx.js";import"./ErrorBarContext-BHkWs-ti.js";import"./GraphicalItemClipPath-C0dhtMPj.js";import"./SetGraphicalItem-BZOj4gaY.js";import"./getZIndexFromUnknown-CHKQt8DJ.js";import"./graphicalItemSelectors-BMIBIuIH.js";import"./ActivePoints-DIaFZui8.js";import"./Dot-mjncFdWi.js";import"./getRadiusAndStrokeWidthFromDot-zEBVevUM.js";import"./useElementOffset-cx0ADUit.js";import"./uniqBy-CrOA1Xwi.js";import"./iteratee-DQsTI-if.js";import"./Cross-LzqoNpy2.js";import"./index-2-eZpp4N.js";import"./ChartSizeDimensions-FLfKJQs_.js";import"./OffsetShower-DtintQJW.js";import"./PlotAreaShower-C0gn6wTT.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
