import{R as t}from"./iframe-n1jsfVDG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bo1-Hgpg.js";import{R as l}from"./zIndexSlice-BRlbTYqB.js";import{C as x}from"./ComposedChart-BbpGnHrE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bpxl2Qir.js";import{L as a}from"./Line-CYxi_v-i.js";import{X as c}from"./XAxis-XfJlYZND.js";import{T as g}from"./Tooltip-407_u1jn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B5dy1Vd6.js";import"./Text-BwTkl3FB.js";import"./resolveDefaultProps-BAQjLDG_.js";import"./DOMUtils-B7JqCpD5.js";import"./isWellBehavedNumber-51Xh59nn.js";import"./useId-CqUHn1t3.js";import"./useBackwardsCompatibleTheme-BrtymnuF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-b1Mp40.js";import"./index-CgFE3bjK.js";import"./index-WXWaFicj.js";import"./RechartsWrapper-CtxvIequ.js";import"./axisSelectors-7NZ6PaeE.js";import"./throttle-BndXY2H8.js";import"./d3-scale-DHoUxLai.js";import"./index-CBp2l__h.js";import"./index-DNYwsh8I.js";import"./renderedTicksSlice-rKTqRgg8.js";import"./index-C2dJWAfM.js";import"./CartesianAxis-9JtcSgtY.js";import"./Layer-CoRWBRFX.js";import"./types-DxCRAK1R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dfjy31tx.js";import"./chartDataContext-XRtQdSke.js";import"./CategoricalChart-CYGfKh2e.js";import"./AnimatedItems-CK27PxaM.js";import"./useAnimationId-DmMej8H7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CP1iRVSw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D8gDtxNc.js";import"./tooltipContext-ODAWykUC.js";import"./RegisterGraphicalItemId-CfRcyWlO.js";import"./ErrorBarContext-Ba37a78Y.js";import"./GraphicalItemClipPath-COfUJuyE.js";import"./SetGraphicalItem-DGwR4qus.js";import"./getZIndexFromUnknown-P-X0A4L_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DJmL9j0_.js";import"./Curve-B5xOTs2B.js";import"./step-B7eMn8MW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BgeuL4dW.js";import"./Dot-BWSVmybM.js";import"./getRadiusAndStrokeWidthFromDot-CpUR_Izt.js";import"./useElementOffset-ZEcbDPf_.js";import"./uniqBy-BzgSuY-c.js";import"./iteratee-B8fhTNiZ.js";import"./Cross-BzYqCQve.js";import"./Sector-m1gBP5km.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
