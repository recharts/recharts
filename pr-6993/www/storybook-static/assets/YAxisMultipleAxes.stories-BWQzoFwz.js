import{e as t}from"./iframe-B-Dp18cD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis-B-v6qizp.js";import{R as l}from"./arrayEqualityCheck-n6VvjF1v.js";import{C as x}from"./ComposedChart-D9f0fHzi.js";import{B as o}from"./Bar-D-as0yxI.js";import{L as a}from"./Line-jDVeOP6X.js";import{X as c}from"./XAxis-BEv3sJL0.js";import{T as A}from"./Tooltip-DJ6dYc6Z.js";import{R as g}from"./RechartsHookInspector-CHTp98JP.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ClUavgcZ.js";import"./CartesianAxis-Btb51IPQ.js";import"./Layer-sRK8yL2I.js";import"./Text-B2w_0Ecu.js";import"./DOMUtils-3l5WS7n1.js";import"./Label-GlXCPztW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DZaorHCJ.js";import"./zIndexSlice-BzpbxKTs.js";import"./types-D_31He_k.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BBxeeore.js";import"./axisSelectors-OuIDnENT.js";import"./RechartsWrapper-uJ7UoaAC.js";import"./CartesianChart-CJ47btSF.js";import"./chartDataContext-zsQASXZN.js";import"./CategoricalChart-BJqjUyur.js";import"./tooltipContext-HGf7dTk3.js";import"./ReactUtils-CS1JgmNI.js";import"./ActiveShapeUtils-m1wJj2Q4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B651D3DK.js";import"./useAnimationId-BP7QGUYe.js";import"./Trapezoid-BORovwBS.js";import"./Sector-ByD9psuI.js";import"./Symbols-CnYaDh9V.js";import"./Curve-B9DUpoMg.js";import"./RegisterGraphicalItemId-CxTaZDZc.js";import"./ErrorBarContext-BVXjh-mB.js";import"./GraphicalItemClipPath-C0nz93m4.js";import"./SetGraphicalItem-Dgsvv4_3.js";import"./getZIndexFromUnknown-BEmom1nm.js";import"./graphicalItemSelectors-kKLZsU_A.js";import"./ActivePoints-Q3QYZ8_j.js";import"./Dot-C4ZtMf9A.js";import"./getRadiusAndStrokeWidthFromDot-BWykTpyk.js";import"./useElementOffset-DQB7Zc5C.js";import"./iteratee-DDQ8LxqT.js";import"./Cross-BEyoMw44.js";import"./index-GlpghtR4.js";import"./ChartSizeDimensions-DKPKgNfh.js";import"./OffsetShower-vf47GvB5.js";import"./PlotAreaShower-oIrFVBlc.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
