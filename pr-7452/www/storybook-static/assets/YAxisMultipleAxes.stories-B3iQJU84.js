import{R as t}from"./iframe-DBxFP3uX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BneRoowy.js";import{R as l}from"./zIndexSlice-B_9s4KsU.js";import{C as x}from"./ComposedChart-CWD6KhhR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-QC-Yne4g.js";import{L as a}from"./Line-_qToq4r1.js";import{X as c}from"./XAxis-CQTPr47R.js";import{T as g}from"./Tooltip-CV5R1W18.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CN0u3twK.js";import"./CartesianAxis-tZocWrkt.js";import"./Layer-Buso2Ccs.js";import"./resolveDefaultProps-DCaDIMSr.js";import"./Text-CmyuUjWM.js";import"./DOMUtils-CU_Od2Bc.js";import"./isWellBehavedNumber-BiB40tPr.js";import"./Label-Dhv9vMg4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBGeCZYh.js";import"./index-DgF-9ML2.js";import"./index-DJo0-J4-.js";import"./types-B2FPYU3d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BowbWmvp.js";import"./throttle-DjG9xqx-.js";import"./RechartsWrapper-DEp3al8N.js";import"./index-BcBtkybK.js";import"./index-CNd0a_qD.js";import"./axisSelectors-B_9j14vR.js";import"./d3-scale-B06022wF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-GxlalsIE.js";import"./chartDataContext-CZK58LYI.js";import"./CategoricalChart-CKuMbTEb.js";import"./tooltipContext-BlWpJhq6.js";import"./AnimatedItems-ooNl266t.js";import"./useAnimationId-54G3nUfQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BPEfWSXH.js";import"./ActiveShapeUtils-Bhf79Nyo.js";import"./RegisterGraphicalItemId-BzdV07RL.js";import"./ErrorBarContext-D7bc2l2n.js";import"./GraphicalItemClipPath-CDU2cR1P.js";import"./SetGraphicalItem-DoJqlCoL.js";import"./getZIndexFromUnknown-CJY0Sz5N.js";import"./graphicalItemSelectors-BLVS9kie.js";import"./Curve-Dh6mi4Et.js";import"./step-CqGdUrTJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-hNSOrLBT.js";import"./Dot-g-iDk6Aa.js";import"./getRadiusAndStrokeWidthFromDot-CAXSoZ4P.js";import"./useElementOffset-BIQStkwP.js";import"./uniqBy-CdkgCulQ.js";import"./iteratee-BRF5lQre.js";import"./Cross-CaNg85QT.js";import"./Sector-BFzsvVXV.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
