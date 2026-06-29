import{R as t}from"./iframe-Ce1K7ebi.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DnjNgR7C.js";import{R as l}from"./zIndexSlice-8Zo3fsoU.js";import{C as x}from"./ComposedChart-COfY451m.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DveN8pxO.js";import{L as a}from"./Line-Beg62wAW.js";import{X as c}from"./XAxis-3C9aClrU.js";import{T as g}from"./Tooltip-iZJNV3dm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BJIMs5EG.js";import"./CartesianAxis-vXS1PjkI.js";import"./Layer-B1_feEXA.js";import"./resolveDefaultProps-DSV9zLoY.js";import"./Text-BYOeWYK5.js";import"./DOMUtils-DkFEIDQF.js";import"./isWellBehavedNumber-CQ8pg5Hb.js";import"./Label-CmiiW9da.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVK_cW1P.js";import"./index-s0WSFyA7.js";import"./index-AjZPfGGe.js";import"./types-EmN6t4vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GRKlOorj.js";import"./immer-wBCCevMF.js";import"./RechartsWrapper-BrIlX8W1.js";import"./index-BorxIHRi.js";import"./index-gt-wl4xF.js";import"./axisSelectors-CwdMfS2t.js";import"./d3-scale-Dx0XyOwO.js";import"./CartesianChart-BDjFqgQH.js";import"./chartDataContext-CPsHUBNm.js";import"./CategoricalChart-CSIi67W8.js";import"./tooltipContext-CgjaYqE5.js";import"./AnimatedItems-DUKSjkGs.js";import"./useAnimationId-BsE4V4Ok.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8DUmN55.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DLpYpzZO.js";import"./RegisterGraphicalItemId-CAijELDs.js";import"./ErrorBarContext-ZtUvHt5X.js";import"./GraphicalItemClipPath-DDqY4rhz.js";import"./SetGraphicalItem-CTmxPNcP.js";import"./getZIndexFromUnknown-CR0Xal0t.js";import"./graphicalItemSelectors-B1zm0KHL.js";import"./Curve-BMLS1vNR.js";import"./step-fKuN5Fcd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DVEwrhzj.js";import"./Dot-fVsrRUzo.js";import"./getRadiusAndStrokeWidthFromDot-B3GcRvO7.js";import"./useElementOffset-DXn7gAmc.js";import"./uniqBy-DJfS3mll.js";import"./iteratee-CHawhTEq.js";import"./Cross-BmB1UWT9.js";import"./Sector-SjY5azCI.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
