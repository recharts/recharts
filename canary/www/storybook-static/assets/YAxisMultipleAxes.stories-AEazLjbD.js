import{R as t}from"./iframe-DSiB0Y2h.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BvhfxNjy.js";import{R as l}from"./zIndexSlice-DXbXK2p0.js";import{C as x}from"./ComposedChart-VI9g2q1H.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C26NfWT5.js";import{L as a}from"./Line-DQiu1uRI.js";import{X as c}from"./XAxis-DKaEKDyo.js";import{T as g}from"./Tooltip-D8Llh9Of.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CTswAcYo.js";import"./Layer-GefPfHKN.js";import"./resolveDefaultProps-dV1CHodA.js";import"./Text-CK2osH-3.js";import"./DOMUtils-DPI9rQIs.js";import"./isWellBehavedNumber-CZNGJ9iq.js";import"./Label-SBQmZETs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpR0ZeoC.js";import"./index-N88jlccS.js";import"./index-BxYFwyjs.js";import"./types-Ctc34oVc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BPUsumAR.js";import"./throttle-B3UghvKT.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CKOYxrgU.js";import"./index-DX0fo1e7.js";import"./index-BwXkalY4.js";import"./axisSelectors-m-5JnBq3.js";import"./d3-scale-DOzMXTTX.js";import"./CartesianChart-BjQVh-35.js";import"./chartDataContext-DRuezjZY.js";import"./CategoricalChart-GJIpj0Il.js";import"./tooltipContext-Djjej6CU.js";import"./AnimatedItems-DcXITJ0o.js";import"./useAnimationId-CcRzR4wj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DI-L60n8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BbSbze6M.js";import"./RegisterGraphicalItemId-ZES9vfqK.js";import"./ErrorBarContext-BQTwLW9q.js";import"./GraphicalItemClipPath-CUbr_GNl.js";import"./SetGraphicalItem-CMw9Vzf1.js";import"./getZIndexFromUnknown-CS1EybmX.js";import"./graphicalItemSelectors-T8-ppBBu.js";import"./Curve-CSkrO1uF.js";import"./step-D7_MEDCW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B6ujEarC.js";import"./Dot-h09Lg4V6.js";import"./getRadiusAndStrokeWidthFromDot-D73h4AtU.js";import"./useElementOffset-DgOlx547.js";import"./uniqBy-CyF01TCc.js";import"./iteratee-1FMy2Yxx.js";import"./Cross-tJLVE_Wj.js";import"./Sector-DLgetutF.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
