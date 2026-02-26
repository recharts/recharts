import{e as t}from"./iframe-6geHM4bd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-CyQoyaj5.js";import{R as l}from"./arrayEqualityCheck-Bhk4eC6b.js";import{C as x}from"./ComposedChart-WUSkt1eH.js";import{B as o}from"./Bar-If7qN1N2.js";import{L as a}from"./Line-jU53A7NC.js";import{X as c}from"./XAxis-enChBe_S.js";import{T as A}from"./Tooltip-BDkatYxu.js";import{R as g}from"./RechartsHookInspector-DIMVuZhQ.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BqFoQr74.js";import"./Layer-AOnBAVLr.js";import"./resolveDefaultProps-CBsCUn_G.js";import"./Text--8GWbfGy.js";import"./DOMUtils-Bh7eQOMe.js";import"./Label-eYApNfXX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D_4fvMt1.js";import"./zIndexSlice-DbqCu4eM.js";import"./immer-BHDsl4Gi.js";import"./types-BNIhqt2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Q5iEeOyf.js";import"./hooks-DI5QNaPY.js";import"./axisSelectors-CkcbrWkF.js";import"./d3-scale-B4Y55H0h.js";import"./RechartsWrapper-CT-ler3b.js";import"./index-BthKVvnl.js";import"./CartesianChart-DcdXCHSt.js";import"./chartDataContext-C-mzylkg.js";import"./CategoricalChart-T8dvDJlI.js";import"./tooltipContext-Bp0p3vM5.js";import"./ReactUtils-DLbKFm0I.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bd1evmhL.js";import"./isPlainObject-BrUI-U16.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Upynic_t.js";import"./useAnimationId-RNAT_shg.js";import"./Trapezoid-COJp5Zhq.js";import"./Sector-xROucIrP.js";import"./Symbols-D0fHlVEK.js";import"./symbol-D3KeBWn_.js";import"./step-DQP9UvLT.js";import"./Curve-CQuCDB0y.js";import"./RegisterGraphicalItemId-CnRMZ_3g.js";import"./ErrorBarContext-D0w-EAob.js";import"./GraphicalItemClipPath-CLYl1R8a.js";import"./SetGraphicalItem-B9Yc_fe3.js";import"./getZIndexFromUnknown-8NP3zv7S.js";import"./graphicalItemSelectors-Dl8_WQck.js";import"./ActivePoints-BxYhIeKT.js";import"./Dot-CxbLLsp7.js";import"./getRadiusAndStrokeWidthFromDot-nLQDjczC.js";import"./useElementOffset-Yf81zrLa.js";import"./uniqBy-D0BLSQKW.js";import"./iteratee-Dsk_uIQJ.js";import"./Cross-DatCJvBD.js";import"./index-W9fTJ1Ap.js";import"./ChartSizeDimensions-ZcxWch0o.js";import"./OffsetShower-D1XTDPFK.js";import"./PlotAreaShower-BWZPams-.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
