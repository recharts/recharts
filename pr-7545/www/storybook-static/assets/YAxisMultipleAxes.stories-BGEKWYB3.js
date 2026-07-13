import{R as t}from"./iframe-BLb3YVtb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-fcMK6IsP.js";import{R as l}from"./zIndexSlice-DJkgkDD9.js";import{C as x}from"./ComposedChart-Dwy4LS3D.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CUwSTh0I.js";import{L as a}from"./Line-CqqpJna2.js";import{X as c}from"./XAxis-DkAVE8hF.js";import{T as g}from"./Tooltip-CDZM8gtJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BbjeI4ni.js";import"./Layer-BK8zFmi3.js";import"./resolveDefaultProps-CnVWahPK.js";import"./Text-IRDE_cDN.js";import"./DOMUtils-_5JDSOjo.js";import"./isWellBehavedNumber-DlUvkjSQ.js";import"./Label-DW72PY7h.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-5e79PAf2.js";import"./index-DEpMuUHp.js";import"./index-wtrxX94s.js";import"./types-45FMQ0ZC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-k5ys3P6y.js";import"./throttle-6auUp_qF.js";import"./RechartsWrapper-CUaMC7NX.js";import"./index-DpQytYeA.js";import"./index-Cj1DGWT6.js";import"./axisSelectors-DadMFlsr.js";import"./d3-scale-Bikema70.js";import"./CartesianChart-B4u-2HHw.js";import"./chartDataContext-BoMs8zEW.js";import"./CategoricalChart-Csrvckvr.js";import"./tooltipContext-Ch0xxwM5.js";import"./AnimatedItems-VUSNP4y9.js";import"./useAnimationId-nzk_I_IH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Deq9IpXZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-2WDiJcdZ.js";import"./RegisterGraphicalItemId-Byl2Zyfr.js";import"./ErrorBarContext-CdfKpXhM.js";import"./GraphicalItemClipPath-gmGdN2WI.js";import"./SetGraphicalItem-BWF_fkaR.js";import"./getZIndexFromUnknown-DYI4ThcQ.js";import"./graphicalItemSelectors-CmXLyXrM.js";import"./Curve-gD93iCPz.js";import"./step-DW4vIB3R.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bm_TZ0P6.js";import"./Dot-D_39xHUo.js";import"./getRadiusAndStrokeWidthFromDot-erroBPpZ.js";import"./useElementOffset-CQsk5lW6.js";import"./uniqBy-CVPPpRZP.js";import"./iteratee-BihC2xCb.js";import"./Cross-D1JRPJfe.js";import"./Sector-Cm35b88d.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
