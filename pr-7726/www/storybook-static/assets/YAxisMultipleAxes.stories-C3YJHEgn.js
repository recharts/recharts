import{R as t}from"./iframe-BuZZ6Yg-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CIgwtJsC.js";import{R as l}from"./zIndexSlice-D06YYCUt.js";import{C as x}from"./ComposedChart-SQYF2RWW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bb3q7wM7.js";import{L as a}from"./Line-kFnHHkWn.js";import{X as c}from"./XAxis-CHYajWYc.js";import{T as g}from"./Tooltip-B6YzORSg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Piq6p-kT.js";import"./Text-277W_4gY.js";import"./resolveDefaultProps-D5JsTaYp.js";import"./DOMUtils-C4sKZxSz.js";import"./isWellBehavedNumber-D8DFMuKm.js";import"./useId-DaJNh8-T.js";import"./useBackwardsCompatibleTheme-bmPqm5mS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVpPXR5C.js";import"./index-WVpfO-Tt.js";import"./index-rOOSR0qU.js";import"./RechartsWrapper-BK57Ddxz.js";import"./axisSelectors-BIwvgxsa.js";import"./throttle-Dl11hTdc.js";import"./d3-scale-BuRuIzVX.js";import"./index-pWAlhut8.js";import"./index-DEZgEKu_.js";import"./renderedTicksSlice-DeL7aSpi.js";import"./index-BFZDqkK3.js";import"./CartesianAxis-tEidUAUv.js";import"./Layer-DuZwtXeM.js";import"./types-BpoBtvKZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D_6fxtY3.js";import"./chartDataContext-CcDIygPN.js";import"./CategoricalChart-4bcFYgeY.js";import"./AnimatedItems-BSKa54qQ.js";import"./useAnimationId-BYxS0Ar5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ct-8eUvC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DdHa4GQ_.js";import"./tooltipContext-3DNW6uAw.js";import"./RegisterGraphicalItemId-BULnM1Vf.js";import"./ErrorBarContext-BnL_B67S.js";import"./GraphicalItemClipPath-iF12rDlU.js";import"./SetGraphicalItem-B24-ge-L.js";import"./getZIndexFromUnknown-IY2Nx0gQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-nntyQRRy.js";import"./Curve-Cr1UwGdj.js";import"./step-CMi7Hoq0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-emviVFUJ.js";import"./Dot-B1btJC39.js";import"./getRadiusAndStrokeWidthFromDot-D4y7gXXI.js";import"./useElementOffset-CC8KTtc-.js";import"./uniqBy-CBl0CU3M.js";import"./iteratee-4F6o9M4t.js";import"./Cross-BlwGzwAp.js";import"./Sector-Dw9Qjjbb.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
