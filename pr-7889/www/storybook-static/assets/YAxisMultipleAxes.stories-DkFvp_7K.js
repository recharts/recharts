import{R as t}from"./iframe-C55SonNK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C3mB-_5C.js";import{R as l}from"./zIndexSlice-DasulNlo.js";import{C as x}from"./ComposedChart-DRtqau9M.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C_-Wweec.js";import{L as a}from"./Line-BH0-Ovp4.js";import{X as c}from"./XAxis-BWJ2ABmI.js";import{T as g}from"./Tooltip-dzkde4pM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-XuIK8xgk.js";import"./Text-BGO9kFr7.js";import"./resolveDefaultProps-BmNtE2rS.js";import"./DOMUtils-B--wunTb.js";import"./isWellBehavedNumber-hNTnQGF2.js";import"./useId-Ph5cHYEn.js";import"./useBackwardsCompatibleTheme-CMxCV-uY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-xKUTxtZr.js";import"./index-DlZLgaYD.js";import"./index-BwYupLtq.js";import"./RechartsWrapper-BfpEIOv-.js";import"./axisSelectors-pQ0Se0UH.js";import"./throttle-G3ECa8tr.js";import"./d3-scale-BMtFe6cd.js";import"./index-ConF1OJd.js";import"./index-BPMo8MBn.js";import"./renderedTicksSlice-LEZPKkpV.js";import"./index-Czl7SMar.js";import"./CartesianAxis-Sfv4H3gX.js";import"./Layer-Bpfyjb4F.js";import"./types-DWD7ie2J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BihUZ5nW.js";import"./chartDataContext-CzjQbFCV.js";import"./CategoricalChart-BO0KKDhg.js";import"./AnimatedItems-mUQIEGKr.js";import"./useAnimationId-Dfy40kVz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle--EhuiCVU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CaNZ8cmS.js";import"./tooltipContext-KFWtgpFU.js";import"./RegisterGraphicalItemId-CAAWrCM1.js";import"./ErrorBarContext-K46B69nM.js";import"./GraphicalItemClipPath-5x7FHKUZ.js";import"./SetGraphicalItem-CASyq9nQ.js";import"./getZIndexFromUnknown-C-VWG9Qg.js";import"./useGraphicalItemIdentity-DFmFmERc.js";import"./dataEntryStyles-Bcs_VkDa.js";import"./Curve-cqh3GTlE.js";import"./step-Da31Aboz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BhFZHI7X.js";import"./Dot-CxsnkucE.js";import"./getRadiusAndStrokeWidthFromDot-CCMPBL5C.js";import"./useElementOffset-C-dE2UhQ.js";import"./uniqBy-DOeEc7ZY.js";import"./iteratee-CkjZNHcQ.js";import"./Cross-hlaIV5cr.js";import"./Sector-CVFfj6oH.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
