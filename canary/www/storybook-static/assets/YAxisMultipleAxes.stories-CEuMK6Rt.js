import{R as t}from"./iframe-5h9djFbt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DLX5lo20.js";import{R as l}from"./zIndexSlice-BdIKrmmY.js";import{C as x}from"./ComposedChart-DzFMSgfQ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BxBebqIO.js";import{L as a}from"./Line-B8MRMMxJ.js";import{X as c}from"./XAxis-C-anAgqA.js";import{T as g}from"./Tooltip-BQkvIQ3b.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CP2XtCyN.js";import"./Text-KAAJmctl.js";import"./resolveDefaultProps-P7Da5mqR.js";import"./DOMUtils-ccwVme2-.js";import"./isWellBehavedNumber-DStaytIC.js";import"./useId-C3MUzbkU.js";import"./useBackwardsCompatibleTheme-DY45QFX2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BBvGlV3x.js";import"./index-CEJvLeX_.js";import"./index-B9x0kJ-U.js";import"./RechartsWrapper-QvnV0uNt.js";import"./axisSelectors-DjHfkPnH.js";import"./throttle-BRkWLUiC.js";import"./d3-scale-BcvXASmu.js";import"./index-BetN_RMo.js";import"./index-DkJjmLoR.js";import"./renderedTicksSlice-BUXo475V.js";import"./index-C__FEdkF.js";import"./CartesianAxis-B0pvT4G3.js";import"./Layer-CyvtfT-W.js";import"./types-CcKw46qs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CEUQRdCg.js";import"./chartDataContext-Bq32LFRB.js";import"./CategoricalChart-DAp11J6f.js";import"./AnimatedItems-s0U1kgXJ.js";import"./useAnimationId-B4WX31v5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-igHY6SME.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-VwknAe2e.js";import"./tooltipContext-Dm3ZqEGu.js";import"./RegisterGraphicalItemId-zWnNyz48.js";import"./ErrorBarContext-COzjx-TB.js";import"./GraphicalItemClipPath-DH9zOtRz.js";import"./SetGraphicalItem-CXIeHIB6.js";import"./getZIndexFromUnknown-ClsRFbII.js";import"./useGraphicalItemIdentity-BGObpJ42.js";import"./Curve-DtF4KeGP.js";import"./step-DzAe_mUU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-W3o0JREG.js";import"./Dot-BTGCUhRH.js";import"./getRadiusAndStrokeWidthFromDot-PgyeTlLk.js";import"./useElementOffset-BuZJXmgl.js";import"./uniqBy-CIugontL.js";import"./iteratee-LMEmminV.js";import"./Cross-Cvbxo2SM.js";import"./Sector-QzXYvk4Z.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
