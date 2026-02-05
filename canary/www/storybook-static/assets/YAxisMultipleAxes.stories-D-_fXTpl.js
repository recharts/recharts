import{e as t}from"./iframe-BucFZ_rI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BSq1Zqr5.js";import{Y as r}from"./YAxis-H-QqP90D.js";import{R as l}from"./arrayEqualityCheck-Cub9yyg8.js";import{C as x}from"./ComposedChart-Chwzw_bG.js";import{B as o}from"./Bar-B2Z1OHd7.js";import{L as a}from"./Line-Cd2y3VXM.js";import{X as c}from"./XAxis-ClQb6fgI.js";import{T as A}from"./Tooltip-D-ogW5dy.js";import{R as g}from"./RechartsHookInspector-DS-kex3x.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B03Au56-.js";import"./CartesianAxis-CXwjW_bT.js";import"./Layer-CF_MVGlz.js";import"./Text-svvcwPPD.js";import"./DOMUtils-CBBy-RCP.js";import"./Label-9_EmwvzQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-L4xm7ML-.js";import"./zIndexSlice-DdWCw1KG.js";import"./types-ClOjhPxm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CMyWVrIA.js";import"./axisSelectors-BCa6g1kh.js";import"./RechartsWrapper-i9ArJ6TM.js";import"./CartesianChart-DZyhln5E.js";import"./chartDataContext-Ce-1EmfI.js";import"./CategoricalChart-CgTXpeDi.js";import"./tooltipContext-CwJMoPuu.js";import"./ReactUtils-Bzngk0QG.js";import"./ActiveShapeUtils-AjngprED.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kS3taT6f.js";import"./useAnimationId-aMKT9xva.js";import"./Trapezoid-Dws_Jj0J.js";import"./Sector-BsDsJ4xC.js";import"./Symbols-oEWjslm_.js";import"./Curve-DctSWulj.js";import"./RegisterGraphicalItemId-BEasT3d7.js";import"./ErrorBarContext-B9myFNJx.js";import"./GraphicalItemClipPath-DkF2Uro5.js";import"./SetGraphicalItem-CNbOq2T5.js";import"./getZIndexFromUnknown-DF_sYjLg.js";import"./graphicalItemSelectors-B3QPcjLg.js";import"./ActivePoints-Cj-4yTg7.js";import"./Dot-DIY2dqYP.js";import"./getRadiusAndStrokeWidthFromDot-Bz3A-CCh.js";import"./useElementOffset-CogdzziS.js";import"./iteratee-DC9p_Pgd.js";import"./Cross-BN2mae7P.js";import"./index-B0oRtae4.js";import"./ChartSizeDimensions-wcbhDTBa.js";import"./OffsetShower-DrBH3Pp2.js";import"./PlotAreaShower-CmZTeEbv.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
