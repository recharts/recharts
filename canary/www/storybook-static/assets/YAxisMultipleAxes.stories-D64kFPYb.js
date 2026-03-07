import{e as t}from"./iframe-CxA-LBWH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BcK0se4x.js";import{R as l}from"./arrayEqualityCheck-hJaoC2QB.js";import{C as x}from"./ComposedChart-Y1yK6LHm.js";import{B as o}from"./Bar-ms_T8fJ7.js";import{L as a}from"./Line-B90QZ5am.js";import{X as c}from"./XAxis-re4pUrp8.js";import{T as A}from"./Tooltip-Ct1RWYIG.js";import{R as g}from"./RechartsHookInspector-Ddvgytdy.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D_h95VSX.js";import"./Layer-5LyTOX7F.js";import"./resolveDefaultProps-CMH4rWNF.js";import"./Text-BvZKJmQ_.js";import"./DOMUtils-BSZ8zVsl.js";import"./Label-CVqcP_87.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-N8IExBeW.js";import"./zIndexSlice-BN1d4D77.js";import"./immer-xqAoRSgx.js";import"./types-C0V6O8sH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-hESCiC9f.js";import"./hooks-CIwzfPxR.js";import"./axisSelectors-OHI-Dqd0.js";import"./d3-scale-uVAmWtey.js";import"./RechartsWrapper-DQKKXFhE.js";import"./index-Dk8ktJ0b.js";import"./CartesianChart-DsF2ziWs.js";import"./chartDataContext-BsA2334w.js";import"./CategoricalChart-B_RNqQJb.js";import"./tooltipContext-DnxwZPxO.js";import"./ReactUtils-B-8-Nq1R.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BTPYOWGE.js";import"./isPlainObject-_PMt6I7e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B05RSUx1.js";import"./useAnimationId-aDbwOJad.js";import"./Trapezoid-DGB4adeR.js";import"./Sector-C9Xa9AX9.js";import"./Symbols-N7aoJg5C.js";import"./symbol-BbORdVVc.js";import"./step-o5fwVMRf.js";import"./Curve-C0Mvljc7.js";import"./RegisterGraphicalItemId-D9LaM4VI.js";import"./ErrorBarContext-CztBpvft.js";import"./GraphicalItemClipPath-BCMoGptD.js";import"./SetGraphicalItem-CRDshZRQ.js";import"./getZIndexFromUnknown-V4LPcKSK.js";import"./graphicalItemSelectors-C2a51vEK.js";import"./ActivePoints-CIo7jtJ2.js";import"./Dot-C9MXONQR.js";import"./getRadiusAndStrokeWidthFromDot-CaSx4Wqq.js";import"./useElementOffset-CHo4FhRx.js";import"./uniqBy-CTP89-yu.js";import"./iteratee-3I0YZJkI.js";import"./Cross-CbF3xK_8.js";import"./index-DMMo74k-.js";import"./ChartSizeDimensions-BQWthli9.js";import"./OffsetShower-BxtkGnvp.js";import"./PlotAreaShower-lv5k_DaO.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
