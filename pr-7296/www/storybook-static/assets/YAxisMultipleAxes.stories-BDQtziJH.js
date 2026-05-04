import{e as t}from"./iframe-BIeRAvIs.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-ChIFeHGD.js";import{R as l}from"./arrayEqualityCheck-Bo5lKgUH.js";import{C as x}from"./ComposedChart-Bm_hB9iQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CD-k0Uaq.js";import{L as a}from"./Line-CNyBQv9K.js";import{X as A}from"./XAxis-Bz_wbRMX.js";import{T as g}from"./Tooltip-Bf47inJY.js";import{R as f}from"./RechartsHookInspector-ZnpsfR9f.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-2__l5TP8.js";import"./Layer-BzoHvM-S.js";import"./resolveDefaultProps-B7afBTwD.js";import"./Text-CrBefNhw.js";import"./DOMUtils-lW54g6QP.js";import"./Label-B1v8zCXy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BTjArk6I.js";import"./zIndexSlice-C0VSrdrd.js";import"./immer-5-lHdrEI.js";import"./types-DQojIKJi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bjl9R1bd.js";import"./hooks-DF9hzSyO.js";import"./axisSelectors-DpIQAzCF.js";import"./d3-scale-B0zeFeqw.js";import"./RechartsWrapper-CM54gdPj.js";import"./index-DwT1n7qR.js";import"./CartesianChart-2ONA7LeG.js";import"./chartDataContext-C2nJuVrb.js";import"./CategoricalChart-BhjQzYI5.js";import"./tooltipContext-D3RlRE3X.js";import"./ReactUtils-hS7xEmGS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Bps_BZs-.js";import"./isPlainObject-l3KiUXnf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYSY3nrg.js";import"./useAnimationId-C9Uv8ueb.js";import"./Trapezoid-C_yuwcEm.js";import"./Sector-EPL29HSF.js";import"./Symbols-BeXKfzK2.js";import"./symbol-CFCWUA3z.js";import"./step-CNOKEUU2.js";import"./Curve-BwmaiqIM.js";import"./RegisterGraphicalItemId-oCC6rABF.js";import"./ErrorBarContext-BHrSsU01.js";import"./GraphicalItemClipPath-C63EteST.js";import"./SetGraphicalItem-DsNhb24c.js";import"./getZIndexFromUnknown-DXQnp18G.js";import"./graphicalItemSelectors-DCfdYwEE.js";import"./ActivePoints-efPNJuTS.js";import"./Dot-pi2zX1oI.js";import"./getRadiusAndStrokeWidthFromDot-D7Vs4ffU.js";import"./useElementOffset-BNrYAXx-.js";import"./uniqBy-DUPncpu5.js";import"./iteratee-YXX4R6kw.js";import"./Cross-CfKJtijX.js";import"./index-CG5u5SYH.js";import"./ChartSizeDimensions-DyfQXYwz.js";import"./OffsetShower-VB1mbOI0.js";import"./PlotAreaShower-Dt-mgpmA.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
