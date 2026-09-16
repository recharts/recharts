import{R as t}from"./iframe-130qk4m_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-COXka6w4.js";import{R as l}from"./zIndexSlice-DRUK-Dg-.js";import{C as x}from"./ComposedChart-CjFOZhuN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dk_lnDjq.js";import{L as a}from"./Line-DXExiGSR.js";import{X as c}from"./XAxis-CZ9F9O5a.js";import{T as g}from"./Tooltip-CkBQm10C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BTScYLJC.js";import"./Text-BSQyPF-I.js";import"./resolveDefaultProps-CYRr0Ie5.js";import"./DOMUtils-nn98Njua.js";import"./isWellBehavedNumber-DjBeGij7.js";import"./useId-DN63oQqC.js";import"./useBackwardsCompatibleTheme-BFLDUGtw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BCmai4o5.js";import"./index-CsWcnfda.js";import"./index-BcLoK3PR.js";import"./RechartsWrapper-Bo40Do7U.js";import"./axisSelectors-X5KptGXH.js";import"./throttle-kCNuVuJ-.js";import"./d3-scale-Dk5HPyUF.js";import"./index-CrvbTTow.js";import"./index-Bjllb2VH.js";import"./renderedTicksSlice-Cmod0XxC.js";import"./index-DEOEohuH.js";import"./CartesianAxis-C5WMjY4c.js";import"./Layer-Cyv1dWj2.js";import"./types-Da5i9wCB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BIfw6B_y.js";import"./chartDataContext-DcIZimMl.js";import"./CategoricalChart-BUcyv7Rs.js";import"./AnimatedItems-CnmA861Y.js";import"./useAnimationId-NcjSJtDX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2EXdHxS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CM6xxOZA.js";import"./tooltipContext-CXrQPimu.js";import"./RegisterGraphicalItemId-Cj8G_tD9.js";import"./ErrorBarContext-Cce-eGB1.js";import"./GraphicalItemClipPath-CEUDXBSP.js";import"./SetGraphicalItem-fFkzzaD8.js";import"./getZIndexFromUnknown-D9Lpnrxk.js";import"./useGraphicalItemIdentity-UHVfOAjT.js";import"./Curve-zMO2mb05.js";import"./step-CzM1y9Rf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B9QqV80c.js";import"./Dot-DMc1VAH7.js";import"./getRadiusAndStrokeWidthFromDot-CJ_8wi76.js";import"./useElementOffset-COi3Obl9.js";import"./uniqBy-BlyxtPBE.js";import"./iteratee-P4nCtj53.js";import"./Cross-D7IWtPYf.js";import"./Sector-llAKaMr1.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
