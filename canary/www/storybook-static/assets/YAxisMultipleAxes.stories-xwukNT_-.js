import{R as t}from"./iframe-DzEunvJg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-V-QVlkzt.js";import{R as l}from"./zIndexSlice-CJoRXBvc.js";import{C as x}from"./ComposedChart-B9Ez2Onq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-2akancRZ.js";import{L as a}from"./Line-DMXo8AlH.js";import{X as c}from"./XAxis-C3LhqR3k.js";import{T as g}from"./Tooltip-AonJcaxi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CI5iW8Hf.js";import"./Text-BLWA_Ab4.js";import"./resolveDefaultProps-D1VbkECB.js";import"./DOMUtils-BmAhd2hZ.js";import"./isWellBehavedNumber-CrPdUCJx.js";import"./useId-BuMWUv2m.js";import"./useBackwardsCompatibleTheme-RcberNo1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C6u4DcMx.js";import"./index-CVYp0833.js";import"./index-C0Oun7dU.js";import"./RechartsWrapper-DKQAPH3P.js";import"./axisSelectors-BmcAHay7.js";import"./throttle-vVnHJdwk.js";import"./d3-scale-DAMVQCbA.js";import"./index-9AaHNtLQ.js";import"./index-T5bTpYjM.js";import"./renderedTicksSlice-CwBlu1JG.js";import"./index-XWQatYSr.js";import"./CartesianAxis-9IOHN060.js";import"./Layer-Cm7XhTpW.js";import"./types-BCX_XL2l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-xll3miOv.js";import"./chartDataContext-DrYFcmx6.js";import"./CategoricalChart-Dkc-ZZ1N.js";import"./AnimatedItems-yUKoBMYs.js";import"./useAnimationId-CM641vkV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9EvpGaA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1PCMWfFs.js";import"./tooltipContext-xaxP6i85.js";import"./RegisterGraphicalItemId-Yhhjp8dw.js";import"./ErrorBarContext-8mGbl9GN.js";import"./GraphicalItemClipPath-D_Kf5-kj.js";import"./SetGraphicalItem-XUxLk492.js";import"./getZIndexFromUnknown-BMQFNib0.js";import"./useGraphicalItemIdentity-CP3wmpOS.js";import"./dataEntryStyles-CZTUgUl8.js";import"./Curve-DBPbpDEM.js";import"./step-BomzFh0-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-c4_lMKBx.js";import"./Dot-Dusyebbr.js";import"./getRadiusAndStrokeWidthFromDot-dltGhGap.js";import"./useElementOffset-BZZg8P8y.js";import"./uniqBy-U5OVK8cg.js";import"./iteratee-2YRKRIXZ.js";import"./Cross-CerU926X.js";import"./Sector-DeaxkxMY.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
