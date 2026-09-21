import{R as t}from"./iframe-CgTT5dPO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DSfP3iJV.js";import{R as l}from"./zIndexSlice-CPGUCnGo.js";import{C as x}from"./ComposedChart-CYlzW49h.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C9fZ3q-n.js";import{L as a}from"./Line-B2uAqrSV.js";import{X as c}from"./XAxis-ClmjXtMB.js";import{T as g}from"./Tooltip-t8L-cwt_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DgIJd16K.js";import"./Text-BTX7KMwr.js";import"./resolveDefaultProps-CKA35xz0.js";import"./DOMUtils-DNAAiWqJ.js";import"./isWellBehavedNumber-BWfrrYUp.js";import"./useId-C9Sf9QRu.js";import"./useBackwardsCompatibleTheme-BnQi9_9k.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CL4lnoUk.js";import"./index-yjPGP_Pi.js";import"./index-DsTCyvOd.js";import"./RechartsWrapper-B51pwKIk.js";import"./axisSelectors-Gtv_llo9.js";import"./throttle-BMr0TIll.js";import"./d3-scale-oJuzrlfE.js";import"./index-9dlMxjgk.js";import"./index-BDFV0rCg.js";import"./renderedTicksSlice-B7hU_9zD.js";import"./index-Db1ep0ty.js";import"./CartesianAxis-1GG6rVOn.js";import"./Layer-CviKKqfs.js";import"./types-DZAseBJP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-P3XUrVp3.js";import"./chartDataContext-Cp4ZgLCD.js";import"./CategoricalChart-Ce5ExZbX.js";import"./AnimatedItems-mZXv8WCL.js";import"./useAnimationId-D6-p5R60.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-huBGhNer.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCEW4taa.js";import"./tooltipContext-DGgnm00g.js";import"./RegisterGraphicalItemId-DeFFmfLc.js";import"./ErrorBarContext-CmOtwBbz.js";import"./GraphicalItemClipPath-qWvJymnR.js";import"./SetGraphicalItem-BFHpZd6Q.js";import"./getZIndexFromUnknown-DYmP8LaL.js";import"./useGraphicalItemIdentity-CKmqq4Ws.js";import"./Curve-cyeBNEBX.js";import"./step-D1irN9pp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bnc15lgq.js";import"./Dot-DH9TpVyz.js";import"./getRadiusAndStrokeWidthFromDot-DgPOWv_U.js";import"./useElementOffset-E-WECx4Q.js";import"./uniqBy-8m_J3yMU.js";import"./iteratee-BZZIIBc5.js";import"./Cross-C0bVdUJm.js";import"./Sector-DExrbWoI.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
