import{e as t}from"./iframe-BhgNWdm2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DimmepAM.js";import{R as l}from"./arrayEqualityCheck-BPYeEWp9.js";import{C as x}from"./ComposedChart-ByWdqqEr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-hdvsx9ij.js";import{L as a}from"./Line-1_aSh1us.js";import{X as A}from"./XAxis-B0Y5mjm9.js";import{T as g}from"./Tooltip-C68vnTfz.js";import{R as f}from"./RechartsHookInspector-BwLyLCbr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BduEHTva.js";import"./Layer-BkasUZxz.js";import"./resolveDefaultProps-D43Wpvex.js";import"./Text-2yWCgbKe.js";import"./DOMUtils-Cxmm0Icy.js";import"./Label-BRyOnYfu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Do4fofgT.js";import"./zIndexSlice-Lcr8coq9.js";import"./immer-B8rRfUkI.js";import"./types-Bn2_ZBIB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D9cY7pVC.js";import"./hooks-jOaINvHQ.js";import"./axisSelectors-CZf8mr5P.js";import"./d3-scale-D8GbsE5m.js";import"./RechartsWrapper-D_AVgKr-.js";import"./index-CqC_U7ug.js";import"./CartesianChart-D0cl_oJT.js";import"./chartDataContext-Cguc2YyF.js";import"./CategoricalChart-DQs5NoOs.js";import"./tooltipContext-DrWmxDnN.js";import"./ReactUtils-BDMzm1YE.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C2ogWYAN.js";import"./isPlainObject-B6h9wQ2y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-jY469onx.js";import"./useAnimationId-Bo7L-9bR.js";import"./Trapezoid-DpB5l6Kj.js";import"./Sector-DfYOmxzx.js";import"./Symbols-CuqnOXh1.js";import"./symbol-CDKmn_1O.js";import"./step-CB53NYyG.js";import"./Curve-CxXqlxgs.js";import"./RegisterGraphicalItemId-Db3TPLUh.js";import"./ErrorBarContext-CdlIyLD3.js";import"./GraphicalItemClipPath-BH2oacZ_.js";import"./SetGraphicalItem-C_WqfzHK.js";import"./getZIndexFromUnknown-L_-Coo5G.js";import"./graphicalItemSelectors-B2BxqOJH.js";import"./ActivePoints-tcDNwRIU.js";import"./Dot-CYDciASH.js";import"./getRadiusAndStrokeWidthFromDot-DorA-DYi.js";import"./useElementOffset-BHpwKCLe.js";import"./uniqBy-CGarLzH6.js";import"./iteratee-dQXRLNjz.js";import"./Cross-DsZaFKHb.js";import"./index-owEklC_q.js";import"./ChartSizeDimensions-J0Tmkxsz.js";import"./OffsetShower-C_q72LRF.js";import"./PlotAreaShower-CDcLHpUT.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
