import{e as t}from"./iframe-BBcCu4tW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DRaUq3FE.js";import{R as l}from"./arrayEqualityCheck-CIoNRuby.js";import{C as x}from"./ComposedChart-D5dvwxje.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C7nZjoG4.js";import{L as a}from"./Line-C5n5D2in.js";import{X as A}from"./XAxis-BPDxC347.js";import{T as g}from"./Tooltip-Cog06_51.js";import{R as f}from"./RechartsHookInspector-BC_P3cZY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BamwTcDK.js";import"./Layer-BqjItK9e.js";import"./resolveDefaultProps-CnZaYM7o.js";import"./Text-x4pxLanI.js";import"./DOMUtils-BzbpMFLz.js";import"./Label-CVOeCU9m.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7yDhLaY.js";import"./zIndexSlice-CQ5dV6Tf.js";import"./immer-B-ffdvVM.js";import"./types-BYSx98h-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-qHXvxWkJ.js";import"./hooks-BezqoFaW.js";import"./axisSelectors-DiO1RUhK.js";import"./d3-scale-wrbXHqm2.js";import"./RechartsWrapper-B_0gdr0q.js";import"./index-B4OVM0gu.js";import"./CartesianChart-CyTvOQNc.js";import"./chartDataContext-D3FIgu0K.js";import"./CategoricalChart-BMbsuZm1.js";import"./tooltipContext-DgeciEmy.js";import"./ReactUtils-CK6hPv_Y.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CnMsGTMX.js";import"./isPlainObject-ByEPh_9t.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6s0YHElS.js";import"./useAnimationId-Cz7XNO3G.js";import"./Trapezoid-CCXIiWsl.js";import"./Sector-V-b8xmGp.js";import"./Symbols-DeFezQUo.js";import"./symbol-dMCmyDlw.js";import"./step-CTgfjT4Z.js";import"./Curve-kTZvT6-S.js";import"./RegisterGraphicalItemId-zcKV7aTa.js";import"./ErrorBarContext-DHR2hShJ.js";import"./GraphicalItemClipPath-C4HnTmHF.js";import"./SetGraphicalItem-nt8-T9NJ.js";import"./getZIndexFromUnknown-BR_WGFT-.js";import"./graphicalItemSelectors-DbyLxQBB.js";import"./ActivePoints-DtB9X2U8.js";import"./Dot-DIIdBfpA.js";import"./getRadiusAndStrokeWidthFromDot-RM0GOVzs.js";import"./useElementOffset-gHkkm38f.js";import"./uniqBy-9uTsqOQj.js";import"./iteratee-CO_ekqp4.js";import"./Cross-CrIYISw8.js";import"./index-DwDsLBsF.js";import"./ChartSizeDimensions-B3sIk0p_.js";import"./OffsetShower-CyfsTZlA.js";import"./PlotAreaShower-NtxTDk3F.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
