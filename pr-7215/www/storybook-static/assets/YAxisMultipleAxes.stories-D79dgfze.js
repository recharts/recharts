import{e as t}from"./iframe-Qs6O8wpy.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C1EP92fD.js";import{R as l}from"./arrayEqualityCheck-DiPmtVsh.js";import{C as x}from"./ComposedChart-DbT19AeO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D953sRZs.js";import{L as a}from"./Line-BBeciYnn.js";import{X as A}from"./XAxis-B5r0d-Gb.js";import{T as g}from"./Tooltip-Bp0Bo3zm.js";import{R as f}from"./RechartsHookInspector-D6-uk_4z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BvKnbhLV.js";import"./Layer-CICKsHec.js";import"./resolveDefaultProps-DkvZoiFw.js";import"./Text-DQ28Uic0.js";import"./DOMUtils-C3QfuTRj.js";import"./Label-DJKNn60w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dzi2jwDH.js";import"./zIndexSlice-BdRBx_3M.js";import"./immer-BUNCc4EX.js";import"./types-Cs32UOA0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Si7G1rdh.js";import"./hooks-C6T0ux6I.js";import"./axisSelectors-BqhGWF7A.js";import"./d3-scale-C7QcSE0p.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-DXH9h8qa.js";import"./index-BLhY0zjE.js";import"./CartesianChart-CZ-ONe5U.js";import"./chartDataContext-Dx6fqFLh.js";import"./CategoricalChart-D7dhNxwj.js";import"./tooltipContext-BMHzdSd6.js";import"./AnimatedItems-Bmk-Vn6E.js";import"./useAnimationId-Bx8YWNYj.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils--dL8_NPS.js";import"./isPlainObject-CN0NSOTq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bukdiqfq.js";import"./Trapezoid-CT6ZG2gE.js";import"./Sector-ByAF8mSb.js";import"./Symbols-B1g8PGM_.js";import"./symbol-DP01-Acw.js";import"./step-6wxOI7IM.js";import"./Curve-uoVbw7SZ.js";import"./RegisterGraphicalItemId-D_GbpICU.js";import"./ErrorBarContext-DiylhWX0.js";import"./GraphicalItemClipPath-97GOlLPd.js";import"./SetGraphicalItem-CPtdCQ7b.js";import"./getZIndexFromUnknown-CkiqRHgB.js";import"./graphicalItemSelectors-CFCx3oIW.js";import"./ActivePoints-DlYWl3uo.js";import"./Dot-Ck8_T0Z-.js";import"./getRadiusAndStrokeWidthFromDot-DBGot3sv.js";import"./useElementOffset-CF7P1hcV.js";import"./uniqBy-BKY48JQd.js";import"./iteratee-CVgA4_T5.js";import"./Cross-CQFdEXLw.js";import"./index-COAE6_R9.js";import"./ChartSizeDimensions-h_Vewza7.js";import"./OffsetShower-Dv7qO3Dx.js";import"./PlotAreaShower-CTCwIg18.js";const Tt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Wt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
