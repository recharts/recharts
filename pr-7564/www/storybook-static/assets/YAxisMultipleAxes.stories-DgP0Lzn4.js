import{R as t}from"./iframe-B-yW787s.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DGNSSBsi.js";import{R as l}from"./zIndexSlice-CKRpx7FD.js";import{C as x}from"./ComposedChart-D5w8STA3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BDdLYF6G.js";import{L as a}from"./Line-CK0bz55t.js";import{X as c}from"./XAxis-D0UXMK3L.js";import{T as g}from"./Tooltip-CfhG70XA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BlaAel8_.js";import"./Layer-DVSBdCcq.js";import"./resolveDefaultProps-D6vuKH4c.js";import"./Text-DK2M6QxL.js";import"./DOMUtils-B0UrcgO-.js";import"./isWellBehavedNumber-C_1nd4jU.js";import"./Label-BkxmYsWW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CdG-cca2.js";import"./index-B8s4lwM0.js";import"./index-BLtMs8ww.js";import"./types-DcTCoXGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-EV44ZZNX.js";import"./throttle-B8_9WF3N.js";import"./RechartsWrapper-DSpl9lP_.js";import"./index-TzX_ldyC.js";import"./index-Dh8eUehn.js";import"./axisSelectors-d9CW9W7w.js";import"./d3-scale-8a4kRHFN.js";import"./CartesianChart-B08PHStc.js";import"./chartDataContext-DOok0Cd4.js";import"./CategoricalChart-XTSjkgZQ.js";import"./tooltipContext-CumBelWf.js";import"./AnimatedItems-CYFqV_Nm.js";import"./useAnimationId-o-X37ase.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DKB06qOF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dzsbq5DH.js";import"./RegisterGraphicalItemId-DeFh6f0i.js";import"./ErrorBarContext-D17CdNj4.js";import"./GraphicalItemClipPath-_Ex-IG4N.js";import"./SetGraphicalItem-NvPtwEe2.js";import"./getZIndexFromUnknown-jJhefbAF.js";import"./graphicalItemSelectors-D2riitBr.js";import"./Curve-DCdfY6Kv.js";import"./step-BYmVMSZy.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DpVBVyJ4.js";import"./Dot-rGFeGUQm.js";import"./getRadiusAndStrokeWidthFromDot-DVenAMua.js";import"./useElementOffset-C-wPzP_t.js";import"./uniqBy-D9O0f4RW.js";import"./iteratee-3rKsZ9vF.js";import"./Cross-D6yxn-4q.js";import"./Sector-CPt2S0K5.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
