import{e as t}from"./iframe-_bxOXoO9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-A1NUb23w.js";import{R as l}from"./arrayEqualityCheck-B7kPjOe4.js";import{C as x}from"./ComposedChart-CwEnGBQS.js";import{B as o}from"./Bar-CPtkLnqb.js";import{L as a}from"./Line-CEP2Y-ve.js";import{X as c}from"./XAxis-B25iHqjD.js";import{T as A}from"./Tooltip-BzA3BQUp.js";import{R as g}from"./RechartsHookInspector-CQ4RIQ5B.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B0aXIuqq.js";import"./Layer-B4OQX5mX.js";import"./resolveDefaultProps-D0m7DKS7.js";import"./Text-BcYFtKsN.js";import"./DOMUtils-MxvGotSE.js";import"./Label-puZUAwbJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8XFMXb9.js";import"./zIndexSlice-YmRlXVtY.js";import"./immer-4xgaWIU1.js";import"./types-CaD-AAbb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BhRx_d4S.js";import"./hooks-Cyo7uYKI.js";import"./axisSelectors-BABYG139.js";import"./d3-scale-CMcXs8cL.js";import"./RechartsWrapper-CLtRnOh5.js";import"./index-BFgxmFq6.js";import"./CartesianChart-BeL_fJ-U.js";import"./chartDataContext-CdQCRTNV.js";import"./CategoricalChart-5uJ4ezdK.js";import"./tooltipContext-BS9cuw2S.js";import"./ReactUtils-BFPf_n2z.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DYBOuNOh.js";import"./isPlainObject-NBybHA4D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaX2mvZh.js";import"./useAnimationId-CniUVvXd.js";import"./Trapezoid-D0RHyHyZ.js";import"./Sector-Dr45uA-k.js";import"./Symbols-DC5bGOMu.js";import"./symbol-B3FMMLJa.js";import"./step-eq8OAlUh.js";import"./Curve-lVDO4rto.js";import"./RegisterGraphicalItemId-CTB49Iya.js";import"./ErrorBarContext-3ohsNMPc.js";import"./GraphicalItemClipPath-5qnulUvK.js";import"./SetGraphicalItem-BJ4aCabI.js";import"./getZIndexFromUnknown-D_u6Lkkm.js";import"./graphicalItemSelectors-61F1sQ2l.js";import"./ActivePoints-C_CIVq-A.js";import"./Dot-CDhDmUCL.js";import"./getRadiusAndStrokeWidthFromDot-ZajgNGGY.js";import"./useElementOffset-BbjKpyX7.js";import"./uniqBy-LNZ8xow_.js";import"./iteratee-CNg37eQk.js";import"./Cross-CpjIss2W.js";import"./index-D6dEx3op.js";import"./ChartSizeDimensions-DiDEOzCF.js";import"./OffsetShower-DtnIakTn.js";import"./PlotAreaShower-BaYMr28N.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
