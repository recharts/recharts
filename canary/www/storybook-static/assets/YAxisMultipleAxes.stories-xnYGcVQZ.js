import{R as t}from"./iframe-BLfLpZux.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D5k-HM91.js";import{R as l}from"./zIndexSlice-BdrEPl1y.js";import{C as x}from"./ComposedChart-ZvZa43Nr.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-AKqccxUx.js";import{L as a}from"./Line-Bd3C1wrr.js";import{X as c}from"./XAxis-CxCuOvko.js";import{T as g}from"./Tooltip-73Jx1jZt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BLCGjb7w.js";import"./Layer-Bul18HQO.js";import"./resolveDefaultProps-BZWZ2sNL.js";import"./Text-BhOJQRua.js";import"./DOMUtils-CsfQH6x5.js";import"./isWellBehavedNumber-D4oOe6S5.js";import"./Label-BjZvH2GY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BVA4IMdO.js";import"./index-iIj_N3fe.js";import"./index-CK4MQXPT.js";import"./types-CXyRetpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bmm8hDp0.js";import"./throttle-fbWpHloR.js";import"./RechartsWrapper-CTW173I9.js";import"./index-rWKftsTY.js";import"./index-B91Ea_y6.js";import"./axisSelectors-y8UfcIHb.js";import"./d3-scale-DPpDzINu.js";import"./CartesianChart-DkG-1GT9.js";import"./chartDataContext-DtPI9Rf-.js";import"./CategoricalChart-DDKWOc6b.js";import"./tooltipContext-C475OCAK.js";import"./AnimatedItems-DJFtUIBr.js";import"./useAnimationId-CIoZmDPD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8GMZRm_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BK3uHCCg.js";import"./RegisterGraphicalItemId-CYVd3_VS.js";import"./ErrorBarContext-CNNRNaxb.js";import"./GraphicalItemClipPath-DsE8A5bl.js";import"./SetGraphicalItem-DGLUBmAF.js";import"./getZIndexFromUnknown-P7nUO6wX.js";import"./graphicalItemSelectors-nW53RAvp.js";import"./Curve-ChFgtFv9.js";import"./step-CGzEtFcj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cj4P9vg0.js";import"./Dot-B6bHrZQI.js";import"./getRadiusAndStrokeWidthFromDot-gKBfjIX2.js";import"./useElementOffset-BSkmHUtf.js";import"./uniqBy-DOFQi5FN.js";import"./iteratee-DwKL5yyO.js";import"./Cross-DU0vs87a.js";import"./Sector-qmtrqm1q.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
