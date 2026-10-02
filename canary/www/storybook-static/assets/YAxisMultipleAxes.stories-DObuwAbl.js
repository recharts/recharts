import{R as t}from"./iframe-CEcITxQg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-WtIBmSn8.js";import{R as l}from"./zIndexSlice-DG2GpHlE.js";import{C as x}from"./ComposedChart-p5v9VmVF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BiOnqh7r.js";import{L as a}from"./Line-BBaVBl_d.js";import{X as c}from"./XAxis-DpYz8_Dh.js";import{T as g}from"./Tooltip-BDNX7Znf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CAyVtv0N.js";import"./Text-BaR1ZvCW.js";import"./resolveDefaultProps-CkmfyhqW.js";import"./DOMUtils-CRevI1wr.js";import"./isWellBehavedNumber-DjN2b99T.js";import"./useId-BfWHYsCr.js";import"./useBackwardsCompatibleTheme-B-LDULxa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Crp9kN4i.js";import"./index-D2_zyIdl.js";import"./index-Bhk23PFU.js";import"./RechartsWrapper-BTJ2LZ14.js";import"./axisSelectors-BTQvXZat.js";import"./throttle-B3Xibe3Y.js";import"./d3-scale-CwC0nBHM.js";import"./index-D0x1dbK7.js";import"./index-DeVAKBla.js";import"./renderedTicksSlice-Dgfw4xeW.js";import"./index-DeuCtru2.js";import"./CartesianAxis-CRhVdfos.js";import"./Layer-DxHA8fzs.js";import"./types-CL5KqLm4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bf9v-Tj6.js";import"./chartDataContext-BzZyvQEB.js";import"./CategoricalChart-B6S6Zh35.js";import"./AnimatedItems-Ys-2ZU7Q.js";import"./useAnimationId-Cz0tj6YQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-rvPl5WSU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dx9yEBbu.js";import"./tooltipContext-C719rlED.js";import"./RegisterGraphicalItemId-CodKeWvn.js";import"./ErrorBarContext-B5kiS63M.js";import"./GraphicalItemClipPath-BwGvKzSp.js";import"./SetGraphicalItem-ZqPAg0_A.js";import"./getZIndexFromUnknown-BEtTw01N.js";import"./useGraphicalItemIdentity-DDNep2_9.js";import"./dataEntryStyles-ChVGAtMZ.js";import"./Curve-k0k5dTsU.js";import"./step-BOs9b6Ri.js";import"./path-DyVhHtw_.js";import"./ActivePoints-WAxl0Bv-.js";import"./Dot-BILX6Wzk.js";import"./getRadiusAndStrokeWidthFromDot-DIOfJC8V.js";import"./useElementOffset-BT0tqnsY.js";import"./uniqBy-DqiiQuQc.js";import"./iteratee-D_w4T-w5.js";import"./Cross-CQxShz6V.js";import"./Sector-BZR-i2Ix.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
