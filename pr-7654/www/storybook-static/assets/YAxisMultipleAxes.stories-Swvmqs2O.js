import{R as t}from"./iframe-BqyXYbfO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CPeQqwFp.js";import{R as l}from"./zIndexSlice-B01GboJR.js";import{C as x}from"./ComposedChart-B7zFkt6v.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BGWmYCKQ.js";import{L as a}from"./Line-CA8PuEEu.js";import{X as c}from"./XAxis-0w0QIVSx.js";import{T as g}from"./Tooltip-DfxM-Zzf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-oragi0Kj.js";import"./Text-DOHx7LgO.js";import"./resolveDefaultProps-B3i-Tg0K.js";import"./DOMUtils-btZL_iKn.js";import"./isWellBehavedNumber-BRVst2EZ.js";import"./useBackwardsCompatibleTheme-BlCAIHy1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-rhqIudSr.js";import"./index-Bv49Pgrm.js";import"./index-B9uHeZTZ.js";import"./RechartsWrapper-D3v9xwCM.js";import"./index-CVfSI7O7.js";import"./index-bCeEKDHC.js";import"./throttle-CuHL7VMX.js";import"./axisSelectors-DpUYmlyC.js";import"./d3-scale-YUujBWq4.js";import"./renderedTicksSlice-7sTJiycY.js";import"./CartesianAxis-DueGTPVP.js";import"./Layer-cG34Tdrq.js";import"./types-B7ADV__L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-0syXRV9F.js";import"./chartDataContext-D6yTmy2l.js";import"./CategoricalChart-RVKqvA7y.js";import"./AnimatedItems-CpV-NRBb.js";import"./useAnimationId-CK12bq4f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CftrBWbD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1I6X1s88.js";import"./tooltipContext-fOshULGt.js";import"./RegisterGraphicalItemId-Ck8ajZX3.js";import"./ErrorBarContext-BGgmDGm5.js";import"./GraphicalItemClipPath-DDxOeQm3.js";import"./SetGraphicalItem-DNxW0R1P.js";import"./getZIndexFromUnknown-zJFwqN1H.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DNiSTRsW.js";import"./Curve-B6fu5Ruc.js";import"./step-B3dTMrU0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CiwZFN_M.js";import"./Dot-C0u3Avpo.js";import"./getRadiusAndStrokeWidthFromDot-HXIFwiLB.js";import"./useElementOffset-DExtgCNc.js";import"./uniqBy-DKsxBLj8.js";import"./iteratee-I9oDQ_jw.js";import"./Cross-4aVT25Mq.js";import"./Sector-B2YMZGu7.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
