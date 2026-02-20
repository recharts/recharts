import{e as t}from"./iframe-B4ZOa_Yu.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-ORG4L0tf.js";import{R as l}from"./arrayEqualityCheck-C7qm6m5x.js";import{C as x}from"./ComposedChart-Bx4qcLUx.js";import{B as o}from"./Bar-CiU5LIWw.js";import{L as a}from"./Line-C2tunPhG.js";import{X as c}from"./XAxis-Ds-wBXG3.js";import{T as A}from"./Tooltip-C3U7UEkk.js";import{R as g}from"./RechartsHookInspector-D8rerupA.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CCuPeB1h.js";import"./Layer-D8UY7UMK.js";import"./resolveDefaultProps-DcaNso53.js";import"./Text-RCR9lAA9.js";import"./DOMUtils-WUmSdG9_.js";import"./Label-CDxkI7IB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DJVNNdtG.js";import"./zIndexSlice-L-52L8l2.js";import"./immer-B05rlcy5.js";import"./types-Cvz57JP2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BHPoCGKs.js";import"./hooks-BoWukVEP.js";import"./axisSelectors-CUTvv79j.js";import"./d3-scale-xF4QVF1U.js";import"./RechartsWrapper-B66RMWp1.js";import"./index-DBSwNlxD.js";import"./CartesianChart-Dq-7HfpP.js";import"./chartDataContext-CeyVK9Tw.js";import"./CategoricalChart-CIWpFNpg.js";import"./tooltipContext--0OsqvnA.js";import"./ReactUtils-upui8jKZ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-t1m8X5yO.js";import"./isPlainObject-CdRNPTy1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-qe02Stpb.js";import"./useAnimationId-BoXeTLIY.js";import"./Trapezoid-C5xqhjGS.js";import"./Sector-DG-V-cIW.js";import"./Symbols-aoMnmAhk.js";import"./symbol-ClQQoX6e.js";import"./step-bVfLcMGZ.js";import"./Curve-BSyKD1Ot.js";import"./RegisterGraphicalItemId-DSbtEDT7.js";import"./ErrorBarContext-CqZUOVMv.js";import"./GraphicalItemClipPath-DUfb3-iB.js";import"./SetGraphicalItem-DHjcaBbG.js";import"./getZIndexFromUnknown-CZmyevMd.js";import"./graphicalItemSelectors-Cs1rdFjJ.js";import"./ActivePoints-DrOeuumg.js";import"./Dot-C8akGE8Z.js";import"./getRadiusAndStrokeWidthFromDot-CUYccmbg.js";import"./useElementOffset-C2t73FR2.js";import"./uniqBy-CNaO2f4k.js";import"./iteratee-BRA6zEKM.js";import"./Cross-DttJ8Obf.js";import"./index-C8tftqM8.js";import"./ChartSizeDimensions-CgbdMiCv.js";import"./OffsetShower-z8r0Gugh.js";import"./PlotAreaShower-CPk3ggQs.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
