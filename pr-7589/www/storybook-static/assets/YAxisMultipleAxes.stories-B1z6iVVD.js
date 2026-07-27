import{R as t}from"./iframe-BYXa1Tn_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DizXoRZi.js";import{R as l}from"./zIndexSlice-CoJck3d_.js";import{C as x}from"./ComposedChart-DqcQ0VDg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C8rq5Pe8.js";import{L as a}from"./Line-6gFOJp9o.js";import{X as c}from"./XAxis-B5zWifv0.js";import{T as g}from"./Tooltip-C6q0x70q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C3icPOpT.js";import"./Layer-C8ZXIHkO.js";import"./resolveDefaultProps-BEKG2AD6.js";import"./Text-ClavD2Bt.js";import"./DOMUtils-BRP-TV91.js";import"./isWellBehavedNumber-TGnGu01x.js";import"./Label-CW6jLePn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQRYe1sp.js";import"./index-B0FnoVJH.js";import"./index-DuqGTInP.js";import"./types-BeIXyo3E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNHtcDgN.js";import"./throttle-CoxoiN6t.js";import"./RechartsThemeContext-Dj7m8Gm_.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-OaYp5Da5.js";import"./index-D68cxjh6.js";import"./index-BI8zhQ65.js";import"./axisSelectors-CdQyM0Ik.js";import"./d3-scale-BtOkOC4O.js";import"./CartesianChart-Cs0h_EiO.js";import"./chartDataContext-DfKLz63T.js";import"./CategoricalChart-DdtEtndX.js";import"./tooltipContext-C3Ht68ot.js";import"./AnimatedItems-DMwIY_YG.js";import"./useAnimationId-8c28klLP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8TpkBjX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DejqAcqQ.js";import"./RegisterGraphicalItemId-D6qWKqiK.js";import"./ErrorBarContext-Cf7wWmw3.js";import"./GraphicalItemClipPath-Dujotke_.js";import"./SetGraphicalItem-C_1bFSrg.js";import"./getZIndexFromUnknown-VfSsiHlo.js";import"./graphicalItemSelectors-PgtwmP-D.js";import"./Curve-aAd9t3Ts.js";import"./step-pRYWj5UR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cjb131Hl.js";import"./Dot-CQ0xec6K.js";import"./getRadiusAndStrokeWidthFromDot-DwmygPe4.js";import"./useElementOffset-COKsSNbR.js";import"./uniqBy-CrCoN25E.js";import"./iteratee-DxJ0e1aw.js";import"./Cross-D1QpEOyM.js";import"./Sector-DIzP0rv4.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
