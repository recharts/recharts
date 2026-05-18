import{e as t}from"./iframe-CNlB-yu6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BWbQlW4z.js";import{g as l}from"./arrayEqualityCheck-lQwJ1fam.js";import{C as x}from"./ComposedChart-CFG01hB_.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-DBYyw0A9.js";import{L as a}from"./Line-CD6wlHNc.js";import{X as A}from"./XAxis-BuwdDhSN.js";import{T as g}from"./Tooltip-3bHO_aFr.js";import{R as f}from"./RechartsHookInspector-D5_K6jhD.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Ci2q_-V4.js";import"./Layer-DZ6C1Fsa.js";import"./resolveDefaultProps-uksPlQVK.js";import"./Text-BkgbSJBB.js";import"./DOMUtils--5Ctvvni.js";import"./Label-Bi7SkSuM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBrFOYBh.js";import"./zIndexSlice-BueUxKyz.js";import"./immer-awn-juYO.js";import"./types-CPecuUPI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BhtQt-EH.js";import"./hooks-CzETKye0.js";import"./axisSelectors-Sb3f1ocW.js";import"./d3-scale-DgLwc5xh.js";import"./RechartsWrapper-BAvxe-5M.js";import"./index-FVVlmF5D.js";import"./CartesianChart-BAbFLAD3.js";import"./chartDataContext-B8Bgp5-9.js";import"./CategoricalChart-CCKvkIcs.js";import"./tooltipContext-B0mhMZlc.js";import"./ReactUtils-CZXZiRZU.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BIq2I243.js";import"./isPlainObject-BpzaTaPh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8_swSm0.js";import"./useAnimationId-PuhsBKnu.js";import"./Trapezoid-C-zzOAzy.js";import"./Sector-LS-_W5nP.js";import"./Symbols-C5zVtj1R.js";import"./symbol-DsMOupFF.js";import"./step-D1tlFFQW.js";import"./Curve-tmuRXssi.js";import"./RegisterGraphicalItemId-BYNQWvmg.js";import"./ErrorBarContext-B0g5HTrn.js";import"./GraphicalItemClipPath-D754deXs.js";import"./SetGraphicalItem-DVSS-M3K.js";import"./getZIndexFromUnknown-CDiM_nPw.js";import"./graphicalItemSelectors-C5S0MQyW.js";import"./ActivePoints-BJcxAugH.js";import"./Dot-Be-ydJG6.js";import"./getRadiusAndStrokeWidthFromDot-YVqudBJv.js";import"./useElementOffset-Dg1zYIZB.js";import"./uniqBy-CQC1nGrz.js";import"./iteratee-D3JKVA7C.js";import"./Cross-C-UEQCit.js";import"./index-DkFAXYsf.js";import"./ChartSizeDimensions-CofMKbAb.js";import"./OffsetShower-C20eLi2f.js";import"./PlotAreaShower-peVTKEtW.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
