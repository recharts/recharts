import{e as t}from"./iframe-BlrnuDjf.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-BWVYo6DZ.js";import{R as l}from"./arrayEqualityCheck-BTXXQX4n.js";import{C as x}from"./ComposedChart-CXlLrCCb.js";import{B as o}from"./Bar-BFL1jp-D.js";import{L as a}from"./Line-HvOmBeSi.js";import{X as c}from"./XAxis-BYp_HR9V.js";import{T as A}from"./Tooltip-DF9nxb6Z.js";import{R as g}from"./RechartsHookInspector-BAQjFSl6.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-edOWbwOR.js";import"./Layer-XHhRDzId.js";import"./resolveDefaultProps-1DdFNclr.js";import"./Text-Cu_8uwrn.js";import"./DOMUtils-Cq-iC6tL.js";import"./Label-D_q5FUVB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-7Hmap2eH.js";import"./zIndexSlice-CqZHWfc6.js";import"./immer-BI9UFPL2.js";import"./types-DB_0tejV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ULPEEzAa.js";import"./hooks-Yl-LcXas.js";import"./axisSelectors-DHIQ-7_W.js";import"./d3-scale-CFGK5P70.js";import"./RechartsWrapper-Bw-KSP5T.js";import"./index-CKL3N-6v.js";import"./CartesianChart-CnkTC8bW.js";import"./chartDataContext-ihmINbbo.js";import"./CategoricalChart-DiwHthGG.js";import"./tooltipContext-BFnVZoxN.js";import"./ReactUtils-BjQ30mBr.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Dv40rWK2.js";import"./isPlainObject-BwE05GU9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXu9YO7w.js";import"./useAnimationId-DbkCLx7t.js";import"./Trapezoid-DnTBSn7u.js";import"./Sector-Dv5PvvRm.js";import"./Symbols-DUfoVivI.js";import"./symbol-C5z5ai8y.js";import"./step-oX00aiZd.js";import"./Curve-BlGAAnP8.js";import"./RegisterGraphicalItemId-Bh07AqU-.js";import"./ErrorBarContext-BsqB8Oyr.js";import"./GraphicalItemClipPath-EkcAQ3H7.js";import"./SetGraphicalItem-B1RMw4_v.js";import"./getZIndexFromUnknown-DQjkJqnN.js";import"./graphicalItemSelectors-D-FsgECM.js";import"./ActivePoints-DAQMurwf.js";import"./Dot-BorEmCO3.js";import"./getRadiusAndStrokeWidthFromDot-mkjXuMoL.js";import"./useElementOffset-VY0XYpIy.js";import"./uniqBy-CrknV9rA.js";import"./iteratee-DhN2HWwH.js";import"./Cross-wn3aRhM3.js";import"./index-Cy5kt_9j.js";import"./ChartSizeDimensions-Igo4L2HP.js";import"./OffsetShower-BEEi0iU5.js";import"./PlotAreaShower-BeUubBWZ.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
