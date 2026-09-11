import{R as t}from"./iframe-CMVuz_WR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DhZVcnhy.js";import{R as l}from"./zIndexSlice-Bu9BgD7f.js";import{C as x}from"./ComposedChart-BHXT81yI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DTzQ_dDy.js";import{L as a}from"./Line-BqUMG49z.js";import{X as c}from"./XAxis-Dls2O1nz.js";import{T as g}from"./Tooltip-YDDUtem4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BusuXXbv.js";import"./Text-_Yf6eN5X.js";import"./resolveDefaultProps-DlgO1mgX.js";import"./DOMUtils-ClFVphvT.js";import"./isWellBehavedNumber-DZvjV6rT.js";import"./useId-BNZP75Mi.js";import"./useBackwardsCompatibleTheme-YE2IG8yO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CC6O4jFa.js";import"./index-8182fU53.js";import"./index-bZstop0p.js";import"./RechartsWrapper-i8SteWdh.js";import"./axisSelectors-D6i4LlUB.js";import"./throttle-BD5EEuEt.js";import"./d3-scale-BJGJFwwk.js";import"./index-t37cwTj5.js";import"./index-BjTWdNOV.js";import"./renderedTicksSlice-CIeJUrxO.js";import"./index-CqRVWfEr.js";import"./CartesianAxis-aP0rvO-w.js";import"./Layer-BNHnjhAQ.js";import"./types-C-qBJNve.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C05zOa_e.js";import"./chartDataContext-zZnvxmy2.js";import"./CategoricalChart-C-sUxYeh.js";import"./AnimatedItems-BtNlpq_I.js";import"./useAnimationId-DpagfNvu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BfCZIbio.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ce44UUga.js";import"./tooltipContext-_6LAkaCJ.js";import"./RegisterGraphicalItemId-CX_ikIzR.js";import"./ErrorBarContext-Bf0CG0PF.js";import"./GraphicalItemClipPath-Dm_wDd6O.js";import"./SetGraphicalItem-B2N4WPPi.js";import"./getZIndexFromUnknown-CT7SNiW0.js";import"./useGraphicalItemIdentity-Czg2hm9T.js";import"./Curve-Br63M5mM.js";import"./step-D1p4WhbU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ct1HkDqz.js";import"./Dot-BH3mzIrp.js";import"./getRadiusAndStrokeWidthFromDot-D4x4O6vv.js";import"./useElementOffset-DlxoAXh8.js";import"./uniqBy-DV8vNVc-.js";import"./iteratee-r3vqN0UI.js";import"./Cross-DXfo2cLa.js";import"./Sector-Benbkkmr.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
