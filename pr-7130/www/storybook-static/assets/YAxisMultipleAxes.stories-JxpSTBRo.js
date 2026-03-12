import{e as t}from"./iframe-RyyUADvi.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-Un8vVQsB.js";import{R as l}from"./arrayEqualityCheck-BK7ZKOIC.js";import{C as x}from"./ComposedChart-D-HiiP42.js";import{B as o}from"./Bar-CYpY6KsP.js";import{L as a}from"./Line-CWDvrl0r.js";import{X as c}from"./XAxis-CoWhvSWs.js";import{T as A}from"./Tooltip-Df-5ziqW.js";import{R as g}from"./RechartsHookInspector-p0Yz6ifZ.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BpXuAb-I.js";import"./Layer-DGeVqCLc.js";import"./resolveDefaultProps-CwxDEkD6.js";import"./Text-BCjtKebt.js";import"./DOMUtils-CUy7YYLN.js";import"./Label-CQil7oNR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CXHEgDXB.js";import"./zIndexSlice-I41T8JEG.js";import"./immer-DiJOv4tT.js";import"./types-Bp-ZZqOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BUipPmkG.js";import"./hooks-ZFjK5fyy.js";import"./axisSelectors-Bf3stQgf.js";import"./d3-scale-ZW2PW4r9.js";import"./RechartsWrapper-oQCIJm_t.js";import"./index-DS9IaigZ.js";import"./CartesianChart-BVog2BC6.js";import"./chartDataContext-D7w4QAUg.js";import"./CategoricalChart-D1KFd6eK.js";import"./tooltipContext-DHhWnKq3.js";import"./ReactUtils-BuUocuWo.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Db-WQFuK.js";import"./isPlainObject-Dd20guMq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BY6gKUrO.js";import"./useAnimationId-6eUUABj9.js";import"./Trapezoid-BnRug_7I.js";import"./Sector-CY4skt_U.js";import"./Symbols-C-qwK5A2.js";import"./symbol-BBBIWRyY.js";import"./step-4PchhSUC.js";import"./Curve-BOxvHyTd.js";import"./RegisterGraphicalItemId-BvOeRSvq.js";import"./ErrorBarContext-DoMKVMyl.js";import"./GraphicalItemClipPath-B8_DVnDn.js";import"./SetGraphicalItem-Cl0KJDHX.js";import"./getZIndexFromUnknown-CNB0fveM.js";import"./graphicalItemSelectors-DwFXfbD1.js";import"./ActivePoints-BiNqWYY2.js";import"./Dot-CH5vcBHO.js";import"./getRadiusAndStrokeWidthFromDot-BZmLJ3C8.js";import"./useElementOffset-DlEUeD5Q.js";import"./uniqBy-BEHYZLGg.js";import"./iteratee-z1tmzYKs.js";import"./Cross-DtIxRXka.js";import"./index-BPy7O-_m.js";import"./ChartSizeDimensions-B2WcmWF_.js";import"./OffsetShower-Cy4pmMeQ.js";import"./PlotAreaShower-CgXv_TiK.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
