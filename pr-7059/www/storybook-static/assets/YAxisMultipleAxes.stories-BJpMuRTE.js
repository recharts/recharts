import{e as t}from"./iframe-CZHGkDMk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-CdFo-ouM.js";import{R as l}from"./arrayEqualityCheck-t7_Vj7sH.js";import{C as x}from"./ComposedChart-mSvqj3lP.js";import{B as o}from"./Bar-B9_3Rutt.js";import{L as a}from"./Line-ClQhLAMG.js";import{X as c}from"./XAxis-Cs9WyPyM.js";import{T as A}from"./Tooltip-CrDF-3si.js";import{R as g}from"./RechartsHookInspector-C2iN9faU.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DF2xaChD.js";import"./Layer-BtRR3UnB.js";import"./resolveDefaultProps-CKtEFeCC.js";import"./Text-Dz8Smy7e.js";import"./DOMUtils-Dplq7MJH.js";import"./Label-BXzi6VYN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BsPUf8rB.js";import"./zIndexSlice-GashnqAX.js";import"./immer-CfF_q19L.js";import"./types-DWMIcrlC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BHMidfzd.js";import"./hooks-CUvOjLlM.js";import"./axisSelectors-D3XLf68-.js";import"./d3-scale-CJ4CmDjU.js";import"./RechartsWrapper-BGk6MiSH.js";import"./index-D3qhFu-Q.js";import"./CartesianChart-DdydfBsf.js";import"./chartDataContext-jJyFb7d8.js";import"./CategoricalChart-DKqzOjpF.js";import"./tooltipContext-CIWZ3GZr.js";import"./ReactUtils-BbDB6XIE.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-o-rZaL_n.js";import"./isPlainObject-D32szo0O.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-edUSSKkv.js";import"./useAnimationId-Dafl-wjr.js";import"./Trapezoid-BJG4OUz6.js";import"./Sector-DW-S4DGt.js";import"./Symbols-Ctb7kZia.js";import"./symbol-CijKNxf6.js";import"./step-Dqoonar_.js";import"./Curve-Blj5JdwD.js";import"./RegisterGraphicalItemId-ZIh58Q32.js";import"./ErrorBarContext-CBnG3rqw.js";import"./GraphicalItemClipPath-ChUVq13t.js";import"./SetGraphicalItem-CkEorLUE.js";import"./getZIndexFromUnknown-CwE7ju5n.js";import"./graphicalItemSelectors-pH4AO-w8.js";import"./ActivePoints-DNK08ppe.js";import"./Dot-B15ey3u9.js";import"./getRadiusAndStrokeWidthFromDot-BZkgtEFS.js";import"./useElementOffset-CZUcq4jB.js";import"./uniqBy-Ds7yRC1X.js";import"./iteratee-DKYYZ1VB.js";import"./Cross-bNB0w8OK.js";import"./index-CdrqNv6J.js";import"./ChartSizeDimensions-CNgNJ-I_.js";import"./OffsetShower-CN3I_bcm.js";import"./PlotAreaShower-AE8bmklz.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
