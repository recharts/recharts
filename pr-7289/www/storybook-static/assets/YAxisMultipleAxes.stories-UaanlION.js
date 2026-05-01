import{e as t}from"./iframe-BLDR2_i0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D1KSMWgt.js";import{R as l}from"./arrayEqualityCheck-CvNQEz9w.js";import{C as x}from"./ComposedChart-D_KoMtLA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DItzaJDN.js";import{L as a}from"./Line-D-dTaVGT.js";import{X as A}from"./XAxis-DtQQBd2y.js";import{T as g}from"./Tooltip-C2VwN8xA.js";import{R as f}from"./RechartsHookInspector-B1GuqCEe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BPi0jvIf.js";import"./Layer-Bg4znOhy.js";import"./resolveDefaultProps-BRIlCLrP.js";import"./Text-Z-_UHMZw.js";import"./DOMUtils-CzTi80AG.js";import"./Label-BeUhNh6s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-7ToExptV.js";import"./zIndexSlice-yBBB4uSb.js";import"./immer-BKFNBdyg.js";import"./types-DW7k3YBY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BSzl6y0x.js";import"./hooks-CtJRBtxo.js";import"./axisSelectors-BB17965m.js";import"./d3-scale-BhFvmkin.js";import"./RechartsWrapper-Ct1BBYFn.js";import"./index-CFbRxLRx.js";import"./CartesianChart-LlNtHt9D.js";import"./chartDataContext-Bphfe7Jq.js";import"./CategoricalChart-DdO_PfYZ.js";import"./tooltipContext-DXiiOFdE.js";import"./ReactUtils-BZwBYxFJ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bx3IdaBV.js";import"./isPlainObject-Bgs7IkK4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CFLqOtC4.js";import"./useAnimationId-CuonZP-E.js";import"./Trapezoid-DytqB0t5.js";import"./Sector-DJtO2zeV.js";import"./Symbols-BPbqFGSD.js";import"./symbol-BlMgqIva.js";import"./step-CJMvDBr8.js";import"./Curve-Dso7sD8l.js";import"./RegisterGraphicalItemId-BAO_-1Fe.js";import"./ErrorBarContext-DJptcZIz.js";import"./GraphicalItemClipPath-iX6Zf2o8.js";import"./SetGraphicalItem-DTwOd3dX.js";import"./getZIndexFromUnknown-DMtCS3Uu.js";import"./graphicalItemSelectors-j9El4Xc9.js";import"./ActivePoints-rdhL3F9r.js";import"./Dot-DzHpuORN.js";import"./getRadiusAndStrokeWidthFromDot-BdzGGcnE.js";import"./useElementOffset-BZPwPb6Z.js";import"./uniqBy-B3VFxQDg.js";import"./iteratee-BJQ0nu2N.js";import"./Cross-D3Vs3zNI.js";import"./index-CTEoDz69.js";import"./ChartSizeDimensions-CoOcLq9u.js";import"./OffsetShower-C2FYUo8c.js";import"./PlotAreaShower-toIN3X0K.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
