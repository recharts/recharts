import{R as t}from"./iframe-n-o_GhOg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CMjiedBc.js";import{R as l}from"./zIndexSlice-rH1Vz5Mp.js";import{C as x}from"./ComposedChart-B569yWTF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DxfdkGBC.js";import{L as a}from"./Line-BlrUCqXP.js";import{X as c}from"./XAxis-D3N7JqFL.js";import{T as g}from"./Tooltip-DiMr8VHS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CNUZ8IJr.js";import"./Text-SNR8n6Fx.js";import"./resolveDefaultProps-CCJ2xkQr.js";import"./DOMUtils-c7gF72Lb.js";import"./isWellBehavedNumber-DnO1JWm3.js";import"./useId-x_HnpDjM.js";import"./useBackwardsCompatibleTheme-DwZPWCWZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-RuyYCT_q.js";import"./index-D3Dxakv3.js";import"./index-chW2YjqO.js";import"./RechartsWrapper-_cU67sC5.js";import"./axisSelectors-CZyPeZLC.js";import"./throttle-C59GD_w_.js";import"./d3-scale-Bnu-nqAj.js";import"./index-DtnTPZuH.js";import"./index-BQjoI2YU.js";import"./renderedTicksSlice-BzxRR8rk.js";import"./index-Dj2q-0Ll.js";import"./CartesianAxis-_Tflg6Fj.js";import"./Layer-DpixjnOX.js";import"./types-D19g2GXX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DyFIrny8.js";import"./chartDataContext-DJykTpvv.js";import"./CategoricalChart-BDOiNhZt.js";import"./AnimatedItems-BXuL_9-l.js";import"./useAnimationId-Bs6Pq3h0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wO11WXpz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8hxeMxzA.js";import"./tooltipContext-Bxjr2TM7.js";import"./RegisterGraphicalItemId-D70QTB5K.js";import"./ErrorBarContext-BSDbxWtX.js";import"./GraphicalItemClipPath-Ce-x1jHU.js";import"./SetGraphicalItem-0HQpcTKH.js";import"./getZIndexFromUnknown-D6gYVuPo.js";import"./useGraphicalItemIdentity-BKlZkD6N.js";import"./Curve-dJ1hXb5R.js";import"./step-DtRuoLBY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-fyry5IXw.js";import"./Dot-NFpTkrs-.js";import"./getRadiusAndStrokeWidthFromDot-W6nPpsGK.js";import"./useElementOffset-7vo21qqB.js";import"./uniqBy-B49bM81v.js";import"./iteratee-DelPt-ee.js";import"./Cross-CAe7YUPk.js";import"./Sector-CeczRWEl.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
