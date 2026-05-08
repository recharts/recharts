import{e as t}from"./iframe-ZnuiNVaE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Diz2Tspw.js";import{R as l}from"./arrayEqualityCheck-DcpsFffb.js";import{C as x}from"./ComposedChart-CNkq3UMc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-De-DsMvY.js";import{L as a}from"./Line-UlckhZvH.js";import{X as A}from"./XAxis-hfxAoNer.js";import{T as g}from"./Tooltip-CC2AIUKK.js";import{R as f}from"./RechartsHookInspector-C4iarVXO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-90i_fguh.js";import"./Layer-3YLDlAyc.js";import"./resolveDefaultProps-SpwOLF2r.js";import"./Text-CLHYbH4R.js";import"./DOMUtils-DTgaodk1.js";import"./Label-CBQ7F7ZY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BzV-T_Iz.js";import"./zIndexSlice-Drs2c4sD.js";import"./immer-0nSCgAvg.js";import"./types-mDbQPIQK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bn9JwHxd.js";import"./hooks-B5VA8Mmq.js";import"./axisSelectors-B7fsKZ9l.js";import"./d3-scale-CY4nDl51.js";import"./RechartsWrapper-CEYGVzUm.js";import"./index-BpNZQyS5.js";import"./CartesianChart-QqWjed8q.js";import"./chartDataContext-DOw2_YIC.js";import"./CategoricalChart-Bp3TzfC0.js";import"./tooltipContext-CP36M62B.js";import"./ReactUtils-DWDhNlKk.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B0-GYp8s.js";import"./isPlainObject-Bh5udtth.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-8PzQF5cj.js";import"./useAnimationId-DkOya059.js";import"./Trapezoid-BzAzl90f.js";import"./Sector-BJWLe057.js";import"./Symbols-D3ZFSmHu.js";import"./symbol-DOh64DiI.js";import"./step-BAeuU6ZP.js";import"./Curve-D7bzhexe.js";import"./RegisterGraphicalItemId-BcaLYkaD.js";import"./ErrorBarContext-C1ZpfKHJ.js";import"./GraphicalItemClipPath-C75obMCp.js";import"./SetGraphicalItem-CLIyGsmN.js";import"./getZIndexFromUnknown-kshIOUzF.js";import"./graphicalItemSelectors-Chhnxl1h.js";import"./ActivePoints-CsKFQX5w.js";import"./Dot-DOC-EnTU.js";import"./getRadiusAndStrokeWidthFromDot-CVCMuq1B.js";import"./useElementOffset-DfXBdw7O.js";import"./uniqBy-C1Nplgu-.js";import"./iteratee-CLm8sMEH.js";import"./Cross-C4WVnIN-.js";import"./index-BWgKuq9M.js";import"./ChartSizeDimensions-CpD-sUWL.js";import"./OffsetShower-B_CY-ece.js";import"./PlotAreaShower-DfogOd1z.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
