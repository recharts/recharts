import{R as t}from"./iframe-Dz7fOwcI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BBLdCd6N.js";import{R as l}from"./zIndexSlice-DlvYonxh.js";import{C as x}from"./ComposedChart-Dj2W9R-k.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CtWIgBpf.js";import{L as a}from"./Line-GkfmxRQ_.js";import{X as c}from"./XAxis-DFw5p9mB.js";import{T as g}from"./Tooltip-CsWb-LUx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Ccqj4A2W.js";import"./Layer-Cbl9ckF3.js";import"./resolveDefaultProps-iMaSxvai.js";import"./Text-Bb3XY4nD.js";import"./DOMUtils-ChsYv9qG.js";import"./isWellBehavedNumber-BNED1DFM.js";import"./Label-DdFPLPtR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-uLTirNmh.js";import"./index-ClEhXPgh.js";import"./index-CItZCrSt.js";import"./types-BbykzSU1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DgHHusta.js";import"./throttle-P3hcp8f5.js";import"./RechartsWrapper-DGGSKz0I.js";import"./index-wFbpiefS.js";import"./index-DeBQrWVz.js";import"./axisSelectors-BrQnrxrh.js";import"./d3-scale-DvZHjVYW.js";import"./CartesianChart-B9Hxpjtk.js";import"./chartDataContext-_X11uzVv.js";import"./CategoricalChart-DAJpY1kv.js";import"./tooltipContext-BUI4kYkZ.js";import"./AnimatedItems-DmM_DoTI.js";import"./useAnimationId-DXftpzbd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2KMKFcS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CpKGxq0o.js";import"./RegisterGraphicalItemId-nSw_C2Ok.js";import"./ErrorBarContext-DsGpPWxc.js";import"./GraphicalItemClipPath-BgvZ3vl9.js";import"./SetGraphicalItem-Dj4x9kmg.js";import"./getZIndexFromUnknown-B8KQU5KR.js";import"./graphicalItemSelectors-zHfIRokA.js";import"./Curve-DkNdhu-H.js";import"./step-Dr4bnBR_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DujeTKJ8.js";import"./Dot-DKtI2fI_.js";import"./getRadiusAndStrokeWidthFromDot-uAG-X1Nw.js";import"./useElementOffset-DE8HnghF.js";import"./uniqBy-Bc4mdW14.js";import"./iteratee-DMupSKW3.js";import"./Cross-CekS-UO0.js";import"./Sector-uH4zAY_D.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
