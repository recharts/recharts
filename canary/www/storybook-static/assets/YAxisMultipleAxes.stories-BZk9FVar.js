import{R as t}from"./iframe-CB0-Apig.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CyKUvs_P.js";import{R as l}from"./zIndexSlice-MYAc-BZR.js";import{C as x}from"./ComposedChart-Dg8T55Bz.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DQrss4Zm.js";import{L as a}from"./Line-CAR7ukmz.js";import{X as c}from"./XAxis-BkLwCB-i.js";import{T as g}from"./Tooltip-Dr_4UXD8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-EQpvr0td.js";import"./Text-B6lqzzDo.js";import"./resolveDefaultProps-zQutOK7U.js";import"./DOMUtils-B6gqp-ty.js";import"./isWellBehavedNumber-CTvZevfR.js";import"./useId-CWVN7Jyj.js";import"./useBackwardsCompatibleTheme-Db0J--Ta.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-elhV8gwp.js";import"./index-DsRbpnGV.js";import"./index-zuDkrAQT.js";import"./RechartsWrapper-DVGUOxKt.js";import"./axisSelectors-CXDnm6lL.js";import"./throttle-B_JaSpEU.js";import"./d3-scale-D9ownlTm.js";import"./index-C1lwWxUG.js";import"./index-DTSkq74U.js";import"./renderedTicksSlice-CvPVjrK_.js";import"./index-DyoNT_fx.js";import"./CartesianAxis-DyZuqlDa.js";import"./Layer-Dp8UDcUQ.js";import"./types-DBJDNIT-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BJI6UZNQ.js";import"./chartDataContext-BshA8PFe.js";import"./CategoricalChart-DMYjcOfv.js";import"./AnimatedItems-DE_zCwRM.js";import"./useAnimationId-DZZDX8rQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-I4VbBUFX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C6gEbnuv.js";import"./tooltipContext-Cru-qqfD.js";import"./RegisterGraphicalItemId-DP4ziMhF.js";import"./ErrorBarContext-B7WUKUL2.js";import"./GraphicalItemClipPath-BfYW0QzE.js";import"./SetGraphicalItem-D-uUzHqS.js";import"./getZIndexFromUnknown-C3jS8EI2.js";import"./useGraphicalItemIdentity-CxywVdEz.js";import"./dataEntryStyles--RLXloXa.js";import"./Curve-BEFcYSF_.js";import"./step-CjRyMTXy.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Du6zhbn2.js";import"./Dot-5_weME0s.js";import"./getRadiusAndStrokeWidthFromDot-DVD_PCP2.js";import"./useElementOffset-BgakInc5.js";import"./uniqBy-9j2Lomvv.js";import"./iteratee-CFstGFg2.js";import"./Cross-C7DxwD6R.js";import"./Sector-BvfQDdur.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
