import{R as t}from"./iframe-DyLoEKVT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-nsTECOPY.js";import{R as l}from"./zIndexSlice-BMJvLT6-.js";import{C as x}from"./ComposedChart-CmFAmP0C.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-YboTzAKh.js";import{L as a}from"./Line-DRaTauJz.js";import{X as c}from"./XAxis-9OVyrDRG.js";import{T as g}from"./Tooltip-BTj4vQK0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DowO2FG-.js";import"./CartesianAxis-DVRkpibw.js";import"./Layer-1PJWGF6B.js";import"./resolveDefaultProps-v4--KFNE.js";import"./Text-DbHSmtym.js";import"./DOMUtils-DO9od7PA.js";import"./isWellBehavedNumber-DNtaqKPn.js";import"./Label-Bc99EiAM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DHFxHLUr.js";import"./index-ChIcT5we.js";import"./index-DlqbmUdM.js";import"./types-ChV1_7kb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqkZndXs.js";import"./immer-BagcJtG2.js";import"./RechartsWrapper--UzxIxEu.js";import"./index-CufWBdFA.js";import"./index-PISW76kq.js";import"./axisSelectors-CnSKWHKt.js";import"./d3-scale-CTXcb0ZT.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BuXwJSrD.js";import"./chartDataContext-DJBEQzNo.js";import"./CategoricalChart-nR7o8SXq.js";import"./tooltipContext-C0k4tkhk.js";import"./AnimatedItems-DZ2CDn43.js";import"./useAnimationId-C3XlQNNz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C19lR5AX.js";import"./ActiveShapeUtils-DR5RhSUS.js";import"./RegisterGraphicalItemId-CalLmt4D.js";import"./ErrorBarContext-CuSWRyRz.js";import"./GraphicalItemClipPath-B_O83OKV.js";import"./SetGraphicalItem-Ve1ljg4L.js";import"./getZIndexFromUnknown-C7YexW4b.js";import"./graphicalItemSelectors-3eL6hAsl.js";import"./Curve-aK0jXQoR.js";import"./step-BI2jLazT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cgvb9XOf.js";import"./Dot-Cj91nRDm.js";import"./getRadiusAndStrokeWidthFromDot-BLbyixQ6.js";import"./useElementOffset-DniPY9C-.js";import"./uniqBy-YTTRAMug.js";import"./iteratee-KqbZdyCL.js";import"./Cross-mSJJOKzg.js";import"./Sector-BMTKBdCE.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
