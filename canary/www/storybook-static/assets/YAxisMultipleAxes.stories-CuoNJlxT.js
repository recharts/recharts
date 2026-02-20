import{e as t}from"./iframe-uVZDwAjj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-2LEHyJIA.js";import{R as l}from"./arrayEqualityCheck-BVLp_fP4.js";import{C as x}from"./ComposedChart-C98EWxS3.js";import{B as o}from"./Bar-CALn6hgD.js";import{L as a}from"./Line-C4f_JiI9.js";import{X as c}from"./XAxis-DDi_F3ms.js";import{T as A}from"./Tooltip-C8tgEoay.js";import{R as g}from"./RechartsHookInspector-B8IZQaM2.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D-nGvafv.js";import"./Layer-kSeehgUS.js";import"./resolveDefaultProps-LNwsWh_o.js";import"./Text-BQnpW6GD.js";import"./DOMUtils-Dnhzy72R.js";import"./Label-PDV3rnUf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6kXppYb.js";import"./zIndexSlice-CLyAXc3q.js";import"./immer-ChwPqFH_.js";import"./types-B-Xhkkhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DRUH7kK9.js";import"./hooks-DSaqLgKR.js";import"./axisSelectors-BRBRXOBA.js";import"./d3-scale-0GkopIXO.js";import"./RechartsWrapper-v0y6A39c.js";import"./index-D4nlSVrI.js";import"./CartesianChart-BY3Mtf6I.js";import"./chartDataContext-qRr_iUlh.js";import"./CategoricalChart-BqmfIvkg.js";import"./tooltipContext-DnVcYxBZ.js";import"./ReactUtils-CdVDZBtJ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DdtpNjHl.js";import"./isPlainObject-DmqrNdKc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-GgKpEWLk.js";import"./useAnimationId-CLB64h0U.js";import"./Trapezoid-B50tZYZr.js";import"./Sector-CYoBZdRL.js";import"./Symbols-DYdrpw_H.js";import"./symbol-D_mOxO35.js";import"./step-Prvlnfgp.js";import"./Curve-BRxcZY_5.js";import"./RegisterGraphicalItemId-D_V_V8zu.js";import"./ErrorBarContext-yNZJHACW.js";import"./GraphicalItemClipPath-Cd7d-a5W.js";import"./SetGraphicalItem-CQT3WiuH.js";import"./getZIndexFromUnknown-BfdZlqgo.js";import"./graphicalItemSelectors-BE5LE8v2.js";import"./ActivePoints-DaG8bHlJ.js";import"./Dot-DIb3YsWy.js";import"./getRadiusAndStrokeWidthFromDot-ClrcQxIA.js";import"./useElementOffset-BuGSMy6j.js";import"./uniqBy-DdcvsSSb.js";import"./iteratee-C0JMveWz.js";import"./Cross-Bonq6Yvc.js";import"./index-Bf-UOCze.js";import"./ChartSizeDimensions-BS0bLTe8.js";import"./OffsetShower-8U00XdUa.js";import"./PlotAreaShower-CDaLw8Um.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
