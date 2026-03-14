import{e as t}from"./iframe-Dv2EI0Ju.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-Dl3Sd1eT.js";import{R as l}from"./arrayEqualityCheck-D1mGNef5.js";import{C as x}from"./ComposedChart-DAlN2hwo.js";import{B as o}from"./Bar-pm4t2-Hh.js";import{L as a}from"./Line-DPY8_MLp.js";import{X as c}from"./XAxis-BxPBpU10.js";import{T as A}from"./Tooltip-BaE3aWz0.js";import{R as g}from"./RechartsHookInspector-CyibsFS2.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Ci9kjPzN.js";import"./Layer-DEwUBVRy.js";import"./resolveDefaultProps-BAehELTf.js";import"./Text-C-pvoFVV.js";import"./DOMUtils-CeCikA4p.js";import"./Label-CoVOGhvs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-yLy7ki0K.js";import"./zIndexSlice-bRjNTWyo.js";import"./immer-C8dYrQHT.js";import"./types-BOTa8dCr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C1FuEPzK.js";import"./hooks-CFaXLGcT.js";import"./axisSelectors-DnSj8kaj.js";import"./d3-scale-Bcv8ayB1.js";import"./RechartsWrapper-bNtyFajX.js";import"./index-Bc1bjXU3.js";import"./CartesianChart-BH7dqpan.js";import"./chartDataContext-BhR7gaS3.js";import"./CategoricalChart-rOoRnQL6.js";import"./tooltipContext-WuIpWmu1.js";import"./ReactUtils-CPqsARhu.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BasgF1mW.js";import"./isPlainObject-INKspUfV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYsgtCMq.js";import"./useAnimationId-CFJ1HB8y.js";import"./Trapezoid-D6Z4JPgp.js";import"./Sector-D8FF4WXP.js";import"./Symbols-Ol_rIUwX.js";import"./symbol-CAp9PJmI.js";import"./step-CXEpNkoj.js";import"./Curve-BYfhifTo.js";import"./RegisterGraphicalItemId-Dt1T6Nvh.js";import"./ErrorBarContext-TBQU4_4Y.js";import"./GraphicalItemClipPath-QbozzGmj.js";import"./SetGraphicalItem-CO0LpAHO.js";import"./getZIndexFromUnknown-BT0xWnFT.js";import"./graphicalItemSelectors-C90ZStZx.js";import"./ActivePoints-BQmOz7QA.js";import"./Dot-BMVkC3H5.js";import"./getRadiusAndStrokeWidthFromDot-fpMjLcGn.js";import"./useElementOffset-eG66zy6Y.js";import"./uniqBy-Cea4n4hh.js";import"./iteratee-CUyse7Ut.js";import"./Cross-CFuU4HK9.js";import"./index-BQUBjWw-.js";import"./ChartSizeDimensions-BOSou-B6.js";import"./OffsetShower-Df0dFfne.js";import"./PlotAreaShower-CPcJGB3D.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
