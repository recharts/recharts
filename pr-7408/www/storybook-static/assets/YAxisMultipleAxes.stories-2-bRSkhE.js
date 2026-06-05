import{R as t}from"./iframe-__Uni7ot.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CjBkwZMp.js";import{R as l}from"./zIndexSlice-D7vG4UcO.js";import{C as x}from"./ComposedChart-De5M1TqL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-M5B6veiz.js";import{L as a}from"./Line-9aK3ra6i.js";import{X as c}from"./XAxis-_jE_dg8q.js";import{T as g}from"./Tooltip-DESawyo3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-M8ASrgh5.js";import"./CartesianAxis-CtUpgzNz.js";import"./Layer-CMTKTZZ4.js";import"./resolveDefaultProps-id_IzIac.js";import"./Text-C_yGKqXr.js";import"./DOMUtils-neCLUP_5.js";import"./isWellBehavedNumber-DShwpyY_.js";import"./Label-CrlvYGOF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4Jgnnas.js";import"./index-DuAus-7O.js";import"./index-D5MVAu2q.js";import"./types-DL1t91_l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DJf3fvCP.js";import"./immer-DHOgEza7.js";import"./RechartsWrapper-BbAqMlrq.js";import"./index-ClzAupHk.js";import"./index-B8BzxjEy.js";import"./axisSelectors-CWQCxUri.js";import"./d3-scale-DZYmGYua.js";import"./string-B6fdYHAA.js";import"./CartesianChart--sKXWUKy.js";import"./chartDataContext-CKCl4rEW.js";import"./CategoricalChart-BLqwxQ25.js";import"./tooltipContext-BOFeB2Cb.js";import"./AnimatedItems-ZS1OqPe2.js";import"./useAnimationId-BhPEQZA3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CGEFHU8W.js";import"./ActiveShapeUtils-r_dsHEWU.js";import"./RegisterGraphicalItemId-CVmvnLvy.js";import"./ErrorBarContext-DZdbeW5P.js";import"./GraphicalItemClipPath-B5rXG3_D.js";import"./SetGraphicalItem-DXUbiEXj.js";import"./getZIndexFromUnknown-Bw42bWSV.js";import"./graphicalItemSelectors-CGB-Dm-U.js";import"./Curve-DAVrDxo_.js";import"./step-BeYfnRlJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C2WwE9Wu.js";import"./Dot-BYTlXUFT.js";import"./getRadiusAndStrokeWidthFromDot-DeEAWH9e.js";import"./useElementOffset-D9v1k3Me.js";import"./uniqBy-C2yG_xcT.js";import"./iteratee-Cq5ryGVX.js";import"./Cross-Dvc33aD9.js";import"./Sector-NYN8BS7A.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
