import{R as t}from"./iframe-BY-61mf3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Dnu2jnBx.js";import{R as l}from"./zIndexSlice-D5LeFsJF.js";import{C as x}from"./ComposedChart-Bx2_Wy5f.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CmUPZKpn.js";import{L as a}from"./Line-6gkt-kev.js";import{X as c}from"./XAxis-BqqI2L9m.js";import{T as g}from"./Tooltip-BHkumS-I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CrMrHDfL.js";import"./CartesianAxis-DQMh9jmY.js";import"./Layer-o5jG4U6-.js";import"./resolveDefaultProps-BvLTVmPU.js";import"./Text-A8PySNC6.js";import"./DOMUtils-Dx1NP75k.js";import"./isWellBehavedNumber-CxSUDioC.js";import"./Label-TO2FniFg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BYFtOnRb.js";import"./index-DbrznSTp.js";import"./index-CqG97JZW.js";import"./types-hvByNsoa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-JT8za5Hk.js";import"./immer-B9G3_Kxy.js";import"./RechartsWrapper-TrezbvJj.js";import"./index-CGSMpc0u.js";import"./index-Bdv48GrD.js";import"./axisSelectors-BLK3CBL0.js";import"./d3-scale-BkYTXwQ3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-wc_TuFln.js";import"./chartDataContext-CBgaHz3-.js";import"./CategoricalChart-g-2efyUa.js";import"./tooltipContext-B2OIZiDK.js";import"./AnimatedItems-ByNYS0z8.js";import"./useAnimationId-RV371va_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYGnr9Kk.js";import"./ActiveShapeUtils-CLaqj2t-.js";import"./RegisterGraphicalItemId-BSHaYjsq.js";import"./ErrorBarContext-BTw4S1-S.js";import"./GraphicalItemClipPath-cu7yJN5z.js";import"./SetGraphicalItem-30kWDCTB.js";import"./getZIndexFromUnknown-XegKtx2e.js";import"./graphicalItemSelectors-Ja1UlW4V.js";import"./Curve-BtPdoVvO.js";import"./step-BuJXjF2w.js";import"./path-DyVhHtw_.js";import"./ActivePoints-gSNPH_nK.js";import"./Dot-zxBqnqxW.js";import"./getRadiusAndStrokeWidthFromDot-D4DkYcfN.js";import"./useElementOffset-Bk35APbE.js";import"./uniqBy-quBZy4V-.js";import"./iteratee-DAmws9Pf.js";import"./Cross-HSuSokK8.js";import"./Sector-DhnwLkEU.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
