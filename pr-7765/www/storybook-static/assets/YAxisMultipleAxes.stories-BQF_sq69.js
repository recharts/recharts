import{R as t}from"./iframe-ZGGTKsi4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D3HJo_sZ.js";import{R as l}from"./zIndexSlice-DxfJO5SI.js";import{C as x}from"./ComposedChart-HoHDKyYF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DvZWrpGh.js";import{L as a}from"./Line-hyiuMJlU.js";import{X as c}from"./XAxis-DNlNZaF2.js";import{T as g}from"./Tooltip-CzxrIFwv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CuL7W9s2.js";import"./Text-uTHCfqpL.js";import"./resolveDefaultProps-vV3khv5M.js";import"./DOMUtils-KcdWyv8l.js";import"./isWellBehavedNumber-QCZGXLEu.js";import"./useId-BJoAZaHY.js";import"./useBackwardsCompatibleTheme-DiGhz-R4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CnUQDGMu.js";import"./index-BPQC-jNG.js";import"./index-HrJWGj9i.js";import"./RechartsWrapper-Bhqr1bRq.js";import"./axisSelectors-sP9dBG4h.js";import"./throttle-DU3r4hZM.js";import"./d3-scale-BsspybO2.js";import"./index-BpyhtFRO.js";import"./index-DsBTLunf.js";import"./renderedTicksSlice-BrYwA8bW.js";import"./index-SSLiRbGX.js";import"./CartesianAxis-y6hYyFes.js";import"./Layer-yZG6HjYa.js";import"./types-Cv_7IfEs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-FipRlzk-.js";import"./chartDataContext-CVwvDOw7.js";import"./CategoricalChart-Da_wyX1Y.js";import"./AnimatedItems-B0OCbKtI.js";import"./useAnimationId-BA-Y1lsT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tu1-I-Uk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CShJY30W.js";import"./tooltipContext-DqxPUA-U.js";import"./RegisterGraphicalItemId-DAVF2joS.js";import"./ErrorBarContext-DZHL-lpY.js";import"./GraphicalItemClipPath-DOFRcoC3.js";import"./SetGraphicalItem-rcmPBlm0.js";import"./getZIndexFromUnknown-CwPAkW5R.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CdO4AxEG.js";import"./Curve-BGLf-py4.js";import"./step-D_M_3p-d.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DW5iFVK5.js";import"./Dot-DrTqTbYy.js";import"./getRadiusAndStrokeWidthFromDot-CtaK0aI-.js";import"./useElementOffset-CcFou8CY.js";import"./uniqBy-BAAGpGDY.js";import"./iteratee-CoISyMF-.js";import"./Cross-C6TcwmRS.js";import"./Sector-BEKQ8BC4.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
