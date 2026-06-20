import{R as t}from"./iframe-DktoyP0I.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BLG3LfpU.js";import{R as l}from"./zIndexSlice-BqxjHKrS.js";import{C as x}from"./ComposedChart-BDFJsZWU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-L0JQbVPe.js";import{L as a}from"./Line-DuA8ymif.js";import{X as c}from"./XAxis-BxV59Hhm.js";import{T as g}from"./Tooltip-fiiEhz9A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DZQ4X22M.js";import"./CartesianAxis-DrMR96cw.js";import"./Layer-DxVIdqTA.js";import"./resolveDefaultProps-Bs_-cxps.js";import"./Text-DAKApr79.js";import"./DOMUtils-JSCS2paE.js";import"./isWellBehavedNumber-D7-lB0Sk.js";import"./Label-BR89T_1_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CSsqT-BM.js";import"./index-Be24bbvM.js";import"./index-BFyGHYnF.js";import"./types-CkRwSSe-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cd_bo-5U.js";import"./immer-yOjEFYCA.js";import"./RechartsWrapper-C48Z7D7H.js";import"./index-CjF-Q638.js";import"./index-B91yukul.js";import"./axisSelectors-C830vntb.js";import"./d3-scale-BMKK7LPO.js";import"./CartesianChart-cbrKpDvd.js";import"./chartDataContext-BtRoA9Zg.js";import"./CategoricalChart-DGVvOUvV.js";import"./tooltipContext-JGAd4NEt.js";import"./AnimatedItems-cIeOyNA6.js";import"./useAnimationId-Dyo3RN72.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CpoNtx3K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BN2Pn2NB.js";import"./RegisterGraphicalItemId-B1XaVUU9.js";import"./ErrorBarContext-CKA9kOcR.js";import"./GraphicalItemClipPath-DYdMpFC-.js";import"./SetGraphicalItem-BCAQvLzI.js";import"./getZIndexFromUnknown-CjXV4BTV.js";import"./graphicalItemSelectors-F-CLsjSh.js";import"./Curve-BuI6DO-B.js";import"./step-8xNYZUMK.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DwkLjVpS.js";import"./Dot-C1QvqJ8t.js";import"./getRadiusAndStrokeWidthFromDot-ByATIymF.js";import"./useElementOffset-DtCbKcDO.js";import"./uniqBy-CohtIUwX.js";import"./iteratee-CM3ogl-V.js";import"./Cross-AUfS-kpA.js";import"./Sector-Q-EB1QAE.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
