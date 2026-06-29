import{R as t}from"./iframe-ClhUNVnE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CrIc_odO.js";import{R as l}from"./zIndexSlice-Bj_mEjES.js";import{C as x}from"./ComposedChart-BTSIcYKW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CdhyRJ92.js";import{L as a}from"./Line-CrJoEyU1.js";import{X as c}from"./XAxis-LUnQ02U1.js";import{T as g}from"./Tooltip-Bgb8w0H3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Uq0DWhIe.js";import"./CartesianAxis-6ub_g_j0.js";import"./Layer-De05M5So.js";import"./resolveDefaultProps-xxbn2Y0z.js";import"./Text-6OmgeIvW.js";import"./DOMUtils-CtaL4Ln2.js";import"./isWellBehavedNumber-BZGd7hgQ.js";import"./Label-C7_QXzyC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGNmh353.js";import"./index-CMNlKXgY.js";import"./index-WRHCQy9e.js";import"./types-B-IY3TCA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D-beSFYC.js";import"./throttle-CYmjgX02.js";import"./RechartsWrapper-CH-OQa-8.js";import"./index-CKsF35O1.js";import"./index-D_-76jNe.js";import"./axisSelectors-B_omKdC_.js";import"./d3-scale-CyxXVHj6.js";import"./CartesianChart-DVNFcAED.js";import"./chartDataContext-DT2zm0Bo.js";import"./CategoricalChart-BXjBj4uL.js";import"./tooltipContext-ZmJNyT4E.js";import"./AnimatedItems-CjVS2mh2.js";import"./useAnimationId-CT1xX_cr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-SjMvhhWJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DM6q8ZUn.js";import"./RegisterGraphicalItemId-EpH2csVt.js";import"./ErrorBarContext-Dhef0H9H.js";import"./GraphicalItemClipPath-BcvmXpNm.js";import"./SetGraphicalItem-D69pntSs.js";import"./getZIndexFromUnknown-BpQkEBI4.js";import"./graphicalItemSelectors-Bj_iJVXB.js";import"./Curve-B40-WnjD.js";import"./step-DSY_NY5u.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BylsHrz1.js";import"./Dot-BZCqqavc.js";import"./getRadiusAndStrokeWidthFromDot-CPyWUTuJ.js";import"./useElementOffset-DHiTyfaG.js";import"./uniqBy-CcWMM-R1.js";import"./iteratee-DPPNHIa6.js";import"./Cross-DGcNmab1.js";import"./Sector-DtBHNqPc.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
