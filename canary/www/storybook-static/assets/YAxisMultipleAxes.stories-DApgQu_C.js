import{e as t}from"./iframe-7k9yEKZX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-fzIEKsic.js";import{R as l}from"./arrayEqualityCheck-DyKOzX9B.js";import{C as x}from"./ComposedChart-BPJ8rB-g.js";import{B as o}from"./Bar-sAwZJklH.js";import{L as a}from"./Line-8V_XcD0K.js";import{X as c}from"./XAxis-BTCs_Vgw.js";import{T as A}from"./Tooltip-CG3KjNXL.js";import{R as g}from"./RechartsHookInspector-DG9apDpf.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CWYl_TTU.js";import"./Layer--w1IvBzA.js";import"./resolveDefaultProps-CcSp36mS.js";import"./Text-BUDAKONF.js";import"./DOMUtils-DJqsII1h.js";import"./Label-CVjnPCaB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BBlmEaho.js";import"./zIndexSlice-CzkFlcL3.js";import"./immer-CHH-Iajc.js";import"./types-DqFJB-g8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B6_Lm1vJ.js";import"./hooks-D25WTasM.js";import"./axisSelectors-aGv317tx.js";import"./d3-scale-BRwFQSv2.js";import"./RechartsWrapper-BvLvkhZj.js";import"./index-DvINa2Wr.js";import"./CartesianChart-CbJvKkCN.js";import"./chartDataContext-B5LGZgkJ.js";import"./CategoricalChart-2PgGLAlf.js";import"./tooltipContext-tIh0Fo_G.js";import"./ReactUtils-lnChZv_I.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BIc0h3uD.js";import"./isPlainObject-C5PcijRi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSQfZW4V.js";import"./useAnimationId-B6Q9Zk2l.js";import"./Trapezoid-DiILFpL9.js";import"./Sector-DIls0L6H.js";import"./Symbols-BCtTTPL2.js";import"./symbol-DLFZyuT9.js";import"./step-D_5WqJsr.js";import"./Curve-CJBWJgGH.js";import"./RegisterGraphicalItemId-B6g2rW0Q.js";import"./ErrorBarContext-YgH0UMwB.js";import"./GraphicalItemClipPath-wqgrdPJj.js";import"./SetGraphicalItem-DursPdMk.js";import"./getZIndexFromUnknown-Dcy4S22Y.js";import"./graphicalItemSelectors-gKgcr4o0.js";import"./ActivePoints-FBue9Ogp.js";import"./Dot-D1SVhtLk.js";import"./getRadiusAndStrokeWidthFromDot-eDGGwMEf.js";import"./useElementOffset-BoTQFi9G.js";import"./uniqBy-HmCa2I5b.js";import"./iteratee-CJSlBY9s.js";import"./Cross-DUtEVFHc.js";import"./index-BKACCO4D.js";import"./ChartSizeDimensions-D1SSOw56.js";import"./OffsetShower-D7759kd2.js";import"./PlotAreaShower-qx9-nPqs.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
