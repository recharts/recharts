import{e as t}from"./iframe-DPPC5LCd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-BkVN0NTj.js";import{R as l}from"./arrayEqualityCheck-Dvk8KT0D.js";import{C as x}from"./ComposedChart-Ds3ekokY.js";import{B as o}from"./Bar-GUQCpGOt.js";import{L as a}from"./Line-Df8hhM8R.js";import{X as c}from"./XAxis-BG2Y_xwU.js";import{T as A}from"./Tooltip-Vhvc3XfR.js";import{R as g}from"./RechartsHookInspector-Blp8PL-4.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-LOA1Y3L5.js";import"./CartesianAxis-CbeAAhwj.js";import"./Layer-l1Ju_rpU.js";import"./Text-CskNyNSq.js";import"./DOMUtils-BagiRLWz.js";import"./Label-CyOEca1T.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-BYs5zm3k.js";import"./zIndexSlice-Cyke5ZAj.js";import"./types-BtZeuRvc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-D7d6b41a.js";import"./axisSelectors-Y4qCzWsU.js";import"./RechartsWrapper-PEDxF674.js";import"./CartesianChart-CLhvhGCa.js";import"./chartDataContext-CBM88NXk.js";import"./CategoricalChart-DSnyIdqz.js";import"./tooltipContext-DRPH6AnF.js";import"./ReactUtils-Dpo3QY29.js";import"./ActiveShapeUtils-CzCtjHUV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdGsT6u6.js";import"./useAnimationId-BL1JszpL.js";import"./Trapezoid-BQbcDxOL.js";import"./Sector-6q_tG2Nj.js";import"./Symbols-BVjVO6PI.js";import"./Curve-Bys-PvMV.js";import"./RegisterGraphicalItemId-CQrbIdXT.js";import"./ErrorBarContext-DOTmmgqX.js";import"./GraphicalItemClipPath-npaeuZne.js";import"./SetGraphicalItem-WBUrf2m8.js";import"./getZIndexFromUnknown-bKQSjpqc.js";import"./graphicalItemSelectors-Civiv12A.js";import"./ActivePoints-bzJzis_r.js";import"./Dot-DGBsmHFR.js";import"./getRadiusAndStrokeWidthFromDot-r3LToZRM.js";import"./useElementOffset-C9FgqAtz.js";import"./iteratee-CxRByJ3f.js";import"./Cross-WWtM8EO7.js";import"./index-vC2xkEJs.js";import"./ChartSizeDimensions-CMyfGdJP.js";import"./OffsetShower-B4IN2vD-.js";import"./PlotAreaShower-P_z3LqUB.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
