import{e as t}from"./iframe-DDDnlj5f.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BsKc4EC-.js";import{R as l}from"./arrayEqualityCheck-CJpSjh_E.js";import{C as x}from"./ComposedChart-Ce7krGfK.js";import{B as o}from"./Bar-ArsJieLu.js";import{L as a}from"./Line-X_BIU_ye.js";import{X as c}from"./XAxis-CWnYqww0.js";import{T as A}from"./Tooltip-D_nWFJy_.js";import{R as g}from"./RechartsHookInspector-BhwNj7SB.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CMW5fm9o.js";import"./Layer-BtE1IS0j.js";import"./resolveDefaultProps-DYeysdtP.js";import"./Text-C-kvncvF.js";import"./DOMUtils-DDovTr1I.js";import"./Label-VNLDkr3Z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DkrOw8iH.js";import"./zIndexSlice-DoI0yJNb.js";import"./immer-aj6qr0b6.js";import"./types-BPe_V6d-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-k6HnSAnM.js";import"./hooks-Dv-UaG4_.js";import"./axisSelectors-CDHzLZeD.js";import"./d3-scale-pmFb8TKN.js";import"./RechartsWrapper-CrpiHev6.js";import"./index-CMSlVVpG.js";import"./CartesianChart-D5sDgHmv.js";import"./chartDataContext-ib7DGGK_.js";import"./CategoricalChart-h2VJliXU.js";import"./tooltipContext-DzaFJLFA.js";import"./ReactUtils-CjPSIKmy.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BfdtDxL7.js";import"./isPlainObject-CJH28dtQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cb4jcIHL.js";import"./useAnimationId-Dkj4_Bqz.js";import"./Trapezoid-DeNT7-hb.js";import"./Sector-BQbNJdDe.js";import"./Symbols-9n4DXsSp.js";import"./symbol-B5WodTQ6.js";import"./step-BKhUoFo2.js";import"./Curve-SLwfiusm.js";import"./RegisterGraphicalItemId-D4tYqbmw.js";import"./ErrorBarContext-E3Vm-e-r.js";import"./GraphicalItemClipPath-CuDHFuAP.js";import"./SetGraphicalItem-CHHuJTp3.js";import"./getZIndexFromUnknown-CpSPHkb-.js";import"./graphicalItemSelectors-BAN2wZdq.js";import"./ActivePoints-IhqFWUPQ.js";import"./Dot-BEStURxK.js";import"./getRadiusAndStrokeWidthFromDot-BWHQ3Uig.js";import"./useElementOffset-03RznBD_.js";import"./uniqBy-CE60lU9f.js";import"./iteratee-BZMdZ1c9.js";import"./Cross-CLlcOZg_.js";import"./index-CTBoJ3Fl.js";import"./ChartSizeDimensions-CGFO1lez.js";import"./OffsetShower-LgcvfXe3.js";import"./PlotAreaShower-DDwsWzkY.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
