import{e as t}from"./iframe-D_8UNJGJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-UxrLaYW9.js";import{R as l}from"./arrayEqualityCheck-DLi0Ag40.js";import{C as x}from"./ComposedChart-D_1Rjk4a.js";import{B as o}from"./Bar-wx-KcuPZ.js";import{L as a}from"./Line-BhgCy_e3.js";import{X as c}from"./XAxis-nL349YCp.js";import{T as A}from"./Tooltip-DDSjwDzP.js";import{R as g}from"./RechartsHookInspector-DqWSEPyK.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CmGsQYnB.js";import"./Layer-CSFY2JoB.js";import"./resolveDefaultProps-B5V57fEA.js";import"./Text-BpbKY-ox.js";import"./DOMUtils-Dbz4rk_T.js";import"./Label-fZtmoCeO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B2K1T5O_.js";import"./zIndexSlice-B5sMKRff.js";import"./immer-DgVi67O2.js";import"./types-DAVY4nYI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DMlkCP1f.js";import"./hooks-BZrhZ7vg.js";import"./axisSelectors-CS_KlM3N.js";import"./d3-scale-DRFIPlHa.js";import"./RechartsWrapper-CeUnYUBi.js";import"./index-CjxbrGoj.js";import"./CartesianChart-6BHGgpGM.js";import"./chartDataContext-ClhoRpui.js";import"./CategoricalChart-DcPua93T.js";import"./tooltipContext-eEAXwUon.js";import"./ReactUtils-lBfKzFjL.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CXuAv7RR.js";import"./isPlainObject-CmeHN-q2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CviW58v0.js";import"./useAnimationId-BTJ6QCKz.js";import"./Trapezoid-BoP7ymTd.js";import"./Sector-BL-LF7sA.js";import"./Symbols-CHCjzVCk.js";import"./symbol-bY4o9tnw.js";import"./step-CSwA1lmy.js";import"./Curve-ICQj_4TC.js";import"./RegisterGraphicalItemId-DLMmL-q8.js";import"./ErrorBarContext-F8JTwXXl.js";import"./GraphicalItemClipPath-BRXvyRUx.js";import"./SetGraphicalItem-CMT6Fqt6.js";import"./getZIndexFromUnknown-BWHKvXX8.js";import"./graphicalItemSelectors-BOA5vPJ_.js";import"./ActivePoints-DBRR_Zdk.js";import"./Dot-C1CtLKbe.js";import"./getRadiusAndStrokeWidthFromDot-DQGbBU8q.js";import"./useElementOffset-CK6e0j5r.js";import"./uniqBy-CkdEBd3k.js";import"./iteratee-DSwxyR9X.js";import"./Cross-Daw2rW9r.js";import"./index-CFdITy7w.js";import"./ChartSizeDimensions-CZ_yFPOk.js";import"./OffsetShower-CkWYNF-8.js";import"./PlotAreaShower-iC8rErQ_.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
