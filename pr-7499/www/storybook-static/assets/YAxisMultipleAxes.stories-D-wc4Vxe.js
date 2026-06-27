import{R as t}from"./iframe-D4-JHLuy.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CC97e3o5.js";import{R as l}from"./zIndexSlice-Bl2qFY1A.js";import{C as x}from"./ComposedChart-mEpO2gCy.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B2UXGOb8.js";import{L as a}from"./Line-BkdrkySx.js";import{X as c}from"./XAxis-N0htLXAu.js";import{T as g}from"./Tooltip-meMb5WjK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bi1X6SaN.js";import"./CartesianAxis-Da1hp6ds.js";import"./Layer-DnbVmNuk.js";import"./resolveDefaultProps-EHkzfb1T.js";import"./Text-hRlne3oO.js";import"./DOMUtils-BF23epo9.js";import"./isWellBehavedNumber-c1UrbL-U.js";import"./Label-Dbayb2l5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIs2Zanq.js";import"./index-CU6oIHEI.js";import"./index-CTDSjMzl.js";import"./types-B4cCoOJo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CQdRGRjO.js";import"./immer-M-cM6uYj.js";import"./RechartsWrapper-DcHNLFvh.js";import"./index-CeIhzw3-.js";import"./index-BhPwJBge.js";import"./axisSelectors-BZHqEull.js";import"./d3-scale-DE_Hgqpo.js";import"./CartesianChart-DqNanfGA.js";import"./chartDataContext-CvNOo9hu.js";import"./CategoricalChart-D1W7mN8j.js";import"./tooltipContext-BhFrLeJy.js";import"./AnimatedItems-BaefG7CY.js";import"./useAnimationId-v_oz9FgZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BxeEDcjB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DA9DBhpV.js";import"./RegisterGraphicalItemId-D8VEn74g.js";import"./ErrorBarContext-eSnspfxP.js";import"./GraphicalItemClipPath-DMJ0OWmb.js";import"./SetGraphicalItem-CpRH4JNE.js";import"./getZIndexFromUnknown-D-KMxpfM.js";import"./graphicalItemSelectors-_Htsgb84.js";import"./Curve-CDHj8CQ7.js";import"./step-DP0d975A.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CUhH8-xa.js";import"./Dot-ColQ7WFS.js";import"./getRadiusAndStrokeWidthFromDot-5SFlDmNV.js";import"./useElementOffset-C5ufnYD8.js";import"./uniqBy-P4FasXrF.js";import"./iteratee-DvCHZIMY.js";import"./Cross-D94un-X_.js";import"./Sector-C6wPNvhw.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
