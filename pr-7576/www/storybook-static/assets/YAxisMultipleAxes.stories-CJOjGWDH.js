import{R as t}from"./iframe-Cy6UHwH8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Czbc2cL9.js";import{R as l}from"./zIndexSlice-Dv2HqMCj.js";import{C as x}from"./ComposedChart-Dm8MO2Et.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B-_IkChf.js";import{L as a}from"./Line-BzhYL1rQ.js";import{X as c}from"./XAxis-BEHj4vqI.js";import{T as g}from"./Tooltip-xaQOL5rL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D4Lg0Pka.js";import"./Layer-Ju7yA9Ak.js";import"./resolveDefaultProps-BMx9w-RH.js";import"./Text-DY_HLC6P.js";import"./DOMUtils-CnEhoUR_.js";import"./isWellBehavedNumber-CZJUfVeG.js";import"./Label-D4x62xM0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BhFWLYxf.js";import"./index-h8aQZ4h5.js";import"./index-CWnN2QDM.js";import"./types-Wlq7LyUb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtW-OIzZ.js";import"./throttle-CrXcydw9.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Ms45-clr.js";import"./index-2yzrZcxU.js";import"./index-CqwtYJ2E.js";import"./axisSelectors-DXOe3ZcM.js";import"./d3-scale-Bvw0bMMA.js";import"./CartesianChart-C_8s1Ao-.js";import"./chartDataContext-BQ-bLF-q.js";import"./CategoricalChart-Bl-8OvLS.js";import"./tooltipContext-CzT9W937.js";import"./AnimatedItems-P3TyXGJ4.js";import"./useAnimationId-q_i8pRM6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-NwWJwHZO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BsBe7D_I.js";import"./RegisterGraphicalItemId-Du3LTwfY.js";import"./ErrorBarContext-DbNi8xqP.js";import"./GraphicalItemClipPath-CqSFRIsZ.js";import"./SetGraphicalItem-Dh-ykNbg.js";import"./getZIndexFromUnknown-Bxnmr_BJ.js";import"./graphicalItemSelectors-CUpJgTvK.js";import"./Curve-l3wqrsuS.js";import"./step-CuI5m1Cq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DwOS4gGn.js";import"./Dot-Coa1b26v.js";import"./getRadiusAndStrokeWidthFromDot-BnXETLA5.js";import"./useElementOffset-CogvFxV1.js";import"./uniqBy-BpJlFfbc.js";import"./iteratee-DsECz__7.js";import"./Cross-C7BtRR4W.js";import"./Sector-gxLm8D69.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
