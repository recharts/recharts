import{c as t}from"./iframe-C5fgHeit.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CoKsJgTz.js";import{g as l}from"./zIndexSlice-Cm8Wfowt.js";import{C as x}from"./ComposedChart-BKA8oJoR.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-BZG9t3vo.js";import{L as a}from"./Line-CaJL65_J.js";import{X as A}from"./XAxis-DgWVtNyr.js";import{T as g}from"./Tooltip-Bw7pP9bN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DWrZfuk9.js";import"./CartesianAxis-DBytmeds.js";import"./Layer-Cc_zBrzh.js";import"./resolveDefaultProps-CYeq70FN.js";import"./Text-tcokI-pA.js";import"./DOMUtils-DIorzim0.js";import"./isWellBehavedNumber-D0_xXiuE.js";import"./Label-DviSNP2P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DJnVmrOS.js";import"./index-DjwzGHbn.js";import"./index-BKpk60GZ.js";import"./types-CutKYO-q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BX_JZwB0.js";import"./immer-kTf3s8ve.js";import"./RechartsWrapper-Bfu9Nl_Q.js";import"./index-CS-SMU20.js";import"./index-GhOblPXW.js";import"./axisSelectors-DhSKO8Kw.js";import"./d3-scale-CZ_aTrcE.js";import"./CartesianChart-aHIkR0ek.js";import"./chartDataContext-CZBf5hkj.js";import"./CategoricalChart-DGE9Xwb5.js";import"./tooltipContext-Bjd2BcFJ.js";import"./ReactUtils-XexX1ZTx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CelBvebx.js";import"./useAnimationId-DkZHsCyz.js";import"./ActiveShapeUtils-BJ_lKbaS.js";import"./RegisterGraphicalItemId-Dq8Ivo6G.js";import"./ErrorBarContext-CKHx2UXB.js";import"./GraphicalItemClipPath-BWUEd7L8.js";import"./SetGraphicalItem-dBJjG1CE.js";import"./getZIndexFromUnknown-Dzs2bGO1.js";import"./graphicalItemSelectors-CtyXf51U.js";import"./Curve-C5tRxImZ.js";import"./step-Dfgw13sm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CQ8RyYGT.js";import"./Dot-1zqir61q.js";import"./getRadiusAndStrokeWidthFromDot-D7vHONas.js";import"./useElementOffset-CyRs7Ghn.js";import"./uniqBy-DrtRQAo9.js";import"./iteratee-WGyIZ-Gp.js";import"./Cross-DJilIOTx.js";import"./Sector-8_MFoJRk.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
