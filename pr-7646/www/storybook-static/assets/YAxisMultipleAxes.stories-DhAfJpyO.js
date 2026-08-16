import{R as t}from"./iframe-CdVkyLHS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BxGuypq0.js";import{R as l}from"./zIndexSlice-GOyP9Zss.js";import{C as x}from"./ComposedChart-CG8DoDIZ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-8u3LEPrW.js";import{L as a}from"./Line-Piz3hUqR.js";import{X as c}from"./XAxis-CRNnSUZ9.js";import{T as g}from"./Tooltip-CA_3aYjj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cwb8kt4E.js";import"./Text-Bg49R2O8.js";import"./resolveDefaultProps-CH_tZ1CV.js";import"./DOMUtils-yV6fdCO6.js";import"./isWellBehavedNumber-CukO4dTL.js";import"./useBackwardsCompatibleTheme-BUV415Lc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CnILDHp4.js";import"./index-QyElv-Xn.js";import"./index-DvCc_EAq.js";import"./RechartsWrapper-DJIttxHk.js";import"./index-OMOk9pzv.js";import"./index-DysuFDaN.js";import"./throttle-CdLGvlu3.js";import"./axisSelectors-BJboZDv2.js";import"./d3-scale-C_ybSH9a.js";import"./renderedTicksSlice-nlBTJT3n.js";import"./CartesianAxis-Cg3yJD5r.js";import"./Layer-DsEuCMxp.js";import"./types-D7MUQAXd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DH_QKR3e.js";import"./chartDataContext-vMtbxlvm.js";import"./CategoricalChart-Bmub6W6K.js";import"./tooltipContext-BhbzqtV1.js";import"./AnimatedItems-B_5qg-lC.js";import"./useAnimationId-CnyNJ0d7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nloq3-mC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C96E8Hlz.js";import"./RegisterGraphicalItemId-D7VKY1D2.js";import"./ErrorBarContext-BWl2zb09.js";import"./GraphicalItemClipPath-kU06yTtA.js";import"./SetGraphicalItem-CKTCd1Uv.js";import"./getZIndexFromUnknown-BHk6aPgl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DkF3XWLk.js";import"./Curve-BU_gswLL.js";import"./step-CTvr7swL.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D2jscU_r.js";import"./Dot-J0nM858J.js";import"./getRadiusAndStrokeWidthFromDot-Clc9jd4p.js";import"./useElementOffset-hZq7XyZb.js";import"./uniqBy-DAdYZ9zP.js";import"./iteratee-Bb8Y4tsd.js";import"./Cross-CSXpNGes.js";import"./Sector-BmwK_MH9.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
