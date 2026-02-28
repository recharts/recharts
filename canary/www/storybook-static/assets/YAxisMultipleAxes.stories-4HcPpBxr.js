import{e as t}from"./iframe-DU58YqXX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-DIF8wKFU.js";import{R as l}from"./arrayEqualityCheck-CPm_ZzNM.js";import{C as x}from"./ComposedChart-CTPFUUjo.js";import{B as o}from"./Bar-CPoXQg8g.js";import{L as a}from"./Line-DCkrY6R_.js";import{X as c}from"./XAxis-CqmwPZ8Q.js";import{T as A}from"./Tooltip-X58UL_5a.js";import{R as g}from"./RechartsHookInspector-bU2QYxIO.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C18m4Bo_.js";import"./Layer-D-R-VvL4.js";import"./resolveDefaultProps-BvRsDILo.js";import"./Text-BeOHNxA6.js";import"./DOMUtils--vhf8olX.js";import"./Label-1-xmv-OU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DrZECD3r.js";import"./zIndexSlice-D06B5CMj.js";import"./immer-CCty7oPO.js";import"./types-BRRO6f_Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C5yXBQp1.js";import"./hooks-BmHTCWu2.js";import"./axisSelectors-C_NSCJzf.js";import"./d3-scale-D66UOGri.js";import"./RechartsWrapper-DCRQCspP.js";import"./index-CAIf49bT.js";import"./CartesianChart-2UpvhmGK.js";import"./chartDataContext-C5MRHpth.js";import"./CategoricalChart-CnCv7GAg.js";import"./tooltipContext-DbSMOeuq.js";import"./ReactUtils-qI72OB32.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CmjzNmwX.js";import"./isPlainObject-CFpSvqCv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiaAAf2E.js";import"./useAnimationId-hGktevsz.js";import"./Trapezoid-BQne9xH8.js";import"./Sector-NGcPnez7.js";import"./Symbols-CeuFr1Zm.js";import"./symbol-B759Rj27.js";import"./step-DaNDWZj1.js";import"./Curve-CdKz9IVe.js";import"./RegisterGraphicalItemId-BSQp396K.js";import"./ErrorBarContext-CYZNadIi.js";import"./GraphicalItemClipPath-D9N1r5H3.js";import"./SetGraphicalItem-XqVw1NHm.js";import"./getZIndexFromUnknown-DVDuXtIT.js";import"./graphicalItemSelectors-BQ1ZcZO0.js";import"./ActivePoints-C9rhzLLD.js";import"./Dot-24Sl23lT.js";import"./getRadiusAndStrokeWidthFromDot-XWXBClrt.js";import"./useElementOffset-CRKDW-Si.js";import"./uniqBy-B_be_HkH.js";import"./iteratee-Da9ZVL55.js";import"./Cross-Bz7Zr1I8.js";import"./index-D73aQCF4.js";import"./ChartSizeDimensions-DA9JA8Lt.js";import"./OffsetShower-OVwVH-bI.js";import"./PlotAreaShower-Yynvk9Up.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
