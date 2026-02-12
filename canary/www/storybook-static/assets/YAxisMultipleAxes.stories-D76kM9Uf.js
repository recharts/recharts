import{e as t}from"./iframe-DG5XGAD6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis-CCH0cAJm.js";import{R as l}from"./arrayEqualityCheck-j51cHR5x.js";import{C as x}from"./ComposedChart-CB1EKJXL.js";import{B as o}from"./Bar-B2mtbp_1.js";import{L as a}from"./Line-B4ZoNHaw.js";import{X as c}from"./XAxis-oYzB5LXw.js";import{T as A}from"./Tooltip-gEeB_g4L.js";import{R as g}from"./RechartsHookInspector-YgQTDZfw.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DwLx5uNW.js";import"./CartesianAxis-a2JFC2mr.js";import"./Layer-CzlbLnCA.js";import"./Text-BWrPtZHP.js";import"./DOMUtils-Qi6quj9W.js";import"./Label-bn2tJ_cj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKRqVJn0.js";import"./zIndexSlice-DIZTBSXC.js";import"./types-D0CjTngR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CabgqhJI.js";import"./axisSelectors-pumdcMrp.js";import"./RechartsWrapper-BwgBVkto.js";import"./CartesianChart-DBiWbn6Y.js";import"./chartDataContext-CNLpatE7.js";import"./CategoricalChart-DngyMm0O.js";import"./tooltipContext-D-6MSdau.js";import"./ReactUtils-Vfgvf3cC.js";import"./ActiveShapeUtils-Cyi76-oO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-xQMUTm.js";import"./useAnimationId-NyrgIauS.js";import"./Trapezoid-C7Z3OQT2.js";import"./Sector-B5if7fUR.js";import"./Symbols-C5H0HNIV.js";import"./Curve-BnD4_LTQ.js";import"./RegisterGraphicalItemId-BNmuyZFV.js";import"./ErrorBarContext-DyIY829R.js";import"./GraphicalItemClipPath-C48puZ8B.js";import"./SetGraphicalItem-Dt76N-O-.js";import"./getZIndexFromUnknown-BzwNJ41L.js";import"./graphicalItemSelectors-BzUP1jgi.js";import"./ActivePoints-Bx-JcGPq.js";import"./Dot-BL1VekhN.js";import"./getRadiusAndStrokeWidthFromDot-CqQuGbib.js";import"./useElementOffset-BlwimfW_.js";import"./iteratee-nqTSxMhM.js";import"./Cross-D97praiX.js";import"./index-ZiVRns4Q.js";import"./ChartSizeDimensions-C2G7tyo6.js";import"./OffsetShower-BRHEzN4x.js";import"./PlotAreaShower-nvVM3hzT.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
