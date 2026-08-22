import{R as t}from"./iframe-C93Nv-sG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-jlrI5912.js";import{R as l}from"./zIndexSlice-ByU1_vW7.js";import{C as x}from"./ComposedChart-CbNoaIAl.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Du6aKlV1.js";import{L as a}from"./Line-CcowXM7j.js";import{X as c}from"./XAxis-B8fGRCoq.js";import{T as g}from"./Tooltip-OZRRMacM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C3kKco4I.js";import"./Text-BwKXAAQh.js";import"./resolveDefaultProps-C5w327Ax.js";import"./DOMUtils-BXMnIR4n.js";import"./isWellBehavedNumber-Cfr3MT4y.js";import"./useId-Dcf96ehM.js";import"./useBackwardsCompatibleTheme-LhXwVyLe.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-txp7Phg0.js";import"./index-CX4bLeAT.js";import"./index-WdxouXHE.js";import"./RechartsWrapper-Bd-lflJB.js";import"./index-2-1yVY-g.js";import"./index-BGWLrOy5.js";import"./throttle-DKDTz13_.js";import"./axisSelectors-B_nw5bC_.js";import"./d3-scale-DPCHxtwr.js";import"./renderedTicksSlice-BfcPBBmI.js";import"./CartesianAxis-BKA7b1EI.js";import"./Layer-C-yThQSL.js";import"./types-DSu39Mtk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DjN4sIo1.js";import"./chartDataContext-DgDj7d7B.js";import"./CategoricalChart-Ckb0xTkj.js";import"./AnimatedItems-B9gSLTjZ.js";import"./useAnimationId-ChO4WR-0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CIdUd0kK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CpLwkFCz.js";import"./tooltipContext-BULk5XlK.js";import"./RegisterGraphicalItemId-DBNNmaKj.js";import"./ErrorBarContext-Bdw1FAXk.js";import"./GraphicalItemClipPath-DHw7w2MP.js";import"./SetGraphicalItem-BVLzKmF8.js";import"./getZIndexFromUnknown-DOTz0zBM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DVEtBU0R.js";import"./Curve-C4EKfZxi.js";import"./step-DUN67lSa.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C6Pzzzqs.js";import"./Dot-4IJHfCjD.js";import"./getRadiusAndStrokeWidthFromDot-BKbcHmv5.js";import"./useElementOffset-BajoHWy5.js";import"./uniqBy-CgKYnAzP.js";import"./iteratee-DE2e34V0.js";import"./Cross-_pQov7bs.js";import"./Sector-BjPZNeMG.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
