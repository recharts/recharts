import{R as t}from"./iframe-D1t-DMDX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DA6hAinn.js";import{R as l}from"./zIndexSlice-D3y7WbGu.js";import{C as x}from"./ComposedChart-BzsVf6dd.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-wTsRfFHS.js";import{L as a}from"./Line-F5T58cXI.js";import{X as c}from"./XAxis-D2W5e4ho.js";import{T as g}from"./Tooltip-Dl83HaDI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-l8kFpP-D.js";import"./Text-DAi50bHG.js";import"./resolveDefaultProps-CslUsmpl.js";import"./DOMUtils-B6_ZXa7e.js";import"./isWellBehavedNumber-CUXK_wKy.js";import"./useId-DDzIZyqo.js";import"./useBackwardsCompatibleTheme-BSefrMjh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DAI4vBfR.js";import"./index-DN4Hf2vp.js";import"./index-DXAWsi2y.js";import"./RechartsWrapper-BZjYCuuq.js";import"./axisSelectors-j0uMY4D2.js";import"./throttle-6Gvu17mH.js";import"./d3-scale-BUFFZJWe.js";import"./index-BVgOAcLw.js";import"./index-DBKl6Uwy.js";import"./renderedTicksSlice-BDhtYcVT.js";import"./index-DVZyTUvl.js";import"./CartesianAxis-zM23PuK9.js";import"./Layer-C3v8UF0F.js";import"./types-CakNgFJg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CkbIBTi3.js";import"./chartDataContext-Cv-ECou4.js";import"./CategoricalChart-CSw7HOxG.js";import"./AnimatedItems-C6KHS5pS.js";import"./useAnimationId-CHualwmZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTv3GIXO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPvI5kC4.js";import"./tooltipContext-DgDH-WhQ.js";import"./RegisterGraphicalItemId-6E8BE8Ka.js";import"./ErrorBarContext-aZAJKe3w.js";import"./GraphicalItemClipPath-CTjco7rb.js";import"./SetGraphicalItem-B3rvHIl-.js";import"./getZIndexFromUnknown-CYnH7mhR.js";import"./useGraphicalItemIdentity-Y17Z1Bub.js";import"./Curve-DkVKde3C.js";import"./step-2p0USgF7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DH8HO3TV.js";import"./Dot-iuKqNYRF.js";import"./getRadiusAndStrokeWidthFromDot-B9ylC5dT.js";import"./useElementOffset-BtiRWiP_.js";import"./uniqBy-DQAv3Mv_.js";import"./iteratee-B8C5seUw.js";import"./Cross-LaO4cc3g.js";import"./Sector-DQhmQbc1.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
