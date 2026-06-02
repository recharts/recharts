import{c as t}from"./iframe-BRX46Ivk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DQxr8HwE.js";import{g as l}from"./zIndexSlice-DWdWmCIF.js";import{C as x}from"./ComposedChart-CDM_AzxP.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-bGzVypVc.js";import{L as a}from"./Line-DersmD4z.js";import{X as A}from"./XAxis-BCLXDtwM.js";import{T as g}from"./Tooltip-CVUewvSq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Co_O7Bis.js";import"./CartesianAxis-D25s55eU.js";import"./Layer-CnAnt2-w.js";import"./resolveDefaultProps-yU7jT9_k.js";import"./Text-Dab8pblH.js";import"./DOMUtils-DYK5KdOd.js";import"./isWellBehavedNumber-CB_DAa3f.js";import"./Label-BF8y58w-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CPddneQ7.js";import"./index-aVTX2b-6.js";import"./index-B93cWPAb.js";import"./types-BPLmhp3x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B8vMnOQc.js";import"./immer-B8PXb0jM.js";import"./RechartsWrapper-C2N_lXXj.js";import"./index-WXfBYNk1.js";import"./index-C_nDec_P.js";import"./axisSelectors-CxAtIunO.js";import"./d3-scale--l5c2rdM.js";import"./CartesianChart-CXTTTHcm.js";import"./chartDataContext-Liihjxia.js";import"./CategoricalChart-CQuPTVMV.js";import"./tooltipContext-DNGXltcD.js";import"./ReactUtils-CZBp5YIk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BGEQUwuw.js";import"./useAnimationId-HcldwJQz.js";import"./ActiveShapeUtils-DpAig7qv.js";import"./RegisterGraphicalItemId-D97Nzm32.js";import"./ErrorBarContext-OAvmaR3P.js";import"./GraphicalItemClipPath-BoMPcOm_.js";import"./SetGraphicalItem-Ddj-tLej.js";import"./getZIndexFromUnknown-DaGWi_9K.js";import"./graphicalItemSelectors-Uf-kajUJ.js";import"./Curve-DevGF9dB.js";import"./step-DohD2rXx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-zyPb8mdq.js";import"./Dot-DrpVqpH-.js";import"./getRadiusAndStrokeWidthFromDot-CjA9U0Zs.js";import"./useElementOffset-De3qQeYf.js";import"./uniqBy-CtWhPXaz.js";import"./iteratee-B6B5J5uM.js";import"./Cross-BvuakeTj.js";import"./Sector-DKv1-que.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
