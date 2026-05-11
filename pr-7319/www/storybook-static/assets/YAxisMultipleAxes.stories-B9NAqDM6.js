import{e as t}from"./iframe-bIRDwOrj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cmkuai_3.js";import{R as l}from"./arrayEqualityCheck-TXFMRjRi.js";import{C as x}from"./ComposedChart-B96jNgZT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-cVC2wu5X.js";import{L as a}from"./Line-B60oELve.js";import{X as A}from"./XAxis-R_euWI3w.js";import{T as g}from"./Tooltip-CxHNJRE4.js";import{R as f}from"./RechartsHookInspector-CVcWeYmF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-mK0sN7a0.js";import"./Layer-IjPfnpTW.js";import"./resolveDefaultProps-hkUJr7lQ.js";import"./Text-DzsBbndD.js";import"./DOMUtils-MkU82dM6.js";import"./Label-C1RClCIo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7UlnPMP.js";import"./zIndexSlice-D22DBnXA.js";import"./immer-BfeMUSMO.js";import"./types-dvoy8M64.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DiK-9S0i.js";import"./hooks-BdMZPZGx.js";import"./axisSelectors-CoyWHGIo.js";import"./d3-scale-CFl6A6_I.js";import"./RechartsWrapper-D2ef2x-I.js";import"./index-TSn5rXzG.js";import"./CartesianChart-EqFxaaEr.js";import"./chartDataContext-O3jargTL.js";import"./CategoricalChart-DI9gh84Y.js";import"./tooltipContext-Dh1V_H5h.js";import"./ReactUtils-CzayGhzm.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-wXVyp0gV.js";import"./isPlainObject-DIIEh3HT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CBjo9wrp.js";import"./useAnimationId-Co08wyJa.js";import"./Trapezoid-1FkDqVZ5.js";import"./Sector-D-NFzdmx.js";import"./Symbols-DOx_UbzB.js";import"./symbol-NHM4e63q.js";import"./step-DQ7wUDFq.js";import"./Curve-orFRmx5o.js";import"./RegisterGraphicalItemId-DCkpRkMi.js";import"./ErrorBarContext-rH_nwKrW.js";import"./GraphicalItemClipPath-CBXSjVJX.js";import"./SetGraphicalItem-B0eIE6zm.js";import"./getZIndexFromUnknown-BqhwZ8lf.js";import"./graphicalItemSelectors-DBAA3x5X.js";import"./ActivePoints-CJrfz0Fi.js";import"./Dot-BCbECuJO.js";import"./getRadiusAndStrokeWidthFromDot-C0F5EKdh.js";import"./useElementOffset-BV5HmMjB.js";import"./uniqBy-aS03rcBV.js";import"./iteratee-Dq5hiuyR.js";import"./Cross-CrNHeowF.js";import"./index-B6Pu2s-H.js";import"./ChartSizeDimensions-CmmmbIVS.js";import"./OffsetShower-DVm6XnLi.js";import"./PlotAreaShower-8mw46bvb.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
