import{R as t}from"./iframe-CWavEj4K.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DW5tby8v.js";import{R as l}from"./zIndexSlice-5FODTzGQ.js";import{C as x}from"./ComposedChart-5wlVBK1U.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-celoOc6p.js";import{L as a}from"./Line-CsLLlM8L.js";import{X as c}from"./XAxis-eQhyZl4T.js";import{T as g}from"./Tooltip-BRYEDCb1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CUeBd0Qu.js";import"./Layer-CGV1iRtS.js";import"./resolveDefaultProps-Di3JUEKf.js";import"./Text-DKOGU3E1.js";import"./DOMUtils-bwyz7eCe.js";import"./isWellBehavedNumber-DmSAVoQw.js";import"./Label-BBFntxVE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BFe8VyCX.js";import"./index-CAI0wlC8.js";import"./index-BUN8uoaU.js";import"./types-BmbikVaN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaH7gash.js";import"./throttle-Bkho8TEt.js";import"./RechartsWrapper-BHgaBn1E.js";import"./index-rtKProJN.js";import"./index-CB7M5YEf.js";import"./axisSelectors-XK5eG7GE.js";import"./d3-scale-BaBPlFPk.js";import"./CartesianChart-0mhtnzxI.js";import"./chartDataContext-B5TlaDO0.js";import"./CategoricalChart-DbdrFP36.js";import"./tooltipContext-C-R9HDMe.js";import"./AnimatedItems-tOezhTob.js";import"./useAnimationId-DfkBBgp-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B4KQS2cd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DeeBbphL.js";import"./RegisterGraphicalItemId-C4WMjaGC.js";import"./ErrorBarContext-DxKtXG2P.js";import"./GraphicalItemClipPath-CrXxzkB7.js";import"./SetGraphicalItem-DS2vQ-KW.js";import"./getZIndexFromUnknown-0pvQ2awN.js";import"./graphicalItemSelectors-D8g2BDdh.js";import"./Curve-Be2eVpFP.js";import"./step-De38Fzbp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bl1BNxPS.js";import"./Dot-DxpmSLW5.js";import"./getRadiusAndStrokeWidthFromDot-CWHux7lI.js";import"./useElementOffset-BUB8Afxb.js";import"./uniqBy-CCg55Ce9.js";import"./iteratee-DuHJ9aff.js";import"./Cross-BIG51hIR.js";import"./Sector-gkgCDT7g.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
