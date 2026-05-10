import{e as t}from"./iframe-Cl35quqC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-WP2I3lgo.js";import{R as l}from"./arrayEqualityCheck-D9UIghxi.js";import{C as x}from"./ComposedChart-uUijpKq4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-0RvA8U6Y.js";import{L as a}from"./Line-B6cjKV0J.js";import{X as A}from"./XAxis-FVKRUr2k.js";import{T as g}from"./Tooltip-Cc87lfxi.js";import{R as f}from"./RechartsHookInspector-BZ6jgrdq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Dg85fGZU.js";import"./Layer-CeD-uJbZ.js";import"./resolveDefaultProps-BhrqjrLa.js";import"./Text-DNnOYqaK.js";import"./DOMUtils-DIh1PeI4.js";import"./Label-DLz8rNT7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-H1bn9xe9.js";import"./zIndexSlice-DkkJQXQO.js";import"./immer-CY0Lk3WW.js";import"./types-D677_BtS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BLU8jnqb.js";import"./hooks-CNddY0Tb.js";import"./axisSelectors-DeCbtXoM.js";import"./d3-scale-BkxfZ9aI.js";import"./RechartsWrapper-jOGgq2Y2.js";import"./index-_ky2ePMv.js";import"./CartesianChart-CGp9HSBf.js";import"./chartDataContext-ZINcULtA.js";import"./CategoricalChart-0NzQu1bM.js";import"./tooltipContext-DfGisOv0.js";import"./ReactUtils-DZzHwFX5.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DPlGMvpt.js";import"./isPlainObject-DrB0XJwF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZCtg9qm.js";import"./useAnimationId-BL2H4qbR.js";import"./Trapezoid-CB0ArsDb.js";import"./Sector-HEQQPb1w.js";import"./Symbols-oEtpWgQJ.js";import"./symbol-BZKabVvR.js";import"./step-BlMx9OF4.js";import"./Curve-hm8tQy1x.js";import"./RegisterGraphicalItemId-BLnqRJKY.js";import"./ErrorBarContext-BQ7AUjVv.js";import"./GraphicalItemClipPath-Dk-2dIcR.js";import"./SetGraphicalItem-CECI28wk.js";import"./getZIndexFromUnknown-B3URhXiW.js";import"./graphicalItemSelectors-DG-5Ar8J.js";import"./ActivePoints-B4P09zpr.js";import"./Dot-BR2Bc69w.js";import"./getRadiusAndStrokeWidthFromDot-BWrVeHgV.js";import"./useElementOffset-OUPok0mW.js";import"./uniqBy-Do32wBRQ.js";import"./iteratee-BgC_x1g5.js";import"./Cross-DJ_J6PRh.js";import"./index-BdngFJZK.js";import"./ChartSizeDimensions-Dc6hCc8f.js";import"./OffsetShower-DCGl5kEz.js";import"./PlotAreaShower-D3XS0cIi.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
