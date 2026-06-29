import{R as t}from"./iframe-CtCQjsM6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DBaHNEP2.js";import{R as l}from"./zIndexSlice-Dyeq-kTm.js";import{C as x}from"./ComposedChart-DHyW9dZg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-K77vF5If.js";import{L as a}from"./Line-NxW5NSXA.js";import{X as c}from"./XAxis-CP213xw9.js";import{T as g}from"./Tooltip-D1_9Zq1u.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CXMuCFS1.js";import"./CartesianAxis-BR8NQrXr.js";import"./Layer-ikVkc87V.js";import"./resolveDefaultProps-y277M-17.js";import"./Text-CVHSYFxZ.js";import"./DOMUtils-DONZhdVB.js";import"./isWellBehavedNumber-DC3h_5lt.js";import"./Label-DEKQSx_8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bXnB7Pr5.js";import"./index-bMzOaRnN.js";import"./index-Bc49u6WD.js";import"./types-DG_xuUOr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B82fdgBY.js";import"./immer-UADZssR3.js";import"./RechartsWrapper-BsRB8VD4.js";import"./index-DMhTMs3j.js";import"./index-Dt6Mya9l.js";import"./axisSelectors-CBHiYL8s.js";import"./d3-scale-DSObG5R7.js";import"./CartesianChart-DWPXJ9eR.js";import"./chartDataContext-BDCa3fVu.js";import"./CategoricalChart-D-CCIGyN.js";import"./tooltipContext-BoH31FI7.js";import"./AnimatedItems-D-nX9UUI.js";import"./useAnimationId-BByU_EIU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYymeKVw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sx5PAodz.js";import"./RegisterGraphicalItemId-CJP7sNi_.js";import"./ErrorBarContext-DA8eqje8.js";import"./GraphicalItemClipPath-BwbwGImN.js";import"./SetGraphicalItem-XJT0KcUL.js";import"./getZIndexFromUnknown-DA3lv6Ga.js";import"./graphicalItemSelectors-Dx8FkvhD.js";import"./Curve-DqaQE-u7.js";import"./step-DspZ-7xm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-8IGesqBK.js";import"./Dot-BSPimWYR.js";import"./getRadiusAndStrokeWidthFromDot-CdTXnSwA.js";import"./useElementOffset-F2Bq50mD.js";import"./uniqBy-BH1tP1ZF.js";import"./iteratee-DKULfjVT.js";import"./Cross-B5xJaEKb.js";import"./Sector-DRiDaauJ.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
