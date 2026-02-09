import{e as t}from"./iframe-_ezCe_To.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis-CEv_a0Mr.js";import{R as l}from"./arrayEqualityCheck-OWAMtNJc.js";import{C as x}from"./ComposedChart-BZQ3F3Nq.js";import{B as o}from"./Bar-Ws9Fj2fv.js";import{L as a}from"./Line-tdadl7hT.js";import{X as c}from"./XAxis-CcLZPlVE.js";import{T as A}from"./Tooltip-6tB19Q6f.js";import{R as g}from"./RechartsHookInspector-D5tzqIDa.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R_saYEpi.js";import"./CartesianAxis-DGvPXtLW.js";import"./Layer-BtA8wuUB.js";import"./Text-CYvn3qP_.js";import"./DOMUtils-CBHTypWU.js";import"./Label-CHFqoGJt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CWThG05g.js";import"./zIndexSlice-Dca2j4f-.js";import"./types-DgqTh4_l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DGCPXX4G.js";import"./axisSelectors-LsrbDDJC.js";import"./RechartsWrapper-B3l68k8X.js";import"./CartesianChart-C47j_-ZF.js";import"./chartDataContext-Bh5VlY_Q.js";import"./CategoricalChart-BLLc755m.js";import"./tooltipContext-C3W9U2Bx.js";import"./ReactUtils-B0BDd-2i.js";import"./ActiveShapeUtils-C67ovaxo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-citx9Y_h.js";import"./useAnimationId-BzKwp2Yk.js";import"./Trapezoid-CX1vw1n4.js";import"./Sector-Cl8ZFmwF.js";import"./Symbols-DtsjZSQh.js";import"./Curve-C2x4bgof.js";import"./RegisterGraphicalItemId-C1YzkRSv.js";import"./ErrorBarContext-DrqmUEJ9.js";import"./GraphicalItemClipPath-BQEIoeEz.js";import"./SetGraphicalItem-DNE92K4u.js";import"./getZIndexFromUnknown-BHoiilg2.js";import"./graphicalItemSelectors-DUHvhoPV.js";import"./ActivePoints-CJI24LGC.js";import"./Dot-C4tiY8Du.js";import"./getRadiusAndStrokeWidthFromDot-D-FWk1PK.js";import"./useElementOffset-4FfSo6Pq.js";import"./iteratee-TzTVZzOt.js";import"./Cross-F4v7qyNt.js";import"./index-DsSUOPyu.js";import"./ChartSizeDimensions-BekARe9N.js";import"./OffsetShower-DpjGgrQ9.js";import"./PlotAreaShower-OcEMvBwg.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
